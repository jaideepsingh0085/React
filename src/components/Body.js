import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./Shimmer";

const Body = () => {
    let [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(()=> {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await response.json()

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    if (listOfRestaurants.length === 0) {
        return <ShimmerUI/>;
    }
    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-text" value={searchText} onChange={(e)=> {
                        setSearchText(e.target.value)
                    }}/>
                    <button className="search-btn" onClick={()=>{
                        const filteredList = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                         setFilteredRestaurants(filteredList);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=> {
                    const filteredRes = listOfRestaurants.filter((res) => res.info.avgRating>4);
                    setListOfRestaurants(filteredRes)
                }}>Top Rated Restaurants</button>
            </div>
        <div className="res-card-container">
            {filteredRestaurants.map((restaurants) => (
    <ResCard key={restaurants.info.id} resData={restaurants}/>
))}
            
        </div>
        </div>
    )
}



export default Body;