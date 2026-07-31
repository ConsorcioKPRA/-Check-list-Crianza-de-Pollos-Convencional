const REQS=[{"item": "3.1.1", "categoria": "MANEJO DE AMBIENTE", "detalle": "Control de ambiente", "criticidad": "MEDIO", "criterio": "Uso de las cortinas externas, cortinas internas, uso del cielo raso, uso de troneras según necesidad"}, {"item": "3.1.2", "categoria": "MANEJO DE AMBIENTE", "detalle": "Temperatura ambiental", "criticidad": "MEDIO", "criterio": "Según la edad del pollo"}, {"item": "3.1.3", "categoria": "MANEJO DE AMBIENTE", "detalle": "Presencia de termohigrometros en galpón", "criticidad": "MEDIO", "criterio": "2 mínimos por galpon y operativos"}, {"item": "3.2.1", "categoria": "CONDICIÓN DE INFRAESTRUCTURA", "detalle": "Condiciones de galpón", "criticidad": "MEDIO", "criterio": "Estructura del galpón conforme, sin roturas en cortinas, cielo raso libre de  goteras."}, {"item": "3.3.1", "categoria": "MANEJO DE CRIADORAS", "detalle": "Cantidad de criadoras por densidad de aves", "criticidad": "ALTO", "criterio": "Manuales: Verano 1/850; invierno 1/750\nAutomáticas: Verano 1/2000; invierno 1/2500"}, {"item": "3.3.2", "categoria": "MANEJO DE CRIADORAS", "detalle": "Altura de criadoras", "criticidad": "MEDIO", "criterio": "Manuales: 1.2 a 1.5 m\nAutomáticas: 1.7 a 1.85 m"}, {"item": "3.3.3", "categoria": "MANEJO DE CRIADORAS", "detalle": "Funcionamiento de criadoras", "criticidad": "ALTO", "criterio": "Equipos funcionales"}, {"item": "3.3.4", "categoria": "MANEJO DE CRIADORAS", "detalle": "Posición de las criadoras", "criticidad": "MEDIO", "criterio": "No apuntar directo a los comederos ni bebederos. Apuntar a las cortinas con inclinación de 10°, las centrales no tienen angulo de inclinación"}, {"item": "3.3.5", "categoria": "MANEJO DE CRIADORAS", "detalle": "Uso de la criadora", "criticidad": "ALTO", "criterio": "Según necesidad de las aves"}, {"item": "3.4.1", "categoria": "MANEJO DE VENTILADORES", "detalle": "Cantidad de ventiladores", "criticidad": "ALTO", "criterio": "Cada 12 metros (A partir del día 15 instalados 100%)"}, {"item": "3.4.2", "categoria": "MANEJO DE VENTILADORES", "detalle": "Uso de los ventiladores", "criticidad": "MEDIO", "criterio": "Según necesidad de las aves\nUso al 100% a partir del día 21."}, {"item": "3.4.3", "categoria": "MANEJO DE VENTILADORES", "detalle": "Posición de los ventiladores", "criticidad": "MEDIO", "criterio": "1 metro de altura para confort ambiental \nNo apuntar directo a las aves"}, {"item": "3.4.4", "categoria": "MANEJO DE VENTILADORES", "detalle": "Funcionamiento de ventiladores", "criticidad": "ALTO", "criterio": "Equipos funcionales"}, {"item": "3.5.1", "categoria": "MANEJO DE NEBULIZADORES (APLICA SOLO EN CASO DE CONTAR CON EL EQUIPO)", "detalle": "Uso de los nebulizadores", "criticidad": "ALTO", "criterio": "Según necesidad de las aves"}, {"item": "3.5.2", "categoria": "MANEJO DE NEBULIZADORES (APLICA SOLO EN CASO DE CONTAR CON EL EQUIPO)", "detalle": "Cantidad de nebulizadores", "criticidad": "MEDIO", "criterio": "2 lineas por galpón (su presencia en granja es opcional). Si existe el equipo debe estar acompañado de ventiladores."}, {"item": "3.5.3", "categoria": "MANEJO DE NEBULIZADORES (APLICA SOLO EN CASO DE CONTAR CON EL EQUIPO)", "detalle": "Funcionamiento de nebulizadores", "criticidad": "ALTO", "criterio": "Equipos funcionales"}, {"item": "3.6.1", "categoria": "MANEJO DE AMPLIACIONES", "detalle": "Ampliación del primer portón", "criticidad": "MEDIO", "criterio": "Verano: max 4 días / Invierno: 5 días"}, {"item": "3.6.2", "categoria": "MANEJO DE AMPLIACIONES", "detalle": "Ampliación total", "criticidad": "MEDIO", "criterio": "Verano: max 23 días / Invierno:  27 días (+- 2d)"}, {"item": "3.6.3", "categoria": "MANEJO DE AMPLIACIONES", "detalle": "Ampliaciones intermedias", "criticidad": "MEDIO", "criterio": "Se realizaron correctamente conforme a la necesidad del ave"}, {"item": "3.7.1", "categoria": "CONTROL SANITARIO", "detalle": "Control de moscas", "criticidad": "MEDIO", "criterio": "Implementación de trampas\nPresencia leve"}, {"item": "3.7.2", "categoria": "CONTROL SANITARIO", "detalle": "Control de roedores", "criticidad": "MEDIO", "criterio": "Implementación de trampas\nSin presencia de huellas o excretas"}, {"item": "3.7.3", "categoria": "CONTROL SANITARIO", "detalle": "Control de alphitobius", "criticidad": "MEDIO", "criterio": "Infestación leve"}, {"item": "3.7.4", "categoria": "CONTROL SANITARIO", "detalle": "Presencia de aves ajenas a la crianza dentro del galpón", "criticidad": "MEDIO", "criterio": "Sin presencia en galpón de palomas o aves silvestres"}, {"item": "3.7.5", "categoria": "CONTROL SANITARIO", "detalle": "Seguimiento y control de plagas", "criticidad": "ALTO", "criterio": "Moscas: MTD <10%  (Control documentario)\nRoedores: <10%  (Control documentario)"}, {"item": "3.7.6", "categoria": "CONTROL SANITARIO", "detalle": "Aves sanas", "criticidad": "ALTO", "criterio": "Aves sin problemas sanitarios en galpón"}, {"item": "3.8.1", "categoria": "MANEJO DE ALIMENTO", "detalle": "Tipo de alimento suministrado", "criticidad": "MEDIO", "criterio": "Preinicio: 1–7 días / Inicio: 8–18 días / Crecimiento: 19–28 días / Acabado: 29 días hasta 5 días antes de la venta"}, {"item": "3.8.2", "categoria": "MANEJO DE ALIMENTO", "detalle": "Calidad de alimento", "criticidad": "ALTO", "criterio": "Alimento no pelmasado, granuloso, PDI, finos\n(Evaluación realizada por el auditor con la criba)"}, {"item": "3.8.3", "categoria": "MANEJO DE ALIMENTO", "detalle": "Cantidad de comederos según densidad poblacional", "criticidad": "ALTO", "criterio": "En base al estandar"}, {"item": "3.8.4", "categoria": "MANEJO DE ALIMENTO", "detalle": "Altura de comederos", "criticidad": "ALTO", "criterio": "Borde superior del plato a la altura del buche medio del ave"}, {"item": "3.8.5", "categoria": "MANEJO DE ALIMENTO", "detalle": "Limpieza de comederos", "criticidad": "MEDIO", "criterio": "Equipos limpios"}, {"item": "3.8.6", "categoria": "MANEJO DE ALIMENTO", "detalle": "Uso de comederos según tipo y edad", "criticidad": "ALTO", "criterio": "Segun etapa"}, {"item": "3.8.7", "categoria": "MANEJO DE ALIMENTO", "detalle": "Funcionamiento de comederos", "criticidad": "MEDIO", "criterio": "Equipos funcionales"}, {"item": "3.8.8", "categoria": "MANEJO DE ALIMENTO", "detalle": "Control del ingreso de alimento", "criticidad": "MEDIO", "criterio": "Evaluación del alimento realizada por producción con la criba"}, {"item": "3.8.9", "categoria": "MANEJO DE ALIMENTO", "detalle": "Disponibilidad de alimentos", "criticidad": "ALTO", "criterio": "Alimento en todos los comederos"}, {"item": "3.8.10", "categoria": "MANEJO DE ALIMENTO", "detalle": "Alimento libre de contaminantes.", "criticidad": "MEDIO", "criterio": "Alimento libre de contaminantes físicos o biológicos"}, {"item": "3.8.11", "categoria": "MANEJO DE ALIMENTO", "detalle": "Temperatura de alimento", "criticidad": "MEDIO", "criterio": "T°<40°C"}, {"item": "3.8.12", "categoria": "MANEJO DE ALIMENTO", "detalle": "Aceptación de alimento por parte del pollo", "criticidad": "ALTO", "criterio": "Evidencia de aceptación o rechazo del alimento"}, {"item": "3.8.13", "categoria": "MANEJO DE ALIMENTO", "detalle": "Calidad de heces", "criticidad": "MEDIO", "criterio": "Pasaje de alimento, heces sueltas, sanguinolentas, etc."}, {"item": "3.9.1", "categoria": "MANEJO DE AGUA", "detalle": "Cantidad de bebederos según densidad poblacional", "criticidad": "ALTO", "criterio": "Según estandar y edad"}, {"item": "3.9.2", "categoria": "MANEJO DE AGUA", "detalle": "Cloración y acidificación de agua", "criticidad": "MEDIO", "criterio": "Metodología de preparación y aplicación correcta (primero ácido y luego desinfectante, puede ser en cisterna, dosificador o tanque, envases adecuados y rotulados)"}, {"item": "3.9.3", "categoria": "MANEJO DE AGUA", "detalle": "Temperatura del agua", "criticidad": "ALTO", "criterio": "Temperatura del agua < 26 °C"}, {"item": "3.9.4", "categoria": "MANEJO DE AGUA", "detalle": "Disponibilidad de agua", "criticidad": "MEDIO", "criterio": "Presencia de agua en los bebederos en el 100% de bebederos limpia y fresca"}, {"item": "3.9.5", "categoria": "MANEJO DE AGUA", "detalle": "Limpieza de bebederos", "criticidad": "MEDIO", "criterio": "Equipos limpios"}, {"item": "3.9.6", "categoria": "MANEJO DE AGUA", "detalle": "Funcionamiento de bebederos", "criticidad": "ALTO", "criterio": "Equipos funcionales"}, {"item": "3.9.7", "categoria": "MANEJO DE AGUA", "detalle": "Altura de bebederos", "criticidad": "ALTO", "criterio": "Día 1: gota de agua a la altura del pico / Día 2 – hasta el final: dorso del ave a 45° con el chupón . En el caso de los bebederos manuales a la altura del dorso (según crecimiento)"}, {"item": "3.9.8", "categoria": "MANEJO DE AGUA", "detalle": "Control de caudal", "criticidad": "MEDIO", "criterio": "Semana 1: 40–50 ml/min / Semana 2: 60–70 ml/min / Semana 3: 80–90 ml/min / Semana 4: 100–110 ml/min /  Semana 5: 120–130 ml/min"}, {"item": "3.9.9", "categoria": "MANEJO DE AGUA", "detalle": "Control de cloro en agua", "criticidad": "ALTO", "criterio": "Cloro residual: 3 – 5 ppm (no aplica en vacunación, en caso de medicación no aplica si el galpón tiene dosificador)"}, {"item": "3.9.10", "categoria": "MANEJO DE AGUA", "detalle": "Control de pH en el agua", "criticidad": "ALTO", "criterio": "pH entre 5.5 – 6.5 (no aplica en vacunación, en caso de medicación no aplica si el galpón tiene dosificador) (solo hasta el día 21 en canal tradicional y toda la campaña en canal moderno)"}, {"item": "3.9.11", "categoria": "MANEJO DE AGUA", "detalle": "Equipos de medición de calidad de agua", "criticidad": "MEDIO", "criterio": "Cuenta con los equipos de medición adecuados para controlar la calidad de agua (phmetro, clorimetro, caudal, T° de agua)"}, {"item": "3.9.12", "categoria": "MANEJO DE AGUA", "detalle": "Seguimiento y control de cloro/pH", "criticidad": "MEDIO", "criterio": "Registro documentado de cloro residual y de pH"}, {"item": "3.10.1", "categoria": "MANEJO DE CAMA", "detalle": "Condición de la cama", "criticidad": "ALTO", "criterio": "Suelta, no húmeda, champas secas\n> 40% de condición adecuada"}, {"item": "3.10.2", "categoria": "MANEJO DE CAMA", "detalle": "Movimiento de cama", "criticidad": "MEDIO", "criterio": "Movimiento de cama hasta los 25 días. Se observa trabajo de cama en galpón"}, {"item": "3.10.3", "categoria": "MANEJO DE CAMA", "detalle": "Control de amoníaco", "criticidad": "ALTO", "criterio": "Máximo 20 ppm"}, {"item": "3.10.4", "categoria": "MANEJO DE CAMA", "detalle": "Presencia de pododermatitis y/o lesiones de pecho", "criticidad": "ALTO", "criterio": "<20% de la muestra evaluada"}, {"item": "3.10.5", "categoria": "MANEJO DE CAMA", "detalle": "Equipos de medición de amoniaco", "criticidad": "MEDIO", "criterio": "Cuenta con los equipos de medición adecuados para controlar amoniaco"}, {"item": "3.11.1", "categoria": "CONTROL DE PIGMENTACIÓN", "detalle": "Control de la pigmentación", "criticidad": "MEDIO", "criterio": "Medición de pigmentación realizada en los días indicados y que los resultados sean acorde a lo esperado (28 – 35 días y 1 día antes de la venta)"}, {"item": "3.11.2", "categoria": "CONTROL DE PIGMENTACIÓN", "detalle": "Pigmentación in situ vs pigmentación registrada", "criticidad": "MEDIO", "criterio": "Coincidencia entre pigmentación observada y registro documentario (28 – 35 días y 1 día antes de la venta)"}, {"item": "3.12.1", "categoria": "CONTROL DE PESO Y UNIFORMIDAD", "detalle": "Control de pesos", "criticidad": "ALTO", "criterio": "Pesado en los días que corresponde: la recepción, a los 3 días de edad y una vez por semana desde los 7 días (7,14,21,28,35 y 42).\nLos pesos se encuentran dentro del estandar\n(pesos de producción)"}, {"item": "3.12.2", "categoria": "CONTROL DE PESO Y UNIFORMIDAD", "detalle": "Factor de crecimiento", "criticidad": "ALTO", "criterio": "Solo aplica para la primera semana.\nMeta: 4.5"}, {"item": "3.12.3", "categoria": "CONTROL DE PESO Y UNIFORMIDAD", "detalle": "Verificación de pesos", "criticidad": "MEDIO", "criterio": "Verificación de pesos in situ vs pesos registrados en formatos /estándar\n(Pesado en granja por auditor) recepción, 7 y 14 (edad exacta)\nY a venta. (alerta)"}, {"item": "3.12.4", "categoria": "CONTROL DE PESO Y UNIFORMIDAD", "detalle": "Uniformidad crianza", "criticidad": "MEDIO", "criterio": "Cálculo del % de uniformidad (alerta)\n80% estandar (Realizado por auditor)"}, {"item": "3.13.1", "categoria": "CONTROL DE SELECCIÓN Y MORTALIDAD", "detalle": "Control de la mortalidad", "criticidad": "ALTO", "criterio": "Verificar estándar de mortalidad por etapa"}, {"item": "3.13.2", "categoria": "CONTROL DE SELECCIÓN Y MORTALIDAD", "detalle": "Disposición de la mortalidad del día.", "criticidad": "MEDIO", "criterio": "Retiro y ubicación de los pollos muertos en las zonas donde correspondan durante el día."}, {"item": "3.14.1", "categoria": "MANEJO DE ILUMINACIÓN", "detalle": "Funcionamiento de líneas de iluminación", "criticidad": "ALTO", "criterio": "Equipos funcionales"}, {"item": "3.14.2", "categoria": "MANEJO DE ILUMINACIÓN", "detalle": "Cumplimiento del programa de luz según edad del pollo", "criticidad": "ALTO", "criterio": "Programa de iluminación aplicado según estándar productivo."}, {"item": "3.15.1", "categoria": "MANEJO DE VACUNACIÓN", "detalle": "Vacunación de aves", "criticidad": "ALTO", "criterio": "Fechas según programa de vacunación"}, {"item": "3.15.2", "categoria": "MANEJO DE VACUNACIÓN", "detalle": "Dosis aplicadas", "criticidad": "ALTO", "criterio": "Se realizara la verificación de documentos y se confirmara la dosis."}, {"item": "3.16.1", "categoria": "COMPORTAMIENTO DEL AVE", "detalle": "Confort ambiental del ave", "criticidad": "ALTO", "criterio": "Distribución uniforme de las aves en galpón, no presencia de jadeo"}, {"item": "3.16.2", "categoria": "COMPORTAMIENTO DEL AVE", "detalle": "Vivacidad del pollo", "criticidad": "ALTO", "criterio": "Pollo come, toma agua, expresa un comportamiento propio de la especie"}, {"item": "3.17.1", "categoria": "FORMACIÓN DEL PERSONAL", "detalle": "Cumplimiento de los roles", "criticidad": "ALTO", "criterio": "El personal responsable cumple con las actividades según sus funciones y cargo"}, {"item": "3.17.2", "categoria": "FORMACIÓN DEL PERSONAL", "detalle": "Formación del personal", "criticidad": "ALTO", "criterio": "El personal conoce como ejecutar las actividades, la metodologia y parámetros de alertas."}, {"item": "3.18.1", "categoria": "SEGURIDAD Y SALUD EN EL TRABAJO", "detalle": "Uso de equipos de protección", "criticidad": "MEDIO", "criterio": "Uso de equipos de protección (alerta)"}, {"item": "3.18.2", "categoria": "SEGURIDAD Y SALUD EN EL TRABAJO", "detalle": "Metodología de trabajo utilizado", "criticidad": "MEDIO", "criterio": "Las condiciones del trabajo realizado no afectan al personal o a las aves (alerta)"}, {"item": "3.18.3", "categoria": "SEGURIDAD Y SALUD EN EL TRABAJO", "detalle": "Condición segura de la infraestructura", "criticidad": "MEDIO", "criterio": "La infraestructura es la adecuada para el cumplimiento de sus funciones (alerta)"}, {"item": "3.18.4", "categoria": "SEGURIDAD Y SALUD EN EL TRABAJO", "detalle": "Riesgos externos a la crianza", "criticidad": "MEDIO", "criterio": "Todos los factores externos a las crianza cuentan con una medida de control (alerta)"}];
const KEY='auditoria-crianza-v3';
const EMPTY_GALPON=()=>({numero:'',poblacion:'',lote:'',galponero:'',edad:'',tipo:''});
let state=JSON.parse(localStorage.getItem(KEY)||'null')||{
  datos:{fecha:'',granja:'',supervisor:'',campana:'',auditor:'',visita:''},
  galpones:[EMPTY_GALPON(),EMPTY_GALPON(),EMPTY_GALPON()],
  respuestas:{}
};
if(!Array.isArray(state.galpones)) state.galpones=[EMPTY_GALPON(),EMPTY_GALPON(),EMPTY_GALPON()];
while(state.galpones.length<3) state.galpones.push(EMPTY_GALPON());
const $=id=>document.getElementById(id);

