import { TProduct } from "@models/products.model";
import { CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "@styles/Home.module.css";
import AvoInfo from "@src/components/AvoInfo";

export default function Index() {
  const [products, setProducts] = useState<TProduct[]>();
  useEffect(() => {
    fetch("api/avo")
      .then((res) => res.json())
      .then(({ data }) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className={styles.container}>
      <AvoInfo />
      <div className={styles["product-list"]}>
        {products?.map((product) => {
          let { description } = product.attributes;
          if (description.length > 150) {
            description = description.substring(0, 150) + "... read more";
          }
          return (
            <Link
              prefetch={false}
              href={`/product/${product.id}`}
              key={product.id}
            >
              <div className={styles["product-item"]}>
                <CardMedia
                  component="img"
                  alt={product.name}
                  height="200"
                  image={product.image}
                />
                <div className={styles.info}>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                </div>
                {/* </Card> */}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
