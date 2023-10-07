import editIcon from './images/edit.png';
import SideMenu from './SideMenu';
import TopMenu from './TopMenu';
import './mainContainer.css';
import {  React, useEffect,useState  } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement, Tooltip,Legend} from 'chart.js'
Chart.register(ArcElement, Tooltip, Legend);


function ProjectOverview() {
  const {userId,teamId,teamName,projectName,projectId}=useParams();
  const [data,setData]=useState([0,0,0,0]);
  const navigate=useNavigate();
  useEffect( () => {GetAmountOfTestCases(projectId,setData);}, [projectId]);
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
          <div className='list'>
            {DisplayChartOrCreate(data)}
          </div>
        </div>
    </div>
  );
}
function Charts(passed,failed,active,newCases){
  const data = {
    labels: ['Passed', 'Failed', 'Active','New'],
    datasets: [
      {
        data: [passed,failed,active,newCases],
        label:'Liczba przypadków testowych',
        backgroundColor: ['#9EE1C3', '#C25252', '#E1D69E','#9EAFE1'],
        hoverBackgroundColor: ['#6EA28A', '#964040', '#A29E6E','#6E7EA2'],
      },
    ],
  };
  const options = { 
    plugins: {
      tooltip: {
        titleFont: {
          size: 20
        },
        bodyFont: {
          size: 16
        },
     },
    legend: {
      display: true,
      responsive: true,
      position: "left",
      labels: {
        boxWidth: 36,
        padding: 30,
        font: {
          size: 28
        },
      },
      align: "center",
    },
  }};
  return <Pie data={data} options={options}/>;
}
async function GetAmountOfTestCases(projectId,setData)
{
  try{
    projectId=isNaN(projectId) ? parseInt(projectId,10):projectId;
    const response= await fetch('https://localhost:7170/api/team/project/id/'+projectId,
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
    setData([data.passedTestStatus, data.failedTestStatus, data.activeTestStatus, data.newTestStatus]);
  }
  catch(error){
    console.error(error);
  }
}
function DisplayChartOrCreate(data){
  if(data[0]===0 && data[1]===0 && data[2]===0 && data[3]===0)
    return <div className='chartContainer'>Brak danych do wyświetlenia</div>;
  else{
    return <div className='chartContainer'>
        <h2>Status przypadków testowych</h2>
        {Charts(data[0],data[1],data[2],data[3])}
      </div>;
  }
}
export default ProjectOverview;