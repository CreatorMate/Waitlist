<script setup lang='ts'>
    import {definePageMeta} from "#imports";

    definePageMeta({
        layout: 'white'
    });
</script>

<template>
    <section class="w-full flex justify-center py-20">
        <div class="flex flex-col w-full md:w-2/3">
            <h1 class="">Terms of service</h1>
            <p><span>Effective Date: February 17, 2025</span></p>
            <p>Welcome to CreatorMate! These Terms of Service ("Terms") govern your access to and use of CreatorMate's SaaS products and services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Service.</p>
            <h1>1. Acceptance of Terms</h1>
            <p>By creating an account, accessing, or using the Service, you confirm that you have read, understood, and agree to these Terms and our <NuxtLink class="underline" to="privacy-policy">[Privacy Policy]</NuxtLink>. If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.</p>
            <h1>2. Eligibility</h1>
            <p>To use the Service, you must:</p>
            <ul>
                <li>Be at least 13 years old (or the minimum age of digital consent in your jurisdiction).</li>
                <li>Have the legal capacity to enter into a binding agreement.</li>
                <li>Comply with all applicable laws and regulations.</li>
            </ul>
            <h1>3. Account Registration</h1>
            <p>To access certain features of the Service, you must create an account. You agree to:</p>
            <ul>
                <li>Provide accurate, current, and complete information during registration.</li>
                <li>Maintain and promptly update your account information.</li>
                <li>Keep your login credentials secure and notify us immediately of any unauthorized access or breach of security.</li>
            </ul>
            <p>You are responsible for all activities that occur under your account.</p>
            <h1>4. Use of the Service</h1>
            <p>4.1 Permitted Use</p>
            <p>You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
                <li>Violate any applicable laws or regulations.</li>
                <li>Infringe on the intellectual property or other rights of any third party.</li>
                <li>Use the Service in any way that could harm, disable, or impair the Service or interfere with others' use of the Service.</li>
                <li>Attempt to gain unauthorized access to the Service or its related systems or networks.</li>
            </ul>
            <p>4.2 User Content</p>
            <p>You retain ownership of any content you upload, create, or share through the Service ("User Content"). By submitting User Content, you grant CreatorMate a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute the User Content for the purpose of providing and improving the Service.</p>
            <p>You are solely responsible for your User Content and ensure it complies with these Terms and applicable laws.</p>
            <h1>5. Payment and Billing</h1>
            <p>5.1 Subscription Plans</p>
            <p>The Service may require payment of fees. By subscribing, you agree to:</p>
            <ul>
                <li>Pay all applicable fees as described in the pricing plan you select.</li>
                <li>Authorize us to charge your payment method on a recurring basis (if applicable).</li>
            </ul>
            <p>5.2 Refunds and Cancellations</p>
            <p>Refund policies, if any, will be outlined in your subscription agreement. You may cancel your subscription at any time, but no refunds will be provided for partial billing periods.</p>
            <p>5.3 Price Changes</p>
            <p>We reserve the right to modify pricing at any time. Changes will not affect existing subscriptions until the next billing cycle.</p>
            <h1>6. Intellectual Property</h1>
            <p>All intellectual property rights in the Service, including software, design, trademarks, and content, are owned by CreatorMate or its licensors. You are granted a limited, non-exclusive, non-transferable license to use the Service in accordance with these Terms.</p>
            <h1>7. Termination</h1>
            <p>We may suspend or terminate your access to the Service at any time, with or without notice, for any reason, including if you violate these Terms. Upon termination, your right to use the Service will immediately cease.</p>
            <h1>8. Disclaimer of Warranties</h1>
            <p>The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that the Service will be error-free, secure, or uninterrupted.</p>
            <h1>9. Limitation of Liability</h1>
            <p>To the fullest extent permitted by law, CreatorMate and its affiliates, officers, employees, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or related to your use of the Service.</p>
            <h1>10. Changes to These Terms</h1>
            <p>We may update these Terms from time to time. If we make material changes, we will notify you by email or through the Service. Your continued use of the Service after the effective date of the revised Terms constitutes your acceptance of the changes.</p>
            <h1>11. Contact Us</h1>
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