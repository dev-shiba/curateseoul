import MemberVideos from "@/components/home/MemberVideos";
import MemberReviews from "@/components/home/MemberReviews";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="py-12">
        <MemberVideos />
        <MemberReviews />
      </div>
    </main>
  );
}
