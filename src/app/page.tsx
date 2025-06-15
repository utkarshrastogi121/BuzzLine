import Image from "next/image";
import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";

export default function Home() {
  return (
    <div className="m-4">
      <h1>Home Page Content</h1>
    </div>
  );
}
