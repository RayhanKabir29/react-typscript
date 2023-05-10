import { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoggedin = () => {
    setIsLoggedIn(true);
  };
  const handleLoggedOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLoggedin}> Log In</button>
      <button onClick={handleLoggedOut}>Log Out</button>
      <div>
        User is {isLoggedIn ? `Welcome Kabir` : `You are not authorized`}
      </div>
    </div>
  );
};

export default LoggedIn;
