import { useForm } from "../../utils/useForm"
import './datosUser.css'

const initialForm = {
    name:"",
    email:"",
    phoneNumber: "",
}

const validationsForm = (form)=> {
let errors = {};
let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
let regexNumber = /^.{1,20}$/;
let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;


if(!form.name.trim()){
    errors.name="El 'nombre' es requerido."
}else if(!regexName(form.name.trim())){
    errors.name= "Solo se aceptan letras y espacios en blanco." 
}
if(!form.phoneNumber.trim()){
    errors.phoneNumber="El 'teléfono' es requerido."
}else if(!regexNumber(form.Number.trim())){
    errors.phoneNumber= "Limite 20 numeros." 
}
if(!form.email.trim()){
    errors.email="El 'email' es requerido."
}else if(!regexEmail(form.email.trim())){
    errors.email= "El 'email' es incorrecto." 
}
return errors
}

const ContactForm = () =>{
    const {form, errors, loading , response , handleBlur , handleChange, handleSubmit} = useForm(initialForm, validationsForm)
return(
    <div>
        <h2>Formulario de contacto</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Escribe tu nombre" onChange={handleChange} onBlur={handleBlur} value={form.name} required/>
            {errors.name && <p className="errorMsg">{errors.name}</p>}
            <input type="tel" name="phoneNumber" placeholder="Número de teléfono" onChange={handleChange} onBlur={handleBlur} value={form.phoneNumber} required/>
            {errors.phoneNumber && <p className="errorMsg">{errors.phoneNumber}</p>}
            <input type="email" name="email" placeholder="Escribe tu email" onChange={handleChange} onBlur={handleBlur} value={form.email} required/>
            {errors.email && <p className="errorMsg">{errors.email}</p>}
            <input type="submit" value="enviar"/>
        </form>
    </div>
    )
}

export default ContactForm