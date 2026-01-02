import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null)

  const {id} = useParams()
  console.log(id)
  
 

  useEffect (() => {
    fetchMenu()
  }, []);


  const fetchMenu = async () => {
    const data = await fetch(MENU_API + id)
    const json = await data.json()
    setResInfo(json.data)
    console.log(json)
    
  }

  if (resInfo===null) return <Shimmer/>

  // const {name, cuisines, costForTwo, avgRating} = resInfo?.cards[2]?.card?.card?.info

  // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(itemCards)

  return (
    <div>
<h1>Menu</h1>
   
      {/* <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwo}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item)=> (
          <li key={item.card.info.id}>
            {item.card.info.name} - {" Rs."}
          {item.card.info.defaultPrice/100 || item.card.info.price/100}</li>
        ))}
      </ul> */}

    </div>
    
  );
}
export default RestaurantMenu