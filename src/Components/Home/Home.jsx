import logo  from '../../assets/compressed-logo.svg';

function Home() {
    return(
        <div>
            <div class="frame">
                <img src={logo} alt=""/>
              <p class="title">The Unhappy Folk</p>
              <p class="subtitle">Timeless, Placeless Projects.</p>
            </div>
        </div>
    ); 
}

export default Home;