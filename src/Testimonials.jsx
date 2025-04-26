import { Testimonial__Item } from "./Testimonial__Item";

const item_1 = {
  file_path: "/client-1.jpg",
  name: "Sofia",
  text: "Jack made me feel so comfortable. The photos are pure magic.",
};
const item_2 = {
  file_path: "/client-2.jpg",
  name: "Alex",
  text: "Professional, chill, and talented. Highly recommend! 10/10",
};
const item_3 = {
  file_path: "/client-3.jpg",
  name: "Brey",
  text: "He captured moments I didn’t even know I’d want to remember.",
};
const item_4 = {
  file_path: "/client-4.jpg",
  name: "Maya",
  text: "Every shot felt effortless. The results? Absolutely stunning.",
};

export function Testimonials() {
  return (
    <section data-aos="zoom-in-up" className="testimonials section">
      <h2>See what my clients have to say</h2>
      <div className="testimonials__board">
        <Testimonial__Item content={item_1} />
        <Testimonial__Item content={item_2} />
        <Testimonial__Item content={item_3} />
        <Testimonial__Item content={item_4} />
      </div>
    </section>
  );
}
