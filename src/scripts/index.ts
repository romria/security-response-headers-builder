import { HEADERS_TO_ADD, HEADERS_TO_REMOVE } from './constants';
import '../styles/index.css';

const boxKeys = Object.keys(HEADERS_TO_ADD);
const boxValues: Record<string, boolean> = Object.fromEntries(boxKeys.map(k => [k, false]));

let isUnsafeHeadersRemoved = false;
let jsonStr = '{}';

function generateJSON(): void {
  const result: Record<string, string | null> = {};

  for (const k of boxKeys) {
    if (!boxValues[k]) continue;

    const select = document.getElementById(`s_${k}`) as HTMLSelectElement | null;
    const header = HEADERS_TO_ADD[k];

    if (!select || !header) continue;

    switch (k) {
      case 'cc': {
        const ccMaxAge = document.getElementById('cc_max_age') as HTMLInputElement;
        result[header.n] = `${select.value}, max-age=${ccMaxAge.value}`;
        break;
      }
      case 'sts': {
        const stsMaxAge = document.getElementById('sts_max_age') as HTMLInputElement;
        result[header.n] = `max-age=${stsMaxAge.value}${select.value ? `; ${select.value}` : ''}`;
        break;
      }
      default:
        result[header.n] = select.value;
    }
  }

  if (isUnsafeHeadersRemoved) {
    for (const h of HEADERS_TO_REMOVE) {
      result[h] = null;
    }
  }

  jsonStr = JSON.stringify(result);
  const resultEl = document.getElementById('result');
  if (resultEl) resultEl.textContent = jsonStr;
}

document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', (event: Event) => {
    const { id, checked } = event.target as HTMLInputElement;

    if (id in HEADERS_TO_ADD) {
      const dropdown = document.getElementById(`s_${id}`) as HTMLSelectElement | null;
      if (dropdown) dropdown.disabled = !checked;

      if (id === 'sts') {
        (document.getElementById('sts_max_age') as HTMLInputElement).disabled = !checked;
      }
      if (id === 'cc') {
        (document.getElementById('cc_max_age') as HTMLInputElement).disabled = !checked;
      }

      boxValues[id] = checked;
      generateJSON();
    } else if (id === 'delete_headers') {
      isUnsafeHeadersRemoved = checked;
      generateJSON();
    }
  });
});

document.querySelectorAll<HTMLElement>('select, input[type="text"], input[type="number"]').forEach(el => {
  el.addEventListener('change', () => generateJSON());
});

const btnCopy = document.getElementById('btnCopy');
if (btnCopy) {
  btnCopy.onclick = () => navigator.clipboard.writeText(jsonStr);
}
