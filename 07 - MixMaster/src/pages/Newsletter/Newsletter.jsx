import NewsletterWrapper from "./Newsletter.js";

function Newsletter() {
  return (
    <NewsletterWrapper>
      <form action="" className="form">
        <h4>Our Newslette</h4>

        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            name="name"
            id="name"
            defaultValue="Blaise"
            placeholder="Name"
          />
        </div>

        <div className="form-row">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-input"
            name="lastName"
            id="lastName"
            defaultValue="Nwachukwu"
            placeholder="Last Name"
          />
        </div>

        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="text"
            className="form-input"
            name="email"
            id="email"
            defaultValue="theblaiscode@gmail.com"
            placeholder="Email Address"
          />
        </div>
      </form>
    </NewsletterWrapper>
  );
}

export default Newsletter;
