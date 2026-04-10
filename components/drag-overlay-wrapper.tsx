import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import React, { useState } from "react";
import { SidebarBtnElementDragOverlay } from "./sidebar-btn-element";
import { ElementsType, FormElements } from "@/types";

function DragOverlayWrapper() {
  const [draggeditem, setDraggedItem] = useState<Active | null>(null);
  useDndMonitor({
    onDragStart: (even) => {
      setDraggedItem(even.active);
    },
    onDragCancel: () => {
      setDraggedItem(null);
    },
    onDragEnd: () => {
      setDraggedItem(null);
    },
  });

  if (!draggeditem) return null;

  let node = <div>No drag overlay</div>;
  const isSidebarBtnElement = draggeditem.data?.current?.isDesignerBtnElement;

  if (isSidebarBtnElement) {
    const type = draggeditem.data?.current?.type as ElementsType;
    node = <SidebarBtnElementDragOverlay formElement={FormElements[type]} />;
  }
  return <DragOverlay>{node}</DragOverlay>;
}

export default DragOverlayWrapper;
