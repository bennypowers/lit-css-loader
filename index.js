module.exports = function loader(source) {
  return `
    import { css } from 'lit-element';
    export default css\`${ source }\`;
  `;
}

