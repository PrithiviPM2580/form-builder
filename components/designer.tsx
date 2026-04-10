"use client";

import DesignerSidebar from "./designer-sidebar";
import { useDroppable } from "@dnd-kit/core";

function Designer() {
  const droppable = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });

  return (
    <div className="flex w-full h-full">
      <div className="p-4 w-full">
        <div className="bg-background h-full max-w-230 m-auto rounded-xl flex flex-col grow items-center justify-start flex-1 overflow-y-auto">
          <p className="text-3xl text-muted-foreground flex grow items-center font-bold">
            Drop here
          </p>
        </div>
      </div>
      <DesignerSidebar />
    </div>
  );
}

export default Designer;
