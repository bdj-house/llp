import localFont from "next/font/local";

export const mangolaineFont = localFont({
  src: [
    {
      path: "../../assets/fonts/Mangolaine.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-mangolaine",
});

export const champagneFont = localFont({
  src: [
    {
      path: "../../assets/fonts/Champagne.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Champagne-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../assets/fonts/Champagne-Bold.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  display: "swap",
  variable: "--font-champagne",
});
