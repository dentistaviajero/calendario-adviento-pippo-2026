CALENDARIO DE ADVIENTO 2026 — EL CLUB DE PIPPO

INSTRUCCIONES PARA PUBLICAR
1. Descomprime el ZIP. El proyecto contiene index.html, assets/ y functions/.
2. Sube los archivos a un repositorio GitHub nuevo (conservando carpetas).
3. En Cloudflare > Workers & Pages > Create > Pages > Connect to Git, selecciona ese repositorio.
4. Framework preset: None. Build command: vacío. Build output directory: / (raíz del repositorio; si Cloudflare exige un valor, usa .).
5. En Settings > Variables and Secrets agrega ADMIN_TOKEN como SECRET de producción, con una clave aleatoria de al menos 20 caracteres, preferiblemente 32+.
6. Guarda y vuelve a desplegar para que la función reciba el secreto.
7. Abre /api/status en tu dominio: debe devolver JSON con unlocked:0 antes de diciembre.
8. Abre la web, pulsa Acceso privado e introduce tu clave. Debes ver las 24 casillas.
9. Prueba desde otro navegador sin clave: antes de diciembre ninguna casilla debe revelar su contenido.

IMPORTANTE
- Este proyecto usa Cloudflare Pages Functions. NO lo publiques únicamente mediante Direct Upload/arrastrar ZIP: ese método puede omitir las Functions. Usa Git integration.
- La validación se realiza en el servidor, en zona horaria America/Mexico_City, no en el reloj del dispositivo.
- La clave nunca debe escribirse en HTML, JS, GitHub ni enviarse por WhatsApp. Configúrala solo en Cloudflare.
- La revisión privada requiere conocer la clave; para seguridad de nivel empresarial, añade Cloudflare Access a la ruta administrativa.
- La vista de administración REVISA contenido, no lo edita. Para cambiar un día, edita functions/api/_content.js y haz commit; Cloudflare desplegará la actualización.
- published:false significa que el público verá un mensaje genérico al abrir ese día, aunque el administrador verá el borrador.
- Para agregar PDF: coloca el archivo en assets/, cambia file:'/assets/archivo.pdf' y published:true cuando esté aprobado.
- No se incluyeron PDF finales ni ilustraciones adicionales no aprobadas. La imagen de fondo es la proporcionada por el usuario.
- Algunos textos de promoción necesitan revisión final de condiciones antes de su publicación.
- Al llegar 2027, las puertas permanecerán abiertas como archivo. Se puede cambiar este comportamiento.
- Si deseas integrarlo al sitio actual, se puede usar enlace o iframe una vez desplegado y probado.
