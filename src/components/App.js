import React from "react";
import '../styles/App.css';

const App = () => {
  const projects = [
    {
      name: "AI Travel Planner",
      description: "An AI-powered tool to plan personalized travel itineraries based on budget and preferences."
    },
    {
      name: "Smart Budget Tracker",
      description: "A finance app that tracks expenses and provides intelligent saving tips using machine learning."
    },
    {
      name: "E-commerce Chatbot",
      description: "A chatbot for online stores that guides users through product discovery and checkout."
    },
  ]
  return (
    <div className="ns-wrapper">
      {projects.map((project,index)=>(
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-text="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  )
}


export default App;
