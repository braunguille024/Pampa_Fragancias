// ============================================================
// PAMPA FRAGANCIAS - Catálogo
// Este es el ÚNICO archivo JavaScript del proyecto.
// Las fotos se encuentran en la carpeta IMG.
// ============================================================

const CONFIG = {
  nombreNegocio: "PAMPA FRAGANCIAS",
  carpetaImagenes: "IMG",
  logo: "Logo_Pampa.jpeg",
  pin: "1234",
  whatsapp: ""
};

// Cambiá el nombre, precio y stock de cada perfume desde el modo edición.
// precio: 0 = Consultar precio. stock: 0 = Agotado.
let perfumes = [
  {
    "id": 1,
    "nombre": "9PM Clasico",
    "precio": 65000,
    "stock": 1,
    "imagen": "01_9pm_clasico.jpeg"
  },
  {
    "id": 2,
    "nombre": "9PM Elixir",
    "precio": 70000,
    "stock": 1,
    "imagen": "02_9pm_elixir.jpeg"
  },
  {
    "id": 2.5,
    "nombre": "9PM Rebel",
    "precio": 70000,
    "stock": 0,
    "imagen": "02b_9pm_rebel.jpeg"
  },
  {
    "id": 3,
    "nombre": "9PM Piedra",
    "precio": 75000,
    "stock": 3,
    "imagen": "03_9pm_piedra.jpeg"
  },
  {
    "id": 4,
    "nombre": "Valentino Intense",
    "precio": 75000,
    "stock": 1,
    "imagen": "04_valentino_intense.jpeg"
  },
  {
    "id": 5,
    "nombre": "Valentino Extradose",
    "precio": 70000,
    "stock": 0,
    "imagen": "05_valentino_extradose.jpeg"
  },
  {
    "id": 6,
    "nombre": "Valentino Rockstud",
    "precio": 70000,
    "stock": 0,
    "imagen": "06_valentino_rockstud.jpeg"
  },
  {
    "id": 7,
    "nombre": "Valentino Coral Fantasy",
    "precio": 75000,
    "stock": 0,
    "imagen": "07_valentino_coral_fantasy.jpeg"
  },
  {
    "id": 8,
    "nombre": "Erba Pura",
    "precio": 90000,
    "stock": 3,
    "imagen": "08_erba_pura.jpeg"
  },
  {
    "id": 9,
    "nombre": "Xerjoff Coro",
    "precio": 80000,
    "stock": 0,
    "imagen": "09_xerjoff_coro.jpeg"
  },
  {
    "id": 10,
    "nombre": "Xerjoff Naxos",
    "precio": 80000,
    "stock": 0,
    "imagen": "10_xerjoff_naxos.jpeg"
  },
  {
    "id": 11,
    "nombre": "Odyssey MandarinSky",
    "precio": 60000,
    "stock": 0,
    "imagen": "11_odyssey_mandarinsky.jpeg"
  },
  {
    "id": 12,
    "nombre": "Odyssey Candee",
    "precio": 65000,
    "stock": 1,
    "imagen": "12_odyssey_candee.jpeg"
  },
  {
    "id": 13,
    "nombre": "Odyssey Aqua",
    "precio": 65000,
    "stock": 1,
    "imagen": "13_odyssey_aqua.jpeg"
  },
  {
    "id": 14,
    "nombre": "Odyssey MandarinSky Elixir Edition",
    "precio": 65000,
    "stock": 2,
    "imagen": "14_odyssey_mandarinsky_elixir_edition.jpeg"
  },
  {
    "id": 15,
    "nombre": "Arabian Sky",
    "precio": 85000,
    "stock": 0,
    "imagen": "15_armaf_arabian_sky.jpeg"
  },
  {
    "id": 16,
    "nombre": "Scandal JPG",
    "precio": 70000,
    "stock": 1,
    "imagen": "16_scandal_jpg.jpeg"
  },
  {
    "id": 17,
    "nombre": "Veesage",
    "precio": 70000,
    "stock": 1,
    "imagen": "17_veesage.jpeg"
  },
  {
    "id": 18,
    "nombre": "Al Haramain Amber Oud 100ml",
    "precio": 75000,
    "stock": 1,
    "imagen": "18_al_haramain_amber_oud_100ml.jpeg"
  },
  {
    "id": 19,
    "nombre": "Al Haramain Aqua Dubai 60ml",
    "precio": 70000,
    "stock": 1,
    "imagen": "19_al_haramain_aqua_dubai_60ml.jpeg"
  },
  {
    "id": 20,
    "nombre": "Al Haramain Dubai Night 60ml",
    "precio": 70000,
    "stock": 1,
    "imagen": "20_al_haramain_dubai_night_60ml.jpeg"
  },
  {
    "id": 21,
    "nombre": "Art of Universe",
    "precio": 80000,
    "stock": 3,
    "imagen": "21_mundo.jpeg"
  },
  {
    "id": 22,
    "nombre": "Vintage Radio",
    "precio": 75000,
    "stock": 2,
    "imagen": "22_radio.jpeg"
  },
  {
    "id": 23,
    "nombre": "Liquid Brun",
    "precio": 70000,
    "stock": 1,
    "imagen": "23_liquid_brun.jpeg"
  },
  {
    "id": 24,
    "nombre": "Rayhaan Elixir",
    "precio": 75000,
    "stock": 1,
    "imagen": "24_rayhaan_elixir.jpeg"
  },
  {
    "id": 25,
    "nombre": "Bharara King",
    "precio": 75000,
    "stock": 0,
    "imagen": "25_bharara_king_nuevo.jpeg"
  },
  {
    "id": 25.5,
    "nombre": "Bharara King Gold Edition",
    "precio": 75000,
    "stock": 0,
    "imagen": "25b_bharara_king_gold_edition.jpeg"
  },
  {
    "id": 26,
    "nombre": "Bharara King Nuevo",
    "precio": 80000,
    "stock": 1,
    "imagen": "26_bharara_king_nuevo_nuevo.jpeg"
  },
  {
    "id": 27,
    "nombre": "Lattafa Emeer",
    "precio": 75000,
    "stock": 0,
    "imagen": "27_lattafa_emeer.jpeg"
  },
  {
    "id": 28,
    "nombre": "Lattafa Khamrah",
    "precio": 65000,
    "stock": 1,
    "imagen": "28_lattafa_khamrah.jpeg"
  },
  {
    "id": 29,
    "nombre": "Lattafa Khamrah Waha",
    "precio": 70000,
    "stock": 0,
    "imagen": "29_lattafa_khamrah_waha.jpeg"
  },
  {
    "id": 30,
    "nombre": "Hawas Ice",
    "precio": 60000,
    "stock": 0,
    "imagen": "30_hawas_ice.jpeg"
  },
  {
    "id": 31,
    "nombre": "Dior Sauvage",
    "precio": 70000,
    "stock": 0,
    "imagen": "31_dior_sauvage.jpeg"
  },
  {
    "id": 32,
    "nombre": "Philos Pura",
    "precio": 90000,
    "stock": 0,
    "imagen": "32_philos_pura.jpeg"
  },
  {
    "id": 33,
    "nombre": "Badee Al Oud Honor & Glory",
    "precio": 60000,
    "stock": 1,
    "imagen": "33_badee_al_oud_honor_glory.jpeg"
  },
  {
    "id": 33.5,
    "nombre": "Noble Blush",
    "precio": 60000,
    "stock": 0,
    "imagen": "33b_lattafa_pride_noble_blush.jpeg"
  },
  {
    "id": 34,
    "nombre": "Badee Al Oud Sublime",
    "precio": 60000,
    "stock": 1,
    "imagen": "34_badee_al_oud_sublime.jpeg"
  },
  {
    "id": 35,
    "nombre": "Club de Nuit Intense Man",
    "precio": 65000,
    "stock": 1,
    "imagen": "35_club_de_nuit_intense_man.jpeg"
  },
  {
    "id": 36,
    "nombre": "Club de Nuit Untold",
    "precio": 65000,
    "stock": 0,
    "imagen": "36_club_de_nuit_untold.jpeg"
  },
  {
    "id": 37,
    "nombre": "Jean Paul Gaultier Le Male Elixir",
    "precio": 65000,
    "stock": 0,
    "imagen": "37_jean_paul_gaultier_le_male_elixir.jpeg"
  },
  {
    "id": 38,
    "nombre": "Vulcan",
    "precio": 60000,
    "stock": 1,
    "imagen": "38_vulcan.jpeg"
  },
  {
    "id": 39,
    "nombre": "Orientica Oud Saffron",
    "precio": 65000,
    "stock": 1,
    "imagen": "39_orientica_oud_saffron.jpeg"
  },
  {
    "id": 39.5,
    "nombre": "Spectre Ghost",
    "precio": 75000,
    "stock": 0,
    "imagen": "39b_french_avenue_spectre_ghost.jpeg"
  },
  {
    "id": 40,
    "nombre": "Afnan Supremacy Collector's Edition",
    "precio": 70000,
    "stock": 1,
    "imagen": "40_afnan_supremacy_collector_s_edition.jpeg"
  },
  {
    "id": 41,
    "nombre": "Lattafa Nebras",
    "precio": 60000,
    "stock": 1,
    "imagen": "41_lattafa_nebras.jpeg"
  },
  {
    "id": 42,
    "nombre": "Paco Rabanne 1 Million",
    "precio": 45000,
    "stock": 1,
    "imagen": "42_paco_rabanne_1_million.jpeg"
  },
  {
    "id": 43,
    "nombre": "Lattafa Her Confession",
    "precio": 70000,
    "stock": 1,
    "imagen": "43_lattafa_her_confession.jpeg"
  },
  {
    "id": 44,
    "nombre": "Lattafa Asad",
    "precio": 60000,
    "stock": 1,
    "imagen": "44_lattafa_asad.jpeg"
  },
  {
    "id": 45,
    "nombre": "Lattafa Yara Moi",
    "precio": 60000,
    "stock": 1,
    "imagen": "45_lattafa_yara_moi.jpeg"
  },
  {
    "id": 46,
    "nombre": "Lattafa Yara",
    "precio": 60000,
    "stock": 0,
    "imagen": "46_lattafa_yara.jpeg"
  },
  {
    "id": 47,
    "nombre": "Lattafa Yara Elixir",
    "precio": 60000,
    "stock": 1,
    "imagen": "47_lattafa_yara_elixir.jpeg"
  },
  {
    "id": 48,
    "nombre": "Lattafa Yara Candy",
    "precio": 60000,
    "stock": 1,
    "imagen": "48_lattafa_yara_candy.jpeg"
  },
  {
    "id": 49,
    "nombre": "Bharara Rose",
    "precio": 75000,
    "stock": 1,
    "imagen": "49_bharara_rose.jpeg"
  },
  {
    "id": 50,
    "nombre": "Carolina Herrera La Bomba Intensa",
    "precio": 55000,
    "stock": 1,
    "imagen": "50_carolina_herrera_la_bomba_intensa.jpeg"
  },
  {
    "id": 51,
    "nombre": "Lattafa Haya",
    "precio": 60000,
    "stock": 1,
    "imagen": "51_lattafa_haya.jpeg"
  },
  {
    "id": 52,
    "nombre": "Armaf Yum Yum",
    "precio": 75000,
    "stock": 1,
    "imagen": "52_armaf_yum_yum.jpeg"
  }
];

