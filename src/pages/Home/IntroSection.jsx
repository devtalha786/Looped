import { Button } from "@/components/ui/button";
import curlyHairPortrait from "../../../public/images/boycurly.webp";

const IntroSection = () => {
    return (
        <section className="py-10 md:py-16 lg:py-20 bg-[#f9ebcc] section-warm px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Content - First on mobile, second on desktop */}
                    <div className="space-y-6 md:space-y-8 order-2 lg:order-2">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[86px] font-bold text-[#313832] leading-tight md:leading-[1.1] lg:leading-[85px]">
                            Be Curl,<br />
                            Calm, and<br />
                            Collected
                        </h2>

                        <p className="text-base md:text-[17px] leading-relaxed md:leading-[20px] text-[#313832] max-w-lg">
                            Looped is a salon specializing in hair that spirals, swirls, waves, whirls, loops, and curls.
                        </p>

                        <Button className="text-primary-foreground bg-[#a2b6a2] w-full sm:w-auto sm:px-16 md:px-24 lg:px-32 xl:px-40 rounded-full py-4 md:py-6 text-base md:text-lg hover:bg-[#8fa08f] transition-colors">
                            Book Now
                        </Button>
                    </div>

                    {/* Image - Second on mobile, first on desktop */}
                    <div className="relative order-1 lg:order-1">
                        <div className="bg-sage-green/20 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8">
                            <img
                                src={curlyHairPortrait}
                                alt="Person with beautiful curly hair"
                                className="w-full rounded-2xl md:rounded-3xl shadow-lg object-cover aspect-[4/5] md:aspect-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;