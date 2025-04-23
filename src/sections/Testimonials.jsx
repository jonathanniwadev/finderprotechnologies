import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
    return (
        <section id="testimonials" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="What People Say About FinderPro Technologies?"
                    sub="⭐️ Our client feedback highlights"
                />

                <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                    {testimonials.map((testimonial, index) => (
                        <GlowCard card={testimonial} key={index} index={index}>
                            <div className="flex items-center gap-3">
                                <div className="text-4xl bg-white/10 w-12 h-12 flex items-center justify-center rounded-full">
                                    {testimonial.emoji}
                                </div>
                                <div>
                                    <p className="font-bold">{testimonial.name}</p>
                                    <p className="text-white-50">{testimonial.mentions}</p>
                                </div>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;