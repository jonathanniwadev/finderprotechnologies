import { termsAndConditions } from "../constants";
import TitleHeader from "../components/TitleHeader";

const Terms = () => {
    return (
        <section className="section-padding">
            <div className="w-full md:px-20 px-5">
                <TitleHeader title="Terms & Conditions" sub="Please read carefully" />
                <div className="mt-10 space-y-6">
                    {termsAndConditions.map((item, index) => (
                        <div key={index}>
                            <h3 className="font-bold text-lg text-white">{item.title}</h3>
                            <p className="text-white/70 mt-2">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Terms;