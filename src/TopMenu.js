import './style.css';
import logo from'./images/logi.png';
import {Link} from 'react-router-dom';
 function TopMenu(){
   return( 
    <header>
        <div class="menu">
            <div class="log"><Link to="/"><img src={logo} alt="Logo" width="200"/></Link></div>
            <nav>
                <div>
                    <ul>
                        <li class="guzikiM"><Link to="/login">Logowanie</Link></li>
                        <li class="guzikiM"><Link to="/register">Rejestracja</Link></li>
                        <li><div class="menuMini" onclick="openNav()"><div class="ikonaM"></div><div class="ikonaM"></div><div class="ikonaM"></div></div></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    );
 }
 export default TopMenu;