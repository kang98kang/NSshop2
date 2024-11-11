import React from "react";
import styles from "@/styles/page.module.css";

interface SectionTitleProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
}

export default function SectionTitle({
  children,
  level = 1,
}: SectionTitleProps) {
  const className = styles[`h${level}`];

  return React.createElement(`h${level}`, { className }, children);
}
