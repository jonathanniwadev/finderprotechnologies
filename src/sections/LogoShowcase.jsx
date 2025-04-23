import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
    return (
        <div className="flex-none flex flex-col items-center text-center marquee-item space-y-2">
            <span className="text-3xl">{icon.emoji}</span>
            <p className="text-white/70 text-xs md:text-sm">{icon.name}</p>
        </div>
    );
};

const LogoShowcase = () => (
    <div className="md:my-20 my-10 relative">
        {/* Optional gradient edges if you have styles for them */}
        <div className="gradient-edge" />
        <div className="gradient-edge" />

        {/* Scrolling container */}
        <div className="marquee h-52 overflow-hidden">
            <div className="marquee-box flex md:gap-12 gap-5 animate-scroll">
                {logoIconsList.map((icon, index) => (
                    <LogoIcon key={`first-${index}`} icon={icon} />
                ))}
                {logoIconsList.map((icon, index) => (
                    <LogoIcon key={`second-${index}`} icon={icon} />
                ))}
            </div>
        </div>
    </div>
);

export default LogoShowcase;