import "./App.css";
import { InputContainer } from "./styles";
import { useEffect, useState } from "react";
import Country from "./component/Country";
import axios from "axios";
import Loading from "./component/Loading";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((resp) => resp.json())
      .then((data) => {
        setData(data.sort((x, y) => ((x.name.official > y.name.official) ? 1 : -1)));
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        alert(err);
      });
  }, []);

  function createCards(par) {
    return (
      <Country
        name={par.name.official}
        image={par.flags.png}
        alt={par.flags.alt}
        region={par.region}
        capital={par.capital}
        continents={par.continents}
        population={par.population}
        tz={par.timezones}
      />
    );
  }

  function filtersByInput(val) {
    return val.name.official.toLowerCase().includes(input.toLowerCase());
  }

  return (
    <>
      <InputContainer>
        <h1>The most basic list of countries ever</h1>
        <input
          type="text"
          placeholder="Type the name of a country..."
          onChange={(event) => {
            setInput(event.target.value.trim());
          }}
        />
      </InputContainer>
      {loading ? (
        <Loading />
      ) : (
        <section className="container">
          <div className="row justify-content-around">
            {data.filter(filtersByInput).map(createCards)}
          </div>
        </section>
      )}
    </>
  );
}
/*
<Country
        name={data.name.official}
        image={data.flags.png}
        alt={data.flags.alt}
        region={data.region}
        capital={data.capital}
      />
 */

export default App;
