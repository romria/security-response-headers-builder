/* DEFINITIONS */
import {HEADERS_TO_ADD, HEADERS_TO_REMOVE} from './constants';
import '../styles/index.css';

Object.fromEntries = arr => Object.assign({}, ...Array.from(arr, k => ({[k]: false})));
const boxKeys = Object.keys(HEADERS_TO_ADD);
const boxValues = Object.fromEntries(boxKeys);
const selectValues = Object.fromEntries(boxKeys);

let jsonObj = {};
let jsonStr = '{}';

// Prevent information disclosure via HTTP headers
let isUnsafeHeadersRemoved = false;

function generateJSON() {
  const result = {};

  boxKeys.forEach((k) => {
    const isSelected = boxValues[k];

    if (isSelected) {
      const select = document.getElementById(`s_${k}`);
      const header = HEADERS_TO_ADD[k];

      if (select && header && header.n) {

        switch(k) {
          case 'cc':
            const ccMaxAge = document.getElementById('cc_max_age');
            result[header.n] = `${select.value}; max-age: ${ccMaxAge.value}`;
            break;
          case 'sts':
            const stsMaxAge = document.getElementById('sts_max_age');
            result[header.n] = `max-age: ${stsMaxAge.value}${select.value ? `; ${select.value}` : ''}`;
            break;
          default:
            result[header.n] = select.value;
        }
      }

    }
  });

  if (isUnsafeHeadersRemoved) {
    HEADERS_TO_REMOVE.forEach((h) => {
      result[h] = null;
    })
  }

  jsonObj = result;
  jsonStr = JSON.stringify(jsonObj);
  document.getElementById('result').innerHTML = jsonStr;
}

// Change events for feature toggling
document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', function({target:{id, checked}}) {
    if (HEADERS_TO_ADD.hasOwnProperty(id)) {
      switch(id) {
        case 'sts':
          const maxAgeInputSTS = document.getElementById('sts_max_age');
          maxAgeInputSTS.disabled = !checked;
        case 'cc':
          const maxAgeInputCC = document.getElementById('cc_max_age');
          maxAgeInputCC.disabled = !checked;
        default:
          boxValues[id] = checked;
          const dropdown = document.getElementById(`s_${id}`);

          if (dropdown) {
            dropdown.disabled = !checked;
          }

          generateJSON();
      }
    } else if (id === 'delete_headers') {
      isUnsafeHeadersRemoved = checked;
      generateJSON();
    }
  });
  const sid = `s_${cb.id}`;
  const dropdown = document.getElementById(sid);

  if (!dropdown) return;

  selectValues[cb.id] = dropdown.value;

  dropdown.addEventListener('change', ({target:{id, value}}) => {
    selectValues[cb.id] = value;
  });
});

document.querySelectorAll('select, input[type="text"], input[type="number"]').forEach(s => {
  s.addEventListener('change', () => {
    generateJSON();
  })
})

// Change events for text inputs of custom IDs
// Object.keys(customIDs).forEach(id => document.getElementById(id).addEventListener('input', (e) => {
//   customIDs[id] = e.target.value || '*';
//   generateJSON();
// }));

// Copy to clipboard
document.getElementById("btnCopy").onclick = () => {
  navigator.clipboard.writeText(jsonStr);
}

// Reset
// document.getElementById("btnReset").onclick = () => {
//   document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
//   document.querySelectorAll('input[type="text"]').forEach(ti => ti.value = '');
//   for (const [key] of Object.entries(customIDs)) {
//     customIDs[key] = '*';
//   }
//   for (const [key] of Object.entries(boxValues)) {
//     boxValues[key] = false;
//   }
//   generateJSON();
// }
//
// generateJSON();
