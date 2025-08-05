const Footer = () => {
  return (
    <footer className="bg-[#231f1f] text-[#f9ebcc] py-12 px-20 md:py-16">
      <div className="container mx-auto px-6">
        <div className="">


          {/* Navigation links with subtle divider */}
          <div className="flex space-x-6 pb-20 md:text-base gap-20">
            <span className="hover:text-white text-[#a2b6a2] underline cursor-pointer">Appointments</span>
            <span className="hover:text-white text-[#a2b6a2] underline cursor-pointer">Shop</span>
          </div>
        </div>
        <div>
          {/* Logo/Title with proper spacing */}
          <h2 className="text-3xl md:text-[120px] mt-10 font-bold text-[#a2b6a2] tracking-wide mb-6 md:mb-10">Looped</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;