import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full grow mx-auto items-start justify-start">
      {children}
    </div>
  );
}

export default layout;
