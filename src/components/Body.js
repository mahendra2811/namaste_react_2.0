import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
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
  const [searchText, setSearchText] = useState('') ;
  const searchInputRef = useRef(null) ;

  
  console.log("Body Rendered")

  useEffect(() => {
    fetchData();
    console.log("hello data is fetched");
  }, []);

  useEffect(()=>{
    if(searchInputRef.current){
      searchInputRef.current.focus();
      searchInputRef.current.select();
    }
  } , [filteredRestaurant]);

  if(listofRestaurant===0 ){
    console.log("list of restaurant is 0") ;
    return <Shimmer/> ;  //ye mene khus likha haaa 
  }

  const fetchData = async () => {
    const data = await fetch(main_api);
    const json = await data.json();         //cors plugiin ectension we use here
    console.log(json.data);
    // console.log(json.data.cards[2]);
    setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? {});
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?? {});
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



  return listofRestaurant === 0 ? <Shimmer /> :
    (
      <div className="body">

        <div className="filter">


          <div className="search">
            <input 
              type="text"
              placeholder="Search restaurant you want...."
              className="search-box"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value)
              }}
              ref={searchInputRef}
            />
            <button onClick={() => {
              // console.log(searchText) ; 
                if(searchText.length===0){
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


          <button className="filter-btn"
            onClick={() => {
              // filter logic lagana ha 
              const filteredList = listofRestaurant.filter(
                (res) => (res.info.avgRating) > 4.5
              );
              // console.log("restaurant is filtered fopr rating ");
              setFilteredRestaurant(filteredList);
              console.log(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>

        </div>
        <div className="res-container">
          {
            filteredRestaurant.map((restaurant) => (
              <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}  ><RestaurantCard resData={restaurant} /></Link>
          ))}


        </div>
      </div>
    );
};

export default Body;

