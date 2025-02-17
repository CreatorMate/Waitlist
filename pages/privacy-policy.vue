<script setup lang='ts'>
    import {definePageMeta} from "#imports";

    definePageMeta({
        layout: 'white'
    });
</script>

<template>
    <section class="w-full flex justify-center py-20">
        <div class="flex flex-col w-full md:w-2/3">
            <h1 class="">Privacy Policy</h1>
            <p><span>Effective Date: October 27, 2023</span></p>
            <p>This Privacy Policy describes how CreatorMate ("we," "us," or "our") collects, uses, shares, and protects
                the personal information of users ("you" or "your") of our SaaS products and services (collectively, the
                "Service"). By using the Service, you agree to the terms of this Privacy Policy.</p>
            <h1>1. Information We Collect</h1>
            <p>We collect the following types of information when you use our Service:</p>
            <p>1.1 Personal Information</p>
            <ul>
                <li>Account Information: Name, email address, phone number, username, and password.</li>
                <li>Billing Information: Credit card details, billing address, and payment history (processed securely
                    by third-party payment processors).
                </li>
                <li>Profile Information: Job title, company name, and other details you provide.</li>
            </ul>
            <p>1.2 Usage Data</p>
            <ul>
                <li>Log Data: IP address, browser type, operating system, device information, and access times.</li>
                <li>Service Usage: Pages visited, features used, and interactions with the Service.</li>
                <li>Cookies and Tracking Technologies: We use cookies, web beacons, and similar technologies to enhance
                    your experience and analyze usage.
                </li>
            </ul>
            <p>1.3 User Content</p>
            <ul>
                <li>Data You Upload: Files, documents, or other content you upload or create within the Service.</li>
            </ul>
            <h1>2. How We Use Your Information</h1>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
                <li>To provide, maintain, and improve the Service.</li>
                <li>To process transactions and send billing-related communications.</li>
                <li>To communicate with you about updates, security alerts, and support messages.</li>
                <li>To personalize your experience and provide tailored content and recommendations.</li>
                <li>To analyze usage trends and improve the functionality of the Service.</li>
                <li>To comply with legal obligations and enforce our terms of service.</li>
            </ul>
            <h1>3. How We Share Your Information</h1>
            <p>We may share your information in the following circumstances:</p>
            <ul>
                <li>With Service Providers: Third-party vendors who assist us in operating the Service (e.g., payment
                    processors, hosting providers, and analytics services).
                </li>
                <li>For Legal Reasons: To comply with legal obligations, respond to subpoenas, or protect our rights and
                    property.
                </li>
                <li>With Your Consent: When you explicitly authorize us to share your information.</li>
                <li>Business Transfers: In connection with a merger, acquisition, or sale of assets, where your
                    information may be transferred to the new owner.
                </li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
            <h1>4. Data Security</h1>
            <p>We implement industry-standard security measures to protect your information, including encryption,
                access controls, and regular security audits. However, no method of transmission over the internet or
                electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            <h1>5. Your Rights and Choices</h1>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul>
                <li>Access: Request a copy of the personal information we hold about you.</li>
                <li>Correction: Request that we correct inaccurate or incomplete information.</li>
                <li>Deletion: Request that we delete your personal information.</li>
                <li>Opt-Out: Opt out of marketing communications or the use of cookies and tracking technologies.</li>
            </ul>
            <p>To exercise these rights, please contact us at hello@creatormate.com</p>
            <h1>6. International Data Transfers</h1>
            <p>If you are located outside the United States, please note that your information may be transferred to and
                processed in countries where data protection laws may differ from those in your jurisdiction. We will
                take steps to ensure your information is treated securely and in accordance with this Privacy
                Policy.</p>
            <h1>7. Children’s Privacy</h1>
            <p>Our Service is not intended for individuals under the age of 13. We do not knowingly collect personal
                information from children. If we become aware that we have collected information from a child, we will
                take steps to delete it.</p>
            <h1>8. Changes to This Privacy Policy</h1>
            <p>We may update this Privacy Policy from time to time. If we make material changes, we will notify you by
                email or through the Service. Your continued use of the Service after the effective date of the revised
                policy constitutes your acceptance of the changes.</p>
            <h1>9. Contact Us</h1>
            <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us
                at:</p>
            <p>CreatorMate</p>
            <p>Email: hello@creatormate.com</p>
        </div>
    </section>
    <HomeFooter/>
</template>

<style scoped>
h1 {
    font-weight: bold;
    font-size: 32px;
    margin-top: 20px;
    margin-bottom: 10px;
}
h1:first-of-type {
    font-size: 42px;
}
p {
    margin-bottom: 4px;
}


li {
    list-style: decimal;

}

ul {
    padding-left: 1rem;
}
</style>