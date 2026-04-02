import { Col, Row } from "react-bootstrap";

interface IGridListProps<T> {
  records: T[];
  renderItems: (record: T) => React.ReactNode;
}

const GridList = <
  T extends {
    id?: number;
  },
>({
  records,
  renderItems,
}: IGridListProps<T>) => {
  const iteration =
    records.length > 0
      ? records.map((record) => {
          return (
            <Col
              key={record.id}
              xs={6}
              md={3}
              className="d-flex justify-content-center mb-5 mt-2"
            >
              {renderItems(record)}
            </Col>
          );
        })
      : "There are no categories to show!";

  return <Row>{iteration};</Row>;
};

export default GridList;
