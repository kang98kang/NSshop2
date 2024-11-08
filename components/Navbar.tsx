"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = (menu: string) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
              <div>문의</div>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <button
            className={styles.iconButton}
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <FaBars />
          </button>
        </div>
      </header>
      <div
        className={`${styles.sidebar} ${isMenuOpen ? styles.showSidebar : ""}`}
      >
        <button className={styles.closeButton} onClick={toggleMenu}>
          &times;
        </button>
        <ul className={styles.sidebarMenu}>
          <li>
            <Link href="/training/ai" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/terms" onClick={toggleMenu}>
              개인정보처리방침
            </Link>
          </li>
        </ul>
      </div>

      {hoveredMenu && (
        <div
          className={styles.submenuWrapper}
          onMouseEnter={() => handleMouseEnter(hoveredMenu)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredMenu === "training" && (
            <ul className={styles.submenu}>
              <li>
                <Link href="/training/ai">Contact</Link>
              </li>
              <li>
                <Link href="/terms">개인정보처리방침</Link>
              </li>
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
