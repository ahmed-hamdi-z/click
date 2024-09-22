import Script from 'next/script';
import { AppProps } from 'next/app';

function Snap({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Other head elements or components */}
      
      {/* Adding the Snap Pixel tracking script */}
      <Script
        id="snap-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(e,t,n){
            if(e.snaptr) return;
            var a = e.snaptr = function() {
              a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments);
            };
            a.queue = [];
            var s = 'script';
            var r = t.createElement(s);
            r.async = true;
            r.src = n;
            var u = t.getElementsByTagName(s)[0];
            u.parentNode.insertBefore(r,u);
          })(window,document,'https://sc-static.net/scevent.min.js');

          snaptr('init', '349b5ffb-edb1-4611-a4d4-e17e79c2dba1', {
            'user_email': '_INSERT_USER_EMAIL_'
          });
          snaptr('track', 'PAGE_VIEW');`,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default Snap;
