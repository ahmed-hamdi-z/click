import { useEffect } from 'react';
import { useRouter } from 'next/router'; // Import useRouter hook
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const router = useRouter(); // Call useRouter at the top level of the component

  useEffect(() => {
    // Function to handle route changes
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-DYRMJG8XYN', {
        page_path: url,
      });
    };

    // Listen for route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup the listener on component unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Load the Google Analytics script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DYRMJG8XYN"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DYRMJG8XYN');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
