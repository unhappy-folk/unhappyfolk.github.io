import linkedInLogo from "../../assets/linkedin-logo.svg";
import githubLogo from "../../assets/github-logo.svg";
import instagramLogo from "../../assets/instagram-logo.svg";
import telegramLogo from "../../assets/telegram-logo.svg";

import "./ReachUs.css";

function ReachUs() {
  return (
    <div>
      <a href="https://www.linkedin.com/newsletters/the-unhappy-folk-6899718410507206656/">
        <img src={linkedInLogo} className="logo" />
      </a>
      <a href=" https://t.me/unhappyfolk">
        <img src={telegramLogo} className="logo" />
      </a>
      <a href=" https://www.instagram.com/unhappyfolk/">
        <img src={instagramLogo} className="logo" />
      </a>
      <a href="mailto:msg@uhappyfolk.org">
        <img src="https://img.icons8.com/material/38/ceaa37/marked-mail.png" />
      </a>
      <a href="https://github.com/unhappyfolk">
        <img src={githubLogo} className="logo" />
      </a>
    </div>
  );
}

export default ReachUs;
