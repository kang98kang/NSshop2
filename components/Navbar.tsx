"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa"; // FontAwesome Bars 아이콘 사용
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 사이드바 열림 상태

  const handleMouseEnter = (menu: string) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // 사이드바 열고 닫기
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
          <button
            className={styles.iconButton}
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* 사이드바 */}
      <div
        className={`${styles.sidebar} ${isMenuOpen ? styles.showSidebar : ""}`}
      >
        <button className={styles.closeButton} onClick={toggleMenu}>
          &times;
        </button>
        <ul className={styles.sidebarMenu}>
          <li>
            <Link href="/training/ai">자연어처리 기반 AI 과정</Link>
          </li>
          <li>
            <Link href="/training/semiconductor">
              첨단 시스템반도체 설계 과정
            </Link>
          </li>
          <li>
            <Link href="/training/digitaltwin">유니티기반 디지털트윈 과정</Link>
          </li>
          <li>
            <Link href="/khp/academy1">반도체 설계 실습 과정</Link>
          </li>
          <li>
            <Link href="/khp/academy2">MS 인공지능/빅데이터 과정</Link>
          </li>
          <li>
            <Link href="/khp/academy3">Google 인공지능 서비스 활용 과정</Link>
          </li>
        </ul>
      </div>

      {/* 기존 hoveredMenu 로직 유지 */}
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
