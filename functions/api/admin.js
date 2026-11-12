import {days} from './_content.js';
import {json,adminAllowed} from './_utils.js';
export async function onRequestGet({request,env}){
 if(!await adminAllowed(request,env))return json({error:'Acceso no autorizado'},401);
 return json({ok:true,days:days.map((x,i)=>({day:i+1,...x}))});
}
