"use client";

import { useMemo, useState, useCallback, memo } from "react";

type Contact = {
  id: number;
  type: string;
  name: string;
  whatsapp: string;
  role: string;
};

const contacts: Contact[] = [
  {
    id: 1,
    type: "AGENT",
    name: "Akash Vai",
    whatsapp: "+601163800726",
    role: "AGENT",
  },
  {
    id: 2,
    type: "AGENT",
    name: "Roki Vai",
    whatsapp: "+971567481272",
    role: "AGENT",
  },
  {
    id: 3,
    type: "AGENT",
    name: "Somraj Vai",
    whatsapp: "+60182983893",
    role: "AGENT",
  },
  {
    id: 4,
    type: "AGENT",
    name: "Raja Vai",
    whatsapp: "+601161481563",
    role: "AGENT",
  },
  {
    id: 5,
    type: "AGENT",
    name: "Sha Aman Vai",
    whatsapp: "+60172670819",
    role: "AGENT",
  },
  {
    id: 6,
    type: "AGENT",
    name: "Raja Vai",
    whatsapp: "+601161481563",
    role: "AGENT",
  },
  {
    id: 7,
    type: "AGENT",
    name: "Akash Vai",
    whatsapp: "+601163800726",
    role: "AGENT",
  },
  {
    id: 8,
    type: "AGENT",
    name: "Sha Aman Vai",
    whatsapp: "+60172670819",
    role: "AGENT",
  },
  {
    id: 9,
    type: "AGENT",
    name: "Roki Vai",
    whatsapp: "+971567481272",
    role: "AGENT",
  },
  {
    id: 10,
    type: "AGENT",
    name: "Somraj Vai",
    whatsapp: "+60182983893",
    role: "AGENT",
  },
];

const processedContacts = contacts.map((contact) => ({
  ...contact,
  searchText: `${contact.id} ${contact.type} ${contact.name} ${contact.whatsapp} ${contact.role}`.toLowerCase(),
}));

function cleanNumber(number: string): string {
  return number.replace(/\D/g, "");
}

function whatsappUrl(number: string): string {
  return `https://wa.me/${cleanNumber(number)}`;
}

const WhatsAppIcon = memo(function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path
        d="M23.4 8.55C21.43 6.58 18.8 5.5 16 5.5C10.22 5.5 5.52 10.2 5.52 15.98C5.52 17.82 6 19.62 6.9 21.2L5.43 26.56L10.92 25.12C12.44 25.95 14.19 26.38 15.98 26.38H16C21.77 26.38 26.48 21.68 26.48 15.9C26.48 13.1 25.39 10.53 23.4 8.55ZM16 24.64C14.39 24.64 12.82 24.21 11.43 23.39L11.12 23.2L7.86 24.05L8.73 20.88L8.53 20.55C7.67 19.17 7.21 17.59 7.21 15.98C7.21 11.13 11.16 7.18 16.01 7.18C18.36 7.18 20.57 8.1 22.23 9.76C23.89 11.42 24.8 13.63 24.8 15.98C24.79 20.82 20.84 24.64 16 24.64ZM20.72 18.18C20.46 18.05 19.2 17.43 18.96 17.34C18.7 17.25 18.52 17.21 18.34 17.47C18.16 17.74 17.63 18.31 17.47 18.51C17.3 18.71 17.13 18.74 16.87 18.61C16.61 18.48 15.78 18.21 14.79 17.32C14.02 16.64 13.5 15.8 13.34 15.54C13.17 15.27 13.32 15.13 13.45 15C13.57 14.88 13.72 14.69 13.85 14.53C13.98 14.37 14.03 14.25 14.12 14.07C14.21 13.89 14.16 13.73 14.1 13.6C14.04 13.47 13.52 12.2 13.3 11.69C13.09 11.19 12.87 11.26 12.71 11.25C12.56 11.24 12.38 11.24 12.2 11.24C12.02 11.24 11.73 11.31 11.48 11.58C11.22 11.85 10.52 12.5 10.52 13.76C10.52 15.03 11.5 16.25 11.63 16.42C11.76 16.6 13.55 19.36 16.3 20.55C16.96 20.84 17.48 21.01 17.89 21.14C18.56 21.35 19.17 21.32 19.65 21.25C20.19 21.17 21.31 20.6 21.54 19.98C21.77 19.36 21.77 18.82 21.7 18.71C21.64 18.6 21.47 18.53 20.72 18.18Z"
        fill="white"
      />
    </svg>
  );
});

