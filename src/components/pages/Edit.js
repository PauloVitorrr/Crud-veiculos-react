import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

import Container from "../layout/Container"
import styles from './Edit.module.css'
import Loading from "../layout/Loading"
import RegisterForm from '../form/RegisterForm'


export default function Edit() {
    const { id } = useParams()
    const [dados_carro, setDados_carro] = useState([])
    const [showDadosForm, setShowDadosForm] = useState(false)
    const navigate = useNavigate()



    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/dados_carro/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((resp) => resp.json())
                .then((data) => {
                    setDados_carro(data)
                })
                .catch(err => console.log(err))
        }, 300)

    }, [id])


    function editDados(dados_carro) {
        fetch(`http://localhost:5000/dados_carro/` + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados_carro),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setDados_carro(data)
                navigate('/', { state: { message: 'Projeto atualizado com sucesso!' } })
            })
            .catch(err => console.log(err))
    }

    function toggleDadosForm() {
        setShowDadosForm(!showDadosForm)
    }

    console.log(dados_carro)

    return (
    <>
        {dados_carro.placa ? (
    <div className={styles.carros_details}>
        <Container customClass="column">
            <div className={styles.details_container}>
                <h1 className={styles.h1}>Dados do veiculo</h1>
                <button className={styles.btn} onClick={toggleDadosForm}>
                    {!showDadosForm ? "Editar projeto" : 'Fechar'}
                </button>
                {!showDadosForm ? (
                    <div className={styles.carro_info}>
                        <p>
                            <span>Placa:</span> {dados_carro.placa}
                        </p>
                        <p>
                            <span>Chassi:</span> {dados_carro.chassi}
                        </p>
                        <p>
                            <span>Renavam:</span> {dados_carro.renavam}
                        </p>
                        <p>
                            <span>Ano modelo:</span> {dados_carro.ano_modelo}
                        </p>
                        <p>
                            <span>Ano de fabricação:</span> {dados_carro.ano_fabricação}
                        </p>
                        <p>
                            <span>Cor:</span> {dados_carro.cor}
                        </p>
                        <p>
                            <span>Emplacamento:</span> {dados_carro.emplacamento}
                        </p>
                    </div>
                ) : (
                    <div className={styles.carro_info}>
                      <RegisterForm 
                      btnText="Concluir Edição"
                      handleSubmit = {editDados}
                      projectData = {dados_carro}/>
                    </div>
                )}
            </div>
        </Container>
    </div>
        ) : (
            <Loading />
        )}
    </>
    )
}

