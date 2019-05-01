'use strict';
const backgroundColor = '#282828';
const foregroundColor = '#F8F8F0';

const colors = [
  backgroundColor,
  '#F92672', // pink
  '#A6E22E', // green
  '#FD971F', // orange
  '#AE81FF', // purple
  '#66D9EF', // blue
  '#38CCD1', // cyan
  '#ffffff', // white
  '#49483E', // brown gray
  '#F92672', // pink
  '#A6E22E', // green
  '#FD971F', // orange
  '#AE81FF', // purple
  '#66D9EF', // blue
  '#38CCD1', // cyan
  '#ffffff', // white
  foregroundColor
];

const fontFamily =
  '"Operator Mono", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace';

const cursorColor = 'rgba(248, 248, 240, 0.5)';

const tabColor = "#1b2428";
exports.decorateConfig = (config) => (
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    tabColor,
    fontSize: 18,
    fontFamily,
    cursorColor: '#A6E22E',
    colors,
    css: `
      ${config.css || ''}

    * {
      -webkit-font-feature-settings: "liga" on, "calt" on, "dlig" on ;
      text-rendering: optimizeLegibility ;
      font-weight: 500;
    }
      .tab_tab {
        color: ${foregroundColor} !important;
        border-color: #333;
        background-color: ${backgroundColor} !important;
      }

    .tab_tab:before {
      border: #333;
    }
      .tab_active:before {
        border-bottom-color: #E6DB74 !important;
      }

    .tab_tab.tab_active {
      font-weight: bold;
      color: #fff ;
      background-color: ${cursorColor};
    }
    .splitpane_divider {
      background-color: #001f27 ;
    }
    `
  })
);
