import { Button } from "../ui/button";
import profile from "../../assets/header-img.jpg";
import headerGraphic from "../../assets/header-graphic.svg";
import headerGraphic2 from "../../assets/header-graphic2.svg";
import headerArrow from "../../assets/header-arrow.svg";
import headerArrow2 from "../../assets/header-arrow2.svg";

const Header = () => {
  return (
    <div className="h-screen w-full">
      <div className="sm:mt-[10em] px-5 justify-end sm:w-2/3 h-[calc(100%-60px)] sm:m-auto flex flex-col-reverse sm:flex-row sm:justify-between sm:gap-20">
        <div className="flex flex-col">
          <p className="text-base sm:text-lg font-semibold tracking-normal mb-4 sm:mb-10">
            Hi, I'm Esther (Amani),
          </p>
          <p className="text-6xl sm:text-8xl font-extrabold sm:mb-10 tracking-normal">
            software dev
          </p>
          <p className="text-muted-foreground font-medium tracking-tight mt-5">
            I love to create beauty in everything I do
          </p>
          <p className="text-muted-foreground font-medium tracking-tight mt-1 mb-5">
            {"because life imitates art :)"}
          </p>
          <Button
            className="mt-2 sm:mt-10 w-fit align-baseline rounded-none! bg-[#2D2D2D] w-[150px] h-[60px] sm:w-[15em] sm:h-[5em]"
            variant="default"
          >
            Let's chat!
          </Button>
        </div>
        <div className="mt-5 mb-10 sm:my-0">
          <div className="relative sm:min-w-[500px] flex justify-center">
            <img
              alt="profile image graphic"
              className="absolute top-0 sm:top-[20px] sm:right-1 right-0"
              src={headerGraphic}
            />
            <img
              alt="profile image graphic"
              className="absolute top-[15px] sm:top-10 left-0"
              src={headerArrow2}
            />
            <img
              src={profile}
              alt="profile"
              className="w-full max-w-[100%] h-auto rounded-t-[25%] shadow-2xl/30"
            />
            <img
              alt="profile image graphic"
              className="absolute bottom-[30px] left-[-15.5px]"
              src={headerGraphic2}
            />
            <img
              alt="profile image graphic"
              className="absolute bottom-[35.5px] right-[-20px]"
              src={headerArrow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
