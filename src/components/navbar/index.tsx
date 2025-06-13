import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../ui/navigation-menu";

const Navbar = () => {
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
