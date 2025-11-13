import React, { useState } from "react";

export default function WaitlistMiniApp() {
  const [fid, setFid] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!fid && !email) {
      setMsg("Please enter your FID or email to join the waitlist.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fid, email }),
      });
      const j = await res.json();
      if (res.ok) {
        setMsg("Successfully added to the waitlist — thank you!");
        setFid("");
        setEmail("");
      } else {
        setMsg(j.error || "Failed to join the waitlist. Please try again.");
      }
    catch (_err) {
  console.log("Something went wrong");
}

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-zinc-900 to-indigo-900 p-6">
      <div className="max-w-2xl w-full bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/10">
        <header className="mb-4">
          <h1 className="text-3xl font-extrabold text-white">Join the FID Waitlist</h1>
          <p className="text-sm text-slate-300 mt-1">
            Enter your Farcaster FID (or email) to join the waitlist and get notified when we launch.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1">FID (Farcaster ID)</label>
            <input
              value={fid}
              onChange={(e) => setFid(e.target.value)}
              placeholder="e.g. fid:12345"
              className="w-full rounded-lg p-3 bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">Email (optional)</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@domain.com"
              className="w-full rounded-lg p-3 bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 font-semibold text-white shadow-lg disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Join Waitlist"}
            </button>

            <button
              type="button"
              onClick={() => {
                setFid("");
                setEmail("");
                setMsg("");
              }}
              className="px-4 py-2 rounded-lg border border-white/10 text-sm text-slate-200"
            >
              Reset
            </button>
          </div>

          {msg && <p className="text-sm text-slate-200 mt-2">{msg}</p>}
        </form>

        <section className="mt-6 text-slate-300">
          <h2 className="font-semibold text-white mb-2">Optional Features</h2>
          <ul className="list-disc pl-5">
            <li>Simple FID validation (regex) before submission</li>
            <li>Email notification integration (SendGrid / Mailgun)</li>
            <li>Admin dashboard to view and export waitlist data</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
