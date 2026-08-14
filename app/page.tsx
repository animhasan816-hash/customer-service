"use client";

import { useState } from "react";

const contacts = [
  { id: 1, name: "Ashik Vai", phone: "+601161481563" },
  { id: 2, name: "Raja Vai", phone: "+60182983893" },
  { id: 3, name: "Somrat Vai", phone: "+601163800726" },
  { id: 4, name: "Rahim Vai", phone: "+60182983893" },
  { id: 5, name: "Karim Vai", phone: "+601163800726" },
  { id: 6, name: "Siam Vai", phone: "+601161481563" },
];

const whatsappLink = (phone: string) =>
  `https://wa.me/${phone.replace(/\D/g, "")}`;

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.phone.includes(search)
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">

          {/* Small Yellow Customer Service Box */}
          <a
            href="#top"
            className="rounded-md bg-yellow-400 px-2.5 py-1.5 text-[9px] font-black tracking-wide text-slate-900 sm:text-[10px]"
          >
            CUSTOMER SERVICE
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-4 text-xs font-medium text-slate-600 sm:gap-6 sm:text-sm">
            <a href="#services" className="hover:text-slate-900">
              Services
            </a>

            <a href="#about" className="hidden sm:block hover:text-slate-900">
              About
            </a>

            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
          </nav>

        </div>
      </header>

      {/* CONTACT LIST */}
      <section id="top" className="px-4 pb-16 pt-8 sm:px-6 sm:pt-10">
        <div className="mx-auto max-w-6xl">

          {/* Search */}
          <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

            <label
              htmlFor="search"
              className="mb-2 block text-sm font-bold"
            >
              Search contacts
            </label>

            <input
              id="search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name or phone number..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
            />

          </div>

          {/* Desktop List */}
          <div
            id="services"
            className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:block"
          >

            <div className="grid grid-cols-4 bg-slate-100 px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-600">
              <div>No.</div>
              <div>Name</div>
              <div>WhatsApp Number</div>
              <div className="text-right">Contact</div>
            </div>

            {filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className="grid grid-cols-4 items-center border-t border-slate-200"
              >

                <div className="px-6 py-5 text-sm font-bold text-slate-400">
                  {String(contact.id).padStart(2, "0")}
                </div>

                {/* Clickable Name */}
                <a
                  href={whatsappLink(contact.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-5 text-sm font-bold hover:text-green-600"
                >
                  {contact.name}
                </a>

                {/* Clickable Number */}
                <a
                  href={whatsappLink(contact.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-5 text-sm text-slate-600 hover:text-green-600"
                >
                  {contact.phone}
                </a>

                {/* WhatsApp Button */}
                <div className="px-6 py-5 text-right">
                  <a
                    href={whatsappLink(contact.phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg bg-green-600 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-green-700"
                  >
                    WhatsApp
                  </a>
                </div>

              </div>
            ))}

          </div>

          {/* Mobile List */}
          <div className="space-y-3 md:hidden">

            {filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >

                <div className="flex items-center justify-between">

                  <span className="text-xs font-bold text-slate-400">
                    #{String(contact.id).padStart(2, "0")}
                  </span>

                  <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-bold text-green-700">
                    AVAILABLE
                  </span>

                </div>

                {/* Clickable Name */}
                <a
                  href={whatsappLink(contact.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-base font-bold hover:text-green-600"
                >
                  {contact.name}
                </a>

                {/* Clickable Number */}
                <a
                  href={whatsappLink(contact.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm text-slate-500 hover:text-green-600"
                >
                  {contact.phone}
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappLink(contact.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block w-full rounded-xl bg-green-600 py-3 text-center text-sm font-bold text-white transition hover:bg-green-700"
                >
                  Chat on WhatsApp
                </a>

              </div>
            ))}

          </div>

          {/* No Results */}
          {filteredContacts.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
              No customer service contact found.
            </div>
          )}

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y bg-white px-4 py-14 sm:px-6">

        <div className="mx-auto max-w-5xl">

          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Simple Process
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              How it works
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="text-sm font-bold text-blue-600">01</div>

              <h3 className="mt-2 font-bold">
                Choose a contact
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Review the available customer service contacts.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="text-sm font-bold text-blue-600">02</div>

              <h3 className="mt-2 font-bold">
                Click WhatsApp
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Select the name, phone number, or WhatsApp button.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="text-sm font-bold text-blue-600">03</div>

              <h3 className="mt-2 font-bold">
                Start your conversation
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Continue your conversation directly through WhatsApp.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="px-4 py-14 sm:px-6">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
            About
          </p>

          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            About this website
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            This website provides a simple customer service contact directory.
            Visitors can search the available contact list and choose a
            listed WhatsApp contact for assistance.
          </p>

        </div>

      </section>

      {/* DISCLAIMER */}
      <section className="bg-slate-100 px-4 py-10 sm:px-6">

        <div className="mx-auto max-w-4xl">

          <h2 className="text-lg font-bold">
            Disclaimer
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            The information displayed on this website is provided for
            customer service communication. Please verify information
            received during any conversation before making decisions or
            sharing personal information.
          </p>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="px-4 py-14 sm:px-6">

        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 px-6 py-10 text-center text-white sm:px-10">

          <h2 className="text-2xl font-bold sm:text-3xl">
            Contact Customer Service
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300">
            Choose a contact from the directory above to start a WhatsApp
            conversation.
          </p>

          <a
            href="#services"
            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-100"
          >
            View Contacts
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white px-4 py-8 sm:px-6">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-6 sm:grid-cols-3">

            <div>
              <div className="inline-block rounded-md bg-yellow-400 px-2 py-1">
                <span className="text-[10px] font-black text-slate-900">
                  CUSTOMER SERVICE
                </span>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-500">
                A simple customer service contact directory.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold">
                Quick Links
              </h3>

              <div className="mt-3 flex flex-col gap-2 text-xs text-slate-500">
                <a href="#services" className="hover:text-slate-900">
                  Services
                </a>

                <a href="#about" className="hover:text-slate-900">
                  About
                </a>

                <a href="#contact" className="hover:text-slate-900">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold">
                Important
              </h3>

              <p className="mt-3 text-xs leading-5 text-slate-500">
                Please review information carefully before sharing personal
                or sensitive information.
              </p>
            </div>

          </div>

          <div className="mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
            © 2026 Customer Service. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}