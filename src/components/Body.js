import { useEffect, useState } from "react";
import RestaurantCard  , {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { useParams } from "react-router-dom";
import { main_api } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import DinoGame from "../utils/DinoGame";
import { parse } from "browserslist";
import { useRef } from "react";


const Body = () => {
  const [listofRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');
  const searchInputRef = useRef(null);

  const [loading, setLoading] = useState(true);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log("Body Rendered")

  useEffect(() => {
    fetchData();
    console.log("hello data is fetched");
  }, []);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
      searchInputRef.current.select();
    }
  }, [filteredRestaurant]);

  if (listofRestaurant === 0) {
    console.log("list of restaurant is 0");
    return <Shimmer />;  //ye mene khus likha haaa 
  }

  const fetchData = async () => {
    const data = await fetch(main_api);
    const json = await data.json();         //cors plugiin extension we use here
    console.log(json.data);
    // console.log(json.data.cards[2]);
    setlistOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? {});
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? {});
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) return (
    <div>
      <h1>
        Looks like you are offline!!  , please check your internet connection ;
      </h1>
      return <DinoGame />
    </div>

  );
  useEffect(() => {
    fetchData()
      .then(response => {
        // Handle response
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>
      <div className="animate-pulse bg-gray-400 rounded-lg p-4 h-[480px]">
        <div className="h-10 bg-gray-400 rounded-lg mb-4"></div>
        <div className="h-24 bg-gray-400 rounded w-3/4 mb-4"></div>
        <div className="h-10 bg-gray-400 rounded w-1/2"></div>
      </div>
    </div> // Show loading indicator
  }





  return listofRestaurant === 0 ? <Shimmer /> :
    (
      <div className="body  ">

        <div className="filter flex flex-row justify-between items-center gap-4 mb-8 ">


          <div className="search w-full flex gap-2 m-4 md:w-96  ">
            <input
              type="text"
              placeholder="Search restaurant you want...."
              className="search-box w-full px-4 py-2 rounded-lg border-2 border-gray-300 "
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value)
              }}
              ref={searchInputRef}
            />
            <button
              className="search-btn px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors "
              onClick={() => {
                // console.log(searchText) ; 
                if (searchText.length === 0) {
                  return setFilteredRestaurant(listofRestaurant);
                }
                const filteredRestaurant = listofRestaurant.filter(
                  (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredRestaurant(filteredRestaurant);
                console.log(filteredRestaurant);
                // setSearchText('');
              }}

            >
              Search
            </button>
          </div>


          <button className="filter-btn px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            onClick={() => {
              // filter logic lagana ha 
              const filteredList = listofRestaurant.filter(
                (res) => (res.info.avgRating) > 4
              );
              // console.log("restaurant is filtered fopr rating ");
              setFilteredRestaurant(filteredList);
              console.log(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>

        </div>





        <div className="res-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {
            (!filteredRestaurant || filteredRestaurant.length === 0) ? (
             <Shimmer/>
            ) :
              (
                filteredRestaurant.map((restaurant) => (
                  <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}  >
                    {
                      restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant} />
                    }
                    
                  </Link>
                ))
              )
          }


        </div>
      </div>
    );
};

export default Body;

