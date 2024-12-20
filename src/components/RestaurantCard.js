import { cloudinary_basic_link } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  if (!resData || !resData.info) {
    return <div>Loading...</div>; // or any fallback UI
}

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: '#f0f0f0',
        margin: '10px',
        height: '480px',
      }}
    >
      <img
        className="res-logo"
        src={cloudinary_basic_link + cloudinaryImageId}
        alt="Biryani le looo"
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(',')}</h5>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes </h4>
    </div>
  );
};

export default RestaurantCard;


