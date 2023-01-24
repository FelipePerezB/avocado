import { AppContext } from "@src/context/appContext";
import React, { useContext } from "react";
import { TUseInitialState } from "@src/hooks/useInitialState";
import { TItems } from "@src/models/products.model";
import styles from "@styles/Cart.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  const { state } = useContext(AppContext) as TUseInitialState;
  const total = state.orders
    .map((order) => order.price)
    .reduce((a, ia) => a + ia, 0);

  const items: any = {};

  state.orders?.map((order) => {
    items[order.id] = !items[order.id]
      ? {
          id: order.id,
          price: order.price,
          name: order.name,
          image: order.image,
          quantity: 1,
        }
      : ({
          ...items[order.id],
          quantity: items[order.id].quantity + 1,
        } as TItems);
  });
  const arrayItems: TItems[] = Object.values(items);
  return (
    <>
      <section className={styles.container}>
        <ul className={styles.items}>
          {arrayItems.map((order) => {
            const { id, name, image, quantity, price } = order;
            return (
              <Link key={id} href={`/product/${id}`}>
                <li  className={styles.item}>
                  <Image alt={name} width={100} height={100} src={image} />
                  <div className={styles["item-info"]}>
                    <h2>{name}</h2>
                    <span>
                      ${price} x {quantity} = ${(price * quantity).toFixed(2)}
                    </span>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
        <div className={styles.checkout}>
          <p>
            <span className={styles.subtitle}>Total:</span>
            <span> ${total}</span>
          </p>
          <button>Check out</button>
        </div>
      </section>
    </>
  );
}