const CLAVE_LOCAL = "pampa_fragancias_catalogo_v3";
const $ = (id) => document.getElementById(id);
const formatoPrecio = new Intl.NumberFormat("es-AR", {
  style: "currency", currency: "ARS", maximumFractionDigits: 0
});
let modoEdicion = false;

function cargarDatos() {
  try {
    const guardados = JSON.parse(localStorage.getItem(CLAVE_LOCAL));
    if (Array.isArray(guardados)) {
      perfumes = perfumes.map(base => {
        const cambio = guardados.find(p => p.id === base.id);
        return cambio ? { ...base, ...cambio } : base;
      });
    }
  } catch (error) {
    console.warn("No se pudieron recuperar los cambios guardados.", error);
  }
}

function guardarDatos() {
  localStorage.setItem(CLAVE_LOCAL, JSON.stringify(perfumes));
}

function rutaImagen(perfume) {
  return `${CONFIG.carpetaImagenes}/${perfume.imagen}`;
}

function estadoStock(stock) {
  if (stock <= 0) return { clase: "agotado", texto: "Agotado" };
  if (stock <= 3) return { clase: "poco", texto: stock === 1 ? "Queda 1" : `Quedan ${stock}` };
  return { clase: "ok", texto: `En stock: ${stock}` };
}

