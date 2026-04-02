import type { TCategory } from "@customTypes/category";
import { Link } from "react-router-dom";
import styles from "./category.module.css";
const { category, categoryImg, categoryTitle } = styles;

const Category = (props: TCategory) => {
  return (
    <div className={category}>
      <Link to={`/products/${props.prefix}`}>
        <div className={categoryImg}>
          <img src={props.img} alt="" />
        </div>
        <h4 className={categoryTitle}>{props.title}</h4>
      </Link>
    </div>
  );
};

export default Category;
