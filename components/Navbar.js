import React, { useState } from "react";
import Link from "next/link";
import { FaGlobeAfrica } from "react-icons/fa";
import styles from "/styles/navbar.module.scss";
const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.firstContainer}>
          <div className={styles.content}>
            <Link href="/">
              <a className={styles.logo}>LOGO</a>
            </Link>

            <div className={styles.links}>
              <Link href="#">
                <a className={styles.icon}>
                  <FaGlobeAfrica />
                  <p>EN</p>
                </a>
              </Link>
              <button className={styles.hamburger}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.secondContainer}>
          <ul className={styles.proLinks}>
            <Link href="/product1">
              <a className={styles.logo}>FirstLink</a>
            </Link>
            <Link href="/product2">
              <a className={styles.logo}>SecondLink</a>
            </Link>
            <Link href="/product3">
              <a className={styles.logo}>ThirdLink</a>
            </Link>
            <Link href="/product4">
              <a className={styles.logo}>FourthLink</a>
            </Link>
            <Link href="/product5">
              <a className={styles.logo}>FifthLink</a>
            </Link>
            <Link href="/product6">
              <a className={styles.logo}>SixthLink</a>
            </Link>
            <Link href="/product7">
              <a className={styles.logo}>SeventhLink</a>
            </Link>
            <Link href="/product8">
              <a className={styles.logo}>EightsLink</a>
            </Link>
            <Link href="/product9">
              <a className={styles.logo}>NinthLink</a>
            </Link>
            <Link href="/product10">
              <a className={styles.logo}>TenthLink</a>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
