import { Category } from "@components/eCommerce";
import { Container, Row, Col } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { useEffect } from "react";
import Loading from "@components/feedback/Loading";
import GridList from "@components/GridList/GridList";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categories,
  );

  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  return (
    <Container>
      <Loading state={loading} error={error}>
        <GridList
          records={records}
          renderItems={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
