const eid = (id) => document.getElementById(id);
const c = (tag) => document.createElement(tag);
const txt = (string) => document.createTextNode(string);
const keys = (object) => Object.keys(object);

const filterObjectByKey = (objectToFilter, filterCb) =>
  keys(objectToFilter)
    .filter(filterCb)
    .reduce(
      (obj, key) =>
        Object.assign(obj, {
          [key]: objectToFilter[key],
        }),
      {}
    );

/**
 * This function obtains all global css variables declared in the page.
 *
 * @returns {Object}
 *    A dictionary with all css variables and names.
 */
function getCSSVariables() {
  const styleSheets = Array.from(document.styleSheets);
  const cssVariables = {};
  styleSheets.forEach((styleSheet) => {
    if (styleSheet instanceof CSSStyleSheet) {
      const cssRules = Array.from(styleSheet.cssRules);
      cssRules.forEach((cssRule) => {
        if (cssRule instanceof CSSStyleRule && cssRule.style.length > 0) {
          const style = cssRule.style;
          Array.from(style).forEach((propertyName) => {
            const propertyValue = style.getPropertyValue(propertyName);
            if (propertyName.startsWith('--')) {
              cssVariables[propertyName] = propertyValue;
            }
          });
        }
      });
    }
  });
  return cssVariables;
}

/**
 * Creates the elements that will showcase the color palette variables.
 *
 * @param {Object} ColorPaletteVariables
 *    A subset of CSS variables that contains the color palette.
 */
function buildColorPalette(ColorPaletteVariables) {
  const colorPaletteContainer = eid('color-palette-container');
  keys(ColorPaletteVariables).forEach((name) => {
    let colorName = c('span');
    colorName.append(name);

    let colorDisplay = c('span');
    colorDisplay.setAttribute('class', 'color-display');
    colorDisplay.setAttribute('style', `background-color: var(${name});`);

    colorPaletteContainer.append(colorName, colorDisplay);
  });
}

/**
 *
 *
 * @param {Object} fontSizeVariables
 *    A subset of CSS variables that contains the font sizes.
 *
 * @param {Object} lineHeightVariables
 *    A subset of CSS variables that contains the line heights.
 */
function buildModularScale(fontSizeVariables, lineHeightVariables) {
  const fontSizeNames = keys(fontSizeVariables);
  const lineHieghtNames = keys(lineHeightVariables);

  const modularScaleContainer = eid('modular-scale-container');

  console.log(modularScaleContainer);
  fontSizeNames.forEach((fontSizeName, index) => {
    const lineHeightName = lineHieghtNames[index];
    const fontSizeValue = fontSizeVariables[fontSizeName];
    const lineHeightValue = lineHeightVariables[lineHeightName];

    const textElement = c('span');
    const attributesElement = c('span');

    attributesElement.append(`font-size: ${fontSizeValue}`, c('br'), `line-height: ${lineHeightValue}`);

    textElement.setAttribute('class', 'modular-scale-display');
    textElement.setAttribute('style', `font-size: ${fontSizeValue}; line-height: ${lineHeightValue};`);

    textElement.append(`${fontSizeName}`, c('br'), `${lineHeightName}`);
    modularScaleContainer.append(attributesElement, textElement);
  });
}

/**
 * Runs when the page loads.
 */
window.onload = function () {
  const CSSVariables = getCSSVariables();
  buildColorPalette(filterObjectByKey(CSSVariables, (v) => v.startsWith('--clr-')));
  buildModularScale(
    filterObjectByKey(CSSVariables, (v) => v.startsWith('--fs')),
    filterObjectByKey(CSSVariables, (v) => v.startsWith('--lh'))
  );
};
