import React from 'react';
import ReactDOM from 'react-dom';

// import Lifecycle from './reactJsDasar/Lifecycle';
// import App from './reactJsDasar/App';
// import Variabel from './reactJsDasar/Variabel';
// import StateProps from './reactJsDasar/StateProps';
// import Communication from './reactJsDasar/Communication';
// import Map from './reactJsDasar/Map';

import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud'

ReactDOM.render(
  <React.StrictMode>
    {/* <StateProps /> */}
    {/* <Lifecycle /> */}
    <Crud />
  </React.StrictMode>,
  document.getElementById('root')
);

