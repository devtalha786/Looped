import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react"; // Import a hamburger menu icon

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        {/* Mobile Header (shows on small screens) */}
        <div className="flex items-center justify-between md:hidden">
          <button className="text-lg text-[#f9ebcc]">
            <Menu size={24} /> {/* Hamburger menu icon */}
          </button>
          <h1 className="text-4xl font-bold text-[#f9ebcc]">Looped</h1>
          <button className="text-lg text-[#f9ebcc]">Cart (0)</button>
        </div>

        {/* Desktop Header (shows on medium screens and up) */}
        <nav className="hidden md:flex items-center justify-between">
          {/* Left Navigation */}
          <div className="flex items-center space-x-4 lg:space-x-8">
            <button className="text-lg lg:text-xl font-medium text-[#f9ebcc] hover:opacity-80 transition-opacity">
              Appointments
            </button>
            <button className="text-lg lg:text-xl font-medium text-[#f9ebcc] hover:opacity-80 transition-opacity">
              Shop
            </button>
          </div>

          {/* Logo - Centered */}
          <div className="px-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#f9ebcc] tracking-tight">
              Looped
            </h1>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-4 lg:space-x-8">
            <button className="text-lg lg:text-xl font-medium text-[#f9ebcc] hover:opacity-80 transition-opacity">
              Cart (0)
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;