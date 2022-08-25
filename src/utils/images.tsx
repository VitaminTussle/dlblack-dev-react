// inspired by this stackoverflow answer: https://stackoverflow.com/a/53025624
// without this, dynamically importing different images would be impossible because TypeScript Shenanigans(TM)

const emptyObj: any = {};

const importImages = (require: __WebpackModuleApi.RequireContext) => require.keys().reduce((prev, next) => {
    prev[next.replace('./', '')] = require(next);
    return prev;
}, emptyObj);

export const images = importImages(
    require.context('../assets', false, /\.(png|jpe?g)$/)
);