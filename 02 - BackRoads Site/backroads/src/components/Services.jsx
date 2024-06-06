import Title from "./Title";
import { services } from "../data";

export default function Services() {
  return (
    <section className="section services" id="services">
      <Title title="Our" subtitle="services" />

      <div className="section-center services-center">
        {services.map((item) => {
          const { id, icon, heading, description } = item;

          return (
            <article key={id} className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>

              <div className="service-info">
                <h4 className="service-title">{heading}</h4>
                <p className="service-text">{description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
