import styles from "./category.module.css";
const { category, categoryImg, categoryTitle } = styles;

const Category = () => {
  return (
    <div className={category}>
      <div className={categoryImg}>
        <img
          src="https://images.pexels.com/photos/8483487/pexels-photo-8483487.jpeg"
          alt=""
        />
      </div>
      <h4 className={categoryTitle}>Title</h4>
    </div>
  );
};

export default Category;
