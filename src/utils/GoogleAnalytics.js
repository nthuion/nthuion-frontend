const GA_SCRIPT_SRC = 'https://www.google-analytics.com/analytics.js';
const GA_SCRIPT_SRC_DEV = 'https://www.google-analytics.com/analytics_debug.js';
const GA_TRACK_ID = 'UA-81689023-1';

/* eslint-disable */
class GoogleAnalytics {
  constructor() {
    const script = process.env.NODE_ENV === 'production' ? GA_SCRIPT_SRC : GA_SCRIPT_SRC_DEV;
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script',script,'ga');

    ga('create', GA_TRACK_ID, 'auto');
    ga('send', 'pageview');
  }
  pageview(pathname) {
    window.ga('send', 'pageview', pathname);
  }
}

export default new GoogleAnalytics();

