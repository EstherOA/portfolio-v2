import WalletWebsite from "../../assets/wallet-website.png";
import RentHelper from "../../assets/renthelper.png";
import CareInTouch from "../../assets/care-in-touch.png";
import Betika from "../../assets/betika.png";
import NCA from "../../assets/nca.png";
import BitfinityWallet from "../../assets/bitfinity-wallet-ext2.png";

export type ProjectType = {
  title: string;
  description: string;
  img: string;
  demo?: string;
  repo?: string;
};

const projectList: ProjectType[] = [
  {
    title: "Bitfinity Wallet Website",
    description: "",
    img: WalletWebsite,
    demo: "https://wallet.bitfinity.network/",
    repo: "#",
  },
  {
    title: "Bitfinity Wallet Extension",
    description: "",
    img: BitfinityWallet,
    demo: "https://chromewebstore.google.com/detail/bitfinity-wallet/jnldfbidonfeldmalbflbmlebbipcnle?pli=1",
    repo: "#",
  },
  {
    title: "Betika",
    description: "",
    img: Betika,
    demo: "https://www.betika.com/en-ke/",
    repo: "#",
  },
  {
    title: "NCA Website",
    description: "",
    img: NCA,
    demo: "https://nca.org.gh/",
    repo: "#",
  },
  {
    title: "Care In Touch App",
    description: "",
    img: CareInTouch,
    demo: "https://play.google.com/store/apps/details?id=com.careintouch&hl=en",
    repo: "#",
  },
  {
    title: "Rent Helper",
    description: "",
    img: RentHelper,
    demo: "https://renthelper.co.uk/",
    repo: "#",
  },
];

export default projectList;
