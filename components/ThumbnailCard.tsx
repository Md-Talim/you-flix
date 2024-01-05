import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Props {
  imageUrl: string;
  size: "normal" | "large";
  videoId: string;
}

const ThumbnailCard = ({ size, imageUrl, videoId }: Props) => {
  const styles = {
    normal: "w-80",
    large: "w-[480px]",
  };

  return (
    <Link href={`/watch/${videoId}`}>
      <div className="my-4">
        <div className={clsx("aspect-video relative", styles[size])}>
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
