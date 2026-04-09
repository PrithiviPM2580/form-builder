import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full grow mx-auto items-center justify-center">
      {children}
    </div>
  );
}

export default layout;
