import usersIcon from './images/users.png';
import deleteIcon from './images/delete.png';
import editIcon from './images/edit.png';
import addIcon from './images/add.png';

import TopMenu from './TopMenu';
import { useState, React, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function Teams() {
    const {userId}=useParams();
    const [teams,setTeams]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{GetTeamsForUser(userId,setTeams);},[userId]);
    
  return (
    <div>
        <TopMenu />
        <div className="mainContainer">
            <img src={addIcon} className="addIcon" alt="add icon" onClick={(e)=>{e.preventDefault();navigate(`/user/${userId}/teams`);}}/>
            {ListOfTeams(userId,teams,navigate)} 
        </div>
    </div>
  );
}

async function GetTeamsForUser(userId,setTeams){
    try{
        userId=isNaN(userId) ? parseInt(userId,10):userId;
        const response= await fetch('https://localhost:7170/api/team/'+userId,
        {
        method:'GET',
        headers:{"content-type":"application/json"}
        })
        if(!response.ok){
            const errorData=await response.text();
            throw new Error(errorData);
        }
        const data = await response.json();
        console.log(data);
        setTeams(data);
    }
    catch(error){
        console.error(error);
    }
}

function ListOfTeams(userId,data,navigate){
    if(data.length!==0){
        return data.map((element,index)=>(   
            <div key={index} class="list" onClick={(e)=>{e.preventDefault();navigate(`/user/${userId}/teams/${element.id}/${element.name}`);}}>
                <div class="caseName">
                    <label><h2>{element.name}</h2></label>
                </div>
                <div class="rightEdit">
                    <img src={usersIcon} alt="user icon" height="35px" style={{marginRight: 10+'px'}}/>
                    <img src={deleteIcon} alt="delete icon" height="35px" style={{marginRight: 10+'px'}}/>
                    <img src={editIcon} alt="edit icon" height="35px"/>
                </div>
            </div>
        ));
    }
    else{
        return <div className='lackOfTeam'><p>Nie jesteś jeszcze członkiem żadnego zespołu. Aby dołączyć do już istniejącego zespołu poproś administartora danego zespołu o dodanie cię, bądź stwórz własny zespół klikając w przycisk w prawym dolnym rogu.</p></div>;
    }
}

export default Teams;