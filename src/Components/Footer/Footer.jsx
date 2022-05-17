import ReachUs from "../ReachUs/ReachUs";

function Footer(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#110c11",
        padding: "1rem",
        height: "18%",
      }}
    >
      <ReachUs />
    </div>
  );
}

export default Footer;
