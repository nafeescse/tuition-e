import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
export default function RecipeRow({ recipe }) {
  const handleClickDelete = async (_id) => {


      await axios.delete(`https://tuition-e-server.vercel.app/recipes/${_id}`)
      .then((response) => {
       console.log("Record deleted:", response?.data);
       Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Recipe of "${_id}" is deleted!!!`,
        showConfirmButton: false,
        timer: 1500
      });
      window.location.reload();
     })
     .catch((error) => {
       console.error("Error >>>>:", error);
     });
    };
  return (
    <tr>
      <th>{recipe?._id}</th>
      <td>{recipe?.title}</td>
      <td>{recipe?.price}</td>
      <td>{recipe?.category}</td>
      <td className="flex gap-4">
        <Link
          to={`/dashboard/recipes/${recipe?._id}`}
          className="btn btn-xs bg-blue-500 text-white"
        >
          Details
        </Link>
        <Link
          to={`/dashboard/edit-recipe/${recipe?._id}`}
          className="btn btn-xs btn-neutral"
        >
          Edit
        </Link>
        <button onClick={() => handleClickDelete(recipe?._id)} className="btn btn-xs btn-error">Delete</button>
      </td>
    </tr>
  );
}
