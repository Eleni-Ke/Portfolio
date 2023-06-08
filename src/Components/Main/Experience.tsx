import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Experience = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsActive(scrollPosition > 1500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container fluid className="experience-container" id="experience">
      <h3>Work experience</h3>

      <div className="d-flex flex-column align-items-center">
        <div className={`individual-experience ${isActive ? "active" : ""}`}>
          <h4>Educator/Vice principal | Kita Wasserflöhe Karlsruhe DE</h4>
          <p>
            <span>2022</span> <br /> <br />
            As an educator I was responsible for a group of 1-2 year old
            children and as the vice principal I was responsible for the
            teachers schedule, their needs and worries. I was also responsible
            for various organisation tasks and stepped in a an acting director
            in the absence of the school's director.
          </p>
        </div>
        <div className={`individual-experience ${isActive ? "active" : ""}`}>
          <h4>Self-employed caregiver and language tutor</h4>
          <p>
            <span>2021</span> <br /> <br />I helped different families taking
            care of their childern while there were still a lot of restrictions
            due to covid. I helped them with their school work and tutored them
            in french.
          </p>
        </div>
        <div className={`individual-experience ${isActive ? "active" : ""}`}>
          <h4>Live-in care professional | New York City/ Quechee VT USA</h4>
          <p>
            <span>2019 - 2021</span> <br /> <br />I was working as a live-in
            care professional for twins first in New York City and then in
            Vermont, when I moved with the family when Covid started.
          </p>
        </div>
        <div className={`individual-experience ${isActive ? "active" : ""}`}>
          <h4>Educator in multilingual Kindergarten | Cologne DE</h4>
          <p>
            <span>2018 - 2019</span> <br /> <br />I was working as an educator
            in a German/Spanish speaking class of 2-6 year old children.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Experience;
