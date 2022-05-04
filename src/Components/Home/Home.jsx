import logo from "../../assets/logo.svg";

//Import another components
import Quote from "../Quote/Quote";
import ReachUs from "../ReachUs/ReachUs";

function Home() {

  return ( 
      <div style={{minHeight: "calc(100vh - 12%)", backgroundColor: '#141414'}}>
        <div class="frame">
            <img src={logo} alt=""/>
          <div style={{margin: 'auto', textAlign: 'center', marginBottom: '2rem', lineHeight: "50%"}}>
            <p class="title">The Unhappy Folk</p>
            <p class="subtitle">Timeless, Placeless.</p>
          </div>
          <Quote/>
        </div>
      </div>
  );
}

export default Home;
