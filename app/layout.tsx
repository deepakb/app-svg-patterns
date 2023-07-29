import ThemeLayout from "@/components/ThemeLayout";

import "./globals.css";

export const metadata = {
  title: "svg patterns",
  description: "Unleash Your Creative Masterpiece with ArtifyStudio.com",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="font-nunito bg-background relative h-screen w-screen overflow-hidden">
        <ThemeLayout>{children}</ThemeLayout>
      </body>
    </html>
  );
}
