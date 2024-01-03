const VideoPage = ({ params }: { params: { videoId: string } }) => {
  return (
    <main className="h-full">
      <section className="px-4 lg:px-16">
        <iframe
          id="ytplayer"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${params.videoId}?autoplay=1`}
        ></iframe>
      </section>
    </main>
  );
};

export default VideoPage;
