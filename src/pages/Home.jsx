import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Home = () => {

  const { isLoggedIn = false, userDetails = {} } = useSelector((state) => state.loginReducer || {});

  if (isLoggedIn) {
    return <div>
      User: {userDetails.name}<br />
      Role: {userDetails.role}<br />
      Email: {userDetails.email}
    </div>
  }

  return <div>Home, Please <Link to="/login" >Login</Link>  to Continue</div>
}


export default Home;