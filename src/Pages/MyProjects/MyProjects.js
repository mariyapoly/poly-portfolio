import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Project from "../Project/Project";

const MyProjects = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./fakedata.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="project-area my-project">
      <Container>
        <div className="section-title">
          <h2>
            MY <span>PORTFOLIO</span>
          </h2>
          <p>
            A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME
          </p>
        </div>
        <Row>
          {products.map((product) => (
            <Project key={product.id} product={product}></Project>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MyProjects;
