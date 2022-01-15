import Image from "next/image";
import { useState } from "react";
import Styles from "../styles/Featured.module.css";
const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  return (
    <div className={Styles.container}>
      <div
        className={Styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div
        className={Styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={Styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" />
          </div>
        ))}
      </div>
      <div
        className={Styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;
