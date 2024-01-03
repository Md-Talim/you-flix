import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Props {
  imageUrl: string;
  size: "small" | "medium" | "large";
  videoId: string;
}

const ThumbnailCard = ({ size, imageUrl, videoId }: Props) => {
  const styles = {
    small: "w-80 h-44",
    medium: "w-40 h-72",
    large: "w-52 h-96",
  };

  return (
    <Link href={`/watch/${videoId}`}>
      <div className="my-4">
        <div className={clsx("relative", styles[size])}>
          <Image
            src={imageUrl}
            alt="Card Image"
            fill
            className="rounded-md object-cover object-center inset-0"
          />
        </div>
      </div>
    </Link>
  );
};

export default ThumbnailCard;
