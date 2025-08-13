import type { Metadata } from "next";

import Agreements from "@/components/HomePage/Agreements";

export default function IndexPage() {
  return (
    <div>
      <Agreements />
    </div>
  )
}

export const metadata: Metadata = {
  title: "Jooter Applications",
  
};
