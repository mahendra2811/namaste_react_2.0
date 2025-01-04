import React, { useState } from 'react'
import { useEffect } from 'react';
import Shimmer from "./Shimmer";
// import ShimmerMenuRestaurent from './ShimmerMenuRestaurent';
import { MENU_API } from '../utils/constants';
import { useParams } from 'react-router';
// import '../CSS/RestaurantMenu.css'
import useRestrauntMenu from '../utils/useRestaurantsMenu';
import { cloudinary_basic_link } from '../utils/constants';
import { addItems } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const RestaurantMenu = () => {


    // const [resInfo, setResInfo] = useState(null);

    let { resId } = useParams();
    // mene yha pe resid ayhaki and app js ki laag alag le li thi use wajah se dikkat hui thi mere ko , ye scan nahi ker rha thaa

    // const params = useParams();
    // console.log(params);

    const resInfo = useRestrauntMenu(resId);  //we use here custom hooks to show our work  //this is custom hook 

    if (resInfo === null) return <Shimmer />;
    console.log(resInfo);

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId );
    //     // 5938
    //     // console.log(data);
    //     const json = await data.json();
    //     console.log(json);
    //     setResInfo(json.data);
    // };



    const {
        name,
        city,
        locality,
        cuisines,
        costForTwoMessage,
        avgRating,
        veg,
        totalRatingsString
    } = resInfo?.data?.cards[2]?.card?.card?.info;



    const { itemCards } = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card;
    console.log(resInfo);

    const handleItemClick = () => {
        // dispatch an item 
        dispatch(addItem("cart"));
    }



    return (
        <div>
            {resInfo === null ? (<Shimmer />) : (


                <div className="restaurant-menu w-full p-4 bg-gray-200 ">
                    <div className="restaurant-info bg-gray-400 mx-[20vw] border-b-5  border-red-500 flex flex-col items-center justify-center py-4 text-xl rounded-t-3xl " >
                        <h1 className="restaurant-name text-5xl font-bold mb-2 ">{name}</h1>
                        <p className="restaurant-location">{locality}, {city}</p>
                        <p className="restaurant-details gap-5 flex flex-row ">
                            <span className="rating ">Avg. Rating: <b className='font-serif' >{avgRating}</b></span>
                            <span className="total-ratings">|</span>
                            <span className="total-ratings">{totalRatingsString}</span>
                            <span className="total-ratings">|</span>
                            <span className="cuisines">{cuisines.join(", ")}</span>
                        </p>
                    </div>
                    {/* data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[1].card.info */}
                    <div className="menu-container flex flex-col items-center justify-center mt-0 pt-5  mx-[20vw]  py-4 rounded-b-3xl">
                        <div className="menu-header w-full flex flex-col items-center justify-center pb-1 ">
                            <h2 className="menu-title text-7xl  ">Menu</h2>
                        </div>
                        <div className="menu-divider w-full border-b-2 ">
                            <ul className="menu-list my-2  ">
                                {itemCards.map((item) => (
                                    <div className="w-full h-[30vh] my-2 " key={item?.card?.info?.id} >
                                        <li className="menu-item" >
                                            <div className="item-details flex flex-row items-center justify-center h-full w-full overflow-hidden bg-gray-400 rounded-3xl shadow-lg gap-4 ">
                                                <div className="w-1/4  flex relative rounded-l-3xl ">
                                                    <img
                                                        src={cloudinary_basic_link + item?.card?.info?.imageId}
                                                        alt={item?.card?.info?.name.trim()}
                                                        className="item-image w-full object-cover rounded-l-3xl"
                                                    />
                                                </div>
                                                <div className="w-3/4 h-full pr-5 mb-0 pb-0  bg-gray-400 rounded-r-3xl flex flex-col items-start justify-center pl-4">
                                                    <div className="item-name text-2xl  font-semibold text-gray-500  ">{item?.card?.info?.name.trim()}</div>
                                                    <div className="item-category text-lg ">{item?.card?.info?.category}</div>
                                                    <div className="item-description">{item?.card?.info?.description}</div>
                                                    <div className="flex felx-col justify-between w-full  ">
                                                        <div className="item-price text-rig text-3xl  font-bold mt-2  bottom-0 left-0  " > ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</div>
                                                        <button
                                                            className="add-to-cart-button right-0 bottom-0 mt-5 rounded-br-2xl bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                                                            onClick={handleItemClick}
                                                        >Add to cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default RestaurantMenu;  