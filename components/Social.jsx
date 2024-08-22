import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import Link from "next/link";
const socials = [
  {
    icon: <FaXTwitter />,
    path: "https://x.com/Sum12Speak",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/sumanth_starboy",
  },
  {
    icon: <FaGithub />,
    path: "https://github.com/sumanththota",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://github.com/sumanththota",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, idx) => {
        return (
          <Link key={idx} href={item.path} legacyBehavior>
            <a className={iconStyles}>{item.icon}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
