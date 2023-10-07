import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LogIn from './LogIn';
import Register from './Register';
import Teams from './Teams';
import reportWebVitals from './reportWebVitals';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Projects from './Projects';
import ProjectOverview from './ProjectOverview';
import Scenarios from './Scenarios';
import TestCases from './TestCases';
import TestCaseOverview from './TestCaseOverview';
import 'chart.js';
import CreateTeams from './Teams/CreateTeam';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/login" element={<LogIn />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/user/:userId/teams" element={<Teams />}/>
      <Route path="/user/:userId/teams/create" element={<CreateTeams />}/>
      <Route path="/user/:userId/teams/:teamId/:teamName" element={<Projects />}/>
      <Route path="/user/:userId/teams/:teamId/:teamName/project/:projectName/:projectId" element={<ProjectOverview />}/>
      <Route path="/user/:userId/teams/:teamId/:teamName/project/:projectName/:projectId/scenarios" element={<Scenarios />}/>
      <Route path="/user/:userId/teams/:teamId/:teamName/project/:projectName/:projectId/scenarios/:scenarioId/:scenarioName" element={<TestCases />}/>
      <Route path="/user/:userId/teams/:teamId/:teamName/project/:projectName/:projectId/scenarios/:scenarioId/:scenarioName/testCase/:testCaseId/:testCaseName" element={<TestCaseOverview />}/>
    </Routes>
  </Router>
);
reportWebVitals();
