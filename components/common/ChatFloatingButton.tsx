interface ChatFloatingButtonProps {
  url: string;
  icon?: string;
  style?: React.CSSProperties;
}

export default function ChatFloatingButton({
  url,
  icon = "📝",
  style,
}: ChatFloatingButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        right: "40px",
        bottom: "40px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 10px rgba(0, 0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        textDecoration: "none",
        zIndex: 1000,
        ...style,
      }}
    >
      {icon}
    </a>
  );
}
