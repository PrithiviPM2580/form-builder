import Logo from "@/components/logo";
import ThemeSwitcher from "@/components/theme-switcher";
import { UserButton } from "@clerk/nextjs";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <nav className="w-full flex flex-row justify-between items-center border-b border-border h-12 px-4 py-2">
        <Logo />
        <div className="flex gap-4 items-center">
          <ThemeSwitcher />
          <UserButton afterSwitchSessionUrl="/sign-in" />
        </div>
      </nav>
      <main className="flex w-full grow">{children}</main>
    </div>
  );
}

export default Layout;