const USUARIOS = {
  monica:  { clave: 'Monica2026!',  auditor: 'Monica',  rol: 'AUDITOR' },
  mariluz: { clave: 'Mariluz2026!', auditor: 'Mariluz', rol: 'AUDITOR' },
  william: { clave: 'William2026!', auditor: 'William', rol: 'AUDITOR' },
  harold:  { clave: 'Harold2026!',  auditor: 'Harold',  rol: 'AUDITOR' },
  diego:   { clave: 'Diego2026!',   auditor: 'Diego',   rol: 'AUDITOR' },
  pamela:  { clave: 'Pamela2026!',  auditor: 'Pamela',  rol: 'AUDITOR' },
  admin:   { clave: 'SantaElena2026!', auditor: 'Administrador', rol: 'ADMIN' }
};

const SESSION_KEY = 'sesion-auditoria-crianza-v1';
let sesionActual = null;

function mostrarAplicacion(sesion) {
  sesionActual = sesion;
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('appContainer').classList.remove('app-hidden');

  const badge = document.getElementById('usuarioActivo');
  badge.textContent = `${sesion.auditor} · ${sesion.rol}`;

  const auditorSelect = document.getElementById('auditor');
  if (sesion.rol === 'ADMIN') {
    auditorSelect.disabled = false;
  } else {
    auditorSelect.disabled = true;
    auditorSelect.value = sesion.auditor;
    state.datos.auditor = sesion.auditor;
    save();
  }
}

