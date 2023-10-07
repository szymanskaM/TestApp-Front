import editIcon from './images/edit.png';
import SideMenu from './SideMenu';
import TopMenu from './TopMenu';
import './mainContainer.css';
import { useState, React, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function TestCaseOverview() {
  const {userId,teamId,teamName,projectName,projectId,scenarioId,scenarioName,testCaseId,testCaseName}=useParams();
  const [testCase,setTestCase]=useState("");
  const navigate=useNavigate();
  useEffect(()=>{GetTestCaseById(testCaseId,setTestCase);},[testCaseId]);
  return (
    <div>
        <TopMenu />
        <SideMenu  userId={userId} teamId={teamId} teamName={teamName} projectName={projectName} projectId={projectId} navigate={navigate}/>
        <div className="Container">
            <div class="mainTitle">
                <h2>{teamName}/{projectName}/{scenarioName}/{testCaseName}</h2>
                <div class="rightEdit">
                  <img src={editIcon} alt="edit icon" height="40px"/>
                </div>
            </div>
            <div className='list'>
                <p>Tu parametry przypadku testowego</p>
                <p>{testCase}</p>
            </div>
        </div>
    </div>
  );
}
async function GetTestCaseById(testCaseId,setTestCase){
    try{
        testCaseId=isNaN(testCaseId) ? parseInt(testCaseId,10):testCaseId;
        const response= await fetch('https://localhost:7170/api/team/project/scenario/test/testId/'+testCaseId,
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
        setTestCase(JSON.stringify(data));
    }
    catch(error){
        console.error(error);
    }
}
export default TestCaseOverview;