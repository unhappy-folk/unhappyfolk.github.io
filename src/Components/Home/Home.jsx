import logo from "../../assets/logo.svg";

//Import another components
import Quote from "../Quote/Quote";

import { LanguageContext } from '../../LanguageContext';

function Home() {

  return ( 
      <div>
        <div class="frame">
            <img src={logo} alt=""/>
          <p class="title">The Unhappy Folk</p>
          <p class="subtitle">Timeless, Placeless.</p>
          <Quote/>
        </div>
      </div>
  );
}

export default Home;
