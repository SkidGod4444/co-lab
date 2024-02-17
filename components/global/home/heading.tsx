"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "../../ui/button";
import { useUser } from "@/db/models/firebase.modals";
import LoginBtn from "../auth/loginbtn";

export default function Heading() {
  const handleOnClick = () => {
    window.location.replace("/dashboard");
  };
  useUser();
  const isLoggedIn = useUser();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Teams, Your Way. Welcome to{" "}
        <span className="underline text-primary">CO-lab.</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        CO-lab is a platform for teams to collaborate <br /> and share their
        work in a way that suits them best.
      </h3>
      {!isLoggedIn ? (
        <LoginBtn />
      ) : (
        <Button onClick={handleOnClick}>
          <ChevronRight className="h-4 w-4 mr-2" />
          Get Started
        </Button>
      )}
    </div>
  );
}
