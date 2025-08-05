import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    // <header className="w-full bg-background border-b border-border/50">
    //   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between h-16 md:h-20">
    //       {/* Logo */}
    //       <div className="flex-shrink-0">
    //         <h1 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
    //           Aila Loma
    //         </h1>
    //       </div>

    //       {/* Desktop Navigation */}
    //       <nav className="hidden md:flex items-center space-x-8">
    //         <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
    //           SHOP
    //         </a>
    //         <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
    //           BUNDLES
    //         </a>
    //         <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
    //           GIFT SETS
    //         </a>
    //         <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
    //           CONTACT
    //         </a>
    //       </nav>

    //       {/* Desktop Icons */}
    //       <div className="hidden md:flex items-center space-x-4">
    //         <button variant="ghost" size="icon" className="text-foreground hover:text-accent">
    //           <Search className="h-5 w-5" />
    //         </button>
    //         <button variant="ghost" size="icon" className="text-foreground hover:text-accent">
    //           <User className="h-5 w-5" />
    //         </button>
    //         <button variant="ghost" size="icon" className="text-foreground hover:text-accent relative">
    //           <ShoppingBag className="h-5 w-5" />
    //           <span className="absolute -top-1 -right-1 h-4 w-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
    //             0
    //           </span>
    //         </button>
    //       </div>

    //       {/* Mobile menu button */}
    //       <div className="md:hidden flex items-center space-x-2">
    //         <button variant="ghost" size="icon" className="text-foreground">
    //           <ShoppingBag className="h-5 w-5" />
    //         </button>
    //         <button
    //           variant="ghost"
    //           size="icon"
    //           onClick={() => setIsMenuOpen(!isMenuOpen)}
    //           className="text-foreground"
    //         >
    //           {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    //         </button>
    //       </div>
    //     </div>

    //     {/* Mobile Navigation */}
    //     {isMenuOpen && (
    //       <div className="md:hidden py-4 border-t border-border/50">
    //         <nav className="flex flex-col space-y-4">
    //           <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
    //             SHOP
    //           </a>
    //           <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
    //             BUNDLES
    //           </a>
    //           <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
    //             GIFT SETS
    //           </a>
    //           <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
    //             CONTACT
    //           </a>
    //           <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
    //             <button variant="ghost" size="icon" className="text-foreground">
    //               <Search className="h-5 w-5" />
    //             </button>
    //             <button variant="ghost" size="icon" className="text-foreground">
    //               <User className="h-5 w-5" />
    //             </button>
    //           </div>
    //         </nav>
    //       </div>
    //     )}
    //   </div>
    // </header>
    <></>
  );
};

export default Navbar;
