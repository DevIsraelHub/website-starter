import ArrowLeft from "@/components/ArrowLeft";
import MainLayout from "@/components/MainLayout";
import LandingPage from "@/modules/LandingPage";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout>
      <LandingPage />
    </MainLayout>
  );
}
