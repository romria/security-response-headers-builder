export const HEADERS_TO_ADD = {
  xfo: {n: 'X-Frame-Options', v: 'DENY'}, // https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#x-frame-options
  xcto: {n: 'X-Content-Type-Options', v: 'nosniff'}, // https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#x-content-type-options
  xpcdp: {n: 'X-Permitted-Cross-Domain-Policies', v : 'none'}, //
  rp: {n: 'Referrer-Policy', v: 'strict-origin-when-cross-origin'}, // https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#referrer-policy
  ct: {n: 'Content-Type', v: 'text/html; charset=UTF-8'}, // ToDo: https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#content-type
  cc: {n: 'Cache-Control', v: 'no-store, max-age=0'}, // https://owasp.org/www-project-secure-headers/#cache-control
  p: {n: 'Pragma', v: 'no-cache'}, // The Pragma header is only specified for backwards compatibility with the HTTP/1.0 caches.
  // sc: {n: 'Set-Cookie', v: ''}, // https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#set-cookie
  sts: {n: 'Strict-Transport-Security', v: 'max-age=31536000 ; includeSubDomains'}, // https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#strict-transport-security-hsts
  // ToDo: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security#preloading_strict_transport_security
  coop: {n: 'Cross-Origin-Opener-Policy', v: 'same-origin'}, // https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#cross-origin-opener-policy-coop
  coep: {n: 'Cross-Origin-Embedder-Policy', v: 'require-corp'}, // https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#cross-origin-embedder-policy-coep
  corp: {n: 'Cross-Origin-Resource-Policy', v: 'same-origin'}, // https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#cross-origin-resource-policy-corp

  acao: {n: 'Access-Control-Allow-Origin', v: 'https://yoursite.com'}, // https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#access-control-allow-origin
  pp: {n: 'Permissions-Policy', v: 'accelerometer=(),ambient-light-sensor=(),autoplay=(),battery=(),camera=(),display-capture=(),document-domain=(),encrypted-media=(),fullscreen=(),gamepad=(),geolocation=(),gyroscope=(),layout-animations=(self),legacy-image-formats=(self),magnetometer=(),microphone=(),midi=(),oversized-images=(self),payment=(),picture-in-picture=(),publickey-credentials-get=(),speaker-selection=(),sync-xhr=(self),unoptimized-images=(self),unsized-media=(self),usb=(),screen-wake-lock=(),web-share=(),xr-spatial-tracking=()'}, // https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#permissions-policy-formerly-feature-policy

  // pp2: {n: 'Permissions-Policy', v: 'interest-cohort=()'}, // https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#floc-federated-learning-of-cohorts
  xdpc: {n: 'X-DNS-Prefetch-Control', v: 'off'}, // https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#x-dns-prefetch-control
  // xxp: {n: 'X-XSS-Protection', v: '0'}, // DEPRECATED: https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#x-xss-protection
  // pkp: {n: 'Public-Key-Pins', v: undefined}, // DEPRECATED: https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#public-key-pins-hpkp
  // fp: {n: 'Feature-Policy', v: undefined} // DEPRECATED
  // et: {n: 'Expect-CT', v: undefined} // DEPRECATED
  // csd: {n: 'Clear-Site-Data', v: '"cache","cookies","storage"'}
};

export const HEADERS_TO_REMOVE = [
  '$wsep',
  'Host-Header',
  'K-Proxy-Request',
  'Liferay-Portal',
  'Pega-Host',
  'Powered-By',
  'Product',
  'Server',
  'SourceMap',
  'X-AspNet-Version',
  'X-AspNetMvc-Version',
  'X-Atmosphere-error',
  'X-Atmosphere-first-request',
  'X-Atmosphere-tracking-id',
  'X-B3-ParentSpanId',
  'X-B3-Sampled',
  'X-B3-SpanId',
  'X-B3-TraceId',
  'X-CF-Powered-By',
  'X-CMS',
  'X-Content-Encoded-By',
  'X-Envoy-Attempt-Count',
  'X-Envoy-External-Address',
  'X-Envoy-Internal',
  'X-Envoy-Original-Dst-Host',
  'X-Envoy-Upstream-Service-Time',
  'X-Framework',
  'X-Generated-By',
  'X-Generator',
  'X-Mod-Pagespeed',
  'X-Old-Content-Length',
  'X-Page-Speed',
  'X-Php-Version',
  'X-Powered-By',
  'X-Powered-By-Plesk',
  'X-Powered-CMS',
  'X-Redirect-By',
  'X-Server-Powered-By',
  'X-SourceFiles',
  'X-SourceMap',
  'X-Turbo-Charged-By',
  'X-Varnish-Backend',
  'X-Varnish-Serve'
];

// Prevent exposure to cross-site scripting when hosting uploaded files
export const ETC = {
  'Content-Disposition': 'attachment; filename="myfile.html"',
}

export const MISC = {
  'Sec-Fetch-Dest': 'document',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-User': 'same-origin',
  'Sec-Fetch-Site': '?1'
}
