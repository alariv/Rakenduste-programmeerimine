
import Item from '../components/Item';


function Home() {
    return (
        <div className="App">
      <div className="headingCont">
          <strong>HOME</strong> (testing-testing)
      </div>
      <Item name="esimene ese" price="11€" category="BASIC" key="1"/>
      <Item name="teine ese" price="14€" category="DELUXE" key="2"/>
      <Item name="kolmas ese" price="49€" category="PREMIUM" key="3"/>
      </div>
    );
  }
  
  export default Home;
  