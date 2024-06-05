import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";

const Profile = () => {
  const [user] = useAuthState(auth);
  console.log(user.photoURL);

  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-cyan-300 h-3/4 w-1/2 rounded-3xl">
      <img
        className="inline-block h-56 w-1/2 rounded- ring-4 ring-white display-flex shadow-lg justify-center items-center bg-red-800"
        src={user.photoURL}
        alt=""
      />
      <div>
        <h1>Name: {user.displayName}</h1>
        {/* <h1>My Profile {user.}</h1> */}
        <h1>Email: {user.email}</h1>
      </div>
    </div>
  );
};

export default Profile;
