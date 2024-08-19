import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import NewsletterWrapper from "./Newsletter.js";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    // Log data to inspect what is being sent
    console.log("Sending data:", data);

    const response = await axios.post(newsletterUrl, data);

    // Handle success
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    // Handle error
    console.error(
      "Error submitting form:",
      error.response ? error.response.data : error.message
    );
    toast.error("Something went wrong. Please try again.");
    return null; // Do not redirect on error
  }
};

function Newsletter() {
  return (
    <NewsletterWrapper>
      <Form method="POST" className="form">
        <h4>Our Newsletter</h4>

        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
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
            Email
          </label>
          <input
            type="email" 
            className="form-input"
            name="email"
            id="email"
            defaultValue="test@test.com"
            placeholder="Email Address"
            required
          />
        </div>

        <button type="submit" className="btn btn-lock">
          Submit
        </button>

        <h5>PS: Only test@test.com address is allowed</h5>
      </Form>
    </NewsletterWrapper>
  );
}

export default Newsletter;
