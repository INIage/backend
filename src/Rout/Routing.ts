import fs from "fs";
import path from "path";
import { EndpointsMeta } from "./Meta.js";

const Controllers = (() => {
    const contr: { [key: string]: any } = {};
    fs.readdir(path.resolve("./dist/Controllers"), async (error, files) => {
        if (error) return;
        for (const file of files)
            contr[file.replace("Controller.js", "").toLowerCase()] = new (await import("../Controllers/" + file))["default"]();
    });
    return contr
})();

class Rout
{
    controller?: string;
    action?: string;
    params: Map<string, string | boolean> = new Map;

    setParams(params: Map<string, string>) {
        this.params.clear();
        for (const param of params) {
            this.params.set(param[0], param[1]);
        }
        const key = this.params.keys().next().value;
        this.params.set(key, true);
    }

    isNull() {
        return this.controller == null || this.action == null || this.params == null
    }
}

function GetRout(url: string, method: string): Rout
{
    url = url.toLowerCase();
    method = method.toLowerCase();

    const rout = new Rout();
    rout.action = method;

    const regExp = /([\W]*)([\w:=-]+)/g;
    let res;
    while (res = regExp.exec(url))
    {
        if (rout.controller == undefined) {
            if (Object.prototype.hasOwnProperty.call(EndpointsMeta, res[2])) {
                rout.controller = res[2];
                rout.setParams(EndpointsMeta[rout.controller][rout.action])
                continue;
            } else throw new Error()
        }

        if (rout.controller != undefined && rout.params == undefined) {
            if (Object.prototype.hasOwnProperty.call(EndpointsMeta[rout.controller], res[2])) {
                rout.action = res[2];
                rout.setParams(EndpointsMeta[rout.controller][rout.action])
                continue;
            }
        }

        if (res[1] == "?" || res[1] == "&") {
            const match = res[2].match(/([\w-]+)([=:])?([\w-]+)?/);
            if (match && rout.params.has(match[1])) {
                rout.params.set(match[1], match[3]);
                continue;
            }
        }

        for (let param of rout.params.keys()) {
            if (param == res[2]) {
                rout.params.set(res[2], true);
                break;
            }
            if (rout.params.get(param) == true) {
                rout.params.set(param, res[2]);
                break;
            }
        } // for
    } // while
    return rout;
} // function Routing()

export async function Call(url: string|undefined, method: string|undefined)
{
    if (!url || !method) throw new Error();
    
    const Rout = GetRout(url, method);
    if (Rout.controller == null || Rout.action == null || Rout.params == null) throw new Error();

    return Controllers[Rout.controller][Rout.action](...Rout.params.values())
}