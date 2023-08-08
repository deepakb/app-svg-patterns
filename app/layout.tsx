import ThemeLayout from "@/components/ThemeLayout";

import "./globals.css";
import { ContextProvider } from "@/context/Context";

export const metadata = {
  title: "svg patterns",
  description: "Unleash Your Creative Masterpiece with ArtifyStudio.com",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="font-nunito bg-background relative h-screen w-screen overflow-hidden">
        <ContextProvider>
          <ThemeLayout>{children}</ThemeLayout>
        </ContextProvider>
      </body>
    </html>
  );
}
