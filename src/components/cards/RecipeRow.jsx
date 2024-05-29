import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
export default function RecipeRow({ recipe }) {
  const handleClickDelete = async (id) => {
    
      await axios.delete(`http://localhost:3000/recipes/${id}`)
      .then((response) => {
       console.log("Record deleted:", response?.data);
       Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Recipe of ${response?.data?.title} is deleted!!!`
      });
     })
     .catch((error) => {
       console.error("Error >>>>:", error);
     });
    };
  return (
    <tr>
      <th>{recipe?.id}</th>
      <td>{recipe?.title}</td>
      <td>{recipe?.price}</td>
      <td>{recipe?.category}</td>
      <td className="flex gap-4">
        <Link
          to={`/dashboard/recipes/${recipe?.id}`}
          className="btn btn-xs bg-blue-500 text-white"
        >
          Details
        </Link>
        <Link
          to={`/dashboard/edit-recipe/${recipe?.id}`}
          className="btn btn-xs btn-neutral"
        >
          Edit
        </Link>
        <button onClick={() => handleClickDelete(recipe?.id)} className="btn btn-xs btn-error">Delete</button>
      </td>
    </tr>
  );
}
