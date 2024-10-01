// export default function LinkCall() {
//     console.log('----limk---');
    
//     gtag('event', 'conversion', {
//         'send_to': 'AW-16698821101/CQaxCPyqu9YZEO2Tz5o-',
//         'value': 1.0,
//         'currency': 'INR'
//     });
//     return false;
//   }

// export default function LinkCall(event, url) {
//     // event.preventDefault(); 
//     console.log("---------");
    
//     if (typeof window !== 'undefined' && window.gtag) {
//       window.gtag('event', 'conversion', {
//         'send_to': 'AW-16698821101/CQaxCPyqu9YZEO2Tz5o-',
//         'value': 1.0,
//         'currency': 'INR',
//       });
//     } else {
//       console.error('gtag is not defined');
//     }
  
//     window.open(url, '_blank');
//   }

export default function LinkCall(event, url) {
    // Check if event is valid
    if (event && typeof event.preventDefault === 'function') {
        event.preventDefault();
    }
    
    // Check if running in the browser
    if (typeof window !== 'undefined') {
        if (window.gtag) {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-16698821101/CQaxCPyqu9YZEO2Tz5o-',
                'value': 1.0,
                'currency': 'INR',
            });
        } else {
            console.error('gtag is not defined');
        }

        // Open URL in the same window
        window.location.href = url;
    }
}

