import { PlayIcon } from "@heroicons/react/20/solid";

interface Props {
  image: string;
  title: string;
  subTitle: string;
}

const Hero = ({ image, title, subTitle }: Props) => {
  return (
    <section className="w-full h-[40vh] md:h-[80vh] relative">
      <div className="absolute h-full z-10">
        <div className="flex flex-col px-4 lg:px-16 gap-y-4 justify-center h-full">
          <div className="space-y-1">
            <h2 className="banner-title text-3xl md:text-4xl lg:text-6xl font-bold">
              {title}
            </h2>
            <p className="md:text-lg">{subTitle}</p>
          </div>
          <div className="center py-2 gap-x-1 rounded-lg bg-red-500 text-slate-200">
            <PlayIcon className="h-6 w-6" /> Play
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
    </section>
  );
};

export default Hero;
