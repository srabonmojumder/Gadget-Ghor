import PageBanner from "@/components/ui/PageBanner";
import AccountView from "@/components/store/AccountView";

export const metadata = { title: "My Account" };

export default function AccountPage() {
  return (
    <>
      <PageBanner
        title="My Account"
        subtitle="Manage your orders, addresses and profile details."
        crumbs={[{ label: "Account" }]}
      />
      <section className="bg-ink-950 py-16 lg:py-20">
        <div className="container-x">
          <AccountView />
        </div>
      </section>
    </>
  );
}
