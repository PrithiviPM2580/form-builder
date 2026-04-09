import React from "react";
import { Button } from "./ui/button";
import { CloudSync } from "lucide-react";

function PublishFormBtn() {
  return (
    <Button className="gap-2 text-white bg-linear-to-r from-indigo-400 to-cyan-400">
      <CloudSync className="w-6 h-6" />
      Publish
    </Button>
  );
}

export default PublishFormBtn;
