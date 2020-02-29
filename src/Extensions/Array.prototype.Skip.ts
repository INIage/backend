export default Object.defineProperty(Array.prototype, "Skip", 
{
    value: function (amount:number) {
        const cur = this;
        const arr = [];

        for (let i = amount; i < cur.length; i++) {
            arr.push(cur[i]);
        }

        return arr;
    },
    enumerable: false,
    configurable: false,
    writable: false,
});