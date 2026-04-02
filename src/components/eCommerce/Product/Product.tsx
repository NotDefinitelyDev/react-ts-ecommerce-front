import { Button } from "react-bootstrap";
import styles from "./product.module.css";
import type { TProduct } from "@customTypes/product";
const { product, productImg } = styles;

const Product = (props: TProduct) => {
  console.log(props.img);
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={props.img} alt={props.title} />
      </div>
      <h2>{props.title}</h2>
      <h3>{props.price} EGP</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
