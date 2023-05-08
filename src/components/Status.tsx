type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading.....";
  } else if (props.status === "success") {
    message = "Congrats! you have successfully Load data";
  } else if (props.status === "error") {
    message = "Error in data fetching";
  }
  return (
    <div>
      <h2>Status -{message}</h2>
    </div>
  );
};

export default Status;
