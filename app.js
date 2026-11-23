const GEO_URL = "https://raw.githubusercontent.com/angelnmara/geojson/master/mexicoHigh.json";
// clave ISO 3166-2 del GeoJSON -> clave de entidad INEGI (01 a 32): es la llave de unión con los datos
const ISO2CVE = {AGU:"01",BCN:"02",BCS:"03",CAM:"04",COA:"05",COL:"06",CHP:"07",CHH:"08",CMX:"09",DUR:"10",GUA:"11",GRO:"12",HID:"13",JAL:"14",MEX:"15",MIC:"16",MOR:"17",NAY:"18",NLE:"19",OAX:"20",PUE:"21",QUE:"22",ROO:"23",SLP:"24",SIN:"25",SON:"26",TAB:"27",TAM:"28",TLA:"29",VER:"30",YUC:"31",ZAC:"32"};
const cveOf = f => ISO2CVE[String(f.properties.id).slice(3)];
const DATA = {
  D:{
    pobreza:{
      "01":[381.4, 360.8, 396.5, 352.0, 255.4],
      "02":[819.5, 884.2, 851.7, 511.0, 373.4],
      "03":[165.2, 141.4, 223.4, 112.1, 89.3],
      "04":[391.5, 430.9, 472.4, 429.0, 347.5],
      "05":[799.8, 778.1, 812.1, 597.1, 421.8],
      "06":[227.5, 219.8, 196.0, 158.4, 108.8],
      "07":[4036.7, 4166.0, 4218.0, 3838.7, 3866.0],
      "08":[1104.0, 980.9, 952.5, 669.1, 587.3],
      "09":[2424.7, 2755.9, 3009.4, 2230.1, 1843.5],
      "10":[651.0, 694.5, 715.5, 641.1, 529.0],
      "11":[2339.0, 2519.7, 2649.6, 2073.7, 1642.9],
      "12":[2318.3, 2378.5, 2363.2, 2173.3, 2092.6],
      "13":[1674.0, 1517.2, 1570.6, 1294.4, 1140.5],
      "14":[2426.5, 2285.8, 2633.4, 1856.3, 1626.4],
      "15":[7695.8, 7036.3, 8342.5, 7427.2, 5530.4],
      "16":[2429.2, 2153.2, 2133.7, 2063.0, 1694.1],
      "17":[894.5, 952.9, 1006.7, 825.1, 697.2],
      "18":[450.0, 436.5, 376.6, 369.9, 292.1],
      "19":[997.9, 1066.5, 1425.0, 971.7, 648.5],
      "20":[2660.5, 2575.3, 2569.8, 2483.6, 2203.5],
      "21":[3674.5, 3756.3, 4136.6, 3626.9, 2865.0],
      "22":[640.2, 604.5, 750.4, 536.8, 414.0],
      "23":[537.9, 546.4, 892.9, 516.9, 339.8],
      "24":[1218.0, 1179.5, 1214.0, 1020.4, 874.8],
      "25":[895.7, 928.0, 853.9, 668.2, 533.1],
      "26":[768.0, 774.2, 885.0, 650.4, 431.7],
      "27":[1256.0, 1333.2, 1316.1, 1135.0, 881.5],
      "28":[1097.4, 1205.4, 1233.9, 962.6, 720.4],
      "29":[711.3, 664.8, 800.4, 719.8, 598.7],
      "30":[4744.3, 4776.7, 4749.6, 4244.7, 3601.9],
      "31":[990.6, 992.3, 1156.9, 920.2, 633.6],
      "32":[800.4, 795.3, 745.7, 725.7, 605.3]
    },
    moderada:{
      "01":[352.2, 347.3, 361.8, 325.9, 246.8],
      "02":[784.6, 833.6, 793.7, 461.1, 360.0],
      "03":[154.5, 132.5, 200.0, 105.7, 78.6],
      "04":[335.3, 347.5, 359.9, 337.3, 292.2],
      "05":[742.9, 731.4, 731.2, 538.3, 396.2],
      "06":[212.5, 205.9, 182.4, 149.1, 101.9],
      "07":[2501.3, 2533.3, 2594.9, 2231.2, 2276.3],
      "08":[985.0, 887.6, 842.0, 589.3, 500.4],
      "09":[2269.4, 2603.8, 2609.0, 2070.7, 1674.0],
      "10":[603.5, 656.0, 635.9, 523.4, 446.7],
      "11":[2120.7, 2303.0, 2368.5, 1870.3, 1533.8],
      "12":[1512.8, 1435.1, 1455.6, 1372.8, 1323.6],
      "13":[1394.2, 1303.4, 1318.6, 1080.4, 957.9],
      "14":[2309.1, 2096.7, 2381.6, 1675.8, 1512.3],
      "15":[6759.2, 6252.7, 6940.6, 6394.8, 4873.3],
      "16":[2056.5, 1905.5, 1770.0, 1690.9, 1425.0],
      "17":[796.9, 831.8, 839.9, 707.6, 600.8],
      "18":[358.5, 368.4, 329.6, 288.8, 245.9],
      "19":[931.0, 1026.1, 1301.1, 906.8, 618.9],
      "20":[1711.2, 1707.1, 1709.4, 1623.8, 1508.9],
      "21":[3171.5, 3231.4, 3292.2, 2861.4, 2383.8],
      "22":[586.1, 566.2, 680.7, 494.3, 385.7],
      "23":[452.4, 477.4, 693.4, 437.4, 289.8],
      "24":[1041.1, 990.9, 963.4, 807.4, 729.1],
      "25":[820.5, 862.3, 779.9, 612.4, 487.4],
      "26":[708.1, 709.5, 780.1, 599.2, 386.5],
      "27":[987.8, 1047.7, 985.3, 862.5, 717.3],
      "28":[1004.2, 1101.0, 1098.4, 859.9, 668.1],
      "29":[636.8, 622.2, 667.5, 627.3, 534.8],
      "30":[3586.6, 3495.4, 3619.9, 3166.4, 2888.0],
      "31":[849.1, 844.7, 893.2, 787.2, 548.3],
      "32":[740.2, 737.3, 681.7, 641.6, 546.8]
    },
    extrema:{
      "01":[29.2, 13.6, 34.7, 26.1, 8.7],
      "02":[34.8, 50.6, 58.0, 49.9, 13.4],
      "03":[10.7, 8.9, 23.4, 6.4, 10.7],
      "04":[56.1, 83.4, 112.6, 91.7, 55.3],
      "05":[56.9, 46.7, 81.0, 58.8, 25.6],
      "06":[15.1, 13.9, 13.7, 9.3, 6.9],
      "07":[1535.4, 1632.7, 1623.1, 1607.5, 1589.7],
      "08":[118.9, 93.3, 110.5, 79.8, 86.9],
      "09":[155.2, 152.1, 400.4, 159.4, 169.5],
      "10":[47.5, 38.5, 79.6, 117.8, 82.3],
      "11":[218.2, 216.8, 281.2, 203.4, 109.1],
      "12":[805.5, 943.4, 907.6, 800.5, 769.0],
      "13":[279.8, 213.9, 252.0, 214.0, 182.6],
      "14":[117.3, 189.1, 251.8, 180.5, 114.2],
      "15":[936.5, 783.6, 1401.9, 1032.4, 657.1],
      "16":[372.6, 247.7, 363.7, 372.0, 269.0],
      "17":[97.7, 121.1, 166.8, 117.5, 96.4],
      "18":[91.5, 68.1, 47.0, 81.1, 46.2],
      "19":[66.9, 40.4, 123.9, 64.9, 29.6],
      "20":[949.3, 868.3, 860.5, 859.9, 694.6],
      "21":[503.1, 524.9, 844.3, 765.5, 481.2],
      "22":[54.1, 38.2, 69.7, 42.5, 28.3],
      "23":[85.5, 69.0, 199.4, 79.6, 50.0],
      "24":[176.9, 188.6, 250.6, 212.9, 145.7],
      "25":[75.2, 65.6, 73.9, 55.8, 45.6],
      "26":[59.9, 64.7, 104.9, 51.2, 45.2],
      "27":[268.2, 285.5, 330.8, 272.5, 164.2],
      "28":[93.1, 104.4, 135.5, 102.6, 52.4],
      "29":[74.5, 42.7, 132.9, 92.6, 63.9],
      "30":[1157.7, 1281.2, 1129.8, 1078.2, 713.9],
      "31":[141.5, 147.6, 263.7, 133.0, 85.3],
      "32":[60.1, 58.1, 64.0, 84.1, 58.6]
    },
    razon:{
      "01":[0.8, 0.4, 0.8, 0.6, 0.2],
      "02":[0.3, 0.4, 0.5, 0.4, 0.1],
      "03":[0.5, 0.3, 0.9, 0.2, 0.3],
      "04":[3.4, 5.3, 6.0, 5.3, 3.1],
      "05":[0.8, 0.5, 0.9, 0.6, 0.2],
      "06":[0.9, 0.7, 0.7, 0.4, 0.3],
      "07":[40.9, 44.9, 42.2, 38.2, 37.2],
      "08":[1.0, 0.8, 0.8, 0.5, 0.5],
      "09":[0.4, 0.5, 1.4, 0.5, 0.5],
      "10":[1.4, 1.1, 1.8, 2.6, 1.6],
      "11":[2.1, 2.4, 3.1, 2.1, 0.8],
      "12":[26.6, 34.6, 37.4, 25.4, 23.4],
      "13":[7.9, 5.6, 6.8, 5.2, 3.9],
      "14":[0.7, 1.0, 1.5, 0.9, 0.5],
      "15":[3.4, 3.0, 5.1, 3.9, 1.9],
      "16":[7.8, 4.1, 6.4, 6.2, 3.6],
      "17":[3.3, 5.0, 6.7, 3.8, 2.9],
      "18":[2.9, 2.1, 1.6, 2.1, 1.1],
      "19":[0.2, 0.2, 0.6, 0.3, 0.1],
      "20":[29.4, 23.1, 21.5, 26.9, 14.3],
      "21":[7.3, 8.5, 12.4, 11.8, 5.5],
      "22":[0.8, 0.6, 1.1, 0.7, 0.3],
      "23":[1.9, 1.3, 5.6, 1.5, 0.8],
      "24":[2.8, 3.0, 4.1, 3.3, 1.8],
      "25":[0.9, 0.8, 1.0, 0.7, 0.5],
      "26":[0.7, 0.7, 1.3, 0.5, 0.4],
      "27":[10.4, 10.3, 9.5, 8.6, 3.8],
      "28":[1.0, 1.2, 1.7, 1.1, 0.5],
      "29":[7.3, 3.3, 11.6, 8.0, 3.8],
      "30":[10.2, 15.1, 12.6, 10.9, 6.3],
      "31":[3.8, 3.1, 6.6, 3.3, 1.4],
      "32":[2.1, 2.7, 2.3, 3.5, 1.8]
    }
  },
  NAT:{"pobreza": [52221.1, 51890.9, 55654.2, 46804.5, 38490.0], "moderada": [43475.8, 43194.5, 44861.2, 37701.0, 31538.9], "extrema": [8745.3, 8696.4, 10793.0, 9103.5, 6951.1], "razon": [2.9, 3.0, 4.2, 3.2, 1.9]}
};   // {D:{indicador:{cve:[2016,2018,2020,2022,2024]}}, NAT:{...}}
const NOMBRES = ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Coahuila", "Colima", "Chiapas", "Chihuahua", "Ciudad de México", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"]; // índice 0 = cve "01"
const YEARS = [2016,2018,2020,2022,2024];

