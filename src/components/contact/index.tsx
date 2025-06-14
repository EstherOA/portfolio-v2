import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import ContactForm from "./contact-form";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HandMetal } from "lucide-react";
// import ContactBg from "../../assets/contact-bg.svg";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    gsap
      .timeline({ defaults: { ease: "none", repeat: 500, yoyo: true } })
      .to("#rect1", { x: 1100, duration: 45 })
      .to("#rect2", { x: 1200, duration: 50 }, 0)
      .to("#rect3", { x: 800, duration: 65 }, 0)
      .time(150)
      .timeScale(4);

    gsap.fromTo(
      title,
      {
        scale: 0.25,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div id="contact" className="relative py-10 px-4">
      <Card className="sm:max-w-3/5 m-auto">
        <CardHeader>
          <CardTitle
            ref={titleRef}
            className="sm:text-center sm:text-xl flex flex-row justify-center items-center"
          >
            Say Hi!
            <HandMetal fill="orange" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
      <div className="border-t-1 pt-1 mt-15 text-center text-sm">
        <p>Copyright &copy;{new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Contact;
