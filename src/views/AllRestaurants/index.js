import React from 'react';
import RestaurantList from '../../components/restaurants/RestaurantList';

export default function AllRestaurants({ restaurants }) {
  return <RestaurantList restaurants={restaurants} />;
}