function precioTexto(p) {
  return p.precio > 0 ? formatoPrecio.format(p.precio) : "Consultar precio";
}

function listaFiltrada() {
  const busqueda = $("buscar").value.trim().toLowerCase();
  let lista = perfumes.filter(p =>
    !busqueda || p.nombre.toLowerCase().includes(busqueda)
  );
  if ($("soloDisponibles").checked) lista = lista.filter(p => p.stock > 0);

  switch ($("orden").value) {
    case "precioAsc": lista.sort((a,b) => (a.precio || Infinity) - (b.precio || Infinity)); break;
    case "precioDesc": lista.sort((a,b) => b.precio - a.precio); break;
    case "nombre": lista.sort((a,b) => a.nombre.localeCompare(b.nombre, "es")); break;
    default: lista.sort((a,b) => a.id - b.id);
  }
  return lista;
}

function crearEditor(p) {
  const editor = document.createElement("div");
  editor.className = "editor";
  editor.innerHTML = `
    <label>Nombre del perfume
      <input type="text" data-campo="nombre" value="${escapar(p.nombre)}" placeholder="Nombre del perfume">
    </label>
    <div class="editor-fila">
      <label>Precio ($)
        <input type="number" min="0" data-campo="precio" value="${p.precio}">
      </label>
      <label>Stock
        <input type="number" min="0" data-campo="stock" value="${p.stock}">
      </label>
    </div>`;
  editor.querySelectorAll("input").forEach(input => {
    input.addEventListener("change", () => {
      const campo = input.dataset.campo;
      if (campo === "nombre") p.nombre = input.value.trim() || `Perfume ${p.id}`;
      else p[campo] = Math.max(0, Math.round(Number(input.value) || 0));
      guardarDatos();
      dibujar();
    });
  });
  return editor;
}

