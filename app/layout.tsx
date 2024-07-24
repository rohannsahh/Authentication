'use client';

import { Inter } from "next/font/google";
import "./globals.css";

import { ReactNode } from 'react';

import { Provider } from 'react-redux';
import store from '../store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });
interface RootLayoutProps {
  children: ReactNode;
}



export default function RootLayout({ children  }:RootLayoutProps) {
  return (
    <html lang="en">
         <body>
         <Provider store={store}>
      {children}

      <ToastContainer />
    </Provider>
    </body>

    </html>
  );
}





