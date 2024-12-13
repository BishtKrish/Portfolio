import Link from "next/link";

import {
  RiLinkedinFill,
  RiTwitterXFill,
  RiGithubLine,
  RiInstagramFill,
  RiTelegramFill,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Linkdin",
    link: "https://www.linkedin.com/in/krishna-bisht-5619ab255/",
    Icon: RiLinkedinFill,
  },
  {
    name: "X",
    link: "https://x.com/KrishnaBis63077",
    Icon: RiTwitterXFill,
  },
  {
    name: "Leetcode",
    link: "https://leetcode.com/u/BishtKrish/",
    Icon: RiTelegramFill,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/krish_bisht_25/",
    Icon: RiInstagramFill,
  },
  
 
  {
    name: "Github",
    link: "https://github.com/BishtKrish",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
