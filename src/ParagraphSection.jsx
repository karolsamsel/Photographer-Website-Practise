export function PSection({ content, name }) {
  return (
    <section
      data-aos="zoom-in-up"
      className={`p-section section ${name === "service" ? "service" : ""}`}
    >
      <div className="p-section__content">
        <h2>{content.h2}</h2>
        <p className="p-section__paragraph">{content.p}</p>
      </div>
      {name === "about" && (
        <div className="p-section__about">
          <span className="fun-fact p-section__about__location">
            Based in Berlin, available <br /> for projects{" "}
            <span className="green-word">→ Worldwide</span>.
          </span>
          <img
            src="/custom-line.svg"
            alt="curved line"
            className="about__curved-line"
          />
        </div>
      )}
      {name === "service" && (
        <div className="p-section__service">
          <span className="fun-fact  p-section__service__tip">
            Tell me what you need. I’ll <br /> bring the{" "}
            <span className="green-word">camera</span> and the <br />
            <span className="green-word">energy</span>
          </span>
          <img
            src="/custom-arrow.svg"
            alt="custom arrow"
            className="service__custom-arrow"
          />
        </div>
      )}
    </section>
  );
}
