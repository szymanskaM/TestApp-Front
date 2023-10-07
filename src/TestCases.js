import deleteIcon from './images/delete.png';
import editIcon from './images/edit.png';
import SideMenu from './SideMenu';
import TopMenu from './TopMenu';
import './mainContainer.css';
import { useState, React, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function TestCases() {
  const {userId,teamId,teamName,projectName,projectId,scenarioId,scenarioName}=useParams();
  const [testCases,setTestCases]=useState([]);
  const navigate=useNavigate();
  useEffect(()=>{GetTestCasesForScenario(scenarioId,setTestCases);},[scenarioId]);
  return (
    <div>
        <TopMenu />
        <SideMenu  userId={userId} teamId={teamId} teamName={teamName} projectName={projectName} projectId={projectId} navigate={navigate}/>
        <div className="Container">
          <div class="mainTitle">
              <h2>{teamName}/{projectName}/{scenarioName}</h2>
              <div class="rightEdit">
                  <img src={editIcon} alt="edit icon" height="40px"/>
              </div>
          </div>
          {ListOfTestCases(userId,teamId,teamName,projectName,projectId,scenarioId,scenarioName,testCases,navigate)}
        </div>
    </div>
  );
}
async function GetTestCasesForScenario(scenarioId,setTestCases){
    try{
        scenarioId=isNaN(scenarioId) ? parseInt(scenarioId,10):scenarioId;
        const response= await fetch('https://localhost:7170/api/team/project/scenario/test/'+scenarioId,
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
        setTestCases(data);
    }
    catch(error){
        console.error(error);
    }
}
function ListOfTestCases(userId,teamId,teamName,projectName,projectId,scenarioId,scenarioName,data,navigate){
    if(data.length!==0){
        return <div>
        {data.map((element,index)=>(   
            <div key={index} class="list">
                <div class="caseName" onClick={(e)=>{e.preventDefault();navigate(`/user/${userId}/teams/${teamId}/${teamName}/project/${projectName}/${projectId}/scenarios/${scenarioId}/${scenarioName}/testCase/${element.id}/${element.name}`);}}>
                    <label><h2>{element.name}</h2></label>
                </div>
                <div class="rightEdit">
                    <div className="status" style={{backgroundColor:setStatusColor(element.status)}}></div>
                    <img src={deleteIcon} alt="delete icon" height="35px" style={{marginRight: 10+'px'}}/>
                    <img src={editIcon} alt="edit icon" height="35px"/>
                </div>
            </div>
        ))}
        </div>;
    }
    else{
        return <div className='list'><p>W tym scenariuszu nie utworzono jeszcze żadnych przypadków testowych. Kliknij przycisk w prawym dolnym rogu, aby utworzyć nowy przypadek testowy.</p></div>;
    }
}
function setStatusColor(status){
    if(status==='new'){return '#01214B';}
    else if(status==='active'){return '#F6DE7E';}
    else if(status==='passed'){return 'green';}
    else {return 'red';}
}
export default TestCases;