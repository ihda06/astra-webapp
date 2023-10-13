import { ImBubbles4 } from "react-icons/im";
import { IoLogoTwitter } from "react-icons/io";
import { SiHomeadvisor } from "react-icons/si";

export const menuList = [
  {
    icon: <SiHomeadvisor className=" text-blue-500" />,
    title: "Beranda",
    desc: "",
    path: "/"
  },
  {
    icon: <IoLogoTwitter className="text-sky-300" />,
    title: "Twitter Menfess",
    desc: "Kirim Menfess di CIANJURFESS",
    path: "/twitter-menfess"
  },
  // {
  //   icon: <ImBubbles4 className=" text-blue-500" />,
  //   title: "Topic Generator",
  //   desc: "Nyari bahan ngobrol bareng doi? pake ini",
  //   path: "/topic-generator"
  // },
];
