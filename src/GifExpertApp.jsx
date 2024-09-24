import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    // "Samurai X",
    // "Dragon Ball",
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    // console.log(newCategory);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
