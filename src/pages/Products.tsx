import Product from "@components/eCommerce/Product/Product";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProducts, productsCleanUp } from "@store/products/productsSlice";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Products = () => {
  const { prefix } = useParams<{ prefix: string }>();
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);

  const categoriesList =
    records.length > 0
      ? records.map((record) => {
          return (
            <Col
              key={record.id}
              xs={6}
              md={3}
              className="d-flex justify-content-center mb-5 mt-2"
            >
              <Product {...record} />
            </Col>
          );
        })
      : "There are no categories to show!";

  useEffect(() => {
    if (!records.length) {
      // I have to cast it here, I can not get here from the beginning if it wasn't  string
      dispatch(actGetProducts(prefix as string));
    }

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, prefix, records]);

  return (
    <Container>
      <Row>{categoriesList}</Row>
    </Container>
  );
};

export default Products;
