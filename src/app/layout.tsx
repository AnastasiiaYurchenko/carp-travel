import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CarpTravel',
  description:
    "CarpTravel - your go-to platform for booking mountain tourism services, where you'll discover the best deals for thrilling adventures in mountainous regions around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
