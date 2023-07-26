import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import axios from "axios";
import ProductRow from "./Components/ProductRow";
import PopUp from "./Components/PopUp";
import { AppContext } from './Model/AppContext';
import KartDrawer from "./Components/KartDrawer";


function App() {
  const [data, setData] = useState([])
  const [item, setItem] = useState({
    item :{},
    kart :[],
    open : false
  });
  useEffect(() => {
    async function fetchData() {
      let response = await axios.get('https://fakestoreapi.com/products?limit=15');
      let data = await response.data
      if (data) {
        setData(data);
      }
    }
    fetchData()
  }, [])
 
  return (
    <AppContext.Provider value={{ item, setItem }}>
      <NavBar />
      <PopUp />
      <KartDrawer/>
      <div className="container-fluid">
        <div className="row text-center">
          <div className="row ">
            <center>
              {
                
                (() => {
                  let x = [];
                  for (let i = 0; i < data.length; i += 4) {
                    x.push(<ProductRow key={i} data={[...data].slice(i, i + 4)} />)
                  }
                  return x
                })()
              }
            </center>
            <div></div>
          </div>

        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
