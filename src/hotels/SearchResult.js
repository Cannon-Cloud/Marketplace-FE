import { useState, useEffect } from "react";
import queryString from "query-string";
import { Link } from "react-router-dom";
import Search from "../components/Forms/Search";
import { searchListings } from "../actions/hotel";
import SmallCard from "../components/cards/SmallCard";

const SearchResult = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchBed, setSearchBed] = useState("");
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const { location, date, bed } = queryString.parse(window.location.search);
    // console.table({ location, date, bed });
    searchListings({ location, date, bed }).then((res) => {
      setHotels(res.data);
    });
  }, [window.location.search]);

  return (
    <>
      <div className="col">
        <br />
        <Search />
      </div>
      <div className="container">
        <div className="row">
          {hotels.map((h) => (
            <SmallCard key={h._id} h={h} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchResult;
