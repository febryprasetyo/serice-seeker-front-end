const Button = ({ styles, name }) => (
  <button
    type='button'
    className={`${styles}`}>
    {name}
  </button>
);

export default Button;
