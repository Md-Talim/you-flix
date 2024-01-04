import useDetails from "@/hooks/useDetails";

interface VideoDetails {
  title: string;
  description: string;
  publishedAt: string;
}

const VideoPage = async ({ params }: { params: { videoId: string } }) => {
  const videoDetails: VideoDetails = await useDetails(params.videoId);

  return (
    <main className="h-full">
      <section className="px-4 lg:px-16">
        <iframe
          id="ytplayer"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${params.videoId}?autoplay=1`}
          className="max-w-full aspect-video"
        />

        <div className="mt-10 space-y-5">
          <h2 className="text-3xl text-slate-200">{videoDetails.title}</h2>
          <p className="text-base text-slate-400 max-w-[65ch] whitespace-pre-wrap">
            {videoDetails.description}
          </p>
        </div>
      </section>
    </main>
  );
};

export default VideoPage;
