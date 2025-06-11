import Marquee from "../ui/marquee";

const Companies = () => {
    // Array of logo objects with URL and alt text
    const logos = [
        {
            src: "https://logoipsum.com/logo/logo-1.svg",
            alt: "Company 1 Logo",
        },
        {
            src: "https://logoipsum.com/logo/logo-2.svg",
            alt: "Company 2 Logo",
        },
        {
            src: "https://logoipsum.com/logo/logo-3.svg",
            alt: "Company 3 Logo",
        },
        {
            src: "https://logoipsum.com/logo/logo-4.svg",
            alt: "Company 4 Logo",
        },
        {
            src: "https://logoipsum.com/logo/logo-5.svg",
            alt: "Company 5 Logo",
        },
        {
            src: "https://logoipsum.com/logo/logo-6.svg",
            alt: "Company 6 Logo",
        },
        {
            src: "https://logoipsum.com/logo/logo-7.svg",
            alt: "Company 7 Logo",
        },
        {
            src: "https://logoipsum.com/logo/logo-8.svg",
            alt: "Company 8 Logo",
        },
        {
            src: "https://logoipsum.com/logo/logo-9.svg",
            alt: "Company 9 Logo",
        },
        {
            src: "https://logoipsum.com/logo/logo-10.svg",
            alt: "Company 10 Logo",
        },
    ];

    return (
        <div className="flex w-full py-20">
            <div className="flex flex-col items-center justify-center text-center w-full py-2">
                <h2 className="text-xl heading">
                    Companies that trust us
                </h2>
                <div className="mt-16 w-full relative overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:30s]">
                        <div className="flex gap-8 md:gap-12">
                            {logos.map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="w-24 h-8 object-contain"
                                />
                            ))}
                        </div>
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                </div>
            </div>
        </div>
    );
};

export default Companies;
