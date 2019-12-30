import React from "react";
import BenefitsConfig from "../config.js";
//import TwoViewGrid from "../Component/TwoViewGrid/TwoViewGrid";
import { Container } from 'react-bootstrap';

class SuperTokensBenefitsContainer extends React.Component {
  render() {
    return (
      <div>
        <Container>
        <h1>Benefits</h1>
        <TwoViewGrid benefits={BenefitsConfig} />
        </Container>
      </div>
    );
  }
}

function TwoViewGrid(props) {
  const { benefits } = props;
  return (
    <div>
      {benefits.map((row, index) => (
        <div key={index}>
          <img
            src={row.image}
            alt={row.heading}
            style={{ width: "40px", height: "40px",display:"block" }}
          />
          <h3 style={{ color: "white" }}>"{row.heading}"</h3>
          <p style={{ color: "white" }}>"{row.description}"</p>
        </div>
      ))}
    </div>
  );
}

export default SuperTokensBenefitsContainer;
