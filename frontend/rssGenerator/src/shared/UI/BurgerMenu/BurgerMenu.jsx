import { useState } from "react";
import styles from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  const [active, setActive] = useState(false);

  const handleActiveMenu = () => {
    setActive(!active);
  };
  return (
    <>
      <div className={styles.burgerMenu} onClick={handleActiveMenu}>
        <span
          className={`${styles.bar} ${active ? styles.barActive : ""}`}
        ></span>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <button></button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BurgerMenu;
