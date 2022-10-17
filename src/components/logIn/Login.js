import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../context/UserContext";
import "./Login.css";
const Login = () => {
    const {login}=useContext(Authcontext);
    const navigate =useNavigate()

    const location = useLocation(); 
    const from = location.state?.from?.pathname || '/'

    const handelLogin =event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email ,password)
        .then(result => {
            const uer = result.user;
            console.log(uer);
            form.reset()
            navigate(from, {replace: true})
        })
        .catch(error=> console.error(error))

    }


  return (
    <div className="form-continer">
      <h2 className="form-title">log in</h2>
      <form onSubmit={handelLogin}>
        <div className="from-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="from-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required/>
        </div>
        <input className="btnsubmit" type="submit" value="Lig In" />
      </form>
      <p>New to ema jhon <Link to='/signup'>Create a nwe Account</Link></p>
    </div>
  );
};

export default Login;
