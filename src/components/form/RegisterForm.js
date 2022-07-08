import { useState, useEffect } from 'react';

import Input from './Input';
import SubmitButton from './SubmitButton';

export default function RegisterForm({ handleSubmit,projectData, btnText }) {

  const [dados_carro, setDados_carro] = useState(projectData || {})
 


  function handleChange(e) {
    setDados_carro({ ...dados_carro, [e.target.name]: e.target.value })
  }

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(dados_carro)
  }



  return (
    <form onSubmit={submit}>
      <div className="row align-items-center justify-content-center">
        <Input
           type="text"
           text="Placa"
           name="placa"
           placeholder="Placa"
           handleOnChange={handleChange}
           value={dados_carro.placa}
        />
        <Input
           type="text"
           text="Chassi"
           name="chassi"
           placeholder="Chassi"
           handleOnChange={handleChange}
           value={dados_carro.chassi}
        />
        <Input
           type="text"
           text="Renavam"
           name="renavam"
           placeholder="Renavam"
           handleOnChange={handleChange}
           value={dados_carro.renavam}
        />
        <Input
           type="number"
           text="Ano Modelo"
           name="ano_modelo"
           placeholder="Ano modelo"
           handleOnChange={handleChange}
           value={dados_carro.ano_modelo}
        />
        <Input
           type="number"
           text="Ano de fabricação"
           name="ano_fabricação"
           placeholder="Ano de fabricação"
           handleOnChange={handleChange}
           value={dados_carro.ano_fabricação}
        />
        <Input
           type="text"
           text="Cor"
           name="cor"
           placeholder="Cor"
           handleOnChange={handleChange}
           value={dados_carro.cor}
        />
        <Input
           type="text"
           text="emplacamento"
           name="emplacamento"
           placeholder="Emplacamento"
           handleOnChange={handleChange}
           value={dados_carro.emplacamento}
        />
       
        <div className="text-center">
          <SubmitButton text={btnText} />
        </div>
      </div>
    </form>
  )
}