import Title from "./Title";
import { tours } from "../data";

export default function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subtitle="Tours" />

      <div className="section-center featured-center">
        {tours.map((item) => {
          const {
            id,
            img,
            date,
            title,
            description,
            location,
            duration,
            price,
          } = item;

          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt={title} />
                <p className="tour-date">{date}</p>
              </div>

              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>

                <p>{description}</p>

                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {location}
                  </p>

                  <p>{duration}</p>

                  <p>{`from $${price}`}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
