import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
const User = (props: AuthUser) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {};
  const handleLogOut = () => {
    setUser({ name: "Kabir", email: "kabir@gmail.com" });
  };
  return (
    <div>
      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleLogOut}>Log Out</button>
      <div>User name is {user?.name}</div>
      <div>User Email is {user?.email}</div>
    </div>
  );
};

export default User;
