const Footer = () => {
  var today = new Date();
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-8">
            <h5>
              Team Member Allocation App - {today.getMonth()}/{today.getDay()}/
              {today.getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
