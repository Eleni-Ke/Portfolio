const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid mb-0">
      <div className="container">
        <div className="d-flex justify-content-around align-items-center">
          <img
            src="https://res.cloudinary.com/dnk2intnd/image/upload/v1679661480/users/image/zzytevgcch5nz0m2z83j.jpg"
            alt="Eleni smiling"
            className="main-picture"
          />
          <div className="intro p-4">
            <h4>Full-stack developer</h4>
            <p>
              Welcome to my Portfolio! <br /> My name is Eleni Kellermann and
              I'm a full-stack developer. On this page you will find all kinds
              of informations about me and my experiences. <br /> <br />
              While you're here, why don't you take a look at my projects? I'm
              constantly trying to optimize them, so feel free to let me know
              about possible improvements!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
