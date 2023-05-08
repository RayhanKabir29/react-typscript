import React from "react";

type GreetProps = {
  name: string;
  numberofMesage: number;
  isLoggedin: boolean;
};
const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedin
          ? `${props.name}. You have ${props.numberofMesage} unread Message`
          : `You don't have neccessary credential`}
      </h2>
    </div>
  );
};

export default Greet;
