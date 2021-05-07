module.exports = function loader(source) {
  return `
    import { css } from 'lit-element/lit-element.js';
    export default css\`${ source.replace(/(`|\\|\${)/g, '\\$1') }\`;
  `;
}

