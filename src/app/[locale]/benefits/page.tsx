import BenefitsValue from "@/components/home/BenefitsValue";
import KBeautyMembership from "@/components/home/KBeautyMembership";
import FeaturedClinics from "@/components/home/FeaturedClinics";

export default function BenefitsPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="py-12">
        <BenefitsValue />
        {/* <BeautyProcedures /> */}
        <KBeautyMembership />
        <FeaturedClinics />
      </div>
    </main>
  );
}
