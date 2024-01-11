const Footer = () => {
  const goUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <button onClick={goUp} className="go-up-btn">
        Go Up!
      </button>
    </footer>
  );
};

export default Footer;
