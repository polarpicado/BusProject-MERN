import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   nombre: "",
   apellido: "",
    nbus: "",
    asientos: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `Ocurrió un error: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Registro con id ${id} no encontrado.`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
    nombre: form.nombre,
     apellido: form.apellido,
      nbus: form.nbus,
      asientos: form.asientos,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="nombre">Nombre: </label>
         <input
           type="text"
           className="form-control"
           id="nombre"
           value={form.nombre}
           onChange={(e) => updateForm({ nombre: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="apellido">apellido: </label>
         <input
           type="text"
           className="form-control"
           id="apellido"
           value={form.apellido}
           onChange={(e) => updateForm({ apellido: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="nbus">Número de Bus: </label>
         <input
           type="text"
           className="form-control"
           id="nbus"
           value={form.nbus}
           onChange={(e) => updateForm({ nbus : e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="asientos">Asientos: </label>
         <input
           type="text"
           className="form-control"
           id="asientos"
           value={form.asientos}
           onChange={(e) => updateForm({ asientos : e.target.value })}
         />
       </div>
       <br />
       <div className="form-group">
         <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}