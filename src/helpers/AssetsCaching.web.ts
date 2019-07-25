export const cacheAssets = () => Promise.resolve(null);



interface fontsType {
  [name: string]: string
}

let cachedFonts: fontsType = {};
const cacheFont = (name: string, link: string) => {
  const styleBody = `@font-face { src: url(${link}); font-family: ${name}; }`;
  const style = document.createElement("style");
  style.type = "text/css";
  // @ts-ignore
  if (style.styleSheet) style.styleSheet.cssText = styleBody;
  else style.appendChild(document.createTextNode(styleBody));

  document.head.appendChild(style);
  cachedFonts[name] = link;
};

export const cacheFonts = (fonts: fontsType) => {
  let jobs = [];
  for(let fontName in fonts) {
    if(!cachedFonts[fontName])
      jobs.push(cacheFont(fontName, fonts[fontName]))
  }
  return Promise.all(jobs)
};
