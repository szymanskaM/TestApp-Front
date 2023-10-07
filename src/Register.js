import './style.css';
import './registerPanel.css';
import manageIcon from './images/login.png';
import userIcon from './images/user.png';
import {Link} from 'react-router-dom';
import TopMenu from './TopMenu';
import { useState } from 'react';

async function RegisterFormSubmit(name,lastName,username,email,password,setError){
    try{
        const body={
            name:name,
            lastName:lastName,
            username:username,
            email:email,
            password:password
        };
        const response= await fetch('https://localhost:7170/api/user',
        {
        method:'POST',
        body:JSON.stringify(body),
        headers:{"content-type":"application/json"}
        })
        if(!response.ok){
            const errorData=await response.text();
            setError(errorData);
            throw new Error(errorData);
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
  }

function Register() {
    const [name,setName]=useState("");
    const [lastName,setLastName]=useState("");
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");  
    const [error,setError]=useState("");  
    return (
        <div>
            <TopMenu />
            <div class="root">
                <div class="left">
                    <img src={manageIcon} alt="manage process" width="100%"/>       
                </div>
                <div class="right">
                    <div class="formLog">
                        <h2>Rejestracja konta</h2>
                        <img src={userIcon} alt="userIcon" height="10%"/>
                        <div class="info">{error}</div>
                        <form onSubmit={(e)=>{e.preventDefault();setError("");RegisterFormSubmit(name,lastName,username,email,password,setError);}}>
                            <label><b>Imię</b></label>
                            <input type="text" placeholder="name" id="nameReg" required onChange={(e)=>setName(e.target.value)}/>
                            <label><b>Nazwisko</b></label>
                            <input type="text" placeholder="last name" id="lastNameReg" required onChange={(e)=>setLastName(e.target.value)}/>
                            <label><b>Nazwa użytkownika</b></label>
                            <input type="text" placeholder="username" id="usernameReg" required onChange={(e)=>setUsername(e.target.value)}/>
                            <label><b>E-mail</b></label>
                            <input type="text" placeholder="e-mail" id="emailReg" required onChange={(e)=>setEmail(e.target.value)}/>
                            <label><b>Hasło</b></label>
                            <input type="password" placeholder="password" id="pswReg" required onChange={(e)=>setPassword(e.target.value)}/>
                            <button class="button2" id="saveUserBtn" type="submit">Zarejestruj się</button>
                        </form>
                        <p>Masz już konto?<br/><Link to="/login">Zaloguj się</Link></p>
                    </div>
                </div>
            </div>
      </div>
    );
  }
  
  export default Register;