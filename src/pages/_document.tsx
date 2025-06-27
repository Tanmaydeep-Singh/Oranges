/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ SEO Meta Tags */}
        <title>Orange.ed - Gamified AI Learning for Kids</title>
        <meta
          name="description"
          content="Orange.ed is a gamified AI-powered learning platform for kids in K-8. Helping children grow with fun, interactive, and personalized education."
        />
        <meta
          name="keywords"
          content="Orange.ed, gamified learning, AI learning for kids, interactive education, K-8 students, fun learning platform, kids education, edtech, personalized learning, gamification, playful learning, child growth, Orange project"
        />
        <meta name="author" content="Orange.ed Team" />

        {/* ✅ Open Graph Meta (Social Sharing) */}
        <meta property="og:title" content="Orange.ed - Gamified AI Learning for Kids" />
        <meta
          property="og:description"
          content="Orange.ed makes learning fun and interactive for kids in K-8. Combining gamification and AI to help kids grow holistically."
        />
        <meta property="og:image" content="/logos/orange-logo.png" />
        <meta property="og:url" content="https://orangeed.com/" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@orangeed" />
        <meta name="twitter:title" content="Orange.ed - Gamified AI Learning for Kids" />
        <meta
          name="twitter:description"
          content="A fun, gamified, and AI-powered learning journey for children in K-8. Explore Orange.ed today!"
        />
        <meta name="twitter:image" content="/logos/orange-logo.png" />

        {/* ✅ Favicon + Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FFA500" />

        {/* ✅ Fonts (Poppins + Nunito) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        {/* ✅ Dark Mode Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem('ui-theme') || '"light"';
                  const parsedTheme = JSON.parse(theme);
                  if (parsedTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
