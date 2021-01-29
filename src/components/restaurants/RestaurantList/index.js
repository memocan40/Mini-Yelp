import React from "react";

import Restaurant from "../Restaurant";

export default function RestaurantList({object}){
    return(
        <div class="restaurant-list">
            {
                object.map((restaurant) => {
                    return <Restaurant  object={restaurant}/>
                })
            }
        </div>
    )
}