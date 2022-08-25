const emptyObj: any = {};

const importImages = (require: __WebpackModuleApi.RequireContext) => require.keys().reduce((prev, next) => {
    prev[next.replace('./', '')] = require(next);
    return prev;
}, emptyObj);

export const images = importImages(
    require.context('../assets', false, /\.(png|jpe?g)$/)
);