import { useEffect, useState } from "react";
import RecepiCard from "../components/cards/RecepiCard";

export default function AllRecipes() {
  const [recipes, setRescipes] = useState();
  useEffect(() => {
    // fetch("https://tuition-e-server.onrender.com/tuitions")
    //   .then((res) => res.json())
    //   .then((data) => setRescipes(data));

    async function load() {
      //get recipies
      const recipeRes = await fetch(
        "https://tuition-e-server.onrender.com/tuitions"
      );
      const recipeData = await recipeRes.json();
      setRescipes(recipeData);
    }
    load();
  }, []);

  console.log("all data loaded from All ");
  return (
    <div>
      <h1>All Recipes</h1>
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
