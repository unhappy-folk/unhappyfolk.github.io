import ReachUs from "../ReachUs/ReachUs";

function Footer(props) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#110c11",
        height: "16%",
      }}
    >
      <ReachUs />
    </div>
  );
}

export default Footer;
