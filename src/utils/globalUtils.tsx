/* eslint-disable @typescript-eslint/no-explicit-any */

export const formatAsJsObject = (obj: any, indent = 2): string => {
  const spaces = (n: number) => ' '.repeat(n);

  if (Array.isArray(obj)) {
    return (
      '[\n' +
      obj
        .map((item) => spaces(indent) + formatAsJsObject(item, indent + 2))
        .join(',\n') +
      '\n]'
    );
  } else if (typeof obj === 'object' && obj !== null) {
    return (
      '{\n' +
      Object.entries(obj)
        .map(([key, value]) => spaces(indent) + `${key}: ${formatAsJsObject(value, indent + 2)}`)
        .join(',\n') +
      '\n}'
    );
  } else if (typeof obj === 'string') {
    return `"${obj}"`;
  } else {
    return String(obj);
  }
};


export const parseBackToJson = (str: string) => {
  try {
    // eslint-disable-next-line no-eval
    const obj = eval('(' + str + ')'); // parse JS object string
    return JSON.stringify(obj, null, 2); // back to JSON
  } catch (e) {
    console.error('Error parsing back to JSON:', e);
    return 'Invalid Object';
  }
};


export // Helper to convert object to colored HTML string
const highlightJsObject = (obj: any, indent = 2): string => {
  const spaces = (n: number) => ' '.repeat(n);

  if (Array.isArray(obj)) {
    return '[\n' + obj.map(item => spaces(indent) + highlightJsObject(item, indent + 2)).join(',\n') + '\n]';
  } else if (typeof obj === 'object' && obj !== null) {
    return (
      '{\n' +
      Object.entries(obj)
        .map(([key, value]) => {
          let val: string;
          if (typeof value === 'string') val = `<span class="value-string">"${value}"</span>`;
          else if (typeof value === 'number') val = `<span class="value-number">${value}</span>`;
          else if (typeof value === 'boolean') val = `<span class="value-boolean">${value}</span>`;
          else val = highlightJsObject(value, indent + 2);
          return `${spaces(indent)}<span class="key">${key}</span>: ${val}`;
        })
        .join(',\n') +
      '\n}'
    );
  } else if (typeof obj === 'string') return `<span class="value-string">"${obj}"</span>`;
  else return `<span class="value-other">${obj}</span>`;
};