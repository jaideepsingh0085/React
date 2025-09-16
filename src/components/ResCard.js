import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
    const {resData}= props;
     const {
        name,
        cuisines,
        cloudinaryImageId,
        costForTwo,
        avgRating,
        sla
    } = resData?.info
    return (
        <div className="res-card">
            <img className="res-img"  src={CDN_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h3>{avgRating}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwo}</h3>
            <h3>{sla.slaString}</h3>
        </div>
    )
}

export default ResCard;