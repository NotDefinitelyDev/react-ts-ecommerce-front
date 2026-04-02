import Product from "@components/eCommerce/Product/Product";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProducts, productsCleanUp } from "@store/products/productsSlice";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "@components/feedback/Loading";
import GridList from "../components/GridList/GridList";

const Products = () => {
  const { prefix } = useParams<{ prefix: string }>();
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);

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
      <Loading state={loading} error={error}>
        <GridList
          records={records}
          renderItems={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
