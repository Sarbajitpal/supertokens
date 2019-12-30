import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

function TwoViewGrid(props) {
  const { benefits } = props;
  return (
    <Container>
      <h1 style={{color:"#dddddd"}} className="text-center">Benefits</h1>
      <div>
        {benefits.map(([firstRow, secondRow], index) => {
          return (
            <Row key={index}>
              {firstRow ? <ContentDisplay content={firstRow} /> : null}

              {secondRow ? <ContentDisplay content={secondRow} /> : null}
            </Row>
          );
        })}
      </div>
    </Container>
  );
}

TwoViewGrid.propTypes = {
  content:  PropTypes.arrayOf(
    PropTypes.shape({
       heading: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
    })
  )
};

function ContentDisplay(props) {
  const { content } = props;
  return (
    <Col xs={12} md={6}>
      <div style={{float:"left",width: "17%",height:"100%"}}>
        <img
          src={content.image}
          alt={content.heading}
          style={{ width: "40px", height: "40px"}}
        />
      </div>
        <div style={{float:"left",width: "83%",height:"100%"}}>
        <h2 style={{ color: "rgb(255, 153, 51)",fontSize:"100%"}} >{content.heading}</h2>
        <h2 style={{ color: "#dddddd",fontSize:"100%" }} >{content.description}</h2>
      </div>
    </Col>
  );
}

ContentDisplay.propTypes = {
  content: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default TwoViewGrid;