export const cacheAssets = () => Promise.resolve(null);

let cachedFonts = {};
const cacheFont = (name, link) => {
  const styleBody = `@font-face { src: url(${link}); font-family: ${name}; }`;
  const style = document.createElement("style");
  style.type = "text/css";
  if (style.styleSheet) {
    style.styleSheet.cssText = styleBody;
  } else {
    style.appendChild(document.createTextNode(styleBody));
  }
  document.head.appendChild(style);
  cachedFonts[name] = link;
};

export const cacheFonts = fonts => {
  let jobs = [];
  for(let fontName in fonts) {
    if(!cachedFonts[fontName])
      jobs.push(cacheFont(fontName, fonts[fontName]))
  }
  return Promise.all(jobs)
};