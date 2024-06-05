import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { Navigate, useLocation } from "react-router-dom";

function DashboardHome() {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return console.log("user", user.displayName);
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return (
    <div>
      <h4 className="text-red-500 bg-red-600 text-4xl">User Details </h4>
    </div>
  );
}
export default DashboardHome;
