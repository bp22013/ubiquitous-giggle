import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextFont } from 'next/dist/compiled/@next/font';
import React, { ReactNode, Suspense } from 'react';
import { Providers } from "../lib/Provider";
import { ToasterContext } from "./context/ToastContext";
import "./globals.css";

const inter: NextFont = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Wake On Lan",
  description: "PC起動",
};

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <html lang="ja">
            <Suspense>
                <body className={inter.className}>
                    <ToasterContext />
                    <Providers>
                        <div>
                            {children}
                        </div>
                    </Providers>
                </body>
            </Suspense>
        </html>
    );
}
