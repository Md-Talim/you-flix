import useDetails from "@/hooks/useDetails";

interface VideoDetails {
  title: string;
  description: string;
}

const VideoPage = async ({ params }: { params: { videoId: string } }) => {
  const videoDetails = await useDetails(params.videoId);

  return (
    <main className="h-full">
      <section className="px-4 lg:px-16">
        <iframe
          id="ytplayer"
          src={`https://www.youtube.com/embed/${params.videoId}?autoplay=1`}
          className="w-[768px] max-w-full aspect-video"
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
