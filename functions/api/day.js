import {days} from './_content.js';
import {mexicoDay,json,adminAllowed} from './_utils.js';
export async function onRequestGet({request,env}){
 const url=new URL(request.url),n=Number(url.searchParams.get('n'));
 if(!Number.isInteger(n)||n<1||n>24)return json({error:'Casilla inválida'},400);
 const admin=await adminAllowed(request,env);
 const date=mexicoDay();
 if(!admin&&n>date.unlocked)return json({error:'Esta casilla aún está cerrada.'},403);
 const item=days[n-1];
 if(!admin&&!item.published)return json({day:n,title:'¡Estamos preparando tu sorpresa!',body:'Vuelve pronto para descubrir el regalo de este día.',terms:'',file:null,published:false});
 return json({day:n,...item,admin});
}
