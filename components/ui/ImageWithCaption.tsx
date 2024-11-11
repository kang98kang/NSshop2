import styles from "@/styles/page.module.css";

interface ImageWithCaptionProps {
  src: string;
  width?: string;
  height?: string;
  alt?: string;
  caption?: string;
  className?: string;
}

export default function ImageWithCaption({
  src,
  width,
  height,
  alt = "",
  caption,
  className,
}: ImageWithCaptionProps) {
  return (
    <figure className={`${styles.figure} ${className || ""}`}>
      <img
        src={src}
        alt={alt}
        style={{
          width: width || "100%",
          height: height || "auto",
          maxWidth: "100%",
          objectFit: "contain",
        }}
      />
      {caption && (
        <figcaption className={styles.figcaption}>{caption}</figcaption>
      )}
    </figure>
  );
}
