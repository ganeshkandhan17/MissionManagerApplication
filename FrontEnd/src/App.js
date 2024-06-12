import React, { useState } from 'react';
import Login from "./Login";
import Changepassword from './Changepassword';
import Signup from "./Signup"
import Forgetpassword from "./Forgetpassword"
function App() {
  const [route, setRoute] = useState(window.location.pathname);

  const renderRoute = () => {
    if (route === '/signup') {
      return <Signup />;
    } else if (route === '/forgetpassword') {
        return <Forgetpassword />;
    }
    else if (route === '/changepassword') {
      return <Changepassword />;
  }
  else if (route === '/login') {
    return <Login />;
}
      else {
      return <Login setRoute={setRoute} />;
    }
  };

  return (
    <div>
      {renderRoute()}
    </div>
  );
}

export default App;
