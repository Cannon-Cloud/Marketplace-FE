import { useState, useEffect } from "react";

import { allHotels } from "../actions/hotel";

import SmallCard from "../components/cards/SmallCard";

const Home = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    loadAllHotels();
  }, []);

  const loadAllHotels = async () => {
    let res = await allHotels();
    setHotels(res.data);
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>All Hotels</h1>
      </div>
      <br />
      <div className="container-fluid">
        {/* <pre>{JSON.stringify(hotels, null, 4)}</pre> */}
        {hotels.map((h, i) => (
          <SmallCard key={h._id} h={h} />
        ))}
      </div>
    </>
  );
};

export default Home;
