import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

function TwoViewGrid(props) {
  const { benefits } = props;
  return (
    <Container>
      <h1>Benefits</h1>
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
      <div>
        <img
          src={content.image}
          alt={content.heading}
          style={{ width: "40px", height: "40px", display: "block" }}
        />
        <h3 style={{ color: "white" }}>{content.heading}</h3>
        <p style={{ color: "white" }}>{content.description}</p>
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
