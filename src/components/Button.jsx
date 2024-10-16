const Button = ({ className, href, children, onClick }) => {
  const classes = `button inline-flex items-center justify-center border rounded-2xl bg-color-4 py-3 font-bold text-color-1 ${
    className || ""
  }`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      {children}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
