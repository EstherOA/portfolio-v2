import { gsap } from "gsap";
import { Button } from "../ui/button";
import profile from "../../assets/header-img.jpg";
import headerGraphic from "../../assets/header-graphic.svg";
import headerGraphic2 from "../../assets/header-graphic2.svg";
import headerArrow from "../../assets/header-arrow.svg";
import headerArrow2 from "../../assets/header-arrow2.svg";
import { useEffect, useRef } from "react";

const roles = ["developer", "artist", "creator"];

const Header = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const wordIndex = useRef(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const typeWord = (word: string, onComplete: () => void) => {
        const tl = gsap.timeline({ onComplete });

        for (let i = 0; i <= word.length; i++) {
          tl.to(textRef.current, {
            duration: 0.09,
            textContent: word.substring(0, i),
            ease: "none",
          });
        }

        tl.to({}, { duration: 1 }); // Pause

        for (let i = word.length; i >= 0; i--) {
          tl.to(textRef.current, {
            duration: 0.03,
            textContent: word.substring(0, i),
            ease: "none",
          });
        }

        return tl;
      };

      const loop = () => {
        const currentWord = roles[wordIndex.current];
        typeWord(currentWord, () => {
          wordIndex.current = (wordIndex.current + 1) % roles.length;
          loop();
        });
      };

      loop();
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-[calc(100%-60px)]">
      <div className="items-center flex flex-col-reverse md:flex-row md:justify-evenly sm:mt-3 md:mt-[10em] mx-10 sm:mx-30 md:mx-0">
        <div className="flex flex-col w-full md:w-1/3">
          <p className="text-base sm:text-lg font-semibold tracking-normal mb-4 md:mb-10">
            Hi, I'm Amani (Esther),
          </p>
          <div className="flex flex-row sm:mb-10 items-end">
            <span
              ref={textRef}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-normal"
            ></span>
            <span
              ref={cursorRef}
              className="animate-blink text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold"
            >
              |
            </span>
          </div>
          <p className="text-muted-foreground font-medium tracking-tight md:mt-5">
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
        <div className="mt-5 mb-10 w-full md:w-1/3">
          <div className="relative flex justify-center">
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
              className="w-full object-contain max-w-[100%] h-auto rounded-t-[25%] shadow-2xl/30"
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
