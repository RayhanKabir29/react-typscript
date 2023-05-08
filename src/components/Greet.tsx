import React from "react";

type GreetProps = {
  name: string;
  numberofMesage?: number;
  isLoggedin: boolean;
};
const Greet = (props: GreetProps) => {
  const { numberofMesage = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedin
          ? `${props.name}. You have ${numberofMesage} unread Message`
          : `You don't have neccessary credential`}
      </h2>
    </div>
  );
};

export default Greet;
