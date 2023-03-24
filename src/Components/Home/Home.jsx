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
        <img
          src={logo}
          alt="logo"
          style={{
            width: "24%",
            height: "32%",
            marginBottom: 12,
          }}
        />

        <div
          style={{
            margin: "auto",
            textAlign: "center",
            marginBottom: "2rem",
            lineHeight: "50%",
          }}
        >
          <p className="title">The Unhappy Folk</p>
          <br />

          {/* <p className="subtitle">Timeless, Placeless.</p> */}
          <p className="subtitle">
            Our Latest Entry: &nbsp;
            <a target="_blank" href="https://blog.unhappyfolk.org">
              Tongues of Flame
            </a>
          </p>
        </div>
      </div>
      {/* <Quote /> */}
    </div>
  );
}

export default Home;
