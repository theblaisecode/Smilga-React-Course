import { Form } from "react-router-dom";
import NewsletterWrapper from "./Newsletter.js";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  return null;
};

function Newsletter() {
  return (
    <NewsletterWrapper>
      <Form method="POST" className="form">
        <h4>Our Newsletter</h4>

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

        <button type="submit" className="btn btn-lock">
          Submit
        </button>
      </Form>
    </NewsletterWrapper>
  );
}

export default Newsletter;
