import Card from './Card';
import Poster1 from './Images/poster.jpg'
import Banner from './Images/banner.jpeg';
import Poster2 from './Images/poster2.png';
import Banner2 from './Images/banner2.1.png';

function App() {
  return (
    <div className="App">
      <Card poster1={Poster1} title="Bright" year="2017, David Ayer" duration="117min" type="Action, Crime, Fantasy" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer" banner={Banner} />
      <Card poster1={Poster2} title="Tomb Raider" year="2018, Roar Uthaug" duration="125min" type="Action, Fantasy" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer"  banner={Banner2} />
    </div>
  );
}

export default App;
