import { useState } from 'react';
import salonService from "../../../public/images/salon-service.jpg";
import hairProducts from "../../../public/images/hair-products.jpg";

const ServicesSection = () => {
    const [activeIndex, setActiveIndex] = useState(0); // First item open by default

    const services = [
        {
            title: "Curly Cuts and Trims",
            description: "A dry-cut approach that maintains your natural curl pattern, enhances definition, and creates your desired silhouette."
        },
        {
            title: "Hydration Consultations",
            description: "Professional consultations to determine your hair's hydration needs."
        },
        {
            title: "Original Hair Care Products",
            description: "Premium quality hair care products specially formulated for your hair type."
        },
        {
            title: "Event & Editorial Styling",
            description: "Special occasion and editorial styling services."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-12 md:py-20 bg-[#f9ebcc] px-4 sm:px-8 md:px-12 lg:px-20">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left Content - Services Accordion */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 md:mb-12">Services</h2>

                        <div className="space-y-4">
                            {services.map((service, index) => (
                                <div key={index} className="border-b border-black/20 pb-4">
                                    <button
                                        className="w-full flex justify-between items-start text-left"
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={activeIndex === index}
                                        aria-controls={`service-${index}`}
                                    >
                                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black py-2">
                                            {service.title}
                                        </h3>
                                        <span className="text-black text-2xl ml-4">
                                            {activeIndex === index ? '−' : '+'}
                                        </span>
                                    </button>

                                    <div
                                        id={`service-${index}`}
                                        className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-black/80 pt-2 pb-4">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Images (Updated Layout) */}
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        <div className="flex flex-col items-end">
                            <div className='absolute'>
                                <img
                                    src={salonService}
                                    alt="Salon service"
                                    className="w-full h-64 md:h-80  rounded-lg"
                                />
                            </div>
                            <div className="flex gap-6">
                                <div className=" relative top-40 right-40">
                                    <img
                                        src={hairProducts}
                                        alt="Hair products"
                                        className="w-full h-48 md:h-64 object-cover rounded-lg"
                                    />
                                </div>
                                {/* <div className="w-1/2">
                                    <img
                                        src={salonService}
                                        alt="Styling service"
                                        className="w-full h-48 md:h-64 object-cover rounded-lg"
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;