import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './register.css'


const OrderForm = ({confirmOrder, closeModal}) => {
  const [mailCompare, setMailCompare] = useState();
  const {register,formState: { errors },handleSubmit,} = useForm();

  const onSubmit = (data) => {
    confirmOrder(data);
  };
  

  return (
    <div className="blackBackground">
        <div className="formContainer boxShadow scale-in-ver-bottom" >
            <button className="Xbtn" onClick={closeModal}>X</button>
        <div className="formLeftSideContainer">
            <h2>Ingrese sus datos</h2>
        </div>
            <form onSubmit={handleSubmit(onSubmit)} className="inputContainer">
                <label>Nombre y apellido*</label>
                <input name="names" type="text" className="formInput"
                {...register("names", {required: "El nombre es requerido",
                    minLength: { value: 2, message: "El nombre tiene que ser mas largo"}
                })}
                />
                <p className="formErrorMessage">{errors.names?.message}</p>
                <label>Email*</label>
                <input name="email" type="email" className="formInput"
                {...register("email", {
                    required: "El mail es requerido",
                    onChange: (e) => setMailCompare(e.target.value),
                })}
                />
                <p className="formErrorMessage">{errors.email?.message}</p>
                <label>Repetir Email*</label>
                <input name="emailbis" type="email" className="formInput"
                {...register("emailbis", {
                    required: "Este campo no puede estar vacio",
                    validate: (value) => value === mailCompare || "El mail no coincide",
                })}
                />
                <p className="formErrorMessage">{errors.emailbis?.message}</p>
                <label>Teléfono*</label>
                <input name="phone" type="tel" className="formInput"
                {...register("phone", {
                    required: "El número es requerido",
                    minLength: {value: 5, message: "El número ingresado es muy corto"},
                })}
                />
                <p className="formErrorMessage">{errors.phone?.message}</p>
                <label>Dirección*</label>
                <input name="address" type="text" className="formInput"
                {...register("address", {
                    required: "La dirección es requerida",
                })}
                />
                <p className="formErrorMessage">{errors.address?.message}</p>
                <div className="formBtnContainer">
                <button type="submit" className="formConfirmBtn">ENVIAR</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default OrderForm;