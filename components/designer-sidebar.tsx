import { FormElements } from "@/types";
import React from "react";
import SidebarBtnElement from "./sidebar-btn-element";

function DesignerSidebar() {
  return (
    <aside className="w-100 max-w-100 flex flex-col grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
      Elements
      <SidebarBtnElement formElement={FormElements.TextField} />
    </aside>
  );
}

export default DesignerSidebar;