function escapar(texto) {
  return String(texto).replace(/[&<>"']/g, caracter => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[caracter]));
}

function abrirVisor(p) {
  const stock = estadoStock(p.stock);
  $("visorImg").src = rutaImagen(p);
  $("visorImg").alt = p.nombre;
  $("visorNombre").textContent = p.nombre;
  $("visorPrecio").textContent = precioTexto(p);
  $("visorStock").textContent = stock.texto;
  $("visorStock").className = "stock " + stock.clase;
  const wsp = $("visorWsp");
  const numero = String(CONFIG.whatsapp).replace(/\D/g, "");
  if (numero) {
    wsp.hidden = false;
    wsp.href = `https://wa.me/${numero}?text=${encodeURIComponent("Hola, me interesa el perfume: " + p.nombre)}`;
  } else wsp.hidden = true;
  $("visor").showModal();
}

function dibujar() {
  const grilla = $("grilla");
  const lista = listaFiltrada();
  grilla.innerHTML = "";

  lista.forEach(p => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta" + (p.stock <= 0 ? " agotado" : "");
    const foto = document.createElement("button");
    foto.type = "button";
    foto.className = "foto";
    foto.setAttribute("aria-label", "Ver " + p.nombre);
    const img = document.createElement("img");
    img.src = rutaImagen(p);
    img.alt = p.nombre;
    img.loading = "lazy";
    img.onerror = () => {
      img.onerror = null;
      img.hidden = true;
    };
    foto.appendChild(img);
    foto.addEventListener("click", () => abrirVisor(p));

    const info = document.createElement("div");
    info.className = "cuerpo";
    const titulo = document.createElement("h2");
    titulo.className = "nombre";
    titulo.textContent = p.nombre;
    const precio = document.createElement("p");
    precio.className = "precio" + (p.precio > 0 ? "" : " consultar");
    precio.textContent = precioTexto(p);
    const stock = document.createElement("p");
    const estado = estadoStock(p.stock);
    stock.className = "stock " + estado.clase;
    stock.textContent = estado.texto;
    info.append(titulo, precio, stock);
    tarjeta.append(foto, info);
    if (modoEdicion) tarjeta.appendChild(crearEditor(p));
    grilla.appendChild(tarjeta);
  });

  $("vacio").hidden = lista.length > 0;
  $("contador").textContent = `${lista.length} de ${perfumes.length} perfumes`;
}

function activarEdicion() {
  const pin = prompt("Ingresá tu PIN para editar el catálogo:");
  if (pin === null) return;
  if (pin !== CONFIG.pin) return alert("PIN incorrecto.");
  modoEdicion = true;
  $("barraAdmin").hidden = false;
  $("btnEditar").hidden = true;
  dibujar();
}

function salirEdicion() {
  modoEdicion = false;
  $("barraAdmin").hidden = true;
  $("btnEditar").hidden = false;
  dibujar();
}

function descargarCatalogo() {
  const contenido = "// Catálogo actualizado de PAMPA FRAGANCIAS\\nconst PERFUMES = " +
    JSON.stringify(perfumes, null, 2) + ";\\n";
  const archivo = new Blob([contenido], { type: "text/javascript;charset=utf-8" });
  const url = URL.createObjectURL(archivo);
  const enlace = document.createElement("a");
  enlace.href = url;
  enlace.download = "catalogo-pampa.js";
  enlace.click();
  URL.revokeObjectURL(url);
}

function iniciar() {
  cargarDatos();
  document.title = CONFIG.nombreNegocio + " | Catálogo";
  $("pieNegocio").textContent = CONFIG.nombreNegocio;
  $("nombreNegocio").hidden = true;
  $("nombreNegocio").textContent = "";
  ["buscar", "soloDisponibles", "orden"].forEach(id => {
    $(id).addEventListener("input", dibujar);
    $(id).addEventListener("change", dibujar);
  });
  $("btnEditar").addEventListener("click", activarEdicion);
  $("btnSalir").addEventListener("click", salirEdicion);
  $("btnDescargar").addEventListener("click", descargarCatalogo);
  $("btnDescartar").addEventListener("click", () => {
    if (!confirm("¿Querés borrar los cambios guardados en este dispositivo?")) return;
    localStorage.removeItem(CLAVE_LOCAL);
    location.reload();
  });
  $("visorCerrar").addEventListener("click", () => $("visor").close());
  $("visor").addEventListener("click", e => {
    if (e.target === $("visor")) $("visor").close();
  });
  dibujar();
}

iniciar();
