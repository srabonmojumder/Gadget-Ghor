import LegalDoc from "@/components/sections/LegalDoc";

export const metadata = { title: "Returns & Refunds" };

export default function ReturnsPage() {
  return (
    <LegalDoc
      title="Returns & Refunds"
      crumb="Returns & Refunds"
      updated="June 1, 2026"
      intro="Not completely happy? Our hassle-free 30-day return policy has you covered."
      sections={[
        {
          heading: "30-Day Returns",
          paragraphs: [
            "You can return most items within 30 days of delivery for a full refund or exchange. Items must be unused, in their original packaging and with all accessories included.",
          ],
        },
        {
          heading: "How to Start a Return",
          paragraphs: [
            "Go to your account, open the order and select 'Return item', or contact our support team with your order number. We'll email you a prepaid return label and instructions.",
          ],
        },
        {
          heading: "Refund Timeline",
          paragraphs: [
            "Once we receive and inspect your return, your refund is issued to the original payment method within 5–7 business days. Shipping fees are non-refundable unless the item arrived faulty.",
          ],
        },
        {
          heading: "Faulty or Damaged Items",
          paragraphs: [
            "If your item arrives damaged or develops a fault within the warranty period, we'll repair, replace or refund it at no cost to you. Just reach out with a photo and your order number.",
          ],
        },
        {
          heading: "Non-Returnable Items",
          paragraphs: [
            "For hygiene reasons, certain items such as in-ear earbuds with broken seals cannot be returned unless faulty. Gift cards are non-refundable.",
          ],
        },
      ]}
    />
  );
}
