import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <div className="py-10 px-4">
      <Card className="sm:max-w-3/5 m-auto">
        <CardHeader>
          <CardTitle className="sm:text-center">Say Hi!</CardTitle>
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
