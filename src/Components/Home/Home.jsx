import logo from "../../assets/logo.svg";

//Import another components
import Quote from "../Quote/Quote";

function Home() {
  return (
    <div className="home">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="logo" />
        <div
          style={{
            margin: "auto",
            textAlign: "center",
            marginBottom: "2rem",
            lineHeight: "50%",
          }}
        >
          <p className="title">The Unhappy Folk</p>
          <p className="subtitle">Timeless, Placeless.</p>
        </div>
      </div>
      <Quote />
    </div>
  );
}

export default Home;
