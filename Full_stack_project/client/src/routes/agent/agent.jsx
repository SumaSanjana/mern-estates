import React from "react";
import "./agent.scss";
import MeImage from "./me.jpg";
import BatImage from "./batman.png";
import ModiImage from "./modi.png";
import RgvImage from "./rgv.png";

function Agents() {
  const agentData = [
    { id: 1, name: "Batman", role: "Senior Agent", img: BatImage },
    { id: 2, name: "Mekala Varun", role: "Property Expert", img: MeImage },
    { id: 3, name: "Narendra Modi", role: "Negotiation Specialist", img: ModiImage },
    { id: 4, name: "Ram Gopal Varma", role: "Market Analyst", img: RgvImage },
  ];

  return (
    <div className="agents">
      <h1>Our Agents</h1>
      <p>Meet our team of professional real estate agents dedicated to finding your perfect home.</p>
      <div className="agent-grid">
        {agentData.map((agent) => (
          <div className="agent-card" key={agent.id}>
            <img src={agent.img} alt={agent.name} className="agent-photo" />
            <h3 className="agent-name">{agent.name}</h3>
            <p className="agent-role">{agent.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Agents;
