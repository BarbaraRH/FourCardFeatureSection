import React from "react";
import Card from "./Card";
import teamBuilderIcon from "../assets/images/icon-team-builder.svg";
import calculatorIcon from "../assets/images/icon-calculator.svg";
import karmaIcon from "../assets/images/icon-karma.svg";
import supervisorIcon from "../assets/images/icon-supervisor.svg";

const Cards = () => {
  return (
    <div className="row">
      <div className="column one-card">
        <Card
          cardColor="cyan"
          title="Supervisor"
          description="Monitors activity to identify project roadblocks"
          image={supervisorIcon}
        />
      </div>
      <div className="column">
        <Card
          cardColor="red"
          title="Team Builder"
          description="Scans our talent network to create the optimal team for your project"
          image={teamBuilderIcon}
        />
        <Card
          cardColor="orange"
          title="Karma"
          description="Regularly evaluates our talent to ensure quality"
          image={karmaIcon}
        />
      </div>
      <div className="column one-card">
        <Card
          cardColor="blue"
          title="Calculator"
          description="Uses data from past projects to provide better delivery estimates"
          image={calculatorIcon}
        />
      </div>
    </div>
  );
};

export default Cards;
