import { useForm } from "../../utils/useForm"
import './datosUser.css'

const initialForm = {
    name:"",
    email:"",
    phonenumber: "",
}


const validationsForm = (form)=> {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexNumber = /^[0-9]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    
if(!form.name.trim()){
    errors.name="El 'nombre' es requerido."
}else if(!regexName.test(form.name.trim())){
    errors.name= "Solo se aceptan letras y espacios en blanco." 
}
if(!form.phonenumber.trim()){
    errors.phonenumber="El 'teléfono' es requerido."
}else if(!regexNumber.test(form.phonenumber.trim())){
    errors.phonenumber= "Sólo números." 
}
if(!form.email.trim()){
    errors.email="El 'email' es requerido."
}else if(!regexEmail.test(form.email.trim())){
    errors.email= "El 'email' es incorrecto." 
}
return errors
}

const ContactForm = () =>{
    // const [fName, setfName] = useState('');
    // const [phone, setPhone] = useState('');
    // const [email, setEmail] = useState('');

    // console.log(fName)
    
    const {form, errors, loading , response , handleBlur , handleChange, handleSubmit} = useForm(initialForm, validationsForm)
return(
    <div>
        <h2 className="tituloModalUser">Por favor llene sus datos</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Escribe tu nombre" onChange={handleChange} onBlur={handleBlur} value={form.name} required/>
            {errors.name && <p className="errorMsg">{errors.name}</p>}
            <input type="tel" name="phonenumber" placeholder="Número de teléfono" onChange={handleChange} onBlur={handleBlur} value={form.phonenumber} required/>
            {errors.phonenumber && <p className="errorMsg">{errors.phonenumber}</p>}
            <input type="email" name="email" placeholder="Escribe tu email" onChange={handleChange} onBlur={handleBlur} value={form.email} required/>
            {errors.email && <p className="errorMsg">{errors.email}</p>}
            <input type="submit" value="Esto primero" />
        </form>
    </div>
    )
}

export default ContactForm