function iniciarSesion() {
  const usuario = document.getElementById('loginUsuario').value.trim().toLowerCase();
  const clave = document.getElementById('loginClave').value;
  const error = document.getElementById('loginError');
  const cuenta = USUARIOS[usuario];

  if (!cuenta || cuenta.clave !== clave) {
    error.textContent = 'Usuario o contraseña incorrectos.';
    return;
  }

  const sesion = {
    usuario,
    auditor: cuenta.auditor,
    rol: cuenta.rol,
    inicio: new Date().toISOString()
  };

  sessionStorage.setItem(SESSION_KEY, JSON.stringify(sesion));
  error.textContent = '';
  mostrarAplicacion(sesion);
}

function cerrarSesion() {
  sessionStorage.removeItem(SESSION_KEY);
  location.reload();
}

document.getElementById('btnIngresar').addEventListener('click', iniciarSesion);
document.getElementById('loginClave').addEventListener('keydown', e => {
  if (e.key === 'Enter') iniciarSesion();
});
document.getElementById('loginUsuario').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('loginClave').focus();
});
document.getElementById('cerrarSesion').addEventListener('click', cerrarSesion);

const generalFields=['fecha','granja','supervisor','campana','auditor','visita'];
function esc(s){return String(s||'').replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]))}
function activeGalpones(){return state.galpones.map((g,i)=>({...g,index:i})).filter(g=>String(g.numero||'').trim()!=='')}
function galponLabel(g){return `Galpón ${esc(g.numero)}`}
function save(){localStorage.setItem(KEY,JSON.stringify(state));renderProgress();renderSummary()}
function loadDatos(){
  generalFields.forEach(f=>{
    if(f==='auditor' && sesionActual && sesionActual.rol!=='ADMIN'){
      state.datos.auditor=sesionActual.auditor;
      $(f).value=sesionActual.auditor;
      $(f).disabled=true;
      return;
    }
    $(f).value=state.datos[f]||'';
    $(f).oninput=()=>{state.datos[f]=$(f).value;save()};
  });
  if(!$('fecha').value){$('fecha').value=new Date().toISOString().slice(0,10);state.datos.fecha=$('fecha').value}
  const gpFields=['numero','poblacion','lote','galponero','edad','tipo'];
  state.galpones.slice(0,3).forEach((g,i)=>gpFields.forEach(f=>{
    const el=$(`g${i}_${f}`); el.value=g[f]||'';
    el.oninput=()=>{state.galpones[i][f]=el.value;save()};
  }));
}
function validateDatos(){
  const missing=[];
  if(!state.datos.fecha) missing.push('Fecha de auditoría');
  if(!state.datos.granja.trim()) missing.push('Granja');
  if(!state.datos.supervisor.trim()) missing.push('Supervisor');
  if(!state.datos.campana.trim()) missing.push('Campaña');
  if(!state.datos.auditor.trim()) missing.push('Auditor(a)');
  if(!String(state.datos.visita||'').trim()) missing.push('Visita');
  if(activeGalpones().length===0) missing.push('al menos un número de galpón');
  if(missing.length){alert('Complete: '+missing.join(', '));return false}
  return true;
}
function tab(id){
  document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x.id===id));
  document.querySelectorAll('nav button').forEach(x=>x.classList.toggle('active',x.dataset.tab===id));
  if(id==='checklist') renderList();
  if(id==='resumen') renderSummary();
}
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{if(b.dataset.tab!=='datos'&&!validateDatos())return;tab(b.dataset.tab)});
function responseKey(item,gi){return `${item}__g${gi}`}
function getResp(item,gi){const k=responseKey(item,gi);state.respuestas[k]=state.respuestas[k]||{};return state.respuestas[k]}
function answer(item,gi,val){getResp(item,gi).resultado=val;save();renderList()}
function setObs(item,gi,val){getResp(item,gi).observacion=val;save()}
function addPhoto(item,gi,file){
  if(!file)return;
  if(file.size>4*1024*1024){alert('La foto es muy pesada. Use una imagen menor de 4 MB.');return}
  const r=new FileReader();
  r.onload=()=>{const resp=getResp(item,gi);resp.fotos=resp.fotos||[];resp.fotos.push(r.result);save();renderList()};
  r.readAsDataURL(file)
}
function delPhoto(item,gi,i){const r=getResp(item,gi);(r.fotos||[]).splice(i,1);save();renderList()}
function renderGalponBlock(x,g){
  const r=getResp(x.item,g.index);
  const photos=(r.fotos||[]).map((p,i)=>`<div><img class="thumb" src="${p}" alt="Evidencia ${galponLabel(g)}"><br><button type="button" onclick="delPhoto('${x.item}',${g.index},${i})">Eliminar</button></div>`).join('');
  return `<section class="galpon-answer"><h4>${galponLabel(g)}</h4><div class="choices"><button type="button" class="choice ok ${r.resultado==='CUMPLE'?'active':''}" onclick="answer('${x.item}',${g.index},'CUMPLE')">Cumple</button><button type="button" class="choice bad ${r.resultado==='NO CUMPLE'?'active':''}" onclick="answer('${x.item}',${g.index},'NO CUMPLE')">No cumple</button><button type="button" class="choice na ${r.resultado==='NO APLICA'?'active':''}" onclick="answer('${x.item}',${g.index},'NO APLICA')">No aplica</button></div><label>Observaciones<textarea oninput="setObs('${x.item}',${g.index},this.value)" placeholder="Describa el hallazgo del ${galponLabel(g)}">${esc(r.observacion||'')}</textarea></label><label class="photo-input">Foto<input type="file" accept="image/*" capture="environment" onchange="addPhoto('${x.item}',${g.index},this.files[0])"></label><div class="photoRow">${photos}</div></section>`
}
function renderList(){
  const gs=activeGalpones();
  if(!gs.length){$('lista').innerHTML='<div class="card">Ingrese al menos un número de galpón en Datos.</div>';return}
  const q=$('buscar').value.toLowerCase(),f=$('filtro').value;
  let last='';
  const html=REQS.filter(x=>{
    const text=JSON.stringify(x).toLowerCase();
    const results=gs.map(g=>getResp(x.item,g.index).resultado||'PENDIENTE');
    return (!q||text.includes(q))&&(!f||results.includes(f));
  }).map(x=>{
    const cat=x.categoria!==last?`<div class="cat">${esc(x.categoria)}</div>`:'';last=x.categoria;
    return `<article class="item">${cat}<div class="itemhead"><h3>${esc(x.item)} · ${esc(x.detalle)}</h3><span class="crit">${esc(x.criticidad||'')}</span></div><p class="criterio">${esc(x.criterio)}</p><div class="galpon-grid">${gs.map(g=>renderGalponBlock(x,g)).join('')}</div></article>`
  }).join('');
  $('lista').innerHTML=html||'<div class="card">No hay resultados para este filtro.</div>'
}
function stats(){
  const gs=activeGalpones();let c=0,n=0,na=0,p=0;
  REQS.forEach(x=>gs.forEach(g=>{const r=getResp(x.item,g.index).resultado;if(r==='CUMPLE')c++;else if(r==='NO CUMPLE')n++;else if(r==='NO APLICA')na++;else p++}));
  const den=c+n;return{c,n,na,p,total:REQS.length*gs.length,pct:den?c/den*100:0}
}
function renderProgress(){const s=stats();$('avance').textContent=`Respondidos: ${s.total-s.p} / ${s.total}`}
function renderSummary(){
  const s=stats();$('pct').textContent=s.pct.toFixed(1)+'%';$('cumple').textContent=s.c;$('nocumple').textContent=s.n;$('pendientes').textContent=s.p;
  const gs=activeGalpones();
  $('resumenDatos').innerHTML=`<h3>Datos de auditoría</h3><p><b>Fecha:</b> ${esc(state.datos.fecha)} &nbsp; <b>Granja:</b> ${esc(state.datos.granja)} &nbsp; <b>Supervisor:</b> ${esc(state.datos.supervisor)} &nbsp; <b>Campaña:</b> ${esc(state.datos.campana)} &nbsp; <b>Auditor(a):</b> ${esc(state.datos.auditor)} &nbsp; <b>Visita:</b> ${esc(state.datos.visita)}</p><div class="summary-galpones">${gs.map(g=>`<div><b>${galponLabel(g)}</b><br>Población: ${esc(g.poblacion)}<br>Lote: ${esc(g.lote)}<br>Galponero: ${esc(g.galponero)}<br>Edad: ${esc(g.edad)}<br>Tipo: ${esc(g.tipo)}</div>`).join('')}</div>`;
  const d=[];REQS.forEach(x=>gs.forEach(g=>{const r=getResp(x.item,g.index);if(r.resultado==='NO CUMPLE')d.push({x,g,r})}));
  $('desviaciones').innerHTML=`<h3>Desviaciones (${d.length})</h3>`+d.map(({x,g,r})=>`<div class="deviation"><b>${esc(x.item)} · ${esc(x.detalle)} — ${galponLabel(g)}</b><p><b>Criticidad:</b> ${esc(x.criticidad)}</p><p><b>Observación:</b> ${esc(r.observacion||'Sin observación')}</p>${(r.fotos||[]).map(p=>`<img class="thumb" src="${p}">`).join('')}</div>`).join('')
}
$('guardarDatos').onclick=()=>{if(validateDatos()){save();tab('checklist')}};
$('nuevo').onclick=()=>{if(confirm('¿Borrar la auditoría actual?')){localStorage.removeItem(KEY);location.reload()}};
$('buscar').oninput=renderList;$('filtro').onchange=renderList;
$('imprimir').onclick=()=>window.print();
$('exportar').onclick=()=>{const b=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='auditoria_'+(state.datos.granja||'granja')+'.json';a.click();URL.revokeObjectURL(a.href)};
$('importar').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{state=JSON.parse(r.result);while(state.galpones.length<3)state.galpones.push(EMPTY_GALPON());save();loadDatos();renderList();alert('Respaldo importado')}catch{alert('Archivo no válido')}};r.readAsText(f)};
$('correo').onclick=()=>{const subject=encodeURIComponent('Informe de auditoría - '+(state.datos.granja||'Granja'));const body=encodeURIComponent(`Informe de auditoría. Resultado: ${stats().pct.toFixed(1)}%. Galpones: ${activeGalpones().map(g=>g.numero).join(', ')}.`);location.href='mailto:?subject='+subject+'&body='+body};
function network(){$('net').textContent=navigator.onLine?'Con conexión':'Sin conexión';$('net').style.background=navigator.onLine?'#2a6':'#a33'}
window.addEventListener('online',network);
window.addEventListener('offline',network);
network();