const ContactRow = memo(function ContactRow({ contact }: { contact: (typeof processedContacts)[0] }) {
  const whatsUrl = whatsappUrl(contact.whatsapp);

  return (
    <div className="grid w-full grid-cols-[52px_minmax(0,1fr)_minmax(0,1.25fr)_58px] items-center border-b border-slate-200 last:border-b-0 sm:grid-cols-[70px_minmax(0,1fr)_minmax(0,1.5fr)_90px]">
      <div className="px-2 py-4 text-xs font-semibold text-slate-500 sm:px-4 sm:py-5 sm:text-sm">
        {contact.id}
      </div>

      <a
        href={whatsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="min-w-0 px-2 py-4 transition hover:bg-green-50 sm:px-4 sm:py-5"
      >
        <div className="truncate text-sm font-bold text-slate-900 sm:text-base">
          {contact.name}
        </div>
        <div className="mt-0.5 truncate text-[10px] text-slate-500 sm:text-xs">
          {contact.role}
        </div>
      </a>

      <a
        href={whatsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="min-w-0 overflow-hidden px-2 py-4 transition hover:bg-green-50 sm:px-4 sm:py-5"
      >
        <span className="block break-all text-[11px] font-bold leading-5 text-slate-900 sm:text-sm">
          {contact.whatsapp}
        </span>
      </a>

      <div className="flex items-center justify-center px-1 py-4 sm:px-2 sm:py-5">
        <a
          href={whatsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with ${contact.name}`}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 transition hover:bg-green-700 active:scale-95 sm:h-10 sm:w-10"
        >
          <WhatsAppIcon size={22} />
        </a>
      </div>
    </div>
  );
});

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredContacts = useMemo(() => {
    const value = search.trim().toLowerCase();
    if (!value) return processedContacts;
    return processedContacts.filter((contact) =>
      contact.searchText.includes(value)
    );
  }, [search]);

  const handleClearSearch = useCallback(() => {
    setSearch("");
  }, []);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    []
  );

  const handleComplaintClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open("https://wa.me/601163800726", "_blank", "noopener,noreferrer");
  }, []);

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-white text-slate-900">
      <header className="w-full border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex min-h-[68px] w-full max-w-[1180px] items-center justify-between px-3 sm:px-6">
          <a href="#home" className="flex min-w-0 items-center gap-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-400 text-base font-black text-slate-900">
              VA
            </div>

            <div className="min-w-0">
              <h1 className="truncate text-base font-bold leading-tight text-white sm:text-xl">
                velki Contact Directory
              </h1>

              <p className="truncate text-[11px] text-slate-300 sm:text-sm">
                Farmer Support & Service
              </p>
            </div>
          </a>

          <nav className="hidden shrink-0 items-center gap-6 md:flex">
            <a
              href="#home"
              className="text-sm font-medium text-white transition hover:text-yellow-300"
            >
              Home
            </a>

            <a
              href="#contacts"
              className="text-sm font-medium text-white transition hover:text-yellow-300"
            >
              Contacts
            </a>

            <a
              href="#services"
              className="text-sm font-medium text-white transition hover:text-yellow-300"
            >
              Services
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-white transition hover:text-yellow-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <div
        id="home"
        className="mx-auto w-full max-w-[1180px] overflow-hidden px-3 py-6 sm:px-6 sm:py-10"
      >
        <section className="mb-6">
          <h2 className="text-xl font-bold text-slate-900 sm:text-3xl">
            Find a velki Contact
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Search the directory by name, ID or WhatsApp number.
          </p>
        </section>

        <section className="mb-4 w-full">
          <label
            htmlFor="search"
            className="mb-2 block text-sm font-semibold text-slate-900"
          >
            Search contacts
          </label>

          <div className="flex w-full gap-2">
            <input
              id="search"
              type="search"
              value={search}
              onChange={handleSearchChange}
              placeholder="Name, ID or phone number..."
              autoComplete="off"
              className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />

            {search && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="shrink-0 rounded-lg bg-slate-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800 active:bg-slate-900"
              >
                Clear
              </button>
            )}
          </div>
        </section>

        <section className="mb-7 w-full">
          <a
            href="https://wa.me/601163800726"
            onClick={handleComplaintClick}
            className="flex w-full items-center justify-center rounded-lg bg-red-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-red-700 active:bg-red-800"
          >
            Complaint / Report an Issue
          </a>
        </section>

        <section id="contacts" className="mb-4">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <h2 className="text-xl font-bold text-slate-900">
                Support Contacts
              </h2>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Listed service representatives and available contact channels.
              </p>
            </div>

            <div className="shrink-0 rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600">
              {filteredContacts.length}
            </div>
          </div>
        </section>

        <section className="w-full max-w-full overflow-hidden rounded-xl border border-slate-300 bg-white">
          <div className="grid w-full grid-cols-[52px_minmax(0,1fr)_minmax(0,1.25fr)_58px] border-b border-slate-300 bg-slate-50 sm:grid-cols-[70px_minmax(0,1fr)_minmax(0,1.5fr)_90px]">
            <div className="px-2 py-3 text-xs font-bold text-slate-700 sm:px-4 sm:py-4 sm:text-sm">
              ID
            </div>

            <div className="min-w-0 px-2 py-3 text-xs font-bold text-slate-700 sm:px-4 sm:py-4 sm:text-sm">
              Name
            </div>

            <div className="min-w-0 px-2 py-3 text-xs font-bold text-slate-700 sm:px-4 sm:py-4 sm:text-sm">
              WhatsApp
            </div>

            <div className="px-1 py-3 text-center text-xs font-bold text-slate-700 sm:px-2 sm:py-4 sm:text-sm">
              Chat
            </div>
          </div>

          {filteredContacts.length === 0 ? (
            <div className="px-4 py-12 text-center text-sm text-slate-500">
              No contacts found.
            </div>
          ) : (
            filteredContacts.map((contact) => (
              <ContactRow key={contact.id} contact={contact} />
            ))
          )}
        </section>

        <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
          <p className="text-xs leading-5 text-slate-600 sm:text-sm">
            Please verify the identity and purpose of a contact before sharing
            personal, financial, login, payment, OTP, PIN or other sensitive
            information.
          </p>
        </div>

        <section
          id="services"
          className="mt-10 border-t border-slate-200 pt-10"
        >
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Our Services
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            A simple directory for finding listed service contacts and
            available communication channels.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100">
              <div className="mb-2 text-xl">📞</div>
              <h3 className="font-bold">Online Support</h3>
              <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                Contact listed representatives online.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100">
              <div className="mb-2 text-xl">🌾</div>
              <h3 className="font-bold">Farmer Assistance</h3>
              <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                Find available support contacts easily.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100">
              <div className="mb-2 text-xl">💬</div>
              <h3 className="font-bold">Direct Communication</h3>
              <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                Open the listed WhatsApp contact directly.
              </p>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mt-10 border-t border-slate-200 pt-10"
        >
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            About
          </h2>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-6">
            <p className="text-sm leading-6 text-slate-600">
              This website provides a simple directory of independently listed
              service contacts and communication channels.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Contact details may change over time. Users should verify a
              contact before starting an important transaction or sharing
              sensitive information.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="mt-10 border-t border-slate-200 pt-10"
        >
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Contact Us
          </h2>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                Email
              </p>

              <p className="mt-1 break-all text-sm font-semibold text-slate-900">
                support@velkiagentlist.com
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                Business Hours
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-900">
                9:00 AM – 8:00 PM
              </p>
            </div>
          </div>
        </section>

        <section
          id="terms"
          className="mt-10 border-t border-slate-200 pt-10"
        >
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Terms & Conditions
          </h2>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-6">
            <p className="text-sm leading-6 text-slate-600">
              By using this website, you agree to use the directory for
              legitimate communication and service-related purposes.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Contact information may change. Verify the identity and current
              availability of a representative before sharing important
              information.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Never share passwords, OTP codes, PINs, bank login details or
              payment credentials through ordinary chat.
            </p>
          </div>
        </section>

        <section
          id="privacy"
          className="mt-10 border-t border-slate-200 pt-10"
        >
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Privacy Policy
          </h2>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-6">
            <p className="text-sm leading-6 text-slate-600">
              The search field works locally in the browser to filter the
              displayed contacts.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Do not enter passwords, payment information, OTP codes or other
              sensitive information into the search field.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              When you select a WhatsApp contact, the conversation takes place
              through WhatsApp and is subject to WhatsApp's own terms and
              privacy practices.
            </p>
          </div>
        </section>
      </div>

      <footer className="mt-10 w-full border-t border-slate-800 bg-slate-900">
        <div className="mx-auto w-full max-w-[1180px] px-3 py-7 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="font-bold text-white">Support Contact Directory</h3>

              <p className="mt-2 text-xs leading-5 text-slate-400">
                A simple directory for finding listed service contacts.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white">Quick Links</h3>

              <div className="mt-2 flex flex-col gap-1 text-xs">
                <a
                  href="#home"
                  className="text-slate-400 transition hover:text-white"
                >
                  Home
                </a>

                <a
                  href="#contacts"
                  className="text-slate-400 transition hover:text-white"
                >
                  Contacts
                </a>

                <a
                  href="#services"
                  className="text-slate-400 transition hover:text-white"
                >
                  Services
                </a>

                <a
                  href="#contact"
                  className="text-slate-400 transition hover:text-white"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white">Legal</h3>

              <div className="mt-2 flex flex-col gap-1 text-xs">
                <a
                  href="#terms"
                  className="text-slate-400 transition hover:text-white"
                >
                  Terms & Conditions
                </a>

                <a
                  href="#privacy"
                  className="text-slate-400 transition hover:text-white"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-700 pt-4 text-center text-[10px] text-slate-500">
            © 2026 Support Contact Directory. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}