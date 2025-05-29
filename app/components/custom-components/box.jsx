const Box = ({ as: Component = "div", children, ...props }) => {
  return <Component {...props}>{children}</Component>;
};

export default Box;
