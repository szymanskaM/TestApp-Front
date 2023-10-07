import usersIcon from './images/users.png';
import deleteIcon from './images/delete.png';
import editIcon from './images/edit.png';
import addIcon from './images/add.png';
import './style.css';
import './teams.css';
import React, { useState,useEffect } from 'react';
import TopMenu from './TopMenu';
import { useParams,useNavigate } from 'react-router-dom';

function Projects() {
    const {userId,teamId,teamName}=useParams();
    const [projects,setProjects]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{GetProjectsForTeam(teamId,setProjects);},[teamId]);
  return (
        <div>
            <TopMenu />
            <div className="mainContainer">
                <img src={addIcon} className="addIcon" alt="add icon" />
                {ListOfProjects(userId,teamId,projects,teamName,navigate)} 
            </div>
        </div>
  );
}

async function GetProjectsForTeam(teamId,setProjects){
    try{
        teamId=isNaN(teamId) ? parseInt(teamId,10):teamId;
        const response= await fetch('https://localhost:7170/api/team/project/'+teamId,
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
        setProjects(data);
    }
    catch(error){
        console.error(error);
    }
}
function ListOfProjects(userId,teamId,data,teamName,navigate){
    if(data.length!==0){
        return <div>
            <div class="mainTitle">
                <h2>{teamName}</h2>
                <div class="rightEdit">
                    <img src={usersIcon} alt="user icon" height="40px" style={{marginRight: 10+'px'}}/>
                    <img src={editIcon} alt="edit icon" height="40px"/>
                </div>
            </div>
        {data.map((element,index)=>(   
            <div key={index} class="list">
                <div class="caseName" onClick={(e)=>{e.preventDefault();navigate(`/user/${userId}/teams/${teamId}/${teamName}/project/${element.name}/${element.id}`);}}>
                    <label><h2>{element.name}</h2></label>
                </div>
                <div class="rightEdit">
                    <img src={deleteIcon} alt="delete icon" height="35px" style={{marginRight: 10+'px'}}/>
                    <img src={editIcon} alt="edit icon" height="35px"/>
                </div>
            </div>
        ))}
        </div>;
    }
    else{
        return <div>
            <div class="mainTitle">
                <h2>{teamName}</h2>
                <div class="rightEdit">
                    <img src={usersIcon} alt="user icon" height="40px" style={{marginRight: 10+'px'}}/>
                    <img src={editIcon} alt="edit icon" height="40px"/>
                </div>
            </div>
            <div className='lackOfTeam'><p>W tym zespole nie utworzono jeszcze żadnych projektów. Jeśli jesteś administratorem zespołu kliknij przycisk w prawym dolnym rogu, aby utworzyć nowy projekt.</p></div>
        </div>;
    }
}
export default Projects;
