import { useState } from "react"

export const useForm = (initialForm , validateForm)=> {
    const [form , setForm] = useState(initialForm);
    const [errors , setErrors] = useState({});

// const {buyer:{name,phone,email}}=form

//     const handleChange = (e) =>{
//         const {name, value} = e.target;

//         setForm({
//             ...form,
//             buyer:{
//                 ...form.buyer,
//                 [name]: value
//             }
//         });
//         console.log(name)
// }
    const handleChange = (e) =>{
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value,
        });
        console.log(form)
        console.log(form.name)
        console.log(form.phonenumber)
        console.log(form.email)
    }
    const handleBlur = (e) =>{
        handleChange(e);
        setErrors(validateForm(form));
    }
    const handleSubmit = (e) =>{}

    return{
        form, errors , handleBlur , handleChange,  handleSubmit
    }
}