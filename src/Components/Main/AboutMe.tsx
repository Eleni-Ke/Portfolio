import { Carousel, Container } from "react-bootstrap";

const AboutMe = () => {
  return (
    <Container fluid className="aboutMe-container" id="aboutMe">
      <h3>About me</h3>
      <div className="d-flex flex-column align-items-center">
        <Carousel interval={null}>
          <Carousel.Item>
            <div className="d-flex ">
              <img
                className="d-block w-100"
                src="/images/wissembourg.jpeg"
                alt="First slide"
              />
              <img
                className="d-block w-100"
                src="/images/freiburg.jpeg"
                alt="First slide"
              />
            </div>

            <h3>Early life</h3>
            <p>
              I was born in Freiburg Germany and raised in Alsace France. <br />
              I went to school in France and after graduating from high school
              with a German and a French diploma, I decided to move to Germany.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/Erzieherin.png"
              alt="Second slide"
            />

            <h3>After high school</h3>
            <p>
              I decided to become an educator and work in that field for a
              couple of years. I learned a lot about people, communication,
              optimizing work structures and learning methods during that time.
              Those skills have more in commun with programming as one might
              think.{" "}
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/coding.jpeg"
              alt="Third slide"
            />

            <h3>Career change</h3>
            <p>
              Since I was a child, I was always interested in solving puzzles,
              understanding how things work and finding ways of making tasks
              easier. I started with self paced front-end courses on Codecadamy
              to get a feeling for the field and quickly got really pationate
              about it. Which is why I decided to join the Epicode bootcamp to
              speed things up and be part of the cummunity.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 mb-0"
              src="/images/personality.jpeg"
              alt="Third slide"
            />

            <h3 className="">Personality</h3>
            <p>
              I am very open minded and like to hear other peoples opinion.
              Working in a team is one of my bigest motivations. I like to know
              that people can rely on me, just like I can rely on them.
              <br />
              Being able to receive and give structured and productive feedback
              is one of the assets I value a lot.
              <br />I like structured environments, which is why I am always
              looking for new ways of structuring my tasks. I like using tools
              like Trello, to have a clear idea of the tasks that have to be
              done and what my team is currently working on.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/ideas.jpeg"
              alt="Third slide"
            />

            <h3>Hobbies</h3>
            <p>
              I really enjoy travelling and meeting new people, share
              experiences and learn from them. I am in general always looking to
              improve my skills and learning.
              <br />
              I also like to do creative work like writing, building things out
              of different material, painting and sewing. <br />
              To relax I like to read or doing sports like climbing or diving.
            </p>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
};

export default AboutMe;