const IND = {
  pobreza:  {label:"Población en situación de pobreza", unit:"miles de personas", kind:"count", digits:0,
             pal:["#fff1e0","#fdc98f","#f58a3a","#d0510f","#7a2a05"]},
  extrema:  {label:"Población en pobreza extrema", unit:"miles de personas", kind:"count", digits:0,
             pal:["#fdeceb","#f7b9b2","#ea7466","#c43a2f","#6e1410"]},
  moderada: {label:"Población en pobreza moderada", unit:"miles de personas", kind:"count", digits:0,
             pal:["#fff8dc","#f7dd8a","#e5b93c","#b98418","#6b4709"]},
  razon:    {label:"Razón de ingreso (pobreza extrema frente a no pobres ni vulnerables)", unit:"veces", kind:"ratio", digits:1,
             pal:["#f1ecf7","#cdbfe3","#9d82c7","#6b46a0","#38196b"]}
};

const UNIVS = [
  ["Universidad Autónoma de Aguascalientes","Aguascalientes","01",21.8853,-102.2916],
  ["Universidad Autónoma de Baja California","Mexicali","02",32.6245,-115.4523],
  ["Universidad Autónoma de Baja California Sur","La Paz","03",24.1426,-110.3128],
  ["Universidad Autónoma de Campeche","San Francisco de Campeche","04",19.8301,-90.5349],
  ["Universidad Autónoma de Coahuila","Saltillo","05",25.4232,-101.0053],
  ["Universidad de Colima","Colima","06",19.2433,-103.7250],
  ["Universidad Autónoma de Chiapas","Tuxtla Gutiérrez","07",16.7539,-93.1156],
  ["Universidad Autónoma de Chihuahua","Chihuahua","08",28.6353,-106.0889],
  ["UNAM, Ciudad Universitaria","Ciudad de México","09",19.3320,-99.1870],
  ["Instituto Politécnico Nacional (Zacatenco)","Ciudad de México","09",19.5047,-99.1467],
  ["UAM Unidad Iztapalapa","Ciudad de México","09",19.3607,-99.0742],
  ["Universidad Juárez del Estado de Durango","Durango","10",24.0277,-104.6532],
  ["Universidad de Guanajuato","Guanajuato","11",21.0190,-101.2574],
  ["Universidad Autónoma de Guerrero","Chilpancingo","12",17.5506,-99.5058],
  ["Universidad Autónoma del Estado de Hidalgo","Pachuca","13",20.1011,-98.7591],
  ["Universidad de Guadalajara","Guadalajara","14",20.6736,-103.3440],
  ["ITESO","Guadalajara","14",20.6087,-103.4146],
  ["Universidad Autónoma del Estado de México","Toluca","15",19.2826,-99.6557],
  ["Universidad Michoacana de San Nicolás de Hidalgo","Morelia","16",19.7060,-101.1950],
  ["Universidad Autónoma del Estado de Morelos","Cuernavaca","17",18.9242,-99.2216],
  ["Universidad Autónoma de Nayarit","Tepic","18",21.5042,-104.8946],
  ["Universidad Autónoma de Nuevo León","Monterrey","19",25.7255,-100.3114],
  ["Tecnológico de Monterrey, Campus Monterrey","Monterrey","19",25.6514,-100.2896],
  ["Universidad Autónoma Benito Juárez de Oaxaca","Oaxaca de Juárez","20",17.0732,-96.7266],
  ["Benemérita Universidad Autónoma de Puebla","Puebla","21",19.0414,-98.2063],
  ["Universidad Autónoma de Querétaro","Querétaro","22",20.5888,-100.3899],
  ["Universidad de Quintana Roo","Chetumal","23",18.5001,-88.2961],
  ["Universidad Autónoma de San Luis Potosí","San Luis Potosí","24",22.1565,-100.9855],
  ["Universidad Autónoma de Sinaloa","Culiacán","25",24.8091,-107.3940],
  ["Universidad de Sonora","Hermosillo","26",29.0729,-110.9559],
  ["Universidad Juárez Autónoma de Tabasco","Villahermosa","27",17.9892,-92.9475],
  ["Universidad Autónoma de Tamaulipas","Ciudad Victoria","28",23.7369,-99.1411],
  ["Universidad Autónoma de Tlaxcala","Tlaxcala","29",19.3139,-98.2404],
  ["Universidad Veracruzana","Xalapa","30",19.5438,-96.9102],
  ["Universidad Autónoma de Yucatán","Mérida","31",20.9674,-89.5926],
  ["Universidad Autónoma de Zacatecas","Zacatecas","32",22.7709,-102.5832]
];

