import { cloudinary_basic_link } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  if (!resData || !resData.info) {
    return (
      <div className="animate-pulse bg-gray-200 rounded-lg p-4 h-[480px]">
        <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    );
  }

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
  } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div
      className="res-card bg-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 m-6   "

    >
      <div className="realtive h-48">
        <img
          className="res-logo realtive h-48 w-full object-cover"
          src={cloudinary_basic_link + cloudinaryImageId}
          alt="Biryani le looo"
          loading="lazy"
        />
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-2 truncate" >{name}</h3>
      <h5 className="text-sm text-gray-600 mb-3 line-calmp-2   " >{cuisines.join(',')}</h5>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${parseFloat(avgRating) >= 4.0
            ? 'bg-green-100 text-green-800'
            : parseFloat(avgRating) >= 3.0
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
            }`}>
            ★ {avgRating}
          </span>
        </div>
        <div className="text-sm text-gray-600">
          {deliveryTime} mins to deliver
        </div>
      </div>
      <div className="text-base font-medium text-gray-900">
        {costForTwo}
      </div>
    </div>
  );
};
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-black text-white px-2 py-1 rounded-e-full top-  left-5 m-1">Promoted</label>
        <RestaurantCard {...props} />
      </div>

    )
  }
};

export default RestaurantCard;


