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
  year: string;
};

const projectList: ProjectType[] = [
  {
    title: "Bitfinity Wallet Website",
    description:
      "This is a website for the Bitfinity Wallet Extension that showcases supported features, relevant links and documentation for developer integration (Associated with Finity Technologies)",
    img: WalletWebsite,
    demo: "https://wallet.bitfinity.network/",
    repo: "#",
    year: "2023",
  },
  {
    title: "Bitfinity Wallet Extension",
    description:
      "This is a fully featured Crypto wallet browser extension with BTC, ICP and ETH integration that allows users to manage tokens and NFTs, perform transactions (Associated with Finity Technologies)",
    img: BitfinityWallet,
    demo: "https://chromewebstore.google.com/detail/bitfinity-wallet/jnldfbidonfeldmalbflbmlebbipcnle?pli=1",
    repo: "#",
    year: "2024",
  },
  {
    title: "Betika",
    description:
      "This is an iGaming website featuring sports games, Casino and Virtual games with payment integration that enables users to deposit, bet and cashout winnings (Associated with Betika)",
    img: Betika,
    demo: "https://www.betika.com/en-ke/",
    repo: "#",
    year: "2025",
  },
  {
    title: "National Communications Authority (NCA) Website",
    description:
      "This is a website for NCA featuring a blogs, event tracker and document repository built with Wordpress (Associated with Omni Strategies)",
    img: NCA,
    demo: "https://nca.org.gh/",
    repo: "#",
    year: "2020",
  },
  {
    title: "Care In Touch App",
    description:
      "This is a HIPAA compliant health application that enables caregivers to chat with clients, schedule appointments and share documents and manage patients more efficiently built with React Native and Firebase (Associated with Filly Coder)",
    img: CareInTouch,
    demo: "https://play.google.com/store/apps/details?id=com.careintouch&hl=en",
    repo: "#",
    year: "2021",
  },
  {
    title: "Rent Helper",
    description:
      "This is a property management application that enables tenants and landlords to manage rentals built using React with a chat feature for easy communication (Associated with Best Adapted)",
    img: RentHelper,
    demo: "https://renthelper.co.uk/",
    repo: "#",
    year: "2019",
  },
];

export default projectList;
