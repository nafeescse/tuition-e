import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddRecipe = () => {
  const navigate = useNavigate();

  const handleCreateRecipe = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    // const category = form.category.value;
    const description = form.description.value;

    const recipeData = {
      title,
      price,
      // category,
      description,
    };

    await axios
      .post("https://tuition-e-server.vercel.app/tuitions", recipeData)
      .then((response) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Recipe of "${response?.data?.title}" is added successfully!!!`,
          showConfirmButton: false,
          timer: 1000,
        });
        form.reset();

        {
          recipeData &&
            navigate("/dashboard/manage-tuitions") &&
            console.log("Recipe Details added:", response?.data);
        }
      })
      .catch((error) => {
        console.error("Error adding Recipe Details:", error);
      });
  };
  return (
    <div className="w-full px-16">
      <h1 className="text-4xl mb-4">Add Recipe</h1>
      <form onSubmit={handleCreateRecipe} className="w-full">
        <div className="mb-4">
          <label htmlFor="">Title </label>
          <input type="text" name="title" className="w-full py-3 px-5 border" />
        </div>
        <div className="mb-4">
          <label htmlFor="">Price </label>
          <input
            type="number"
            name="price"
            className="w-full py-3 px-5 border"
          />
        </div>
        {/* <div className="mb-4">
          <label htmlFor="">Cateogry </label>
          <select name="category" id="" className="w-full py-3 px-5 border">
            {categories?.map((category) => (
              <option key={category?.id} value={category?.title}>
                {category?.title}
              </option>
            ))}
          </select>
        </div> */}

        <div className="mb-4">
          <label htmlFor="">Description </label>
          <textarea name="description" className="w-full py-3 px-5 border" />
        </div>

        <div className="mb-4">
          <input
            type="submit"
            value={"Add Recipe"}
            className="w-full btn py-3 px-5 border btn-neutral"
          />
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
