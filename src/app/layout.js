import './globals.css'; 
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta', // Ye naam yaad rakhna
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} font-sans bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}