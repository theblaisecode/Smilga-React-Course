import avatar from "../../../assets/default-avatar.svg";

export function Person({ id, name, nickName = "None", images }) {
  // const img = images?.[0]?.small?.url || avatar
  const img = images?.[0]?.small?.url ?? avatar;
  console.log(img);

  return (
    <div key={id}>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h4>{name}</h4>
      {<p>Nickname: {nickName}</p>}
    </div>
  );
}
