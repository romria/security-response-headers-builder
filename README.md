### Security Response Headers builder

This project is made to assist developers with improving front-end apps security, particularly by adding special HTTP response headers. It ~~will contain~~ contains information about actual best practices as well as experimental & deprecated ones.

Selected headers by default will contain recommended values in accordance with best practices. Please make sure to understand what they mean and change values if needed.

`Content-Security-Policy` topic is covered in a separate repository: https://github.com/romria/content-security-policy-builder

🔴IMPORTANT❗🔴 : This software is provided without warranty of any kind. Also, please make sure you understand what exactly each header 
is doing and test everything before adding these to your production website

### Prerequisites
* [Node.js](https://nodejs.org/) v18.11.0 or higher

### Installation
```bash
npm install
```

### Run
```bash
npm start
```
open [http://localhost:8000](http://localhost:8000)

### General Resources
* [OWASP project: Secure Headers Project](https://owasp.org/www-project-secure-headers/)
* [HTTP Security Response Headers Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html)
* [Fetch metadata request headers](https://owasp.org/www-project-secure-headers/#test-locally-a-content-security-policy-for-weaknesses)
* [Mozilla: X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
* [Mozilla: X-XSS-Protection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)
* [Mozilla: Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
* [Mozilla: Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
* [Mozilla: Expect-CT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT)
* [Mozilla: Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
* [content-security-policy.com](https://content-security-policy.com/)
* [Mozilla: Cross-Origin-Opener-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)
* [resourcepolicy.fyi](https://resourcepolicy.fyi/)
* [Mozilla: Cross-Origin-Resource-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy)
* [Mozilla: Cross-Origin-Embedder-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy)
* [Mozilla: Server Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server)

### Testing
* [Mozilla Observatory](https://observatory.mozilla.org/)
* [SmartScanner](https://www.thesmartscanner.com/)
* [hstspreload.org](https://hstspreload.org/)

### ETC
* [Disabling browsers to store passwords](https://stackoverflow.com/questions/32369/disable-browser-save-password-functionality/37292424#37292424)
* [Practical web cache poisoning](https://portswigger.net/research/practical-web-cache-poisoning)
* [Web cache entanglement](https://portswigger.net/research/web-cache-entanglement)
* [Web cache poisoning](https://portswigger.net/web-security/web-cache-poisoning)
* [Clickjacking](https://portswigger.net/web-security/clickjacking)
* [Why you need "cross-origin isolated" for powerful features](https://web.dev/why-coop-coep/)
* [A guide to enable cross-origin isolation](https://web.dev/cross-origin-isolation-guide/)
* [XS-Leaks](https://xsleaks.dev/)

