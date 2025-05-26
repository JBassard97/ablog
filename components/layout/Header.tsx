import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Cedarville_Cursive } from "next/font/google";

const cedarville = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
});

const pages: string[] = ["Works", "Education", "Blog", "Contact"];

export function Header() {
  return (
    <header className="h-15 bg-transparent text-white flex justify-between items-center px-4">
      <Link href="/">
        <p className={`text-3xl ${cedarville.className}`}>A. Bassard</p>
      </Link>
      <Sheet>
        <SheetTrigger>
          <Menu className="h-6 w-6 cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="w-1/3 flex flex-col items-center bg-black border-gray-700 text-white">
          <SheetHeader>
            <SheetTitle className="underline text-2xl text-white">
              Menu
            </SheetTitle>
          </SheetHeader>
          {pages.map((page: string, index: number) => (
            <Link
              href={`/${page.toLowerCase()}`}
              key={index}
              className="text-lg text-gray-400 hover:text-white transition-colors"
            >
              {page}
            </Link>
          ))}
        </SheetContent>
      </Sheet>
    </header>
  );
}
