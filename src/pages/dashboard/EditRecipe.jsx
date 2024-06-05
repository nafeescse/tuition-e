import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
// import { useHistory } from 'react-router-dom';

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipeDetails, setRecipeDetails] = useState();

  useEffect(() => {
    async function load() {
      const recipeData = await axios.get(
        `https://tuition-e-server.vercel.app/tuitions/${id}`
      );
      if (recipeData?.status === 200) {
        setRecipeDetails(recipeData?.data);
        console.log("Data loaded of title:", recipeData?.data?.title);
      }
    }
    load();
  }, [id]);

  const handleEditRecipe = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;

    const recipeData = {
      title,
      price,
      description,
    };

    await axios
      .patch(`https://tuition-e-server.vercel.app/tuitions/${id}`, recipeData)
      .then((response) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Recipe of "${response?.data?.title}" is edited successfully!!!`,
          showConfirmButton: false,
          timer: 1500,
        });
        console.log("Recipe Details updated:", response?.data);
        {
          response?.status === 200 &&
            navigate("/dashboard/manage-tuitions") &&
            console.log("333");
        }
      })
      .catch((error) => {
        console.error("Error updating Recipe Details:", error);
      });
  };
  return (
    <div className="w-full px-16">
      <h1 className="text-4xl mb-4">Edit Recipe</h1>
      <form onSubmit={handleEditRecipe} className="w-full">
        <div className="mb-4">
          <label htmlFor="">Title </label>
          <input
            defaultValue={recipeDetails?.title}
            type="text"
            name="title"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Price </label>
          <input
            type="number"
            name="price"
            defaultValue={recipeDetails?.price}
            className="w-full py-3 px-5 border"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="">Description </label>
          <textarea
            defaultValue={recipeDetails?.description}
            name="description"
            className="w-full py-3 px-5 border"
          />
        </div>

        <div>
          <input
            type="submit"
            value={"Edit Recipe"}
            className="w-full btn py-3 px-5 border btn-neutral"
          />
        </div>
      </form>
    </div>
  );
};

export default EditRecipe;
