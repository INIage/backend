export function FunctionParams(fn:Function)
{
    const parameters:Map<string, string> = new Map();

    const match = fn.toString().match(/\((.*)\)/);

    if (match) {
        const reg = /(\w+)[= ]*(\w*)/g;
        let res;
        
        while (res = reg.exec(match[1]))
            parameters.set(res[1], res[2]);
    }
    
    return parameters;
}