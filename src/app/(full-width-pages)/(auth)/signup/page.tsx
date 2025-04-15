import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "CryptoVault",
  description:
    "This is CryptoVault Basic Table  page for Userse",
  // other metadata
};

export default function SignUp() {
  return <SignUpForm />;
}
