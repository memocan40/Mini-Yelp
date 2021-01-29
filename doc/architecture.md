# Architecture

## Table of Contents

- [States](#states)
- [Components](#components)
- [Views](#views)

## States

- On app.js: state variables _restaurants_, _tags_ & _cities_ (axios)

## Components

Stored in src/components

**Restaurants**

- _RestaurantList_ (props: restaurants)(main page)
- _Restaurant_ (props: one resturant) (main page)
- _RestaurantDetailed_ (props: one restaurant) (restaurant detailed page)

**Filters**

- _FilterTags_ (props: tags) (multiselection dropdown)
- _FilterCities_ (props: cities) (multiselection dropdown)

**Secondary components**

- _GoBackButton_
- _Footer_

## Views

Stored in src/views

1. _AllRestaurants_ (props: restaurants): Route "/" and "/restaurants". Renders component _RestaurantList_ which renders _Restaurant_ with map.
2. _RestaurantsFiltered_ (props: restaurants, filters to be apllied): Route "/filtered". It will filter the restaurant list and pass down the result to
3. _ResturantDetails_ (props: restaurants): Route "restaurants/{resturantId}": it will filter the restaurants and pass down only one to component _RestaurantDetailed_
