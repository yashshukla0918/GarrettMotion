import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import axios from "axios";
import ProductRow from "./Components/ProductRow";
function App() {

  const [data, setData] = useState([])

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
    <><NavBar />
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
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