const sesionGuardada = JSON.parse(sessionStorage.getItem(SESSION_KEY) || 'null');
if (sesionGuardada && USUARIOS[sesionGuardada.usuario]) {
  mostrarAplicacion(sesionGuardada);
  loadDatos();
  renderList();
  renderSummary();
} else {
  document.getElementById('loginScreen').style.display = 'flex';
}

if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');


/* ===== V7: permisos, historial y bloqueo por auditor ===== */
const HISTORY_KEY = 'historial-auditorias-v7';
const CURRENT_AUDIT_ID_KEY = 'auditoria-actual-id-v7';

function getCurrentUser() {
  if (typeof sesionActual !== 'undefined' && sesionActual) return sesionActual;
  const raw = sessionStorage.getItem('sesion-auditoria-crianza-v1');
  return raw ? JSON.parse(raw) : null;
}

function currentUsername() {
  const u = getCurrentUser();
  return u ? String(u.usuario || '').toLowerCase() : '';
}

function currentRole() {
  const u = getCurrentUser();
  return u ? String(u.rol || 'AUDITOR').toUpperCase() : 'AUDITOR';
}

function currentAuditorName() {
  const u = getCurrentUser();
  return u ? String(u.auditor || '') : '';
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveHistory(items) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(items));
}

function auditId() {
  let id = localStorage.getItem(CURRENT_AUDIT_ID_KEY);
  if (!id) {
    id = 'AUD-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8).toUpperCase();
    localStorage.setItem(CURRENT_AUDIT_ID_KEY, id);
  }
  return id;
}

