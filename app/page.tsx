"use client";

import { useEffect, useMemo, useState } from "react";

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
    name: "Ashik Vai",
    whatsapp: "+601163800726",
    role: "Customer Support",
  },
  {
    id: 2,
    type: "AGENT",
    name: "Raja Vai",
    whatsapp: "+601161481563",
    role: "Customer Support",
  },
  {
    id: 3,
    type: "AGENT",
    name: "Somraj Vai",
    whatsapp: "+60182983893",
    role: "Customer Support",
  },
  {
    id: 4,
    type: "AGENT",
    name: "Rahim Vai",
    whatsapp: "+60182983893",
    role: "Customer Support",
  },
  {
    id: 5,
    type: "AGENT",
    name: "Karim Vai",
    whatsapp: "+601161481563",
    role: "Customer Support",
  },
  {
    id: 6,
    type: "AGENT",
    name: "Siam Vai",
    whatsapp: "+60182983893",
    role: "Customer Support",
  },
  {
    id: 7,
    type: "AGENT",
    name: "Roki Vai",
    whatsapp: "+971567481272",
    role: "Customer Support",
  },
  {
    id: 8,
    type: "AGENT",
    name: "Raja Vai",
    whatsapp: "+601161481563",
    role: "Customer Support",
  },
  {
    id: 9,
    type: "AGENT",
    name: "Somraj Vai",
    whatsapp: "+60182983893",
    role: "Customer Support",
  },
  {
    id: 10,
    type: "AGENT",
    name: "Sha Aman Vai",
    whatsapp: "+60172670819",
    role: "Customer Support",
  },
  {
    id: 11,
    type: "AGENT",
    name: "Akash Vai",
    whatsapp: "+601163800726",
    role: "Customer Support",
  },
];

/* -----------------------------
   WhatsApp URL
----------------------------- */

function cleanNumber(number: string) {
  return number.replace(/\D/g, "");
}

function whatsappUrl(number: string) {
  return `https://wa.me/${cleanNumber(number)}`;
}

/* -----------------------------
   Hydration-safe shuffle
----------------------------- */

function shuffleContacts(list: Contact[]) {
  const result = [...list];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

/* -----------------------------
   WhatsApp Icon
----------------------------- */

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill="#25D366" />

      <path
        d="M23.4 8.55C21.43 6.58 18.8 5.5 16 5.5C10.22 5.5 5.52 10.2 5.52 15.98C5.52 17.82 6 19.62 6.9 21.2L5.43 26.56L10.92 25.12C12.44 25.95 14.19 26.38 15.98 26.38H16C21.77 26.38 26.48 21.68 26.48 15.9C26.48 13.1 25.39 10.53 23.4 8.55ZM16 24.64C14.39 24.64 12.82 24.21 11.43 23.39L11.12 23.2L7.86 24.05L8.73 20.88L8.53 20.55C7.67 19.17 7.21 17.59 7.21 15.98C7.21 11.13 11.16 7.18 16.01 7.18C18.36 7.18 20.57 8.1 22.23 9.76C23.89 11.42 24.8 13.63 24.8 15.98C24.79 20.82 20.84 24.64 16 24.64ZM20.72 18.18C20.46 18.05 19.2 17.43 18.96 17.34C18.7 17.25 18.52 17.21 18.34 17.47C18.16 17.74 17.63 18.31 17.47 18.51C17.3 18.71 17.13 18.74 16.87 18.61C16.61 18.48 15.78 18.21 14.79 17.32C14.02 16.64 13.5 15.8 13.34 15.54C13.17 15.27 13.32 15.13 13.45 15C13.57 14.88 13.72 14.69 13.85 14.53C13.98 14.37 14.03 14.25 14.12 14.07C14.21 13.89 14.16 13.73 14.1 13.6C14.04 13.47 13.52 12.2 13.3 11.69C13.09 11.19 12.87 11.26 12.71 11.25C12.56 11.24 12.38 11.24 12.2 11.24C12.02 11.24 11.73 11.31 11.48 11.58C11.22 11.85 10.52 12.5 10.52 13.76C10.52 15.03 11.5 16.25 11.63 16.42C11.76 16.6 13.55 19.36 16.3 20.55C16.96 20.84 17.48 21.01 17.89 21.14C18.56 21.35 19.17 21.32 19.65 21.25C20.19 21.17 21.31 20.6 21.54 19.98C21.77 19.36 21.77 18.82 21.7 18.71C21.64 18.6 21.47 18.53 20.72 18.18Z"
        fill="white"
      />
    </svg>
  );
}

