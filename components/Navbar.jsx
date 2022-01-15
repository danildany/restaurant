import Image from "next/image";
import Styles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.item}>
        <div className={Styles.callBtn}>
          <Image src="/img/telephone.png" alt="logo" width="32" height="32" />
        </div>
        <div className={Styles.texts}>
          <div className={Styles.text}>Order Now!!</div>
          <div className={Styles.text}>0800 555 111</div>
        </div>
      </div>
      <div className={Styles.item}>
        <ul className={Styles.list}>
          <li className={Styles.listItem}>Homepage</li>
          <li className={Styles.listItem}>Product</li>
          <li className={Styles.listItem}>Menu</li>
          <Image src="/img/logo.png" alt="logo" width="160" height="69" />
          <li className={Styles.listItem}>Events</li>
          <li className={Styles.listItem}>Blog</li>
          <li className={Styles.listItem}>Contacts</li>
        </ul>
      </div>
      <div className={Styles.item}>
        <div className={Styles.cart}>
          <Image src="/img/cart.png" alt="logo" width="30" height="30" />
          <div className={Styles.counter}>0</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
