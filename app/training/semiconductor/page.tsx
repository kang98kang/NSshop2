import IframeComponent from "../../../components/IframeWrapper";

const SemiconductorPage = () => {
  return (
    <div style={{ width: "100%", padding: "30px", overflow: "hidden" }}>
      <IframeComponent src="/academy2/index.html" />
    </div>
  );
};

export default SemiconductorPage;
