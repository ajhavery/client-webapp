import Link from "next/link";

function PrivacyPolicy() {
  return (
    <div className="container mx-auto mt-4 p-8 bg-white">
      <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
      <p className="mb-8">Effective Date: 13-May-2023</p>
      <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
      <p className="mb-8">
        Dhamika Internet Pvt Ltd ("we" or "us") is committed to protecting the
        privacy of its users. This Privacy Policy explains how we collect, use,
        disclose, and safeguard your information when you use our website{" "}
        <span className="text-blue-600 hover:underline">
          <Link href="/">https://dhamika.com</Link>{" "}
        </span>{" "}
        (the "Site"). Please read this Privacy Policy carefully. If you do not
        agree with the terms of this Privacy Policy, please do not access the
        Site.
      </p>
      <h2 className="text-xl font-bold mb-4">2. Information We Collect</h2>
      <p className="mb-8">
        We may collect personal information from you, such as your name, email
        address, and phone number when you voluntarily provide it to us. We may
        also collect additional information, such as your company name, job
        title, and location, to provide you with a personalized experience on
        our Site. We may also automatically collect certain information about
        your device, including your IP address, browser type, and operating
        system, when you access our Site.
      </p>
      <h2 className="text-xl font-bold mb-4">3. How We Use Your Information</h2>
      <p className="mb-4">We may use the information we collect from you to:</p>
      <ul className="list-disc list-inside mb-8">
        <li className="ml-4">Provide, operate, and maintain our Site</li>
        <li className="ml-4">Improve, personalize, and expand our Site</li>
        <li className="ml-4">
          Respond to your comments, questions, and requests
        </li>
        <li className="ml-4">
          Send you newsletters, marketing communications, and promotional offers
        </li>
        <li className="ml-4">
          Monitor and analyze usage and trends on our Site
        </li>
        <li className="ml-4">
          Protect the security of our Site and prevent fraud
        </li>
        <li className="ml-4">Comply with legal obligations</li>
      </ul>
      <h2 className="text-xl font-bold mb-4">
        4. How We Disclose Your Information
      </h2>
      <p className="mb-4">
        We may disclose your information to third parties in the following ways:
      </p>
      <ul className="list-disc list-inside mb-8">
        <li className="ml-4">
          To our affiliated companies and service providers who assist us in
          operating our Site and providing our services
        </li>
        <li className="ml-4">
          To comply with legal obligations or respond to lawful requests and
          legal process
        </li>
        <li className="ml-4">To protect and defend our rights and property</li>
        <li className="ml-4">With your consent or at your direction</li>
      </ul>
      <h2 className="text-xl font-bold mb-4">5. Security</h2>
      <p className="mb-8">
        We take reasonable measures to protect the information we collect from
        you against unauthorized access, use, or disclosure. However, no method
        of transmission over the internet or electronic storage is completely
        secure, and we cannot guarantee absolute security. Therefore, while we
        strive to protect your personal information, we cannot guarantee its
        security.
      </p>
      <h2 className="text-xl font-bold mb-4">6. Third-Party Links</h2>
      <p className="mb-8">
        Our Site may contain links to third-party websites. These third-party
        websites have their own privacy policies, and we are not responsible for
        their practices. We encourage you to review the privacy policies of
        these websites before providing any personal information.
      </p>

      <h2 className="text-xl font-bold mb-4">7. Children's Privacy</h2>
      <p className="mb-8">
        Our Site is not intended for children under the age of 13. We do not
        knowingly collect personal information from children under the age of
        13. If you are a parent or guardian and believe that your child has
        provided us with personal information, please contact us immediately. If
        we become aware that we have collected personal information from a child
        under the age of 13, we will take steps to remove that information from
        our servers.
      </p>

      <h2 className="text-xl font-bold mb-4">
        8. Changes to This Privacy Policy
      </h2>
      <p className="mb-8">
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page. You are
        advised to review this Privacy Policy periodically for any changes.
        Changes to this Privacy Policy are effective when they are posted on
        this page.
      </p>

      <h2 className="text-xl font-bold mb-4">9. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about our Privacy Policy, please
        contact us:
      </p>
      <p className="mb-8">
        - Email: support@dhamika.com
        <br />
        - Phone: +91 9771123980
        <br />- Address:
        <p className="ml-4">
          Dhamika Internet Pvt Ltd
          <br />
          South City, Gurugram, Haryana, India
          <br />
        </p>
      </p>
    </div>
  );
}

export default PrivacyPolicy;
