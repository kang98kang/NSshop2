import IframeComponent from "../components/IframeWrapper";

const Home = () => {
  return (
    <div style={{ width: "100%", padding: "30px", overflow: "hidden" }}>
      <IframeComponent src="/main/index.html" />
    </div>
  );
};

export default Home;
