import { useState } from "react";

function Component() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <section>
      <h2>React & Typescript</h2>
      <h2>Events Example</h2>
      <form onSubmit={handleSubmit} className="form" action="">
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            className="form-input mb-1"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-input mb-1"
            value={email}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-center">
          Submit
        </button>
      </form>
    </section>
  );
}
export default Component;
