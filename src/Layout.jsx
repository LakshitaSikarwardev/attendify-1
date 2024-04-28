

import { Arimo, Judson } from 'next/font/google'; 
import './Record.css'; 

const arimo = Arimo({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-arimo',
});
const judson = Judson({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-judson',
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{` // Inline CSS to define font variables
          :root {
            --font-arimo: '${arimo}';
            --font-judson: '${judson}';
          }
        `}</style>
      </head>
      <body className="font-judson"> 
        {children} 
      </body>
    </html>
  );
}

