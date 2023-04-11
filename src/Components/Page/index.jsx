import logo from "../../assets/logo.svg";
import { styles } from "../../styles";
import Footer from "../Footer/Footer";

const Page = ({ children }) => {
  return (
    <>
      <div className="mx-auto md:p-2 flex flex-col w-11/12 md:w-5/6 lg:w-9/12 ease-in-out duration-700">
        <img
          src={logo}
          alt="logo"
          className="mx-auto object-contain w-2/12 h-3/12 md:w-1/6 my-2"
        />

        <div className="no-scroll-bar p-2">
          <p
            className={`${styles.typography.colors.primary} text-3xl subpixel-antialiased text-center mb-2`}
          >
            The Unhappy Folk
          </p>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
