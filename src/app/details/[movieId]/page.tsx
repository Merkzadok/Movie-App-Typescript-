import { InfoDetail } from "../components/InfoDetail";
import { OverviewDetail } from "../components/OverviewDetail";
import { PosterDetail } from "../components/PosterDetail";
import { SimiliarDetail } from "../components/SimiliarDetail";

const Page = async ({ params }: { params: Promise<{ movieId: string }> }) => {
  const { movieId } = await params;

  return (
    <div className="max-w-[1280px] mx-auto w-full">
      <InfoDetail movieId={movieId} />
      <PosterDetail movieId={movieId} />
      <OverviewDetail movieId={movieId} />
      <SimiliarDetail movieId={movieId} />
    </div>
  );
};
export default Page;
