import { TProduct } from "@models/products.model";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "@styles/Product.module.css";
import Image from "next/image";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { AppContext } from "@src/context/appContext";
import { TUseInitialState } from "@src/hooks/useInitialState";

export default function Id() {
  const router = useRouter();
  const { addProduct } = useContext(AppContext) as TUseInitialState;
  const { id } = router.query;
  const [product, setProduct] = useState<TProduct>();
  const [quantityInput, setQuantityInput] = useState<number>(1);
  useEffect(() => {
    if (id)
      fetch(`/api/avo/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => console.error(err));
  }, [id]);

  const addToCart = () => {
     const products = [];
     for (let i = 0; i < quantityInput; i++) {
      products.push(product) 
     }  
      addProduct(products)
  };

  return (
    <>
      {product && (
        <section className={styles.container}>
          <article className={styles.main}>
            <Image
              priority
              width={250}
              height={250}
              src={product.image}
              alt={product.name}
            ></Image>
            <div className={styles["main-info"]}>
              <h1 className={styles.title}>{product?.name}</h1>
              <span>${product.price}</span>
              <span className={styles.sku}>SKU: {product.sku}</span>
              <div className={styles.quantity}>
                <input type={"number"} min={1} 
                onChange={(event)=>setQuantityInput(Number(event.target.value))}
                value={quantityInput}
                />
                <button onClick={addToCart}>
                  <>Add to card</>
                </button>
              </div>
            </div>
          </article>
          <article className={styles.details}>
            <h3>About this avocado</h3>
            <p>{product?.attributes.description}</p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <td colSpan={2}>Atributos</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Shape</td>
                  <td>{product.attributes.shape}</td>
                </tr>
                <tr>
                  <td>Hardiness</td>
                  <td>{product.attributes.hardiness}</td>
                </tr>
                <tr>
                  <td>Taste</td>
                  <td>{product.attributes.taste}</td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      )}
    </>
  );
}
