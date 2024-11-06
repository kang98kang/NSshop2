"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <>
      <header
        className={`${styles.navbar} ${hoveredMenu ? styles.noShadow : ""}`}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.logo}>
          <Link href="/">
            <img src="/logo.png" alt="home" style={{ width: "200px" }} />
          </Link>
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.menuList}>
            <li
              className={styles.menuItem}
              onMouseEnter={() => handleMouseEnter("training")}
            >
              <div>K-디지털 트레이닝</div>
            </li>
            <li
              className={styles.menuItem}
              onMouseEnter={() => handleMouseEnter("khp")}
            >
              <div>KHP 재직자 과정</div>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <button className={styles.iconButton} aria-label="Search">
            <i className="xi-search"></i>
          </button>
          <button className={styles.iconButton} aria-label="Menu">
            <i className="xi-bars"></i>
          </button>
        </div>
      </header>
      {hoveredMenu && (
        <div
          className={styles.submenuWrapper}
          onMouseEnter={() => handleMouseEnter(hoveredMenu)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredMenu === "training" && (
            <ul className={styles.submenu}>
              <li>
                <Link href="/training/ai">자연어처리 기반 AI 과정</Link>
              </li>
              <li>
                <Link href="/training/semiconductor">
                  첨단 시스템반도체 설계 과정
                </Link>
              </li>
              <li>
                <Link href="/training/digitaltwin">
                  유니티기반 디지털트윈 과정
                </Link>
              </li>
            </ul>
          )}
          {hoveredMenu === "khp" && (
            <ul className={styles.submenu}>
              <li>
                <Link href="/khp/academy1">반도체 설계 실습 과정</Link>
              </li>
              <li>
                <Link href="/khp/academy2">MS 인공지능/빅데이터 과정</Link>
              </li>
              <li>
                <Link href="/khp/academy3">
                  Google 인공지능 서비스 활용 과정
                </Link>
              </li>
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
