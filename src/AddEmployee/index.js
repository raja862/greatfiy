import React, { useState } from "react";
import "./AddEmp.css"
const AddEmployee=()=>{

 const [ employeeDetails , setEmployeeDetails]=useState({
    name:"",
    email:"",
    Department:"",
    DateofBirth:"",
    mobileNumber:"",


    })

const handleInput=(value)=>{
    // console.log(value)
  
    return setEmployeeDetails(employee=>{
        return{...employee,...value}

    })
}
const handleSubmit=async(e)=>{
if(window.confirm('confirm to next page')){
e.preventDefault();

}
}
    return(<div  className="Addemp">
    
<h1 className="addemp" style={{    fontWeight: "bolder"}}>ADD EMPLOYEE</h1>
<form className="form" onSubmit={handleSubmit}> 
                <div className="form-group">
                    <label htmlFor="name" style={{    fontWeight: "bolder"}}>Name</label>
                    <input id='name' className="form-control" type='text' value={employeeDetails.name} onChange={e => handleInput({name: e.target.value}) } required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email" style={{    fontWeight: "bolder"}}>Email</label>
                    <input id='email' className="form-control" type='email' value={employeeDetails.email} onChange={e => handleInput({email: e.target.value})}required />
                </div>
                <div className="form-group">
                    <label htmlFor="department" style={{    fontWeight: "bolder"}}>Department</label>
                    <input id='address' className="form-control" type='text' value={employeeDetails.Department} onChange={e => handleInput({Department: e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="Date of birth" style={{    fontWeight: "bolder"}}>Date of birth</label>
                    <input id='Date of birth' className="form-control" type='date' dateFormat="DD/MM/YYYY" value={employeeDetails.DateofBirth} onChange={e => handleInput({DateofBirth: e.target.value})}required />
                </div>
                <div className="form-group">
                    <label htmlFor="mobileNumber" style={{    fontWeight: "bolder"}}>Mobile Number</label>
                    <input id='mobileNumber' className="form-control" type='text' value={employeeDetails.mobileNumber} onChange={e => handleInput({mobileNumber: e.target.value})}required/>
                </div>
                <div className='form-group'>
                     <input className='btn btn-primary mt-2' type='submit' value='next' /> 
     
                </div>
            </form>

    </div>)
}
export default AddEmployee
