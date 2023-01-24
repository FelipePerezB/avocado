import Link from "next/link";
import React from "react";
import styles from "@styles/Navar.module.css";
import Avocado from "./svgs/Avocado";
import CartIcon from "./svgs/Cart";
import { useContext } from "react";
import { AppContext } from "@src/context/appContext";
import { TUseInitialState } from "@src/hooks/useInitialState";

export default function Navar() {
  const { state } = useContext(AppContext) as TUseInitialState;
  const getOrders = () => {
    console.log(state.orders);
  };
  return (
    <nav className={styles.navar}>
      <ul className={styles.items}>
        <li className={styles.item}>
          <Link href="/">
            <Avocado /> <span>Avo Store</span>
          </Link>
        </li>
        <li className={styles.item} onClick={getOrders}>
          <Link href='/cart'>
            <CartIcon />{" "}
            <span>Canasta {state.orders.length > 0 && `(${state.orders.length})`}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
