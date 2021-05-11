module.exports = function loader(source) {
  return `
    import { css } from 'lit';
    export default css\`${ source.replace(/(`|\\|\${)/g, '\\$1') }\`;
  `;
}

