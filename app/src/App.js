import React from "react";
import { UserMenu } from "./core/userMenu/containers/UserMenu";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <>
      <div className="rootDiv d-flex align-items-center justify-content-center">
        <UserMenu />
      </div>
    </>
  );
}

export default App;
