import './style.css';
import './loginPanel.css';
import './registerPanel.css';
import manageIcon from './images/login.png';
import userIcon from './images/user.png';
import {Link,useNavigate} from 'react-router-dom';
import { useState, React } from 'react';
import TopMenu from './TopMenu';

async function LogFormSubmit(email,password,navigate){
  try{
    const body={
      email:email,
      password:password
    };
    const response=await fetch('https://localhost:7170/api/user/log',
    {
      method:'POST',
      body:JSON.stringify(body),
      headers:{"content-type":"application/json"}
    })
    if(!response.ok){throw new Error('Błąd logowania');};
    const data = await response.json();
    console.log(data);
    const userId=data.id;
    navigate(`/user/${userId}/teams`);
  }
  catch(error){console.error(error);}
}

function LogIn() {
  const [email,setEmail]=useState("email");
  const [password,setPassword]=useState("");  
  const navigate=useNavigate();
    return (
      <div>
        <TopMenu />
        <div class="root">
          <div class="left">
            <img src={manageIcon} alt="manage process" width="100%"/>       
          </div>
          <div class="right">
            <div class="formLog">
              <h1>Logowanie</h1>
              <img src={userIcon} height="25%" alt="user icon"/>
              <br/>
              <form onSubmit={(e)=>{e.preventDefault();LogFormSubmit(email,password,navigate);}}>
                <label><b>E-mail</b></label>
                <input type="text" placeholder="e-mail" id="emailReg" required onChange={(e)=>setEmail(e.target.value)}/>
                <label><b>Hasło</b></label>
                <input type="password" placeholder="password" id="pswReg" required onChange={(e)=>setPassword(e.target.value)}/>
                <button class="button2" id="saveUserBtn" type="submit">Zaloguj się</button>
              </form>
              <p>Nie masz jeszcze konta?<br/><Link to="/register">Zarejestruj się</Link></p>
            </div>
          </div>
	      </div>
      </div>
    );
  }
  
  export default LogIn;