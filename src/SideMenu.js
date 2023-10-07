import './pasekBoczny.css';
import {Link} from 'react-router-dom';
 function SideMenu(props){
	const { userId, teamId, teamName, projectName,projectId, navigate } = props;
   return( 
    <div class="pasekBoczny">
			<button class="button button1" onClick={(e)=>{e.preventDefault();navigate(`/user/${userId}/teams/${teamId}/${teamName}/project/${projectName}/${projectId}`);}}>Przegląd</button>
			<button class="button button1" onClick={(e)=>{e.preventDefault();navigate(`/user/${userId}/teams/${teamId}/${teamName}/project/${projectName}/${projectId}/scenarios`);}}>Scenariusze testowe</button>
		</div>
    );
 }
 export default SideMenu;