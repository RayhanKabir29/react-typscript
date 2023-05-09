type StyleProps = {
  styles: React.CSSProperties;
};

const Container = (props: StyleProps) => {
  return (
    <div style={props.styles}>
      <h2>Style Goes Here</h2>
    </div>
  );
};

export default Container;
