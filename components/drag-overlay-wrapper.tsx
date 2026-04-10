import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import React, { useState } from "react";
import { SidebarBtnElementDragOverlay } from "./sidebar-btn-element";
import { ElementsType, FormElements } from "@/types";
import useDesigner from "@/hooks/use-designer";

function DragOverlayWrapper() {
  const [draggeditem, setDraggedItem] = useState<Active | null>(null);
  const { elements } = useDesigner();
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

  const isDesignerElement = draggeditem.data?.current?.isDesignerElement;
  if (isDesignerElement) {
    const elementId = draggeditem.data?.current?.elementId;
    const element = elements.find((el) => el.id === elementId);
    if (!element) node = <div>Element not found</div>;
    else {
      const DesignerElementComponent =
        FormElements[element.type].designerComponent;
      node = <DesignerElementComponent elementInstance={element} />;
    }
  }
  return <DragOverlay>{node}</DragOverlay>;
}

export default DragOverlayWrapper;
