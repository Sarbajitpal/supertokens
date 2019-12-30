import React from "react";
import BenefitsConfig from "../config.js";
import TwoViewGrid from "../Component/TwoViewGrid/TwoViewGrid";

class SuperTokensBenefitsContainer extends React.Component {
  render() {
    return <TwoViewGrid benefits={BenefitsConfig} />;
  }
}

export default SuperTokensBenefitsContainer;
