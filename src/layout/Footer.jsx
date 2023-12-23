const Footer = () => {
  return (
    <footer className="bg-gray-700 flex items-center justify-center text-white py-1 w-full">
      <div className="max-w-7xl text-center px-4">
        &copy; {new Date().getFullYear()} Predicta Estate.
      </div>
    </footer>
  );
};

export default Footer;
