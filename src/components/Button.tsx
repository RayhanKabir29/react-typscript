type ButtonProps = {
  handleClick: () => void;
};
const Buttom = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={props.handleClick}> Click</button>
    </div>
  );
};

export default Buttom;
