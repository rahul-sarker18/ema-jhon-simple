import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../context/UserContext';
import './Signup.css'



const Signup = () => {
const{signup} =useContext(Authcontext)
const [error ,setError] = useState(null);

    const handelSignup=(event)=>{
        event.preventDefault();
        const from = event.target;
        const email =from.email.value;
        const password =from.password.value;
        const cpassword =from.cp.value;



        console.log(email , password , cpassword);

        if(password.length >6){
            setError('plez 6 degite password nowe')
            return;
        }
        if(password !== cpassword){
            setError('cruct password plez')
            return;
        }
        signup(email ,password)
        .then(result => {
            const user =result.user;
            console.log(user);
            from.reset()
        })
        .catch(error => {
            console.error(error);
        })


    }


    return (
        <div className="form-continer">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handelSignup}>
        <div className="from-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="from-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <div className="from-control">
          <label htmlFor="cp">Password</label>
          <input type="password" name="cp" id="" required />
        </div>
        <input className="btnsubmit" type="submit" value="sign up" />
      </form>
      <p>{error}</p>
      <p>Allrady have an account <Link to='/login'>Log in</Link></p>
    </div>
    );
};

export default Signup;