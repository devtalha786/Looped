import heroProducts from "../../../public/images/hero-products.jpg";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroProducts}
                    alt="Hair care products"
                    className="w-full h-full object-cover"
                />
                {/* Black gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 w-full">
                {/* Your main content can go here */}
            </div>

            {/* Contact Info - Responsive positioning */}
            <div className="absolute bottom-6 sm:bottom-12 left-1/2 transform -translate-x-1/2 text-center z-20 w-full px-4">
                <p className="text-sm sm:text-[17px] mb-1 font-medium leading-[20px] text-[#f9ebcc]">
                    123 Demo Street; New York, NY 12345
                </p>
                <p className="text-sm sm:text-[17px] font-medium leading-[20px] text-[#f9ebcc]">
                    email@example.com
                </p>
            </div>
        </section>
    );
};

export default HeroSection;