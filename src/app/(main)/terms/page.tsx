import LegalDoc from "@/components/sections/LegalDoc";

export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <LegalDoc
      title="Terms of Service"
      crumb="Terms of Service"
      updated="June 1, 2026"
      intro="The terms and conditions that govern your use of Gadget-Ghor and any purchase you make."
      sections={[
        {
          heading: "Acceptance of Terms",
          paragraphs: [
            "By accessing or using Gadget-Ghor, you agree to be bound by these Terms of Service and all applicable laws. If you do not agree, please do not use our store.",
          ],
        },
        {
          heading: "Products & Pricing",
          paragraphs: [
            "We strive to display accurate product information and pricing. In the rare event of an error, we reserve the right to correct it and cancel any affected order, with a full refund where payment was taken.",
            "All prices are shown in USD and are subject to change without notice.",
          ],
        },
        {
          heading: "Orders & Payment",
          paragraphs: [
            "Placing an order constitutes an offer to purchase. We reserve the right to accept or decline any order. Payment must be received in full before an order is dispatched.",
          ],
        },
        {
          heading: "Intellectual Property",
          paragraphs: [
            "All content on this store — including text, graphics, logos and images — is the property of Gadget-Ghor or its licensors and may not be reused without written permission.",
          ],
        },
        {
          heading: "Limitation of Liability",
          paragraphs: [
            "Gadget-Ghor is not liable for any indirect or consequential damages arising from the use of our store or products, to the maximum extent permitted by law.",
          ],
        },
      ]}
    />
  );
}
