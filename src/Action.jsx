export function Action() {
  return (
    <section data-aos="zoom-in-up" className="action section">
      <h2>
        Ready When <br />
        You Are.
      </h2>
      <form className="action__board">
        <div className="action__board__container">
          <label htmlFor="name-input">Name:</label>
          <input type="text" id="name-input" />
          <label htmlFor="email-input">Email:</label>
          <input type="text" id="email-input" />
        </div>
        <div className="action__board__container">
          <label htmlFor="message">Message:</label>
          <textarea id="message"></textarea>
        </div>
        <button type="submit" className="btn btn--secondary">
          Send
        </button>
      </form>
    </section>
  );
}
