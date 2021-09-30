import ItemList from '../components/ItemList';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:8080/items').then(res => {
      return res.json();
    }).then(data =>{
      console.log(data);
      setIsLoading(false);
      setLoadedItems(data);
    });
  },[])


  return (
    <div>
      <div className="itemsCont">
        {isLoading ? <h2>Laen andmeid...</h2>
        :<ItemList items={loadedItems} />
        }
      </div>
    </div>
  )
}

export default Home;