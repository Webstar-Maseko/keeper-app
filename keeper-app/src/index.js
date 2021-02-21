import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AuthProvider} from "./components/context/auth";


ReactDOM.render(<AuthProvider >
  
<App style={{backgroundColor: "black !important"}}/>
</AuthProvider>,
  document.getElementById('root')
);

