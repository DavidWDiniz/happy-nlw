import React from 'react';

import "leaflet/dist/leaflet.css";
import GlobalStyle from "./styles/global";
import Routes from "./routes";

function App() {
  return (
    <>
        <Routes />
        <GlobalStyle />
    </>
  );
}

export default App;
