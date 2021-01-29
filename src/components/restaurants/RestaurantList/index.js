import React from "react";
import "./index.css";

import Restaurant from "../Restaurant";

export default function RestaurantList({restaurants}){
    return(
        <div class="restaurant-list">
            {
                restaurants.map((restaurant) => {
                    return <Restaurant  object={restaurant}/>
                })
            }
        </div>
    )
}