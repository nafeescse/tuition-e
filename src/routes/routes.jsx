import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import DashbaordLayout from "../layouts/DashbaordLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../pages/dashboard/DashboardHome";
import ManageAllRecipe from "../pages/dashboard/ManageAllRecipe";
import AddRecipe from "../pages/dashboard/AddRecipe";
import EditRecipe from "../pages/dashboard/EditRecipe";
import Profile from "../pages/dashboard/Profile";
import AllRecipes from "../pages/AllRecipes";
import RecepiCard from "../components/cards/RecepiCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/tuitions",
    element: <AllRecipes />,
  },

  {
    path: "/tuitions/:id",
    element: <RecepiCard />,
    loader: ({ params }) =>
      fetch(`https://tuition-e-server.vercel.app/tuition/${params.id}`),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashbaordLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "manage-recipes",
        element: <ManageAllRecipe />,
      },
      {
        path: "add-recipe",
        element: <AddRecipe />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "edit-recipe/:id",
        element: <EditRecipe />,
      },
    ],
  },
]);
