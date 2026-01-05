import { RES_URL } from "../utils/constants";
const RestaurantCart = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = resData?.info;
  return (
    <div className="res-cart">
      <img
          src={RES_URL + cloudinaryImageId}
          className="res-logo rounded-lg w-64 h-40 object-cover" 
          onError={(e)=>{
            e.target.src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rng/md/carousel/production/"
          }}
        />
      <h3>{name}</h3>
      <p>{cuisines.join(",")}</p>
      <p>{avgRating} stars</p>
      <p>Delivery Time: {deliveryTime} minutes</p>
      <p>{costForTwo}</p>
    </div>
  );
};
export default RestaurantCart;