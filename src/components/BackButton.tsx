"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  className?: string;
}

function BackButton({ className }: BackButtonProps) {
  const router = useRouter();
  return (
    <ArrowLeft
      onClick={() => {
        router.back();
      }}
    />
  );
}

export default BackButton;
