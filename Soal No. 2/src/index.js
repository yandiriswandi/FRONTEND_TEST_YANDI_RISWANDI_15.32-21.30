import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserContextProvider } from './context/userContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";


// Init Client from QueryClient() here ...
const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
     {/* <UserContextProvider>
        <QueryClientProvider client={client}> */}
          <Router>
            <App />
          </Router>
        {/* </QueryClientProvider>
      </UserContextProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
