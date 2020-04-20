export const app = (x, y) => x + y;

export const total = (shipping, subTotal) => {
    return '$' + app(shipping, subTotal)
}