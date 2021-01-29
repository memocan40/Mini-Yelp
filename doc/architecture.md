# Architecture

## Table of Contents

- [States](#states)
- [Components](#components)
- [Views](#views)

## States

- On app.js: state variables _restaurants_, _tags_ & _cities_ (axios)

## Components

Stored in src/components

**Posts**

- _RestaurantList_ (main page)
- _Restaurant_ (main page)
- _RestaurantDetailed_ (post detailed page)

**Filters**

- _FilterTags_ (multiselection dropdown)
- _FilterCities_ (multiselection dropdown)

**Secondary components**

- _GoBackButton_
- _Footer_

## Views

Stored in src/views

1. _AllRestaurants_: Route "/" and "/restaurants"
2. _RestaurantsFiltered_: Route "/filtered"
3. _ResturantDetails_: Route "restaurants/{resturantId}": only resturant with id = _resturantId_
