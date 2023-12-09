import { PlayIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { Roboto_Slab } from 'next/font/google';

interface Props {
  image: string;
  title: string;
  subTitle: string;
}

const robotoSlab = Roboto_Slab({ subsets: ['latin'] });

const Hero = ({ image, title, subTitle }: Props) => {
  return (
    <section className="w-full h-[40vh] md:h-[80vh] relative">
      <div className="absolute h-full z-10">
        <div className=" flex flex-col px-16 gap-y-4 justify-center h-full">
          <div className="space-y-1">
            <h2
              className={clsx(
                robotoSlab.className,
                'banner-title text-3xl md:text-4xl lg:text-6xl font-bold stroke-black',
              )}
            >
              {title}
            </h2>
            <p className="md:text-lg">{subTitle}</p>
          </div>
          <div className="center py-2 gap-x-1 rounded-lg bg-red-500 text-stone-200">
            <PlayIcon className="h-6 w-6" /> Play
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: '50% 50%',
          backgroundSize: 'cover',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
    </section>
  );
};

export default Hero;

// linear-gradient(to top right, rgba(228, 221, 221, 0.2) 10%, rgba(0, 0, 0, 0.3) 95%,
