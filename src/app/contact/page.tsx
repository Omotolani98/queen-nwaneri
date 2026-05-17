import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Queen Nwaneri for commissions, inquiries, or collaboration.",
};

export default function ContactPage() {
  return <ContactContent />;
}
