import React, { useState } from 'react'
import { useEffect } from 'react';
import Shimmer from "./Shimmer";
import { MENU_API } from '../utils/constants';
import { useParams } from 'react-router';
import '../CSS/RestaurantMenu.css'
import useRestrauntMenu from '../utils/useRestaurantsMenu';
import {cloudinary_basic_link} from '../utils/constants';



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



    const { itemCards } = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards[0]?.card?.info);



    return (
        <div>
            <div className="restaurant-menu">
                <div className="restaurant-info">
                    <h1 className="restaurant-name">{name}</h1>
                    <p className="restaurant-location">{locality}, {city}</p>
                    <p className="restaurant-details">
                        <span className="rating">Avg. Rating: <b>{avgRating}</b></span>
                        <span className="total-ratings">{totalRatingsString}</span>
                        <span className="cuisines">{cuisines.join(", ")}</span>
                    </p>
                </div>
                {/* data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[1].card.info */}
                <h2 className="menu-title">Menu</h2>
                <ul className="menu-list">
                    {itemCards.map((item) => (
                        <li key={item?.card?.info?.id} className="menu-item">
                            <div className="item-details">
                                <img
                                    src={ cloudinary_basic_link +  item?.card?.info?.imageId }
                                    alt={item?.card?.info?.name.trim()}
                                    className="item-image"
                                    style={{ width: '50px', height: '50px', marginRight: '0px' }}
                                />

                                <div className="item-name">{item?.card?.info?.name.trim()}</div>
                                <div className="item-category">{item?.card?.info?.category}</div>
                                <div className="item-description">{item?.card?.info?.description}</div>
                                <div className="item-price">₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;