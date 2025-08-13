import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Toaster } from 'sonner';



import "./styles/globals.css";
import styles from "./styles/layout.module.css";

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
      <body>
        <StoreProvider>
          <section className={styles.container}>
            {/* Global Notifications */}
            <Toaster position="top-right" />
            {/* Page Content */}
            {children}
          </section>
        </StoreProvider>
      </body>
    </html>
  );
}
