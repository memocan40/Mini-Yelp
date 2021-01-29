import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function TagFilter({ tags }) {
  return (
    <div class="tag-filter">
      {tags.map((tag) => {
        return (
          <Link className="tag-option" key={tag._id} to={`/filtered/tag/${tag._id}`}>
            {tag.Name}
          </Link>
        );
      })}
    </div>
  );
}