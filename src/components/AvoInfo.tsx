import React, { useState } from "react";
import Avocado from "./svgs/Avocado";
import styles from "@styles/AvoInfo.module.css";
import PosMeMuero from "./svgs/AvoMuerto";

export default function AvoInfo() {
  const [clicks, setClicks] = useState(0);
  const isAlive = (clicks < 2) ? 'alive' : 'dead'
  console.log(isAlive);
  
  
  const recomendation = () => {
    const number = Math.random();
    const answer = number >= 0.5 ? true : false;
  };
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        <span>Avo</span>
        <div onClick={()=>setClicks(clicks+1)} className={styles[isAlive]}>
          {
            (isAlive === 'alive')
              ? <Avocado size="4rem" />
              : <PosMeMuero/>
            }
          
        </div>
        <span>Store</span>
      </h1>
      <p onClick={recomendation} className={styles.question}>
        ¿Deberia comer un Avo hoy?
      </p>
    </section>
  );
}
