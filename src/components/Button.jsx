const Button = ({ className, href, children, onClick, px }) => {
  const classes = `button inline-flex items-center justify-center h-11   ${
    className || ""
  } border rounded-2xl bg-color-4 ${
    px || "px-7"
  } py-3 text-2xl font-bold text-color-1`;

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
