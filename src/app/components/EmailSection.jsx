"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const resData = await response.json();
      if (response.ok && resData?.success) {
        setEmailSubmitted(true);
      } else {
        setErrorMsg(resData?.error || "Failed to send email. Try again later.");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 relative">
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 relative z-10">
        {/* ── Left ── */}
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/70 font-mono mb-3">Get in touch</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-[#8892a4] mb-8 max-w-sm leading-relaxed">
            I&apos;m currently open to new opportunities. Whether you have a project,
            a question, or just want to say hi &mdash; my inbox is always open.
          </p>

          <div className="flex gap-4 mb-8">
            <Link
              href="https://github.com/blaqdraco"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10 hover:border-cyan-400/30"
            >
              <Image src={GithubIcon} alt="GitHub" width={20} height={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/imani-lameck-19a481203/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10 hover:border-cyan-400/30"
            >
              <Image src={LinkedinIcon} alt="LinkedIn" width={20} height={20} />
            </Link>
          </div>

          {/* Security note */}
          <div className="inline-flex items-start gap-3 rounded-xl border border-cyan-400/10 bg-cyan-400/5 p-4 max-w-xs">
            <span className="mt-0.5 shrink-0 text-cyan-400" aria-hidden>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Messages are handled securely. Your data is never stored or shared.
            </p>
          </div>
        </div>

        {/* ── Right: Form ── */}
        <div className="rounded-2xl border border-white/[0.06] bg-[#0d1b2a]/80 backdrop-blur-md p-6 sm:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
          {emailSubmitted ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[280px] text-center gap-5">
              {/* Checkmark icon */}
              <div className="flex items-center justify-center h-16 w-16 rounded-full border-2 border-emerald-400/40 bg-emerald-400/10">
                <svg className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Message Sent!</h3>
                <p className="text-[#8892a4] text-sm max-w-xs">
                  Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs font-mono text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Securely delivered
              </div>
            </div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {errorMsg && (
                <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" />
                  </svg>
                  {errorMsg}
                </div>
              )}

              {/* Email — floating label */}
              <div className="float-label-wrapper">
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  placeholder=" "
                  className="w-full rounded-lg border border-white/10 bg-[#060f1c] px-3 text-slate-100 text-sm outline-none transition focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20"
                  style={{ paddingTop: "1.35rem", paddingBottom: "0.4rem" }}
                />
                <label htmlFor="email">Your email</label>
              </div>

              {/* Subject — floating label */}
              <div className="float-label-wrapper">
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  placeholder=" "
                  className="w-full rounded-lg border border-white/10 bg-[#060f1c] px-3 text-slate-100 text-sm outline-none transition focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20"
                  style={{ paddingTop: "1.35rem", paddingBottom: "0.4rem" }}
                />
                <label htmlFor="subject">Subject</label>
              </div>

              {/* Message — floating label */}
              <div className="float-label-wrapper">
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  placeholder=" "
                  className="w-full rounded-lg border border-white/10 bg-[#060f1c] px-3 py-4 text-slate-100 text-sm outline-none transition focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20 resize-none"
                />
                <label htmlFor="message" className="!top-4 !transform-none">Message</label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 py-3 px-6 font-semibold text-white shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 hover:shadow-[0_0_32px_rgba(34,211,238,0.4)] hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
