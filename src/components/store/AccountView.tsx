"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  MapPin,
  User,
  LogOut,
  CheckCircle2,
} from "lucide-react";

const TABS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "orders", label: "Orders", icon: Package },
  { id: "addresses", label: "Addresses", icon: MapPin },
  { id: "profile", label: "Profile", icon: User },
] as const;

const ORDERS = [
  { id: "GG-482910", date: "Jun 12, 2026", status: "Delivered", total: 259.0, items: 2 },
  { id: "GG-471203", date: "May 28, 2026", status: "Shipped", total: 129.0, items: 1 },
  { id: "GG-460087", date: "May 03, 2026", status: "Processing", total: 540.0, items: 3 },
];

const STATUS_STYLES: Record<string, string> = {
  Delivered: "bg-green-500/15 text-green-400",
  Shipped: "bg-accent/15 text-accent",
  Processing: "bg-white/10 text-ink-300",
};

const inputCls =
  "w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white outline-none placeholder:text-ink-500 focus:border-accent transition";

export default function AccountView() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("dashboard");
  const [saved, setSaved] = useState(false);
  const user = { name: "Srabon Mojumder", email: "srabon@example.com" };

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      {/* Sidebar */}
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="card p-5">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-lg font-bold text-ink-950">
              {user.name.charAt(0)}
            </span>
            <div>
              <p className="font-semibold text-white">{user.name}</p>
              <p className="text-xs text-ink-400">{user.email}</p>
            </div>
          </div>
          <nav className="mt-5 space-y-1">
            {TABS.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    tab === t.id
                      ? "bg-accent text-ink-950"
                      : "text-ink-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon size={17} /> {t.label}
                </button>
              );
            })}
            <Link
              href="/login"
              className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-300 transition hover:bg-white/5 hover:text-red-400"
            >
              <LogOut size={17} /> Sign out
            </Link>
          </nav>
        </div>
      </aside>

      {/* Content */}
      <div>
        {tab === "dashboard" && (
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Total Orders", value: ORDERS.length },
                { label: "In Transit", value: 1 },
                { label: "Wishlist", value: 0 },
              ].map((s) => (
                <div key={s.label} className="card p-5">
                  <p className="font-display text-3xl font-bold text-accent">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-ink-400">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-white">Recent order</h3>
              <div className="mt-4 flex items-center justify-between text-sm">
                <div>
                  <p className="font-medium text-white">{ORDERS[0].id}</p>
                  <p className="text-ink-400">{ORDERS[0].date}</p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLES[ORDERS[0].status]}`}
                >
                  {ORDERS[0].status}
                </span>
              </div>
            </div>
          </div>
        )}

        {tab === "orders" && (
          <div className="space-y-4">
            {ORDERS.map((o) => (
              <div
                key={o.id}
                className="card flex flex-wrap items-center justify-between gap-4 p-5"
              >
                <div>
                  <p className="font-semibold text-white">{o.id}</p>
                  <p className="text-sm text-ink-400">
                    {o.date} · {o.items} item{o.items > 1 ? "s" : ""}
                  </p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLES[o.status]}`}
                >
                  {o.status}
                </span>
                <span className="font-display font-bold text-white">
                  ${o.total.toFixed(2)}
                </span>
                <Link
                  href="/track"
                  className="text-sm font-medium text-accent hover:underline"
                >
                  Track
                </Link>
              </div>
            ))}
          </div>
        )}

        {tab === "addresses" && (
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { tag: "Home", lines: ["Srabon Mojumder", "12 Tech Avenue", "Dhaka 1207, Bangladesh", "+880 1700-000000"] },
              { tag: "Office", lines: ["Srabon Mojumder", "Level 5, Innovation Hub", "Gulshan, Dhaka 1212", "+880 1800-000000"] },
            ].map((a) => (
              <div key={a.tag} className="card p-6">
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                  {a.tag}
                </span>
                <div className="mt-4 space-y-1 text-sm text-ink-300">
                  {a.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "profile" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSaved(true);
              setTimeout(() => setSaved(false), 1800);
            }}
            className="card p-6"
          >
            <h3 className="font-semibold text-white">Profile details</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <input defaultValue="Srabon" placeholder="First name" className={inputCls} />
              <input defaultValue="Mojumder" placeholder="Last name" className={inputCls} />
              <input
                defaultValue={user.email}
                type="email"
                className={`${inputCls} sm:col-span-2`}
              />
              <input defaultValue="+880 1700-000000" className={`${inputCls} sm:col-span-2`} />
            </div>
            <button className="btn btn-primary mt-6">
              {saved ? (
                <>
                  <CheckCircle2 size={18} /> Saved!
                </>
              ) : (
                "Save changes"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