const fmt = (v, d) => Number(v).toLocaleString("es-MX", {minimumFractionDigits:d, maximumFractionDigits:d});
const cap = s => s.charAt(0).toUpperCase()+s.slice(1);
const nombre = cve => NOMBRES[parseInt(cve,10)-1];

const state = { ind:"pobreza", yi:4, sel:null, breaks:[], counts:[] };

/* ---------- escala por cuantiles ---------- */
function computeBreaks(){
  const cfg = IND[state.ind];
  const vals = Object.values(DATA.D[state.ind]).map(a => a[state.yi]).sort((a,b)=>a-b);
  const n = vals.length, k = cfg.pal.length;
  const q = p => { const x=p*(n-1), i=Math.floor(x), f=x-i; return i+1<n ? vals[i]*(1-f)+vals[i+1]*f : vals[i]; };
  const r = v => Number(v.toFixed(cfg.digits));
  let b = [vals[0]];
  for(let i=1;i<k;i++) b.push(r(q(i/k)));
  b.push(vals[n-1]);
  b = b.filter((v,i)=> i===0 || v>b[i-1]);       // quita cortes repetidos
  if(b.length<2) b=[vals[0], vals[n-1]+1e-9];
  state.breaks = b;
  state.counts = new Array(b.length-1).fill(0);
  vals.forEach(v => state.counts[classOf(v)]++);
}
function classOf(v){
  const b = state.breaks; let c = 0;
  for(let i=1;i<b.length-1;i++) if(v>=b[i]) c=i;
  return c;
}
function colorFor(v){
  const pal = IND[state.ind].pal, m = state.breaks.length-1;
  const idx = m===pal.length ? classOf(v) : Math.round(classOf(v)*(pal.length-1)/Math.max(1,m-1));
  return pal[idx];
}
const valueOf = cve => DATA.D[state.ind][cve][state.yi];

