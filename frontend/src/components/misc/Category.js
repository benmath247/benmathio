import React, {useState, useEffect} from "react";

export default function Category(categories) {
    const listCategories = categories.map((category) =>
  <li>{category.name}</li>
);
return <h4>{listCategories.map((category) => ({category}))}</h4>
}