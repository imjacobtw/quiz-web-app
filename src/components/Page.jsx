import PropTypes from "prop-types";
import Footer from "./Footer";

export default function Page({ children }) {
  return (
    <div className="min-w-screen min-h-screen flex flex-col justify-center items-center bg-navy-blue relative font-medium text-white">
      <div className="min-h-9/10 w-screen flex items-center justify-center absolute top-0 flex-col">
        {children}
      </div>
      <Footer />
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.element.isRequired,
};
