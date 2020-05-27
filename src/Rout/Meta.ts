import { FunctionParams } from "../Extensions/FunctionParams.js";

type Param = Map<string, string>
type Action = { [key:string]: Param }
type Controller = { [key:string]: Action }

export const EndpointsMeta:Controller = { }

export function Endpoint(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> 
{
    ((consroller:string, action:string, param:Param) =>
    {
        if (!Object.prototype.hasOwnProperty.call(EndpointsMeta, consroller)) {
            EndpointsMeta[consroller] = { }
        }

        const actions = EndpointsMeta[consroller];
        actions[action] = param;
        
    //@ts-ignore
    })(target.constructor.name.replace("Controller", "").toLowerCase(), propertyKey, FunctionParams(target[propertyKey]))

	return descriptor;
}

/*
EndpointsMeta = {
    consroller: {
        action: Map<name, default>
    }
}
*/