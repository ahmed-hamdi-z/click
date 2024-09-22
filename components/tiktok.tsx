import { useEffect } from 'react';
import Script from 'next/script';


  const TiktokPixel = () => {
    useEffect(() => {
      // Declare TiktokAnalyticsObject and ttq in the window object
      window.TiktokAnalyticsObject = 'ttq';
      const ttq = (window.ttq = window.ttq || []);
      
      ttq.methods = [
        'page',
        'track',
        'identify',
        'instances',
        'debug',
        'on',
        'off',
        'once',
        'ready',
        'alias',
        'group',
        'enableCookie',
        'disableCookie',
        'holdConsent',
        'revokeConsent',
        'grantConsent',
      ];
  
      ttq.setAndDefer = function (t: any, e: any) {
        t[e] = function () {
          t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
        };
      };
  
      for (let i = 0; i < ttq.methods.length; i++) {
        ttq.setAndDefer(ttq, ttq.methods[i]);
      }
  
      ttq.instance = function (t: any) {
        const e = ttq._i[t] || [];
        for (let n = 0; n < ttq.methods.length; n++) {
          ttq.setAndDefer(e, ttq.methods[n]);
        }
        return e;
      };
  
      ttq.load = function (e: any, n: any) {
        const r = 'https://analytics.tiktok.com/i18n/pixel/events.js';
        const o = n && n.partner;
        ttq._i = ttq._i || {};
        ttq._i[e] = [];
        ttq._i[e]._u = r;
        ttq._t = ttq._t || {};
        ttq._t[e] = +new Date();
        ttq._o = ttq._o || {};
        ttq._o[e] = n || {};
        n = document.createElement('script');
        n.type = 'text/javascript';
        n.async = true;
        n.src = `${r}?sdkid=${e}&lib=ttq`;
        const s = document.getElementsByTagName('script')[0];
        s.parentNode?.insertBefore(n, s);
      };
  
      ttq.load('CRNVN4JC77UCEKB77J70');
      ttq.page();
    }, []);
  
    return null;
  };
  
  export default TiktokPixel;