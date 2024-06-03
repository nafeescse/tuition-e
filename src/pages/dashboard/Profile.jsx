import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";

const Profile = () => {
    const [user] = useAuthState(auth);
    console.log(user.photoURL)
    
    return (
        <div className="flex gap-6">
            <img
          className="inline-block h-36 w-36 rounded-full ring-4 ring-white"
          src={user.photoURL}
          alt=""
           
        />
        <div>
        <h1>My Profile {user.displayName}</h1>
            <h1>My Profile {user.email}</h1>
            <h1>My Profile {user.email}</h1>
            <h1>My Profile {user.email}</h1>
            <h1>My Profile {user.email}</h1>
        </div>
            
        </div>
    );
};

export default Profile;