export default function Title(props) {
  const { title, subtitle } = props;
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subtitle}</span>
      </h2>
    </div>
  );
}
