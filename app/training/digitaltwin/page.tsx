import IframeComponent from "../../../components/IframeWrapper";

const DigitalTwinPage = () => {
  return (
    <div style={{ width: "100%", padding: "30px", overflow: "hidden" }}>
      <IframeComponent src="/academy3/index.html" />
    </div>
  );
};

export default DigitalTwinPage;
