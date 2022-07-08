import RegisterForm from '../form/RegisterForm'
import styles from './Register.module.css'
import { useNavigate } from 'react-router-dom';


export default function Register(){
    const navigate = useNavigate()

    
    function createDados(dados_carro) {
        console.log(dados_carro)
        fetch("http://localhost:5000/dados_carro", {
          method: "POST",
          headers: {
            'Content-type': "application/json",
          },
          body: JSON.stringify(dados_carro),
        }).then(resp => resp.json())
          .then((data) => {
            navigate('/', { state: { message: 'Projeto criado com sucesso!' } })
          })
          .catch(err => console.log(err))
      }
 return(
    <div className={styles.register_container}>
        <h1>Cadastre seu veículo</h1>
        <RegisterForm handleSubmit={createDados} btnText="Registrar Formulário"/>
    </div>
 )
}