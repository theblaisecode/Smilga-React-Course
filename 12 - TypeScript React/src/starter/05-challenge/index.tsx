type Basic = {
  type: "basic";
  name: string;
};

type Advanced = {
  type: "advanced";
  name: string;
  email: string;
};

type cardType = Basic | Advanced;

function Component(props: cardType) {
  const { type, name, email } = props;

  return (
    <div>
      <div
        className={
          type === "basic" ? "alert alert-success" : "alert alert-danger"
        }>
        <h3>User : {name}</h3>
        {email && <h3>Email : {email}</h3>}
      </div>
    </div>
  );
}

export default Component;
