import './globals.css'; 
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

// NEW: Viewport configuration ensures mobile scaling works perfectly
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata = {
  title: 'ScaleCraftStudio | A Marketing Agency in Gurgaon',
  description: 'Performance-driven branding studio based in Gurgaon.',
  icons: {
    icon: '/favicon.ico', 
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Added 'overflow-x-hidden' to prevent accidental side-scrolling on mobile */}
      <body className={`${jakarta.variable} font-sans bg-black text-white antialiased overflow-x-hidden selection:bg-[#d9ff00] selection:text-black`}>
        {children}
      </body>
    </html>
  );
}