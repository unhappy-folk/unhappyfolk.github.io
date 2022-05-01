import logo from "../../assets/logo.svg";

//Import another components
import Quote from "../Quote/Quote";
import ReachUs from "../ReachUs/ReachUs";

function Home() {

  return ( 
      <div>
        <div class="frame">
            <img src={logo} alt=""/>
          <p class="title">The Unhappy Folk</p>
          <p class="subtitle">Timeless, Placeless.</p>
          <ReachUs/>
          <Quote/>
        </div>
      </div>
  );
}

export default Home;
