
import BottomNavigation from "@/components/layout/BottomNavigation";
import type { ReactNode } from "react";


interface Props {
  readonly children: ReactNode;
}

export const metadata = {
  title: "Jooter File Management Applications",
  description: "SaaS built with Next.js",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div className="container mx-auto">

    {children}
    <BottomNavigation />
        </div>
      </body>
    </html>
  );
}
