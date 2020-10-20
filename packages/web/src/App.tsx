import React from 'react';

import "leaflet/dist/leaflet.css";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import AppProvider from "./services/hook";

function App() {
  return (
    <>
        <AppProvider>
            <Routes />
            <GlobalStyle />
        </AppProvider>
    </>
  );
}

export default App;
