import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.getAttribute("href");
        if (!target || target === "/") return;

        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 70,
          },
          ease: "power2.inOut",
        });
      });
    });
  }, []);

  return (
    <NavigationMenu viewport={false} orientation="horizontal">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="sm:text-base! md:text-xl! text-muted-foreground"
            href="/"
          >
            home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="sm:text-base! md:text-xl! text-muted-foreground"
            href="#skills"
          >
            skills
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="sm:text-base! md:text-xl! text-muted-foreground"
            href="#works"
          >
            works
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="sm:text-base! md:text-xl! text-muted-foreground"
            href="#experience"
          >
            experience
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="sm:text-base! md:text-xl! text-muted-foreground"
            href="#contact"
          >
            contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
