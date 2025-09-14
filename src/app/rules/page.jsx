// src/app/rules/page.jsx
import Link from "next/link";

export default function Rules() {
  return (
    <div className="min-h-screen bg-black text-gray-200 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
      <div className="max-w-4xl mx-auto bg-gray-900 bg-opacity-80 p-10 rounded-3xl shadow-2xl">
        {/* Back home link */}
        <Link href="/">
          <a className="text-yellow-400 hover:text-yellow-200 font-medium mb-6 inline-block transition-colors duration-300">&larr; Back Home</a>
        </Link>

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center text-yellow-400 mb-6 drop-shadow-lg">
          Vyxlez Community Rules
        </h1>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Read carefully and follow these rules to keep Vyxlez safe, fun, and respectful for everyone. Breaking these rules may result in penalties.
        </p>

        {/* Rules sections */}
        <div className="space-y-8">
          <section className="hover:scale-[1.01] transition-transform duration-300">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">1. Respect All Members</h2>
            <p>
              Treat everyone with kindness and courtesy. Harassment, hate speech, personal attacks, or discrimination are strictly prohibited. Respect moderators, players, and staff alike.
            </p>
          </section>

          <section className="hover:scale-[1.01] transition-transform duration-300">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">2. No Cheating, Exploits, or Hacks</h2>
            <p>
              Using unauthorized software, exploiting bugs, or cheating in any way is forbidden. Fair play is essential to maintain a healthy community. Repeat offenders will be banned.
            </p>
          </section>

          <section className="hover:scale-[1.01] transition-transform duration-300">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">3. Follow Roblox & Discord Rules</h2>
            <p>
              Always follow the terms of service for both Roblox and Discord. Violating platform rules may result in actions both here and on the platform itself.
            </p>
          </section>

          <section className="hover:scale-[1.01] transition-transform duration-300">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">4. Appropriate Communication</h2>
            <p>
              Keep chats clean and friendly. Avoid spam, offensive language, trolling, or disruptive behavior. Positive communication makes the community enjoyable for everyone.
            </p>
          </section>

          <section className="hover:scale-[1.01] transition-transform duration-300">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">5. Follow Moderators’ Instructions</h2>
            <p>
              Moderators maintain order and safety. Listen to their instructions and do not argue unnecessarily. If you have concerns, report them calmly via the proper channels.
            </p>
          </section>

          <section className="hover:scale-[1.01] transition-transform duration-300">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">6. Responsible Reporting</h2>
            <p>
              If you see rule-breaking, report it through official channels. Do not try to handle conflicts yourself or escalate situations aggressively.
            </p>
          </section>

          <section className="hover:scale-[1.01] transition-transform duration-300">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">7. Keep Content Safe & Legal</h2>
            <p>
              Do not share inappropriate content, NSFW materials, or anything illegal. All shared content must be safe for the community.
            </p>
          </section>

          <section className="hover:scale-[1.01] transition-transform duration-300">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">8. Participate Positively</h2>
            <p>
              Join events, interact respectfully with the community, and contribute to a friendly environment. Your actions help make Vyxlez an enjoyable space.
            </p>
          </section>

          <section className="hover:scale-[1.01] transition-transform duration-300">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">9. Consequences of Breaking Rules</h2>
            <p>
              Violations may result in warnings, temporary bans, or permanent removal from the community depending on severity. Repeat or severe offenses will be treated strictly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
