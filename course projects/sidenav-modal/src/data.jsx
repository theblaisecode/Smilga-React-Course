import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
    aria: "Link to Home Page",
  },
  {
    id: 2,
    url: "/team",
    text: "team",
    icon: <FaUserFriends />,
    aria: "Link to Teams Page",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
    icon: <FaFolderOpen />,
    aria: "Link to Projects Page",
  },
  {
    id: 4,
    url: "/calendar",
    text: "calendar",
    icon: <FaCalendarAlt />,
    aria: "Link to Calendar Page",
  },
  {
    id: 5,
    url: "/documents",
    text: "documents",
    icon: <FaWpforms />,
    aria: "Link to Documents Page",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com/theblaisecode",
    icon: <FaTwitter />,
    aria: "Link to TheBlaiseCode twitter page",
  },
  {
    id: 2,
    url: "https://www.github.com/theblaisecode",
    icon: <FaGithub />,
    aria: "Link to TheBlaiseCode github page",
  },
  {
    id: 3,
    url: "https://www.linkedin.com/theblaisecode",
    icon: <FaLinkedin />,
    aria: "Link to TheBlaiseCode linkedin page",
  },
  {
    id: 4,
    url: "https://www.instagram.com/theblaisecode",
    icon: <FaInstagram />,
    aria: "Link to TheBlaiseCode instagram page",
  },
];
