import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   nombre: "",
   apellido: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ nombre: "", apellido: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Crear Nuevo Usuario</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="nombre">Nombres</label>
         <input
           type="text"
           className="form-control"
           id="nombre"
           value={form.nombre}
           onChange={(e) => updateForm({ nombre: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="apellido">Apellidos</label>
         <input
           type="text"
           className="form-control"
           id="apellido"
           value={form.apellido}
           onChange={(e) => updateForm({ apellido: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Crear persona"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}