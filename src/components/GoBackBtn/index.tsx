"use client";

import { useRouter } from "next/navigation";
import React from 'react'
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";

const GoBackBtn = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div>
      <Button size="sm" onClick={goBack} className="shadow-none" variant="ghost">
        <ChevronLeft />
        Back
      </Button>
    </div>
  )
}

export default GoBackBtn