function canEditAudit(record) {
  if (!record) return true;
  if (currentRole() === 'ADMIN') return true;
  return String(record.auditorUsuario || '').toLowerCase() === currentUsername();
}

function isCurrentAuditLocked() {
  const id = localStorage.getItem(CURRENT_AUDIT_ID_KEY);
  if (!id) return false;
  const record = getHistory().find(x => x.id === id);
  if (!record) return false;
  if (!['GUARDADA', 'ENVIADA'].includes(record.estado)) return false;
  return !canEditAudit(record);
}

function setEditingEnabled(enabled) {
  document.querySelectorAll('#datos input, #datos select, #checklist input, #checklist select, #checklist textarea, #checklist button')
    .forEach(el => {
      if (el.id === 'buscar' || el.id === 'filtro') return;
      el.disabled = !enabled;
    });

  const saveBtn = document.getElementById('guardarHistorial');
  const sentBtn = document.getElementById('marcarEnviada');
  if (saveBtn) saveBtn.disabled = !enabled;
  if (sentBtn) sentBtn.disabled = !enabled;
}

function buildHistoryRecord(existingState = state) {
  const user = getCurrentUser();
  const gs = typeof activeGalpones === 'function' ? activeGalpones() : [];
  const s = typeof stats === 'function' ? stats() : {pct: 0};

  return {
    id: auditId(),
    fecha: existingState.datos?.fecha || '',
    granja: existingState.datos?.granja || '',
    supervisor: existingState.datos?.supervisor || '',
    campana: existingState.datos?.campana || '',
    visita: existingState.datos?.visita || '',
    auditor: existingState.datos?.auditor || currentAuditorName(),
    auditorUsuario: user?.usuario || '',
    rolCreador: user?.rol || 'AUDITOR',
    galpones: JSON.parse(JSON.stringify(existingState.galpones || [])),
    respuestas: JSON.parse(JSON.stringify(existingState.respuestas || {})),
    porcentaje: Number(s.pct || 0),
    estado: 'GUARDADA',
    creadoEn: new Date().toISOString(),
    actualizadoEn: new Date().toISOString()
  };
}

