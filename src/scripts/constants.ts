export interface HeaderDef {
  n: string;
  v: string;
}

export const HEADERS_TO_ADD: Record<string, HeaderDef> = {
  xfo:   { n: 'X-Frame-Options',                v: 'deny' },                                      // https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#x-frame-options
  xcto:  { n: 'X-Content-Type-Options',         v: 'nosniff' },                                   // https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#x-content-type-options
  xpcdp: { n: 'X-Permitted-Cross-Domain-Policies', v: 'none' },
  rp:    { n: 'Referrer-Policy',                v: 'strict-origin-when-cross-origin' },            // https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#referrer-policy
  cc:    { n: 'Cache-Control',                  v: 'no-store, max-age=0' },                       // https://owasp.org/www-project-secure-headers/#cache-control
  sts:   { n: 'Strict-Transport-Security',      v: 'max-age=31536000; includeSubDomains' },       // https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#strict-transport-security-hsts
  coop:  { n: 'Cross-Origin-Opener-Policy',     v: 'same-origin' },                               // https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#cross-origin-opener-policy-coop
  coep:  { n: 'Cross-Origin-Embedder-Policy',   v: 'require-corp' },                              // https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#cross-origin-embedder-policy-coep
  corp:  { n: 'Cross-Origin-Resource-Policy',   v: 'same-origin' },                               // https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#cross-origin-resource-policy-corp
  xdpc:  { n: 'X-DNS-Prefetch-Control',         v: 'off' },                                       // https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#x-dns-prefetch-control
};

// TODO: these headers need custom UI inputs (not simple dropdowns) before they can be added above
// ct:   { n: 'Content-Type',                   v: 'text/html; charset=UTF-8' }
// acao: { n: 'Access-Control-Allow-Origin',     v: 'https://yoursite.com' }
// pp:   { n: 'Permissions-Policy',              v: 'accelerometer=(), camera=(), geolocation=(), microphone=()' }

export const HEADERS_TO_REMOVE: string[] = [
  '$wsep',
  'Host-Header',
  'K-Proxy-Request',
  'Liferay-Portal',
  'OracleCommerceCloud-Version',
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
  'X-BEServer',
  'X-Backside-Transport',
  'X-CF-Powered-By',
  'X-CMS',
  'X-CalculatedBETarget',
  'X-Cocoon-Version',
  'X-Content-Encoded-By',
  'X-DiagInfo',
  'X-Envoy-Attempt-Count',
  'X-Envoy-External-Address',
  'X-Envoy-Internal',
  'X-Envoy-Original-Dst-Host',
  'X-Envoy-Upstream-Service-Time',
  'X-FEServer',
  'X-Framework',
  'X-Generated-By',
  'X-Generator',
  'X-Jitsi-Release',
  'X-Joomla-Version',
  'X-Kubernetes-PF-FlowSchema-UI',
  'X-Kubernetes-PF-PriorityLevel-UID',
  'X-LiteSpeed-Cache',
  'X-LiteSpeed-Purge',
  'X-LiteSpeed-Tag',
  'X-LiteSpeed-Vary',
  'X-Litespeed-Cache-Control',
  'X-Mod-Pagespeed',
  'X-Nextjs-Cache',
  'X-Nextjs-Matched-Path',
  'X-Nextjs-Page',
  'X-Nextjs-Redirect',
  'X-OWA-Version',
  'X-Old-Content-Length',
  'X-OneAgent-JS-Injection',
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
  'X-Umbraco-Version',
  'X-Varnish-Backend',
  'X-Varnish-Serve',
  'X-Varnish-Server',
  'X-dtAgentId',
  'X-dtHealthCheck',
  'X-dtInjectedServlet',
  'X-ruxit-JS-Agent',
];

// Reference only — not wired to UI. Use with uploads to prevent stored XSS.
export const ETC: Record<string, string> = {
  'Content-Disposition': 'attachment; filename="myfile.html"',
};
