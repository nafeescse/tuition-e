import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";

function Navbar() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  console.log(user?.name);

  const handleLogout = async () => {
    await signOut();
  };
  return (
    <div className="navbar bg-base-100 sticky top-0 px-10 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/tuitions"}>All Tuitions</Link>
            </li>
            <li>
              <Link to={"/tuitions"}>All Tutors</Link>
            </li>
            <li>
              <Link to={"/tuitions"}>All Courses</Link>
            </li>
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <a className=" text-4xl text-bold text-cyan-400">Private Scholar</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-6 px-1">
          <li>
            <Link to={"/tuitions"}>All Tuitions</Link>
          </li>
          <li>
            <Link to={"/tuitions"}>All Tutors</Link>
          </li>
          <li>
            <Link to={"/tuitions"}>All Courses</Link>
          </li>
          <li>
            <Link to={"/about"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          {/* 
          {user?.email ? (
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
          ) : (
            <h1 className="text-red-700 text-bold">Plz log In</h1>
          )} */}
        </ul>
      </div>

      {!user?.displayName ? (
        <div className="navbar-end flex gap-4">
          <Link to={"/login"} className="btn bg-red-500 text-white">
            Login
          </Link>
          <Link to={"/register"} className="btn btn-neutral text-white">
            Registration
          </Link>
        </div>
      ) : (
        <div className="navbar-end flex gap-3">
          <div>
            <Link to={"/dashboard"} className="btn bg-indigo-400 text-white">
              Dashboard
            </Link>
          </div>
          <div>
            <button
              className="btn bg-red-500 text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>

          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-12">
              <span>NZ</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
