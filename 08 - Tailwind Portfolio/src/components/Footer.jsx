function Footer() {
  const current = new Date();
  return (
    <footer className="bg-emerald-100">
      <div className="container py-6">
        <div className="headerContent flex flex-col justify-center items-center ">
          <p className="font-medium">
            &copy; {current.getFullYear()} |{" "}
            <a
              href="https://twitter.com/theblaisecode/"
              target="_blank"
              className="duration-300 border-b border-black hover:text-emerald-500 hover:duration-300 hover:border-emerald-500">
              {" "}
              TheBlaiseCode
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
