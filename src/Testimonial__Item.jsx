export function Testimonial__Item({ content }) {
  return (
    <div className="testimonials-card">
      <img
        src={content.file_path}
        alt="portrait of a happy client"
        className="testimonials-card__img"
      />
      <div className="testimonials-card__rect">
        <h3 className="testimonials-card__rect__header">{content.name}</h3>
        <p className="testimonials-card__rect__text">{content.text}</p>
      </div>
    </div>
  );
}
