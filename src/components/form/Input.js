
export default function input({ type, text, name, placeholder, handleOnChange, value }){
  return (

    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">{text}</label>
      <input className="form-control"
      onInput={(e)=> e.target.value = ("" + e.target.value).toUpperCase()}
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={handleOnChange}
      value={value}
      />
    </div>
  )
}
