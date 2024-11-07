import IframeComponent from "../../../components/IframeWrapper";

const AIPage = () => {
  return (
    <div style={{ width: "100%", padding: "30px", overflow: "hidden" }}>
      <IframeComponent src="/academy1/index.html" />
    </div>
  );
};

export default AIPage;
