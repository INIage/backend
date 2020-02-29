export default Object.defineProperty(Array.prototype, "Take",
{
    value: function (amount:number) {
        const cur = this;
        const arr = [];

        for (let i = 0; i < amount; i++) {
            arr.push(cur[i]);
        }

        return arr;
    },
    enumerable: false,
    configurable: false,
    writable: false,
});