// import linkedInLogo from "../../assets/linkedin-logo.svg";
// import githubLogo from "../../assets/github-logo.svg";
// import instagramLogo from "../../assets/instagram-logo.svg";
import telegramSVG from "../../assets/telegram-logo.svg";
import mailSVG from "../../assets/mail.svg";
import literatureSVG from "../../assets/literature.svg";

import "./ReachUs.css";

function ReachUs() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <a href="https://blog.unhappyfolk.org/">
        <img src={literatureSVG} className="logo" />
      </a>
      <a href=" https://t.me/unhappyfolk">
        <img src={telegramSVG} className="logo" />
      </a>
      {/* <a href=" https://www.instagram.com/unhappyfolk/">
        <img src={instagramLogo} className="logo" />
      </a> */}
      <a href="mailto:msg@uhappyfolk.org">
        <img src={mailSVG} className="logo" />
      </a>
      {/* <a href="https://github.com/unhappyfolk">
        <img src={githubLogo} className="logo" />
      </a> */}
    </div>
  );
}

export default ReachUs;
