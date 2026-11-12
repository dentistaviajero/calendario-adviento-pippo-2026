export function mexicoDay(){
 const parts=new Intl.DateTimeFormat('en-US',{timeZone:'America/Mexico_City',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
 const v=Object.fromEntries(parts.map(x=>[x.type,x.value]));
 const year=Number(v.year),month=Number(v.month),day=Number(v.day);
 return {year,month,day,unlocked:year>2026?24:year<2026?0:month<12?0:month>12?24:Math.min(day,24)};
}
export function json(value,status=200){return new Response(JSON.stringify(value),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store','x-content-type-options':'nosniff'}})}
export async function adminAllowed(request,env){
 const token=env.ADMIN_TOKEN;
 if(!token || token.length<20) return false;
 const supplied=request.headers.get('authorization')?.replace(/^Bearer\s+/i,'')||'';
 // compare hashes to avoid leaking length/timing details
 const enc=new TextEncoder();
 const [a,b]=await Promise.all([crypto.subtle.digest('SHA-256',enc.encode(token)),crypto.subtle.digest('SHA-256',enc.encode(supplied))]);
 const x=new Uint8Array(a),y=new Uint8Array(b);let diff=0;for(let i=0;i<x.length;i++)diff|=x[i]^y[i];return diff===0;
}
