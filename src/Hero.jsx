export function Hero() {
  return (
    <section data-aos="zoom-in-up" className="hero section">
      <div className="hero__image">
        <div className="hero__image__background"></div>
        <img src="/jack-photo.jpg" alt="photo of jack" />
      </div>
      <div className="hero__content">
        <h1>
          Jack – Capturing Stories Through <br /> the Lens
        </h1>
        <button className="btn btn--primary">Contact Me</button>
        <p className="hero__paragraph">
          Driven by passion. Inspired by <br />
          people. Focused on the details.
        </p>
      </div>
    </section>
  );
}
