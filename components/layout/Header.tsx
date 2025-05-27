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

const pages: string[] = [
  "About Me",
  "Works",
  "Education",
  "Blog",
  "Contact Me",
];

export function Header() {
  return (
    <header className="h-15 bg-transparent border-b-2 border-gray-800 flex justify-between items-center px-6">
      <div>
        {/* A. Bassard */}
        {"A. Bassard".split("").map((char, index) => (
          <Link href="/" key={index}>
            <span
              className={`${cedarville.className} text-3xl inline-block text-gray-400 hover:text-white transition-colors cursor-pointer`}
            >
              {char}
            </span>
          </Link>
        ))}
      </div>

      <Sheet>
        <SheetTrigger>
          <Menu className="h-6 w-6 cursor-pointer text-gray-400 hover:text-white transition-colors" />
        </SheetTrigger>
        <SheetContent className="w-1/3 flex flex-col items-center bg-black border-gray-700 text-white">
          <SheetHeader>
            <SheetTitle className=" text-3xl text-white opacity-15">
              Menu
            </SheetTitle>
          </SheetHeader>
          {pages.map((page: string, index: number) => (
            <Link
              href={`/${page.toLowerCase().replace(" ", "_")}`}
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
