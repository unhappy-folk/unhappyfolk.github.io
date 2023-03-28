import logo from "../../assets/logo.svg";
import { styles } from "../../styles";

const Page = ({ children }) => {
  return (
    <div className="mx-auto p-2 flex flex-col w-5/6-row md:w-4/6 md:max-w-[60vw]">
      <img
        src={logo}
        alt="logo"
        className="mx-auto object-contain w-2/12 h-3/12 md:w-1/6 mb-2"
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
  );
};

export default Page;
