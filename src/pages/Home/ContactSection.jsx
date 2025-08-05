import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import testimonialPortrait from "../../../public/images/testimonial-portrait.jpg";

const ContactSection = () => {
    return (
        <section className="py-20 section-terracotta bg-[#b8693d]">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-5xl lg:text-6xl font-bold text-[#f9ebcc] mb-8">
                            Come Visit!
                        </h2>
                        <p className="text-xl text-[#f9ebcc] mb-12">
                            Contact us and catch the wave.
                        </p>

                        {/* Contact Form */}
                        <div className="bg-white rounded-lg p-8 space-y-6">
                            <h3 className="text-2xl font-semibold text-foreground mb-6">Schedule an Appointment</h3>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" placeholder="Jane" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="jane@example.com" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="service">Service</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="cut">Curly Cuts and Trims</SelectItem>
                                        <SelectItem value="consultation">Hydration Consultations</SelectItem>
                                        <SelectItem value="styling">Event & Editorial Styling</SelectItem>
                                        <SelectItem value="products">Hair Care Products</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="Tell us about your hair goals..." rows={4} />
                            </div>

                            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                Book Appointment
                            </Button>
                        </div>
                    </div>

                    {/* Right Images */}
                    <div className="relative">
                        <div className="grid grid-cols-1 gap-6">
                            <img
                                src={testimonialPortrait}
                                alt="Salon appointment"
                                className="w-full h-screen object-cover rounded-organic"
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;