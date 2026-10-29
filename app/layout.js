import './globals.css';
import { Inter, Lora, Caveat } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' });
export const metadata = { title: 'CampusPe – Connect 10X Faster', description: 'One platform connecting students, colleges & employers — faster.' };
export default function RootLayout({ children }) {
  return (<html lang="en" className={`${inter.variable} ${lora.variable} ${caveat.variable}`}><body>{children}</body></html>);
}
