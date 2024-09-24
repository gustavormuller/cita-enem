import { Quote } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full px-28 py-10 font-poppins">
      <div className="flex items-center">
        <Quote color="#e77408" />
        <span className="pl-1 text-xl">citaenem</span>
      </div>
    </nav>
  );
};

export default Navbar;
