import { SpinnerCustom } from "@/components/ui/spinner";
import React from "react";

function Loading() {
  return (
    <div className="flex w-full items-start justify-center pt-10">
      <SpinnerCustom />
    </div>
  );
}

export default Loading;