function guardarAuditoriaHistorial() {
  if (typeof validateDatos === 'function' && !validateDatos()) return;

  const items = getHistory();
  const id = auditId();
  const existingIndex = items.findIndex(x => x.id === id);
  const existing = existingIndex >= 0 ? items[existingIndex] : null;

  if (existing && !canEditAudit(existing)) {
    alert('Esta auditoría solo puede ser modificada por el auditor responsable o por el administrador.');
    return;
  }

  const record = buildHistoryRecord();
  if (existing) {
    record.creadoEn = existing.creadoEn;
    record.estado = existing.estado || 'GUARDADA';
    record.actualizadoEn = new Date().toISOString();
    items[existingIndex] = record;
  } else {
    items.unshift(record);
  }

  saveHistory(items);
  alert('Auditoría guardada correctamente en el historial.');
  renderHistory();
}

function marcarAuditoriaEnviada() {
  const items = getHistory();
  const id = auditId();
  const idx = items.findIndex(x => x.id === id);

  if (idx < 0) {
    guardarAuditoriaHistorial();
    return marcarAuditoriaEnviada();
  }

  if (!canEditAudit(items[idx])) {
    alert('Solo el auditor responsable o el administrador pueden cambiar el estado de esta auditoría.');
    return;
  }

  items[idx].estado = 'ENVIADA';
  items[idx].enviadaEn = new Date().toISOString();
  items[idx].actualizadoEn = new Date().toISOString();
  saveHistory(items);
  alert('La auditoría fue marcada como enviada y quedó bloqueada para otros usuarios.');
  renderHistory();
}

function loadAuditFromHistory(id, editMode) {
  const record = getHistory().find(x => x.id === id);
  if (!record) {
    alert('No se encontró la auditoría.');
    return;
  }

  if (editMode && !canEditAudit(record)) {
    alert('Solo el auditor responsable o el administrador pueden editar esta auditoría.');
    return;
  }

  state = {
    datos: JSON.parse(JSON.stringify(record.datos || {
      fecha: record.fecha || '',
      granja: record.granja || '',
      supervisor: record.supervisor || '',
      campana: record.campana || '',
      visita: record.visita || '',
      auditor: record.auditor || ''
    })),
    galpones: JSON.parse(JSON.stringify(record.galpones || [])),
    respuestas: JSON.parse(JSON.stringify(record.respuestas || {}))
  };

  while (state.galpones.length < 3) state.galpones.push(EMPTY_GALPON());
  localStorage.setItem(KEY, JSON.stringify(state));
  localStorage.setItem(CURRENT_AUDIT_ID_KEY, record.id);

  if (typeof loadDatos === 'function') loadDatos();
  if (typeof renderList === 'function') renderList();
  if (typeof renderSummary === 'function') renderSummary();

  setEditingEnabled(editMode && canEditAudit(record));
  if (typeof tab === 'function') tab(editMode ? 'datos' : 'resumen');
}

function downloadAuditPdf(id) {
  const record = getHistory().find(x => x.id === id);
  if (!record) return;

  // Load the historical audit in read-only mode, then print.
  loadAuditFromHistory(id, false);
  setTimeout(() => window.print(), 300);
}

function renderHistory() {
  const container = document.getElementById('listaHistorial');
  if (!container) return;

  const query = (document.getElementById('buscarHistorial')?.value || '').toLowerCase();
  const status = document.getElementById('filtroHistorialEstado')?.value || '';

  const items = getHistory().filter(r => {
    const text = [
      r.fecha, r.granja, r.supervisor, r.campana, r.visita,
      r.auditor, r.estado, (r.galpones || []).map(g => g.numero).join(' ')
    ].join(' ').toLowerCase();

    return (!query || text.includes(query)) && (!status || r.estado === status);
  });

  if (!items.length) {
    container.innerHTML = '<div class="empty-history">No hay auditorías guardadas en este dispositivo.</div>';
    return;
  }

  container.innerHTML = items.map(r => {
    const editable = canEditAudit(r);
    const galpones = (r.galpones || []).filter(g => g.numero).map(g => `Galpón ${esc(g.numero)}`).join(', ');
    return `
      <article class="history-card">
        <div class="history-main">
          <div>
            <h3>${esc(r.granja || 'Sin granja')} · ${esc(r.fecha || '')}</h3>
            <p><b>Auditor(a):</b> ${esc(r.auditor || '')} · <b>Campaña:</b> ${esc(r.campana || '')} · <b>Visita:</b> ${esc(r.visita || '')}</p>
            <p><b>Galpones:</b> ${galpones || 'Sin datos'} · <b>Resultado:</b> ${Number(r.porcentaje || 0).toFixed(1)}%</p>
          </div>
          <span class="history-status ${r.estado === 'ENVIADA' ? 'sent' : ''}">${esc(r.estado || 'GUARDADA')}</span>
        </div>
        <div class="history-actions">
          <button type="button" onclick="loadAuditFromHistory('${r.id}', false)">Ver</button>
          ${editable ? `<button type="button" onclick="loadAuditFromHistory('${r.id}', true)">Editar</button>` : ''}
          <button type="button" onclick="downloadAuditPdf('${r.id}')">Descargar PDF</button>
        </div>
      </article>
    `;
  }).join('');
}

