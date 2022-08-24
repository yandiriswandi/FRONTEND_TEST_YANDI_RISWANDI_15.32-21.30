import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import components here
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom'
import { UserContext } from './context/userContext';
import { useContext, useEffect } from 'react';
import axios from 'axios';

// Get API config & setAuthToken here ...
import { API, setAuthToken } from './config/api';
// Init token on axios every time the app is refreshed here ...
if (localStorage.token) {
  setAuthToken(localStorage.token)
}
function App() {
  // let api = API();
  // let navigate = useNavigate();
  // const [state, dispatch] = useContext(UserContext);

  // // Redirect Auth here ...
  // useEffect(() => {
  //   // Redirect Auth
  //   if (state.isLogin == true) {
  //     navigate('/home');
  //   } else {
      
  //       navigate('/');
    
  //   }
  // }, [state]);
  
  // const checkUser = async () => {
  //   try {
  //     const config = {
  //       method: "GET",
  //       headers: {
  //         Authorization: "Basic " + localStorage.token,
  //       },
  //     };
  //     const response = axios.get("http://reqruitement-test.teknologikartu.com/v1/user");

  //     // If the token incorrect
  //     if (response.status === "failed") {
  //       return dispatch({
  //         type: "AUTH_ERROR",
  //       });
  //     }

  //     // // Get user data
  //     let payload = response.data.user;
  //     // // Get token from local storage
  //     payload.token = localStorage.token;

  //     // // Send data to useContext
  //     dispatch({
  //       type: "USER_SUCCESS",
  //       payload,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   checkUser();
  // }, []);

  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>

  );
}

export default App;
