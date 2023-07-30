import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const username = 'sanjay@gmail.com';
const password = 'password';

const Login = () => {

  const dispatch = useDispatch();

  const loginReducer = useSelector(state => state.loginReducer);

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, for example, by sending the data to a server or performing other actions.
    console.log('Form data:', formData);
    if (formData.username === username && formData.password === password) {
      alert('User Logged in successfully');
      dispatch({ type: 'user_login', data: { name: 'sanjay', role: 'developer', email: 'sanjay@gmail.com' } })
    } else {
      alert('invalid username or password');
    }
  };

  if (loginReducer.isLoggedIn) {
    return <Navigate to={'/'} replace />;
  }



  return <div>
    <form onSubmit={handleSubmit} style={{ padding: '16px' }}>
      <div style={{ padding: 4 }}>
        <label htmlFor="title">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="category">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          value={formData.passsword}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
};

export default Login;