/* ---------- mapa ---------- */
const map = L.map("map", {zoomSnap:0.25, minZoom:4, maxZoom:10}).setView([23.6, -102.5], 5);
const osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom:19, attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'});
const carto = L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  subdomains:"abcd", maxZoom:20, attribution:'&copy; OpenStreetMap &copy; <a href="https://carto.com/attributions">CARTO</a>'}).addTo(map);

function styleFn(f){
  const cve = cveOf(f), sel = cve===state.sel;
  return { fillColor:colorFor(valueOf(cve)), fillOpacity:.82, color: sel ? "#111" : "#fff", weight: sel ? 3 : 0.9 };
}
const choropleth = L.geoJSON(null, {
  style: styleFn,
  onEachFeature: (f, layer) => {
    const cve = cveOf(f);
    layer.bindTooltip(() => {
      const cfg = IND[state.ind];
      return `<strong>${nombre(cve)}</strong>${fmt(valueOf(cve), cfg.digits)} ${cfg.unit} (${YEARS[state.yi]})`;
    }, {sticky:true, className:"tip"});
    layer.on({
      mouseover: e => { if(cve!==state.sel){ e.target.setStyle({weight:2.5, color:"#333"}); } e.target.bringToFront(); },
      mouseout:  e => choropleth.resetStyle(e.target),
      click:     () => { state.sel = cve; choropleth.setStyle(styleFn); renderPanel(); }
    });
  }
}).addTo(map);