function resetCurrentAuditId() {
  localStorage.removeItem(CURRENT_AUDIT_ID_KEY);
}

document.addEventListener('DOMContentLoaded', () => {
  const saveBtn = document.getElementById('guardarHistorial');
  if (saveBtn) saveBtn.addEventListener('click', guardarAuditoriaHistorial);

  const sentBtn = document.getElementById('marcarEnviada');
  if (sentBtn) sentBtn.addEventListener('click', marcarAuditoriaEnviada);

  document.getElementById('actualizarHistorial')?.addEventListener('click', renderHistory);
  document.getElementById('buscarHistorial')?.addEventListener('input', renderHistory);
  document.getElementById('filtroHistorialEstado')?.addEventListener('change', renderHistory);

  const newBtn = document.getElementById('nuevo');
  if (newBtn) {
    const previous = newBtn.onclick;
    newBtn.onclick = () => {
      resetCurrentAuditId();
      if (typeof previous === 'function') previous();
    };
  }

  renderHistory();
});


/* ===== V8: pantalla inicial de resultados ===== */
function showAuditNavigation(show) {
  document.querySelectorAll('.audit-nav').forEach(el => {
    el.classList.toggle('hidden-audit-nav', !show);
  });
}

function openResultsHome() {
  showAuditNavigation(false);
  if (typeof tab === 'function') tab('historial');
  if (typeof renderHistory === 'function') renderHistory();
}

function startNewAuditFromHome() {
  resetCurrentAuditId();
  localStorage.removeItem(KEY);
  state = {
    datos: {fecha:'',granja:'',supervisor:'',campana:'',visita:'',auditor:currentAuditorName()},
    galpones: [EMPTY_GALPON(), EMPTY_GALPON(), EMPTY_GALPON()],
    respuestas: {}
  };
  localStorage.setItem(KEY, JSON.stringify(state));
  showAuditNavigation(true);
  if (typeof loadDatos === 'function') loadDatos();
  if (typeof renderList === 'function') renderList();
  if (typeof renderSummary === 'function') renderSummary();
  setEditingEnabled(true);
  if (typeof tab === 'function') tab('datos');
}

const originalLoadAuditFromHistory = loadAuditFromHistory;
loadAuditFromHistory = function(id, editMode) {
  showAuditNavigation(true);
  return originalLoadAuditFromHistory(id, editMode);
};

const originalRenderHistoryV8 = renderHistory;
renderHistory = function() {
  originalRenderHistoryV8();

  const items = getHistory();
  const total = items.length;
  const promedio = total
    ? items.reduce((acc, x) => acc + Number(x.porcentaje || 0), 0) / total
    : 0;
  const guardadas = items.filter(x => x.estado === 'GUARDADA').length;
  const enviadas = items.filter(x => x.estado === 'ENVIADA').length;

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };
  setText('histTotal', total);
  setText('histPromedio', promedio.toFixed(1) + '%');
  setText('histGuardadas', guardadas);
  setText('histEnviadas', enviadas);
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('navNuevaAuditoria')?.addEventListener('click', startNewAuditFromHome);
  document.getElementById('crearDesdeResultados')?.addEventListener('click', startNewAuditFromHome);

  document.querySelectorAll('nav button[data-tab="historial"]').forEach(btn => {
    btn.addEventListener('click', () => {
      showAuditNavigation(false);
      renderHistory();
    });
  });

  setTimeout(() => {
    openResultsHome();
  }, 0);
});


/* ===== V9: portada con Login o Historial ===== */
function hideAllMainScreens() {
  document.getElementById('landingScreen')?.classList.add('screen-hidden');
  document.getElementById('loginScreen')?.classList.add('login-hidden');
  document.getElementById('appContainer')?.classList.add('app-hidden');
}

function showLanding() {
  hideAllMainScreens();
  document.getElementById('landingScreen')?.classList.remove('screen-hidden');
}

function showLoginScreen() {
  hideAllMainScreens();
  document.getElementById('loginScreen')?.classList.remove('login-hidden');
  document.getElementById('loginUsuario')?.focus();
}

function showPublicHistory() {
  hideAllMainScreens();
  document.getElementById('appContainer')?.classList.remove('app-hidden');
  showAuditNavigation(false);
  if (typeof tab === 'function') tab('historial');
  if (typeof renderHistory === 'function') renderHistory();

  const userBadge = document.getElementById('usuarioActivo');
  if (userBadge) userBadge.textContent = 'Consulta de historial';

  const logout = document.getElementById('cerrarSesion');
  if (logout) logout.style.display = 'none';
}

const originalMostrarAplicacionV9 = mostrarAplicacion;
mostrarAplicacion = function(sesion) {
  hideAllMainScreens();
  document.getElementById('appContainer')?.classList.remove('app-hidden');
  const logout = document.getElementById('cerrarSesion');
  if (logout) logout.style.display = '';
  originalMostrarAplicacionV9(sesion);
  showAuditNavigation(false);
  if (typeof tab === 'function') tab('historial');
  if (typeof renderHistory === 'function') renderHistory();
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('abrirLogin')?.addEventListener('click', showLoginScreen);
  document.getElementById('abrirHistorialPublico')?.addEventListener('click', showPublicHistory);
  document.getElementById('volverPortadaLogin')?.addEventListener('click', showLanding);
  document.getElementById('volverPortada')?.addEventListener('click', showLanding);

  const storedSession = sessionStorage.getItem(SESSION_KEY);
  if (storedSession) {
    sessionStorage.removeItem(SESSION_KEY);
  }

  setTimeout(showLanding, 0);
});


/* ===== V10: cálculo por galpón, promedio final y clasificación ===== */
const META_CUMPLIMIENTO = 94;

