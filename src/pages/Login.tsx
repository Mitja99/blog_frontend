import './Register.css';
import {SyntheticEvent, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [errorText, setErrorText] = useState('');
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        //try {
        const data = {
            "email": email,
            "password": pass
        };
        axios.post('http://localhost:3000/auth/login', data, {withCredentials: true})
            .then(response => {
                console.log('Response:', response.data);
                //setRedirect(true);
                window.location.replace("/");
            })
            .catch(error => {
                setErrorText(error);
            });
        //console.log('res value ' || res);
        // http://localhost:5173/login

       // if (res.status == 201) {
       //     console.log('redirect');
       //     setCookie("user", 'mitja', { path: "/" });
       //     setRedirect(true);
       // }
       // if (res.status != 201) {
       //     console.log('redirect ne');
       //     setErrorText('Napaka v podatkih');
       // }

        // }catch (e) {
        //      console.log(e);
        // }
    }
    if (redirect) {
        //return <Navigate to='/' state={{ loggedInUser }} />;
        return <Navigate to='/'/>;
    }


    return (
        <>
            <main className="form-signin w-100 m-auto">
                <h2 className="error">{errorText}</h2>
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Login</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput"
                               placeholder="name@example.com"
                               onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                               onChange={(e) => setPass(e.target.value)}/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                </form>
            </main>
        </>
    )
}

export default Login;