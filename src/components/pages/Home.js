import { useState, useEffect } from 'react'

import { Link, useLocation } from 'react-router-dom'

import LinkButton from '../layout/LinkButton'
import Message from "../layout/Message"


import styles from './Home.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

export default function Home() {

   const [dados_carro, setDados_carro] = useState([])
   const [filter, setFilter] = useState('')
   const [dadosRemove, setDadosRemove] = useState('')

   const location = useLocation()
   let message = ''
   if (location.state) {
      message = location.state.message
   }

   useEffect(() => {
      fetch('http://localhost:5000/dados_carro', {
         method: 'GET',
         headers: {
            'Content-type': 'application/json',
         },
      }).then(resp => resp.json())
         .then(data => {
            setDados_carro(data)
         })
         .catch((err) => console.log(err))
   }, [])

   function removeDados(id) {
      fetch(`http://localhost:5000/dados_carro/${id}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
         },
      })
         .then(resp => resp.json())
         .then(data => {
            setDados_carro(dados_carro.filter((dado) => dado.id !== id))
            setDadosRemove('Veículo removido com sucesso!!!')
         })
         .catch(err => console.log(err))
   }

   useEffect(() => {
      fetch('http://localhost:5000/dados_carro', {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         }
      })
      .then(resp => resp.json())
      .then(data =>{
         if(filter !== ""){
            let result = dados_carro.filter(dado=> dado.placa.toLowerCase().includes(filter.toLocaleLowerCase()))
            setDados_carro(result)
         }
      })
   }, [filter,setFilter])

   return (
      <div className={styles.home_container}>
         <div className={styles.title_container}>
            <h1>Veiculos cadastrados</h1>
            <input onChange={(e) => setFilter(e.target.value)} onInput={(e) => e.target.value = ("" + e.target.value).toUpperCase()} placeholder="Pesquise a placa" />
            <LinkButton to="/register" text="Registrar veiculo" />
         </div>

         {message && <Message type="success" msg={message} />}
         {dadosRemove && <Message type="success" msg={dadosRemove} />}

         <table className="table thead-dark">
            <thead>
               <tr>
                  <th scope="col">Placa</th>
                  <th scope="col">Chassi</th>
                  <th scope="col">Renavam</th>
                  <th scope="col">Ano modelo</th>
                  <th scope="col">Ano fabricação</th>
                  <th scope="col">Cor</th>
                  <th scope="col">Emplacamento</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
               </tr>
            </thead>
            <tbody>
               {dados_carro.length > 0 && dados_carro.map(dado => {
                  return <tr key={dado.id}>
                     <th scope="row">{dado.placa}</th>
                     <th scope="row">{dado.chassi}</th>
                     <th scope="row">{dado.renavam}</th>
                     <th scope="row">{dado.ano_modelo}</th>
                     <th scope="row">{dado.ano_fabricação}</th>
                     <th scope="row">{dado.cor}</th>
                     <th scope="row">{dado.emplacamento}</th>
                     <th scope="row"><button><Link to={`/edit/${dado.id}`}><BsPencil />Editar</Link></button></th>
                     <th scope="row"><button onClick={() => removeDados(dado.id)}><BsFillTrashFill />Excluir</button></th>
                  </tr>
               })}
            </tbody>
         </table>
      </div>
   )
}