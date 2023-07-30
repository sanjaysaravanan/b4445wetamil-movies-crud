/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";


const ProtectedPage = ({ element }) => {

  const loginReducer = useSelector(state => state.loginReducer);


  if (loginReducer.isLoggedIn) {
    return element;
  }

  return <Navigate to={'/login'} replace />;
}

export default ProtectedPage;