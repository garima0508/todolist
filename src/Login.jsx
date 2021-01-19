import React, { useState } from 'react';

const Login= ()=>{
    let [info,setInfo]= useState({
        fname:'',
        lname:'',
        email:'',
        phone:''
    });
    
    const InputEvent=(event)=>{
        const value=event.target.value; 
        const name=event.target.name;
        setInfo((preValue)=>{
            // if(name==='fname'){
            //     return({
            //         fname:value,
            //         lname:preValue.lname,
            //         email:preValue.email,
            //         phone:preValue.phone
            //     });
            // }else if(name==='lname'){
            //     return({
            //         fname:preValue.fname,
            //         lname:value,
            //         email:preValue.email,
            //         phone:preValue.phone
            //     });
            // } else if(name==='email'){
            //     return({
            //         fname:preValue.fname,
            //         lname:preValue.lname,
            //         email:value,
            //         phone:preValue.phone
            //     });
            // } else if(name==='phone'){
            //     return({
            //         fname:preValue.fname,
            //         lname:preValue.lname,
            //         email:preValue.email,
            //         phone:value
            //     });
            // } 
            return{
                ...preValue,
                [name]:value
            };
        });
    };
    
    const onSubmit= (event)=>{
        event.preventDefault();
        alert('Form submitted');
    };
    return (
        <>
            <form onSubmit={onSubmit}>
                <h1>Hello {info.fname} {info.lname}</h1>
                <h3>{info.email} {info.phone}</h3>
                <input placeholder='Enter your First Name' type='text' onChange={InputEvent} name='fname' value={info.fname} />
                <br/>
                <input placeholder='Enter your Last Name' type='text' onChange={InputEvent} name='lname' value={info.lname} />
                  <br/>
                <input placeholder='Enter your Email' type='email' onChange={InputEvent} name='email' value={info.email} />
                <br/>
                <input placeholder='Enter your Phone' type='number' onChange={InputEvent} name='phone' value={info.phone} />
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </>
    );
};
export default Login;