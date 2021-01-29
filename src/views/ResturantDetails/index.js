import react from "react";
import { useParams } from 'react-router-dom';
import RestaurantDetailed from "../../components/restaurants/RestaurantDetailed";

export default function RestaurantDetails({restaurants}){
    const { restaurantId } = useParams();
    const getRestaurant = id => {
    const restaurant = restaurants.filter(restaurant => restaurant.id === id)[0];
    return restaurant;};
    return(
        <RestaurantDetailed restaurant={getRestaurant(restaurantId)}/>
    )
}