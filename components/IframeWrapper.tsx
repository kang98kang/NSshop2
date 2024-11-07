"use client";

import { useEffect, useRef } from "react";

interface IframeComponentProps {
  src: string;
  width?: string;
  style?: React.CSSProperties;
}

const IframeComponent: React.FC<IframeComponentProps> = ({
  src,
  width = "100%",
  style,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const adjustIframeHeight = () => {
      if (iframeRef.current) {
        try {
          const iframeWindow = iframeRef.current.contentWindow;
          const newHeight =
            iframeWindow?.document.documentElement.scrollHeight ||
            iframeWindow?.innerHeight;
          iframeRef.current.style.height = `${newHeight}px`;
        } catch (error) {
          console.error("iframe 내부의 콘텐츠에 접근할 수 없습니다:", error);
        }
      }
    };

    iframeRef.current?.addEventListener("load", adjustIframeHeight);
    const intervalId = setInterval(adjustIframeHeight, 1000);

    return () => {
      iframeRef.current?.removeEventListener("load", adjustIframeHeight);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      width={width}
      style={{ border: "none", ...style }}
    />
  );
};

export default IframeComponent;
