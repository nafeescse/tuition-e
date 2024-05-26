import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { Navigate, useLocation } from "react-router-dom";

export default function DashboardHome() {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return console.log(
    "user", user
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <div>
    <h1 className="text-red-500">User Details {user.email}</h1>
    </div>
}
