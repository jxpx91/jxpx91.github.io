import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        color: '#333',
        textAlign: 'center',
    },
    subtitle: {
        color: '#666',
    },
    link: {
        color: '#1a0dab',
    },
};

const PrivacyPolicy: React.FC = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Privacy Policy</h1>
            <p><strong>Apolo - Tu agenda cultural</strong> does not collect, use, or share any personal data directly. However, it uses third-party services that may collect information used to identify you.</p>
            <h2 style={styles.subtitle}>Information Collection and Use</h2>
            <p>We do not collect any personal information from users. However, our app uses third-party services that may collect information used to identify you. These services include:</p>
            <ul>
                <li><strong>AdMob</strong>: AdMob is an advertising service provided by Google Inc. For more information on how AdMob collects and uses data, please refer to the <a href="https://policies.google.com/privacy" style={styles.link}>Google Privacy Policy</a>.</li>
            </ul>
            <h2 style={styles.subtitle}>Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
            <h2 style={styles.subtitle}>Contact Us</h2>
            <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at apoloagendaapp@gmail.com.</p>
        </div>
    );
}

export default PrivacyPolicy;