import { TAPIAvoResponse, TProduct } from "@models/products.model";
import { CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "@styles/Home.module.css";
import AvoInfo from "@src/components/AvoInfo";
import Image from "next/image";

export const getServerSideProps = async () => {
  const response = await fetch("https://avocado-beige.vercel.app/api/avo");
  const { data: productList }: TAPIAvoResponse = await response.json();
  return {
    props: {
      productList,
    },
  };
};

export default function Index({ productList }: { productList: TProduct[] }) {
  return (
    <div className={styles.container}>
      <AvoInfo />
      <div className={styles["product-list"]}>
        {productList?.map((product) => {
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
                <Image
                  loading="lazy"
                  alt={product.name}
                  height="200"
                  width={"200"}
                  src={product.image}
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
