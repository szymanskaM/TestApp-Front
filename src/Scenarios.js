import deleteIcon from './images/delete.png';
import editIcon from './images/edit.png';
import SideMenu from './SideMenu';
import TopMenu from './TopMenu';
import './mainContainer.css';
import { useState, React, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function Scenarios() {
  const {userId,teamId,teamName,projectName,projectId}=useParams();
  const [scenarios,setScenarios]=useState([]);
  const navigate=useNavigate();
  useEffect(()=>{GetScenariosForProject(projectId,setScenarios);},[projectId]);
  return (
    <div>
        <TopMenu />
        <SideMenu  userId={userId} teamId={teamId} teamName={teamName} projectName={projectName} projectId={projectId} navigate={navigate}/>
        <div className="Container">
          <div class="mainTitle">
              <h2>{teamName}/{projectName}</h2>
              <div class="rightEdit">
                  <img src={editIcon} alt="edit icon" height="40px"/>
              </div>
          </div>
          {ListOfScenarios(userId,teamId,teamName,projectName,projectId,scenarios,navigate)}
        </div>
    </div>
  );
}
async function GetScenariosForProject(projectId,setScenarios){
    try{
        projectId=isNaN(projectId) ? parseInt(projectId,10):projectId;
        const response= await fetch('https://localhost:7170/api/team/project/scenario/'+projectId,
        {
        method:'GET',
        headers:{"content-type":"application/json"}
        })
        if(!response.ok){
            const errorData=await response.text();
            throw new Error(errorData);
        }
        const data = await response.json();
        setScenarios(data);
    }
    catch(error){
        console.error(error);
    }
}
function ListOfScenarios(userId,teamId,teamName,projectName,projectId,data,navigate){
    if(data.length!==0){
        return <div>
        {data.map((element,index)=>(   
            <div key={index} class="list">
                <div class="caseName" onClick={(e)=>{e.preventDefault();navigate(`/user/${userId}/teams/${teamId}/${teamName}/project/${projectName}/${projectId}/scenarios/${element.id}/${element.name}`);}}>
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
        return <div className='lackOfTeam'><p>W tym projekcie nie utworzono jeszcze żadnych scenariuszy testowych. Kliknij przycisk w prawym dolnym rogu, aby utworzyć nowy scenariusz testowy.</p></div>;
    }
}
export default Scenarios;