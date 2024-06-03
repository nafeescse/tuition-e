import { useEffect } from "react";
import Banner from "../components/home/Banner";
import { useState } from "react";
import RecepiCard from "../components/cards/RecepiCard";


export default function Home() {
  const [recipes, setRescipes] = useState();
  useEffect(() => {
    // fetch("http://localhost:3000/recipes")
    //   .then((res) => res.json())
    //   .then((data) => setRescipes(data));

    async function load() {
      //get recipies
      const recipeRes = await fetch("http://localhost:5000/recipes");
      const recipeData = await recipeRes.json();
      setRescipes(recipeData);
      //get categories
    }
    load();

    // fetch("http://localhost:3000/categories")
    //   .then((res) => res.json())
    //   .then((data) => setCategories(data));
  }, []);

  console.log("all recipes got from All ");
  return (
    <div>
      <Banner />

      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Our Recipe Categories </h1>
      </div>
      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Our Newest Recipes </h1>
        <div className="grid grid-cols-4 gap-6">
          {recipes
            ?.reverse()
            ?.slice(0, 4)
            ?.map((recipe) => (
              <RecepiCard key={recipe?.id} recipe={recipe} />
            ))}
        </div>
      </div>
    </div>
  );
}
