import React from "react";
import Header from "./components/Header/Header";
import ProfileSearcher from "./components/ProfileSearcher/ProfileSearcher";
import { GlobalStyles } from "./globalStyle/GlobalStyles";

function App() {
  return (
    <> 
      <GlobalStyles/>
      <Header/>
      <ProfileSearcher/>        
    </>
  );
}

export default App;