/* -----------------------------
   HOME
----------------------------- */

export default function Home() {
  const [search, setSearch] = useState("");

  /*
    IMPORTANT:

    Initial state is always the same.
    So server and browser initially render
    exactly the same contacts.

    Shuffle happens ONLY after the page
    has mounted in the browser.

    This prevents the previous
    "Hydration failed" problem.
  */

  const [displayContacts, setDisplayContacts] =
    useState<Contact[]>(contacts);

  useEffect(() => {
    setDisplayContacts(shuffleContacts(contacts));
  }, []);

  /* -----------------------------
     Search
  ----------------------------- */

  const filteredContacts = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return displayContacts;
    }

    return displayContacts.filter((contact) =>
      [
        contact.name,
        contact.type,
        String(contact.id),
        contact.whatsapp,
        contact.role,
      ]
        .join(" ")
        .toLowerCase()
        .includes(value)
    );
  }, [search, displayContacts]);

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* =================================
          HEADER
      ================================= */}

      <header className="border-b border-slate-200 bg-slate-900">
        <div className="mx-auto flex min-h-[72px] max-w-[1180px] items-center justify-between px-4 sm:px-6">

          <a
            href="#home"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400 text-sm font-black text-slate-900">
              VA
            </div>

            <div>
              <h1 className="text-base font-bold leading-tight text-white sm:text-lg">
                Velki Agent List
              </h1>

              <p className="text-[11px] text-slate-300 sm:text-xs">
                Farmer Support & Service
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">

            <a
              href="#home"
              className="text-sm font-medium text-white hover:text-yellow-300"
            >
              Home
            </a>

            <a
              href="#services"
              className="text-sm font-medium text-white hover:text-yellow-300"
            >
              Services
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-white hover:text-yellow-300"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-white hover:text-yellow-300"
            >
              Contact
            </a>

          </nav>

          <div className="md:hidden">
            <span className="rounded-md border border-slate-600 px-3 py-2 text-xs font-medium text-white">
              Menu
            </span>
          </div>

        </div>
      </header>

      {/* =================================
          MAIN
      ================================= */}

      <section
        id="home"
        className="mx-auto max-w-[1180px] px-3 py-6 sm:px-6 sm:py-9"
      >

        {/* SEARCH */}

        <div className="mb-7">

          <label
            htmlFor="search"
            className="mb-2 block text-sm font-semibold text-slate-900"
          >
            Search contacts
          </label>

          <div className="flex flex-col gap-2 sm:flex-row">

            <input
              id="search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, ID or phone number..."
              autoComplete="off"
              className="h-11 w-full rounded-md border border-slate-300 bg-white px-4 text-sm outline-none placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />

            <button
              type="button"
              onClick={() => setSearch("")}
              className="h-11 rounded-md bg-slate-700 px-7 text-sm font-bold text-white hover:bg-slate-800"
            >
              Clear
            </button>

          </div>

        </div>

        {/* CONTACT HEADER */}

        <div
          id="contacts"
          className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
        >

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Support Contacts
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Listed service representatives and available contact channels.
            </p>
          </div>

          <div className="w-fit rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600">
            {filteredContacts.length} contacts
          </div>

        </div>

        {/* =================================
            CONTACT TABLE

            SAME TABLE STYLE ON DESKTOP
            AND MOBILE

            Mobile has horizontal scroll
            instead of cards.
        ================================= */}

        <div className="overflow-x-auto rounded-lg border border-slate-300">

          <div className="min-w-[820px]">

            {/* TABLE HEADER */}

            <div className="grid grid-cols-[110px_1fr_70px_190px_150px] border-b border-slate-300 bg-slate-50 text-sm font-bold text-slate-900">

              <div className="px-4 py-4">
                Type
              </div>

              <div className="px-4 py-4">
                Name
              </div>

              <div className="px-4 py-4">
                ID
              </div>

              <div className="px-4 py-4">
                WhatsApp
              </div>

              <div className="px-4 py-4 text-center">
                Action
              </div>

            </div>

            {/* TABLE BODY */}

            {filteredContacts.length === 0 ? (

              <div className="px-6 py-14 text-center text-sm text-slate-500">
                No contacts found.
              </div>

            ) : (

              filteredContacts.map((contact) => (

                <div
                  key={contact.id}
                  className="grid grid-cols-[110px_1fr_70px_190px_150px] items-center border-b border-slate-200 last:border-b-0"
                >

                  {/* TYPE */}

                  <div className="px-4 py-5 text-xs font-semibold text-slate-600">
                    {contact.type}
                  </div>

                  {/* NAME */}

                  <a
                    href={whatsappUrl(contact.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-5 hover:bg-green-50"
                  >

                    <div className="text-sm font-bold text-slate-900">
                      {contact.name}
                    </div>

                    <div className="mt-1 text-xs text-slate-500">
                      {contact.role}
                    </div>

                  </a>

                  {/* ID */}

                  <div className="px-4 py-5 text-sm text-slate-600">
                    {contact.id}
                  </div>

                  {/* NUMBER */}

                  <a
                    href={whatsappUrl(contact.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-5 text-sm font-bold text-slate-900 hover:bg-green-50 hover:text-green-700"
                  >
                    {contact.whatsapp}
                  </a>

                  {/* ACTION */}

                  <div className="px-3 py-4 text-center">

                    <a
                      href={whatsappUrl(contact.whatsapp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-green-600 px-3 py-2.5 text-xs font-bold text-white hover:bg-green-700"
                    >

                      <WhatsAppIcon size={19} />

                      <span>
                        Chat
                      </span>

                    </a>

                  </div>

                </div>

              ))

            )}

          </div>

        </div>

        {/* MOBILE TABLE NOTE */}

        <p className="mt-2 text-[11px] text-slate-400 md:hidden">
          Swipe left or right to view the complete table.
        </p>

        {/* =================================
            SERVICES
        ================================= */}

        <section
          id="services"
          className="mt-10 border-t border-slate-200 pt-10"
        >

          <div className="mb-6">

            <h2 className="text-2xl font-bold text-slate-900">
              Our Services
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              We provide a simple online directory for finding listed
              service representatives and available communication channels.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">

              <div className="mb-3 text-2xl">
                📞
              </div>

              <h3 className="font-bold">
                Online Support
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Users can contact listed representatives online and ask
                questions about available services.
              </p>

            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">

              <div className="mb-3 text-2xl">
                🌾
              </div>

              <h3 className="font-bold">
                Farmer Assistance
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                The directory is designed to make communication easier
                for farmers and community members.
              </p>

            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">

              <div className="mb-3 text-2xl">
                💬
              </div>

              <h3 className="font-bold">
                Direct Communication
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Users can use the listed WhatsApp links to communicate
                directly with available representatives.
              </p>

            </div>

          </div>

        </section>

        {/* =================================
            ABOUT
        ================================= */}

        <section
          id="about"
          className="mt-10 border-t border-slate-200 pt-10"
        >

          <h2 className="text-2xl font-bold text-slate-900">
            About Us
          </h2>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-5 sm:p-6">

            <p className="text-sm leading-7 text-slate-600">
              Velki Agent List is a contact directory designed to make
              it easier for users to find listed service representatives
              and communication channels online.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              The directory provides contact information in a simple
              searchable format so users can quickly find a listed
              representative.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Users should independently verify contact identity and
              purpose before sharing payment information, passwords,
              OTP codes, banking information, or other sensitive data.
            </p>

          </div>

        </section>

        {/* =================================
            CONTACT
        ================================= */}

        <section
          id="contact"
          className="mt-10 border-t border-slate-200 pt-10"
        >

          <h2 className="text-2xl font-bold text-slate-900">
            Contact Us
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            <div className="rounded-lg border border-slate-200 bg-white p-5">

              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Email
              </p>

              <a
                href="mailto:support@velkiagentlist.com"
                className="mt-2 block break-all text-sm font-semibold text-slate-900 hover:underline"
              >
                support@velkiagentlist.com
              </a>

            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-5">

              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Business Hours
              </p>

              <p className="mt-2 text-sm font-semibold text-slate-900">
                9:00 AM – 8:00 PM
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Local service time
              </p>

            </div>

          </div>

          <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 p-5">

            <h3 className="font-bold text-slate-900">
              Safety Notice
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Never share your password, OTP, PIN, bank login details,
              payment credentials, or other sensitive information with
              an unverified contact. Verify the identity of a representative
              through an independent channel if you are unsure.
            </p>

          </div>

        </section>

        {/* =================================
            BUSINESS INFORMATION
        ================================= */}

        <section className="mt-10 border-t border-slate-200 pt-10">

          <h2 className="text-2xl font-bold text-slate-900">
            Business Information
          </h2>

          <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-5 sm:p-6">

            <div className="grid gap-5 sm:grid-cols-2">

              <div>

                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Service Type
                </p>

                <p className="mt-1 text-sm font-semibold">
                  Farmer & Community Support
                </p>

              </div>

              <div>

                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Support Channel
                </p>

                <p className="mt-1 text-sm font-semibold">
                  Online / WhatsApp
                </p>

              </div>

              <div>

                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Email
                </p>

                <p className="mt-1 break-all text-sm font-semibold">
                  support@velkiagentlist.com
                </p>

              </div>

              <div>

                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Service Hours
                </p>

                <p className="mt-1 text-sm font-semibold">
                  9:00 AM – 8:00 PM
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =================================
            TERMS
        ================================= */}

        <section
          id="terms"
          className="mt-10 border-t border-slate-200 pt-10"
        >

          <h2 className="text-2xl font-bold text-slate-900">
            Terms & Conditions
          </h2>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-5 sm:p-6">

            <p className="text-sm leading-7 text-slate-600">
              By using this website, you agree to use the contact
              directory for legitimate communication and service-related
              purposes.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Contact information may change over time. Users should
              verify the identity and current availability of a
              representative before starting an important transaction.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Users are responsible for the information they choose
              to share with third-party contacts. Do not send passwords,
              OTP codes, payment credentials, banking information,
              or other sensitive information through ordinary chat.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              We may update, remove, or modify contact information
              when necessary to maintain the directory.
            </p>

          </div>

        </section>

        {/* =================================
            PRIVACY
        ================================= */}

        <section
          id="privacy"
          className="mt-10 border-t border-slate-200 pt-10"
        >

          <h2 className="text-2xl font-bold text-slate-900">
            Privacy Policy
          </h2>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-5 sm:p-6">

            <p className="text-sm leading-7 text-slate-600">
              We respect your privacy. This website is designed primarily
              as a contact directory and does not require users to publish
              sensitive personal information.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Search terms entered into the contact search field are used
              locally on the page to filter the displayed directory.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Do not enter passwords, payment information, OTP codes,
              banking information, or other sensitive information into
              the search field.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              When you choose to contact a representative through WhatsApp,
              your communication takes place through WhatsApp and may be
              subject to WhatsApp&apos;s own terms and privacy practices.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              If you contact us by email, information in your message
              may be used to respond to your support request and address
              legitimate operational issues.
            </p>

          </div>

        </section>

        {/* =================================
            IMPORTANT INFORMATION
        ================================= */}

        <section className="mt-10 border-t border-slate-200 pt-10">

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 sm:p-6">

            <h2 className="text-lg font-bold text-slate-900">
              Important Information
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              This website provides an independent directory of listed
              service contacts. Contact details may belong to individual
              representatives or service workers. Please verify the
              identity and purpose of a contact before sharing personal,
              financial, login, payment, or other sensitive information.
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              If a person asks for an OTP, password, bank login, PIN,
              or unusual payment, stop the conversation and verify the
              request through an independent channel.
            </p>

          </div>

        </section>

      </section>

      {/* =================================
          FOOTER
      ================================= */}

      <footer className="mt-12 border-t border-slate-200 bg-slate-900">

        <div className="mx-auto max-w-[1180px] px-4 py-8 sm:px-6">

          <div className="grid gap-8 md:grid-cols-3">

            <div>

              <h3 className="font-bold text-white">
                Velki Agent List
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                A contact directory designed to help users find
                available service representatives online.
              </p>

            </div>

            <div>

              <h3 className="font-bold text-white">
                Quick Links
              </h3>

              <div className="mt-3 flex flex-col gap-2 text-sm">

                <a
                  href="#home"
                  className="text-slate-400 hover:text-white"
                >
                  Home
                </a>

                <a
                  href="#services"
                  className="text-slate-400 hover:text-white"
                >
                  Services
                </a>

                <a
                  href="#about"
                  className="text-slate-400 hover:text-white"
                >
                  About
                </a>

                <a
                  href="#contact"
                  className="text-slate-400 hover:text-white"
                >
                  Contact
                </a>

              </div>

            </div>

            <div>

              <h3 className="font-bold text-white">
                Legal
              </h3>

              <div className="mt-3 flex flex-col gap-2 text-sm">

                <a
                  href="#terms"
                  className="text-slate-400 hover:text-white"
                >
                  Terms & Conditions
                </a>

                <a
                  href="#privacy"
                  className="text-slate-400 hover:text-white"
                >
                  Privacy Policy
                </a>

                <a
                  href="mailto:support@velkiagentlist.com"
                  className="break-all text-slate-400 hover:text-white"
                >
                  support@velkiagentlist.com
                </a>

              </div>

            </div>

          </div>

          <div className="mt-8 border-t border-slate-700 pt-5 text-center text-xs text-slate-500">
            © 2026 Velki Agent List. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}