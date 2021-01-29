import React from "react";

import "./index.css";

export default function Restaurant({ object }) {
  return <div key={`restaurant${object.id}`} class="restaurant-wrapper">
            <div><img src={`${object.img}`} alt={`${object.name}`}/></div>
            <div>{`${object.name}`}</div>
            <div class="tag-wrapper">
              {object.tag.map((tag) => {
                return <div class="restaurant-tag">{tag}</div>
              })}
            </div>
        </div>
}
