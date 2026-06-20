import LegalDoc from "@/components/sections/LegalDoc";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      crumb="Privacy Policy"
      updated="June 1, 2026"
      intro="How we collect, use and protect your personal information when you shop with Gadget-Ghor."
      sections={[
        {
          heading: "Information We Collect",
          paragraphs: [
            "We collect information you provide directly — such as your name, email, shipping address and payment details — when you create an account, place an order or contact support.",
            "We also automatically collect certain technical data like your device type, browser and pages visited, to improve our store and your experience.",
          ],
        },
        {
          heading: "How We Use Your Information",
          paragraphs: [
            "Your information is used to process orders, deliver products, provide customer support, send order updates and — only with your consent — share offers and product news.",
            "We never sell your personal data to third parties.",
          ],
        },
        {
          heading: "Cookies & Tracking",
          paragraphs: [
            "We use cookies to keep you signed in, remember your cart and wishlist, and understand how the store is used. You can disable cookies in your browser, though some features may stop working.",
          ],
        },
        {
          heading: "Data Security",
          paragraphs: [
            "We use industry-standard encryption and security practices to protect your data. Payment details are processed through secure, PCI-compliant providers and are never stored on our servers.",
          ],
        },
        {
          heading: "Your Rights",
          paragraphs: [
            "You can access, update or delete your personal information at any time from your account, or by contacting our support team. We will respond to all requests within 30 days.",
          ],
        },
      ]}
    />
  );
}
