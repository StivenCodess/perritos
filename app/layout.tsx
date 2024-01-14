import type { Metadata } from "next";
import { Onest, Caprasimo } from "next/font/google";
import "./globals.css";

const capra = Caprasimo({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={capra.className}>{children}</body>
		</html>
	);
}
