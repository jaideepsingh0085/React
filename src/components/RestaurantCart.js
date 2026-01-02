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
      <img className="res-logo" src={RES_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <p>{cuisines.join(",")}</p>
      <p>{avgRating} stars</p>
      <p>Delivery Time: {deliveryTime} minutes</p>
      <p>{costForTwo}</p>
    </div>
  );
};
export default RestaurantCart;