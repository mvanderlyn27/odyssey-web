import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-grow container mx-auto px-6 md:px-12 lg:px-24 py-12 animate-fade-in relative">
        <Link to="/" className="absolute top-8 left-8 text-white hover:underline">
          &larr; Back
        </Link>
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <div className="space-y-6">
          <p className="text-sm text-gray-400">Effective Date: January 2025</p>
          <p>
            Welcome to Odyssey. (“we,” “us,” “our”). We are committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you use our mobile application
            (the “App”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy
            policy, please do not access the App.
          </p>
          <p>
            We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert
            you about any changes by updating the “Effective Date” of this Privacy Policy. You are encouraged to
            periodically review this Privacy Policy to stay informed of updates.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-2">1. INFORMATION WE COLLECT</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect via the App
              depends on the content and materials you use, and includes:
            </p>
            <div className="ml-4 mt-2 space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">A. Personal Data You Provide to Us</h3>
                <p>
                  We collect information you provide directly to us when you create an account, fill out a profile, or
                  communicate with us. This information may include:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Account Information: Your name, email address, password, date of birth, and gender.</li>
                  <li>Profile Information: Your profile picture, height, weight, and fitness goals.</li>
                  <li>
                    Communications: Any feedback, questions, or information you provide when contacting customer
                    support.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">B. Health and Activity Data (Sensitive Data)</h3>
                <p>
                  As a core function of our App, we collect health and activity data. We understand this data is
                  sensitive and handle it with the highest degree of care. This data includes:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Activity Metrics: Steps taken, distance traveled, floors climbed, and calories burned.</li>
                  <li>
                    Workout Data: Type of workout (e.g., running, cycling), duration, intensity, and route information
                    (including precise GPS location data, if you grant permission).
                  </li>
                  <li>
                    Physiological Metrics: Heart rate, sleep patterns (duration, stages, quality), and, if supported by
                    your device, data such as heart rate variability (HRV) or blood oxygen levels (SpO2).
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">C. Data Collected Automatically</h3>
                <p>
                  When you use the App, we may automatically collect certain information about your device and usage,
                  including:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>
                    Usage Information: Details about your interactions with our App, such as features used, time and
                    date of access, and in-app achievements.
                  </li>
                  <li>Device Information: Your mobile device’s ID, model, operating system, and IP address.</li>
                  <li>
                    Crash and Performance Data: We collect reports on app crashes and performance to help us identify
                    and fix bugs.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">D. Information from Third-Party Services</h3>
                <p>
                  You may choose to connect your Odyssey. account to third-party services like Apple Health, Google Fit,
                  or your social media accounts. If you do, we may collect information from these services as authorized
                  by you. This may include:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>
                    Health and activity data from Apple Health or Google Fit to provide a more holistic view of your
                    fitness.
                  </li>
                  <li>Basic profile information from social media if you use it to sign up or share achievements.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">2. HOW WE USE YOUR INFORMATION</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>
                To Provide and Maintain the Service: To operate the App, display your stats and progress, and enable
                core features.
              </li>
              <li>
                To Personalize Your Experience: To tailor content, workouts, and insights to your specific goals and
                data.
              </li>
              <li>
                To Improve Our App: To understand how users interact with our App, fix bugs, and develop new features.
              </li>
              <li>
                To Communicate with You: To send you service-related announcements, updates, security alerts, and
                support messages.
              </li>
              <li>
                For Safety and Security: To protect against fraud, abuse, and to enforce our terms and conditions.
              </li>
              <li>
                With Your Consent: For marketing purposes, such as sending you newsletters or promotional offers about
                new products and features. You can opt-out of these communications at any time.
              </li>
            </ul>
            <p className="mt-2">We will never sell your personal data to third parties.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">3. HOW WE SHARE YOUR INFORMATION</h2>
            <p>We do not share your personal information except in the limited circumstances described below:</p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>
                With Service Providers: We work with third-party service providers who help us operate our App, such as
                cloud hosting services (e.g., Amazon Web Services), analytics providers (e.g., Google Analytics for
                Firebase), and customer support platforms. These providers are contractually obligated to safeguard your
                data and only use it for the services they provide to us.
              </li>
              <li>
                With Third-Party Integrations (at Your Direction): When you connect your account to services like Apple
                Health, Google Fit, or social media, you are directing us to share your data with them. Their use of
                your data will be governed by their own privacy policies.
              </li>
              <li>
                For Legal Reasons: We may disclose your information if we believe it’s required by law, subpoena, or
                other legal process, or to protect the rights, property, or safety of Odyssey., our users, or the
                public.
              </li>
              <li>
                In Case of Business Transfer: If we are involved in a merger, acquisition, or sale of assets, your
                information may be transferred as part of that transaction. We will notify you of any such change in
                ownership or control of your personal information.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">4. DATA SECURITY</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. We use
              encryption (such as SSL/TLS) to protect data in transit and apply security best practices to protect data
              at rest. However, please be aware that no security system is impenetrable, and we cannot guarantee the
              absolute security of your data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">5. DATA RETENTION</h2>
            <p>
              We retain your personal data for as long as you maintain an account with Odyssey. You can delete your
              account at any time, which will result in the deletion of your personal information from our production
              systems, subject to legal or regulatory retention requirements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">6. YOUR RIGHTS AND CHOICES</h2>
            <p>
              You have certain rights regarding your personal information, depending on your location. These may include
              the right to:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>
                Access and Update: You can access and update most of your profile information directly within the App’s
                settings.
              </li>
              <li>Data Portability: You can request a copy of your personal data in a machine-readable format.</li>
              <li>
                Deletion: You can request the deletion of your account and associated personal data by contacting us at
                support@odysseyfit.app.
              </li>
              <li>
                Opt-Out of Marketing: You can unsubscribe from our marketing emails by clicking the {'"unsubscribe"'}
                link in the email.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">{"7. CHILDREN'S PRIVACY"}</h2>
            <p>
              Our App is not intended for use by children under the age of 13 (or 16 in the European Economic Area). We
              do not knowingly collect personal information from children under this age. If we learn that we have
              collected personal information from a child, we will take steps to delete such information as soon as
              possible.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">8. INTERNATIONAL DATA TRANSFERS</h2>
            <p>
              Your information may be transferred to, and maintained on, computers located outside of your state,
              province, or country where the data protection laws may differ from those in your jurisdiction. We will
              take all steps reasonably necessary to ensure that your data is treated securely and in accordance with
              this Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">9. CONTACT US</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us
              at:
            </p>
            <p className="mt-2">CapyBobo Corp, support@odysseyfit.app</p>
          </div>
        </div>
      </main>
      <footer className="py-4">
        <div className="container mx-auto flex justify-center">
          <Link to="/" className="text-white hover:underline">
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
