import React from "react";
import styles from "@styles/Layout.module.css";
import Navar from "../Navar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Navar />
      <main className={styles.main}>{children}</main>
      <footer></footer>
    </div>
  );
}