fetch(GEO_URL)
  .then(r => { if(!r.ok) throw new Error(r.status); return r.json(); })
  .then(g => choropleth.addData(g))
  .catch(err => {
    document.getElementById("panel").innerHTML =
      "<h2>No se pudo cargar el GeoJSON</h2><p class='empty'>Revisa tu conexión a internet y que la dirección GEO_URL sea correcta (" + err.message + ").</p>";
  });

/* puntos: universidades con agrupamiento */
const cluster = L.markerClusterGroup({showCoverageOnHover:false, maxClusterRadius:45});
UNIVS.forEach(([nom, ciudad, cve, lat, lng]) => {
  const m = L.marker([lat, lng], { icon: L.divIcon({className:"", html:'<div class="uni"></div>', iconSize:[14,14], iconAnchor:[7,7]}), title:nom, keyboard:true });
  m.bindPopup(`<strong>${nom}</strong><br>${ciudad}, ${nombre(cve)}<br><span style="color:#586574">Ubicación aproximada (ciudad)</span>`);
  cluster.addLayer(m);
});
cluster.addTo(map);

/* Isla Oscura: isla ficticia, aparte de los estados (no entra en la unión con los datos) */
const ISLA = {
  type:"Feature",
  properties:{nombre:"Isla Oscura", poblacion:1, habitante:"Moy"},
  geometry:{type:"Polygon", coordinates:[[[-114.35,14.85],[-114.1,14.75],[-113.8,14.9],[-113.75,15.2],[-113.95,15.35],[-114.25,15.25],[-114.4,15.05],[-114.35,14.85]]]}
};
const ISLA_STYLE = {fillColor:"#000", fillOpacity:1, color:"#000", weight:1};
const isla = L.geoJSON(ISLA, {
  style: ISLA_STYLE,
  onEachFeature: (f, layer) => {
    const p = f.properties;
    layer.bindTooltip(`<strong>${p.nombre}</strong>Población: ${p.poblacion}<br>Habitante: ${p.habitante}`, {sticky:true, className:"tip"});
    layer.on({
      mouseover: e => e.target.setStyle({color:"#8a94a0", weight:3}),
      mouseout:  e => isla.resetStyle(e.target),
      click: () => { state.sel = null; choropleth.setStyle(styleFn); renderIslaPanel(p); }
    });
  }
}).addTo(map);
function renderIslaPanel(p){
  document.getElementById("panel").innerHTML = `
    <h2>${p.nombre}</h2>
    <div class="sub">Isla ficticia en el Pacífico</div>
    <div class="big">${p.poblacion} <small>habitante</small></div>
    <p class="sub">Nombre del habitante: ${p.habitante}.</p>`;
}

