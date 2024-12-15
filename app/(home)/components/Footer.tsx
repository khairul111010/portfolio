const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="absolute bottom-0 left-0 right-0 flex flex-col items-center">
      <section></section>
      <section>Khairul Hasan &copy; {currentYear}</section>
    </footer>
  );
};

export default Footer;
