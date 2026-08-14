"use client";

import { useMemo, useState } from "react";

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
    name: "Semrat Vai",
    whatsapp: "+601163800726",
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
];

function cleanNumber(number: string) {
  return number.replace(/\D/g, "");
}

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredContacts = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) return contacts;

    return contacts.filter((contact) =>
      `${contact.name} ${contact.type} ${contact.id} ${contact.whatsapp} ${contact.role}`
        .toLowerCase()
        .includes(value)
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* =====================================================
          HEADER
      ====================================================== */}
      <header className="border-b border-slate-200 bg-slate-900">
        <div className="mx-auto flex min-h-[78px] max-w-[1180px] items-center justify-between px-4 sm:px-6">

          {/* Logo / Brand */}
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-yellow-400 text-lg font-black text-slate-900">
              VA
            </div>

            <div>
              <h1 className="text-lg font-bold leading-tight text-white sm:text-xl">
                Velki Agent List
              </h1>

              <p className="text-xs text-slate-300 sm:text-sm">
                Farmer Support & Service
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 md:flex">
            <a
              href="#home"
              className="text-sm font-medium text-white transition hover:text-yellow-300"
            >
              Home
            </a>

            <a
              href="#services"
              className="text-sm font-medium text-white transition hover:text-yellow-300"
            >
              Services
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-white transition hover:text-yellow-300"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-white transition hover:text-yellow-300"
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu indicator */}
          <div className="md:hidden">
            <span className="rounded-md border border-slate-600 px-3 py-2 text-xs font-medium text-white">
              Menu
            </span>
          </div>
        </div>
      </header>

      {/* =====================================================
          MAIN
      ====================================================== */}
      <section
        id="home"
        className="mx-auto max-w-[1180px] px-4 py-7 sm:px-6 sm:py-10"
      >

        {/* =================================================
            SEARCH
        ================================================== */}
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
              className="h-12 w-full rounded-md border border-slate-300 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />

            <button
              type="button"
              onClick={() => setSearch("")}
              className="h-12 rounded-md bg-slate-700 px-7 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Clear
            </button>
          </div>
        </div>

        {/* =================================================
            CONTACT TITLE
        ================================================== */}
        <div
          id="contacts"
          className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Support Contacts
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Contact our listed service representatives for assistance.
            </p>
          </div>

          <div className="w-fit rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600">
            {filteredContacts.length} contacts
          </div>
        </div>

        {/* =================================================
            DESKTOP CONTACT TABLE
        ================================================== */}
        <div className="hidden overflow-hidden rounded-lg border border-slate-300 md:block">

          {/* Table Header */}
          <div className="grid grid-cols-[140px_1fr_100px_190px_150px] border-b border-slate-300 bg-slate-50 text-sm font-bold text-slate-900">

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

          {/* Table Rows */}
          {filteredContacts.length === 0 ? (
            <div className="px-6 py-14 text-center text-sm text-slate-500">
              No contacts found.
            </div>
          ) : (
            filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className="grid grid-cols-[140px_1fr_100px_190px_150px] items-center border-b border-slate-200 last:border-b-0"
              >

                <div className="px-4 py-5 text-sm text-slate-600">
                  {contact.type}
                </div>

                <div className="px-4 py-5">
                  <div className="text-sm font-bold text-slate-900">
                    {contact.name}
                  </div>

                  <div className="mt-1 text-xs text-slate-500">
                    {contact.role}
                  </div>
                </div>

                <div className="px-4 py-5 text-sm text-slate-600">
                  {contact.id}
                </div>

                <div className="px-4 py-5 text-sm font-bold text-slate-900">
                  {contact.whatsapp}
                </div>

                <div className="px-4 py-5 text-center">
                  <a
                    href={`https://wa.me/${cleanNumber(contact.whatsapp)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-md bg-green-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-green-700"
                  >
                    WhatsApp
                  </a>
                </div>

              </div>
            ))
          )}
        </div>

        {/* =================================================
            MOBILE CONTACT CARDS
        ================================================== */}
        <div className="space-y-3 md:hidden">

          {filteredContacts.length === 0 ? (
            <div className="rounded-lg border border-slate-200 px-5 py-10 text-center text-sm text-slate-500">
              No contacts found.
            </div>
          ) : (
            filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className="overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm"
              >

                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">

                  <div className="flex min-w-0 items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                      {String(contact.id).padStart(2, "0")}
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-base font-bold text-slate-900">
                        {contact.name}
                      </h3>

                      <p className="text-xs text-slate-500">
                        {contact.role}
                      </p>
                    </div>

                  </div>

                  <span className="ml-2 shrink-0 rounded-full bg-green-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-green-700">
                    Agent
                  </span>

                </div>

                {/* WhatsApp */}
                <div className="bg-slate-50 px-4 py-4">

                  <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                    WhatsApp Number
                  </p>

                  <div className="mt-2 flex items-center justify-between gap-3">

                    <p className="break-all text-sm font-bold text-slate-900">
                      {contact.whatsapp}
                    </p>

                    <a
                      href={`https://wa.me/${cleanNumber(contact.whatsapp)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-md bg-green-600 px-3 py-2 text-xs font-bold text-white"
                    >
                      Chat
                    </a>

                  </div>

                </div>

                {/* Bottom Info */}
                <div className="flex items-center justify-between px-4 py-3 text-xs">

                  <span className="text-slate-500">
                    Contact ID
                  </span>

                  <span className="font-bold text-slate-700">
                    #{contact.id}
                  </span>

                </div>

              </div>
            ))
          )}

        </div>

        {/* =================================================
            SERVICES
        ================================================== */}
        <section
          id="services"
          className="mt-10 border-t border-slate-200 pt-10"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Our Services
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              We provide an easy way for local farmers and community members
              to communicate with service representatives and get assistance
              online.
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
                Farmers can contact listed representatives online and ask
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
                Our service directory is designed to make communication
                easier for local farmers and community members.
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
                Users can use the listed WhatsApp contacts to communicate
                directly with available representatives.
              </p>
            </div>

          </div>
        </section>

        {/* =================================================
            ABOUT
        ================================================== */}
        <section
          id="about"
          className="mt-10 border-t border-slate-200 pt-10"
        >
          <h2 className="text-2xl font-bold text-slate-900">
            About Us
          </h2>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-5 sm:p-6">

            <p className="text-sm leading-7 text-slate-600">
              Velki Agent List is a community-focused contact directory
              created to make it easier for local farmers and customers to
              communicate with available service representatives online.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Our main goal is simple: provide a convenient communication
              channel so farmers can find an available representative and
              ask for help without needing to visit an office physically.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Contact information should always be independently verified
              before sharing payment information, passwords, OTP codes,
              banking information, or other sensitive information.
            </p>

          </div>
        </section>

        {/* =================================================
            CONTACT
        ================================================== */}
        <section
          id="contact"
          className="mt-10 border-t border-slate-200 pt-10"
        >
          <h2 className="text-2xl font-bold text-slate-900">
            Contact Us
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            {/* Email */}
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

            {/* Business Hours */}
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
              Never share your password, OTP, PIN, bank login details or
              other sensitive information through an unverified contact.
              If you are unsure about a representative, verify their identity
              through an independent channel before continuing.
            </p>
          </div>
        </section>

        {/* =================================================
            BUSINESS INFORMATION
        ================================================== */}
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

        {/* =================================================
            TERMS & CONDITIONS
        ================================================== */}
        <section
          id="terms"
          className="mt-10 border-t border-slate-200 pt-10"
        >
          <h2 className="text-2xl font-bold text-slate-900">
            Terms & Conditions
          </h2>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-5 sm:p-6">

            <p className="text-sm leading-7 text-slate-600">
              By using this website, you agree to use the contact directory
              for legitimate communication and service-related purposes.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Contact information listed on this website may change over
              time. Users should verify the identity and current availability
              of a representative before starting an important transaction
              or sharing sensitive information.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Users are responsible for the information they choose to share
              with third-party contacts. Do not send passwords, OTP codes,
              payment credentials, banking information, or other sensitive
              information through ordinary chat.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              We may update, remove, or modify contact information when
              necessary to maintain the quality and safety of the directory.
            </p>

          </div>
        </section>

        {/* =================================================
            PRIVACY POLICY
        ================================================== */}
        <section
          id="privacy"
          className="mt-10 border-t border-slate-200 pt-10"
        >
          <h2 className="text-2xl font-bold text-slate-900">
            Privacy Policy
          </h2>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-5 sm:p-6">

            <p className="text-sm leading-7 text-slate-600">
              We respect your privacy. This website is designed primarily as
              a contact directory and does not require users to publish
              sensitive personal information.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Search terms entered into the contact search field are used
              locally on the page to filter the displayed directory. Do not
              enter passwords, payment information, OTP codes, or other
              sensitive information into the search field.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              When you choose to contact a representative through WhatsApp,
              your communication takes place through WhatsApp and may be
              subject to WhatsApp's own privacy practices and terms.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              If you contact us by email, information contained in your
              message may be used only to respond to your support request,
              maintain service quality, and address legitimate operational
              issues.
            </p>

          </div>
        </section>

        {/* =================================================
            IMPORTANT INFORMATION
        ================================================== */}
        <section className="mt-10 border-t border-slate-200 pt-10">

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 sm:p-6">

            <h2 className="text-lg font-bold text-slate-900">
              Important Information
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              This website provides an independent directory of listed
              service contacts. Contact details may belong to individual
              representatives or service workers. Please verify the identity
              and purpose of a contact before sharing personal, financial,
              login, payment, or other sensitive information.
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              If a person asks for an OTP, password, bank login, PIN, or
              unusual payment, stop the conversation and verify the request
              through an independent channel.
            </p>

          </div>

        </section>

      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="mt-12 border-t border-slate-200 bg-slate-900">

        <div className="mx-auto max-w-[1180px] px-4 py-8 sm:px-6">

          <div className="grid gap-8 md:grid-cols-3">

            {/* Footer brand */}
            <div>
              <h3 className="font-bold text-white">
                Velki Agent List
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                A community-focused contact directory designed to help local
                farmers communicate with available service representatives.
              </p>
            </div>

            {/* Footer links */}
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

            {/* Footer legal */}
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
            © {new Date().getFullYear()} Velki Agent List. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}