import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "PilotTrace",
  description:
    "This is PilotTrace Basic Table  page for Users",
  // other metadata
};


export default function SignIn() {
  return <SignInForm />;
}
