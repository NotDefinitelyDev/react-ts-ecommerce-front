import { Category } from "@components/eCommerce";
import { Container, Row, Col } from "react-bootstrap";

const Categories = () => {
  const categoriesList = Array(8).fill(null);

  return (
    <Container>
      <Row>
        {categoriesList.map((_, index) => (
          <Col
            key={index}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Category />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
