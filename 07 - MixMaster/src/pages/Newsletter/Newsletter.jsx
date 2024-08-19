import { Form, redirect } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import NewsletterWrapper from "./Newsletter.js";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const response = await axios.post(newsletterUrl, data);
  console.log(response);
  console.log(data);

  toast.success(response.data.msg);
  return response;
};
//
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
            required
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
            required
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
            required
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
