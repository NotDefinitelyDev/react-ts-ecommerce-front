import styles from "./footer.module.css";
const { footerContainer } = styles;

const Footer = () => {
  return (
    <div className={footerContainer}>
      © 2026 Nour Al-Din Ehab. All rights reserved.
    </div>
  );
};

export default Footer;
