// pages/_app.tsx
import { useEffect } from 'react';
import Script from 'next/script';
import Image from 'next/image';

const FB_PIXEL_ID = '1011665130737121';

const handlePageView = () => {
  if (window.fbq) {
    window.fbq('track', 'PageView');
  }
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Facebook Pixel
    if (!window.fbq) {
      window.fbq = function () {
        window.fbq.callMethod
          ? window.fbq.callMethod(...arguments)
          : window.fbq.queue.push(...arguments);
      };
      window.fbq.queue = [];
      window.fbq.loaded = true;
      window.fbq.version = '2.0';
      window.fbq.push = window.fbq;

      window.fbq('init', FB_PIXEL_ID);
    }

    // Track the initial pageview
    handlePageView();
  }, []);

  return (
    <>
      {/* Add the Facebook Pixel script to the document head */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <Image
        alt=''
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>

      {/* Render the application */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
