import logo from "../../assets/logo.svg";
import { MESSAGES } from "../../Quotes/Schema";
function Home() {

  return (
    <div>
      <div class="frame">
          <img src={logo} alt=""/>
        <p class="title">The Unhappy Folk</p>
        <p class="subtitle">Timeless, Placeless.</p>
        <p class="subtitle">
          {MESSAGES[0].text.en.split("\n").map((line) => (
            <p>{line}</p>
          ))}
        </p>
        <p class="subtitle">
          {MESSAGES[0].text.en.split("\n").map((line) => (
            <p>{line}</p>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Home;
