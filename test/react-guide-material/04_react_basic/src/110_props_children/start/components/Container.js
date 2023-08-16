import "./Container.css";

const Container = ({ title , children, subtitle}) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      {children}
    </div>
  );
};

export default Container;