function statsPorGalpon() {
  const gs = activeGalpones();

  return gs.map(g => {
    let cumple = 0;
    let noCumple = 0;
    let noAplica = 0;
    let pendiente = 0;

    REQS.forEach(x => {
      const resultado = getResp(x.item, g.index).resultado;

      if (resultado === 'CUMPLE') cumple++;
      else if (resultado === 'NO CUMPLE') noCumple++;
      else if (resultado === 'NO APLICA') noAplica++;
      else pendiente++;
    });

    const evaluados = cumple + noCumple;
    const porcentaje = evaluados > 0 ? (cumple / evaluados) * 100 : 0;

    return {
      index: g.index,
      numero: g.numero,
      cumple,
      noCumple,
      noAplica,
      pendiente,
      evaluados,
      porcentaje
    };
  });
}

function promedioFinalGalpones() {
  const resultados = statsPorGalpon().filter(g => g.evaluados > 0);

  if (!resultados.length) return 0;

  return resultados.reduce((sum, g) => sum + g.porcentaje, 0) / resultados.length;
}

function clasificarResultado(porcentaje) {
  if (porcentaje >= 94) {
    return {
      estado: 'BUENO',
      clase: 'good',
      mensaje:
        `¡Excelente desempeño! La auditoría alcanzó un ${porcentaje.toFixed(2)} %, ` +
        `cumpliendo o superando la meta corporativa del 94 %. Se evidencia un adecuado ` +
        `cumplimiento de los estándares establecidos. Se recomienda mantener las buenas ` +
        `prácticas y fortalecer la mejora continua.`
    };
  }

  if (porcentaje >= 80) {
    return {
      estado: 'REGULAR',
      clase: 'regular',
      mensaje:
        `Desempeño aceptable con oportunidades de mejora. Se obtuvo un cumplimiento de ` +
        `${porcentaje.toFixed(2)} %, por debajo de la meta del 94 %. Se recomienda ejecutar ` +
        `acciones correctivas sobre los hallazgos identificados para alcanzar el estándar ` +
        `esperado en la siguiente evaluación.`
    };
  }

  return {
    estado: 'POR MEJORAR',
    clase: 'improve',
    mensaje:
      `Resultado por mejorar. La auditoría alcanzó un cumplimiento de ` +
      `${porcentaje.toFixed(2)} %, inferior a la meta del 94 %. Se recomienda implementar ` +
      `un plan de acción inmediato, reforzar el seguimiento de las desviaciones y verificar ` +
      `la eficacia de las acciones correctivas antes de la próxima auditoría.`
  };
}

function renderResultadoFinal() {
  const table = document.getElementById('tablaResultadosGalpones');
  const average = document.getElementById('resultadoPromedioFinal');
  const message = document.getElementById('mensajeResultado');

  if (!table || !average || !message) return;

  const resultados = statsPorGalpones();
  const promedio = promedioFinalGalpones();
  const clasificacion = clasificarResultado(promedio);

  if (!resultados.length) {
    table.innerHTML = '<p class="note">Ingrese los galpones para calcular los resultados.</p>';
    average.innerHTML = '';
    message.innerHTML = '';
    return;
  }

  table.innerHTML = `
    <div class="result-table-wrap">
      <table class="result-table">
        <thead>
          <tr>
            <th>Galpón</th>
            <th>Cumple</th>
            <th>No cumple</th>
            <th>No aplica</th>
            <th>Pendientes</th>
            <th>Evaluados</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          ${resultados.map(g => `
            <tr>
              <td><b>Galpón ${esc(g.numero)}</b></td>
              <td>${g.cumple}</td>
              <td>${g.noCumple}</td>
              <td>${g.noAplica}</td>
              <td>${g.pendiente}</td>
              <td>${g.evaluados}</td>
              <td><b>${g.porcentaje.toFixed(2)} %</b></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  average.className = `average-result ${clasificacion.clase}`;
  average.innerHTML = `
    <div class="average-number">${promedio.toFixed(2)} %</div>
    <div class="average-state">${clasificacion.estado}</div>
    <div class="average-meta">Meta corporativa: ${META_CUMPLIMIENTO} %</div>
  `;

  message.className = `audit-message ${clasificacion.clase}`;
  message.innerHTML = `
    <h4>Mensaje del auditor</h4>
    <p>${clasificacion.mensaje}</p>
  `;
}

/* Reemplaza el porcentaje general anterior por el promedio de los galpones */
const originalStatsV10 = stats;
stats = function() {
  const base = originalStatsV10();
  base.pct = promedioFinalGalpones();
  base.porGalpon = statsPorGalpones();
  base.clasificacion = clasificarResultado(base.pct);
  return base;
};

/* Extiende la representación del resumen */
const originalRenderSummaryV10 = renderSummary;
renderSummary = function() {
  originalRenderSummaryV10();
  renderResultadoFinal();

  const promedio = promedioFinalGalpones();
  const clasificacion = clasificarResultado(promedio);

  const pct = document.getElementById('pct');
  if (pct) pct.textContent = promedio.toFixed(2) + '%';

  const resumenDatos = document.getElementById('resumenDatos');
  if (resumenDatos && !resumenDatos.querySelector('.summary-classification')) {
    resumenDatos.insertAdjacentHTML(
      'beforeend',
      `<p class="summary-classification">
        <b>Resultado final:</b> ${promedio.toFixed(2)} % ·
        <b>Clasificación:</b> ${clasificacion.estado} ·
        <b>Meta:</b> ${META_CUMPLIMIENTO} %
      </p>`
    );
  }
};

/* Actualiza resultados en cada guardado o respuesta */
const originalSaveV10 = save;
save = function() {
  originalSaveV10();
  renderResultadoFinal();
};

/* Incluye clasificación y promedio en el historial */
const originalBuildHistoryRecordV10 = buildHistoryRecord;
buildHistoryRecord = function(existingState = state) {
  const record = originalBuildHistoryRecordV10(existingState);
  const promedio = promedioFinalGalpones();
  const clasificacion = clasificarResultado(promedio);

  record.porcentaje = promedio;
  record.clasificacion = clasificacion.estado;
  record.resultadosGalpones = statsPorGalpones();

  return record;
};

/* Muestra clasificación en las tarjetas del historial */
const originalRenderHistoryV10 = renderHistory;
renderHistory = function() {
  originalRenderHistoryV10();

  document.querySelectorAll('.history-card').forEach(card => {
    const title = card.querySelector('h3')?.textContent || '';
    const items = getHistory();
    const record = items.find(r => title.includes(r.granja || '') && title.includes(r.fecha || ''));

    if (record && record.clasificacion && !card.querySelector('.history-classification')) {
      const main = card.querySelector('.history-main > div');
      main?.insertAdjacentHTML(
        'beforeend',
        `<p class="history-classification">
          <b>Clasificación:</b> ${esc(record.clasificacion)} ·
          <b>Meta:</b> ${META_CUMPLIMIENTO} %
        </p>`
      );
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(renderResultadoFinal, 0);
});
