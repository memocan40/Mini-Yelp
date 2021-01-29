import React from "react";

import "./index.css";

export default function Restaurant({ object }) {
  return <div key={`restaurant${object.id}`} class="restaurant-wrapper">
            <div class="restaurant-img-wrapper">
              <img class="restaurant-img" src={`${object.img}`} alt={`${object.name}`}/>
            </div>
            <h3 class="restaurant-title">{`${object.name}`}</h3>
            <div class="restaurant-tag-wrapper">
              {object.tag.map((tag) => {
                return <div class="restaurant-tag">{tag}</div>
              })}
            </div>
        </div>
}
