import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import components here
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom'
// import { UserContext } from './context/userContext';
import { useContext, useEffect } from 'react';

// Get API config & setAuthToken here ...
import { API, setAuthToken } from './config/api';
// Init token on axios every time the app is refreshed here ...
if (localStorage.token) {
  setAuthToken(localStorage.token)
}
function App() {

  // let navigate = useNavigate();

  // // Init user context here ...
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
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>

  );
}

export default App;