L.control.layers({"CARTO Positron":carto, "OpenStreetMap":osm},
                 {"Estados (indicador)":choropleth, "Universidades":cluster, "Isla Oscura":isla}, {collapsed:false, position:"topleft"}).addTo(map);
L.control.scale({imperial:false, position:"bottomleft"}).addTo(map);

/* leyenda */
const legend = L.control({position:"bottomright"});
legend.onAdd = () => { const d = L.DomUtil.create("div","legend"); legend._div = d; return d; };
legend.addTo(map);
function renderLegend(){
  const cfg = IND[state.ind], b = state.breaks, pal = cfg.pal, m = b.length-1;
  let html = `<b>${cfg.label}<br><span class="n">${cfg.unit}, ${YEARS[state.yi]}</span></b>`;
  for(let i=0;i<m;i++){
    const lo = b[i], hi = b[i+1];
    const col = m===pal.length ? pal[i] : pal[Math.round(i*(pal.length-1)/Math.max(1,m-1))];
    const lab = i===m-1 ? `${fmt(lo,cfg.digits)} – ${fmt(hi,cfg.digits)}` : `${fmt(lo,cfg.digits)} – &lt; ${fmt(hi,cfg.digits)}`;
    html += `<div class="row"><i style="background:${col}"></i><span>${lab} <span class="n">(${state.counts[i]})</span></span></div>`;
  }
  html += `<div class="n" style="margin-top:6px">(n) = número de estados</div>`;
  legend._div.innerHTML = html;
}

