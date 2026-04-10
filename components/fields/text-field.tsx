"use client";

import { ElementsType, FormElement } from "@/types";
import { ALargeSmall } from "lucide-react";

const type: ElementsType = "TextField";

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: "Text field",
      helperText: "Helper text",
      required: false,
      placeHolder: "Value here...",
    },
  }),
  designerBtnElement: {
    icon: ALargeSmall,
    label: "Text Field",
  },
  designerComponent: () => <div>TextField Designer</div>,
  formComponent: () => <div>TextField Form</div>,
  propertiesComponent: () => <div>TextField Properties</div>,
};
