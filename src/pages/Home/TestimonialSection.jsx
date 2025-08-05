import testimonialPortrait from "../../../public/images/blacman.webp";

const TestimonialSection = () => {
    return (
        <section className="relative bg-[#313832] min-h-screen">
            {/* Fixed text overlay */}
            <div className="sticky top-0 py-20 flex items-center justify-center z-10 pointer-events-none">
                <div className="text-center px-4">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#f9ebcc] mb-8 leading-tight">
                        "We don't tame curls;<br />we unleash them."
                    </h2>
                    <p className="text-[#f9ebcc] text-lg">
                        Chase Nevins, Founder
                    </p>
                </div>
            </div>

            {/* Scrolling image content */}
            <div className="relative z-0">
                {/* First image - center aligned */}
                <div className="h-screen flex items-center justify-center">
                    <img
                        src={testimonialPortrait}
                        alt="Founder portrait"
                        className="w-full max-w-md h-2/3 object-cover rounded-organic"
                    />
                </div>

                {/* Second image - left aligned */}
                <div className="h-screen flex items-center justify-start px-8">
                    <img
                        src={testimonialPortrait}
                        alt="Hair styling"
                        className="w-full max-w-md h-2/3 object-cover rounded-organic"
                    />
                </div>

                {/* Third image - right aligned */}
                <div className="h-screen flex items-center justify-end px-8">
                    <img
                        src={testimonialPortrait}
                        alt="Curl transformation"
                        className="w-full max-w-md h-2/3 object-cover rounded-organic"
                    />
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;