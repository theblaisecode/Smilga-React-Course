import "./Footer.css";

export default function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footerContent">
          <p className="footNote">TheBlaiseCode &copy; {thisYear} </p>
        </div>
      </div>
    </footer>
  );
}
