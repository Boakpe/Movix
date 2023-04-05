const Footer = () => {
  return (
    <>
      <div className="spacer layer1 m-0"></div>
      <div className="py-3 bg-footer m-0">
        <ul className="nav justify-content-center pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-secondary">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-secondary">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-secondary mb-0">Boakpe</p>
        <p className="text-center text-secondary">2023</p>
      </div>
    </>
  );
};

export default Footer;
