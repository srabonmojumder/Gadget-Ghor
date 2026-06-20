import { notFound } from "next/navigation";
import { getProduct, getRelated, PRODUCTS } from "@/data/products";
import ProductDetail from "@/components/sections/ProductDetail";
import ProductCard from "@/components/ui/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product ? product.name : "Product" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = getRelated(product);

  return (
    <>
      <section className="bg-ink-950 pb-20 pt-12 lg:pb-28 lg:pt-16">
        <div className="container-x">
          <ProductDetail product={product} />
        </div>
      </section>

      <section className="bg-ink-950 pb-20 lg:pb-28">
        <div className="container-x">
          <SectionHeading
            align="left"
            eyebrow="You may also like"
            title={
              <>
                Related <span className="text-accent">Products</span>
              </>
            }
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={(i % 4) * 0.05}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
