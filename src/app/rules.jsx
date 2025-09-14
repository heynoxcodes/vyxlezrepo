// pages/rules.js

import Head from 'next/head';

export default function Rules() {
  return (
    <>
      <Head>
        <title>Vyxlez Rules</title>
        <meta name="description" content="Community guidelines for Vyxlez" />
      </Head>

      <div className="bg-gray-100 text-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-center text-yellow-600 mb-6">Vyxlez Community Rules</h1>
          <p className="text-lg text-center text-gray-600 mb-12">Please read and adhere to the following guidelines to ensure a positive experience for everyone.</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-yellow-500">1. Respect All Members</h2>
              <p className="text-lg text-gray-700">
                Treat all players and staff with kindness and respect. Harassment, hate speech, or any form of discrimination will not be tolerated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-500">2. No Cheating or Exploiting</h2>
              <p className="text-lg text-gray-700">
                Using third-party tools, exploits, or any form of cheating is strictly prohibited. Play fair and encourage others to do the same.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-500">3. Follow Platform Terms of Service</h2>
              <p className="text-lg text-gray-700">
                Adhere to the terms and conditions of both Roblox and Discord. Violations can result in penalties on both platforms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-500">4. Keep Communication Appropriate</h2>
              <p className="text-lg text-gray-700">
                Avoid spamming, trolling, or using offensive language in chats. Maintain a friendly and welcoming environment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-500">5. Listen to Moderators</h2>
              <p className="text-lg text-gray-700">
                Moderators are here to help maintain order. Follow their instructions and report any issues through the proper channels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-500">6. Report Issues Responsibly</h2>
              <p className="text-lg text-gray-700">
                If you encounter problems or witness rule-breaking, report it through the official support channels. Do not take matters into your own hands.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-500">7. Have Fun!</h2>
              <p className="text-lg text-gray-700">
                Enjoy your time in Vyxlez! Engage with the community, participate in events, and make the most of your experience.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