/* ---------- panel de detalle ---------- */
function rankOf(cve){
  const arr = Object.keys(DATA.D[state.ind]).sort((a,b)=>valueOf(b)-valueOf(a));
  return arr.indexOf(cve)+1;
}
function sparkline(cve){
  const cfg = IND[state.ind], s = DATA.D[state.ind][cve];
  const W=300,H=96,pl=10,pr=10,pt=14,pb=24;
  const lo = Math.min(...s), hi = Math.max(...s), span = (hi-lo)||1;
  const x = i => pl + i*(W-pl-pr)/(YEARS.length-1);
  const y = v => pt + (1-(v-lo)/span)*(H-pt-pb);
  const pts = s.map((v,i)=>`${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  let g = `<polyline points="${pts}" fill="none" stroke="var(--accent)" stroke-width="2"/>`;
  s.forEach((v,i)=>{
    const on = i===state.yi;
    g += `<circle cx="${x(i).toFixed(1)}" cy="${y(v).toFixed(1)}" r="${on?5:3}" fill="${on?'var(--accent)':'var(--panel)'}" stroke="var(--accent)" stroke-width="2"/>`;
    g += `<text x="${x(i).toFixed(1)}" y="${H-6}" text-anchor="middle" font-size="10.5" fill="var(--muted)">${YEARS[i]}</text>`;
  });
  g += `<text x="${pl}" y="10" font-size="10.5" fill="var(--muted)">${fmt(hi,cfg.digits)}</text>`;
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Evolución 2016 a 2024">${g}</svg>`;
}
function renderPanel(){
  const p = document.getElementById("panel"), cve = state.sel, cfg = IND[state.ind];
  if(!cve){
    p.innerHTML = `<h2>Detalle por estado</h2><p class="empty">Haz clic en un estado del mapa para ver su valor, su lugar entre las 32 entidades y su evolución 2016–2024.</p>
    <p class="sub">Indicador activo: ${cfg.label} (${YEARS[state.yi]}).</p>`;
    return;
  }
  const v = valueOf(cve), yr = YEARS[state.yi];
  let share = "";
  if(cfg.kind==="count"){
    const nat = DATA.NAT[state.ind][state.yi];
    share = `<p class="sub">Equivale a ${fmt(v/nat*100,1)} % del total nacional (${fmt(nat,0)} mil personas).</p>`;
  }
  const rows = ["pobreza","moderada","extrema","razon"].map(k => {
    const c = IND[k], val = DATA.D[k][cve][state.yi];
    return `<tr><td>${k==="razon"?"Razón de ingreso":cap(c.label.replace("Población en situación de ","").replace("Población en ",""))}</td><td>${fmt(val,c.digits)}${k==="razon"?"":" mil"}</td></tr>`;
  }).join("");
  p.innerHTML = `
    <h2>${nombre(cve)}</h2>
    <div class="sub">${cfg.label}, ${yr}</div>
    <div class="big">${fmt(v,cfg.digits)} <small>${cfg.unit}</small></div>
    <p class="sub">Lugar ${rankOf(cve)} de 32 (1 = valor más alto).</p>
    ${share}
    <table class="mini"><thead><tr><th>Indicador, ${yr}</th><th style="text-align:right">Valor</th></tr></thead><tbody>${rows}</tbody></table>
    <div class="spark"><h3>${cfg.label}, 2016–2024</h3>${sparkline(cve)}</div>`;
}

/* ---------- selectores ---------- */
const selInd = document.getElementById("ind"), selYear = document.getElementById("year");
Object.entries(IND).forEach(([k,c]) => selInd.add(new Option(c.label, k)));
YEARS.forEach((y,i) => selYear.add(new Option(y, i)));
selYear.value = state.yi;
function refresh(){
  computeBreaks();
  choropleth.setStyle(styleFn);
  renderLegend();
  renderPanel();
}
selInd.addEventListener("change", () => { state.ind = selInd.value; refresh(); });
selYear.addEventListener("change", () => { state.yi = Number(selYear.value); refresh(); });
refresh();