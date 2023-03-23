import { CardCountry } from "../styles";
function Country({ name, capital, region, image, alt, tz, continents, population }) {
  return (
    <CardCountry className="col-lg-3 col-10">
      <img src={image} alt={alt} />
      <h2>{name}</h2>
      <p><span>Region:</span> {region}</p>
      <p><span>Continents:</span> {continents}</p>
      <p><span>Capital:</span> {capital}</p>
      <p><span>Population:</span> {population}</p>
      <p><span>Timezones:</span> {tz.reduce((x,y) => `${x}, ${y}`)}</p>
    </CardCountry>
  );
}

export default Country;
