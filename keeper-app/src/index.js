import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AuthProvider} from "./components/context/auth";


ReactDOM.render(<AuthProvider >
  
<App/>
</AuthProvider>,
  document.getElementById('root')
);

