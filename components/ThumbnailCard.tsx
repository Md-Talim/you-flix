import clsx from 'clsx';
import Image from 'next/image';

interface Props {
  imageUrl: string;
  size: 'small' | 'medium' | 'large';
}

const ThumbnailCard = ({ size, imageUrl }: Props) => {
  const styles = {
    small: 'w-80 h-44',
    medium: 'w-40 h-72',
    large: 'w-52 h-96',
  };

  return (
    <article className="">
      <div className={clsx('relative', styles[size])}>
        <Image
          src={imageUrl}
          alt="Card Image"
          fill
          className="rounded-md object-cover object-center inset-0"
        />
      </div>
    </article>
  );
};

export default ThumbnailCard;
