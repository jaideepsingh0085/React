import RestaurantCart from "./RestaurantCart";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer";

const Body = () => {
  //local state variable
  const [ListOfRes, setListOfRes] = useState([]);
  const [filteredRes, setfilteredRes] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://namastedev.com/api/v1/listRestaurants"
    );
    const json = await data.json();
    console.log(json)
   
    setTimeout(() => {
      setListOfRes(
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      
      setfilteredRes(
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    }, 1000);
  };

  if (ListOfRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurant = ListOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRes(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRes = ListOfRes.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRes(filteredRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {filteredRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant?.info?.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <RestaurantCart resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;