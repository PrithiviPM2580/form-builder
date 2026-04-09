import { SpinnerCustom } from "@/components/ui/spinner";
import React from "react";

function Loading() {
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <SpinnerCustom />
    </div>
  );
}

export default Loading;
