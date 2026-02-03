import Image from "next/image";

const Banner = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <Image
                src="/images/banner.jpg"
                alt="Banner"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default Banner;