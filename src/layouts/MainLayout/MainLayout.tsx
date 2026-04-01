import { Container } from "react-bootstrap";
import Header from "@components/common/Header/Header";
import styles from "./main-layout.module.css";
import Footer from "@components/common/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Container className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};

export default MainLayout;
