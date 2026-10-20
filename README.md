# La Casa del Muro — Entre muros y montañas

Rediseño completo de brutalismo editorial arquitectónico. HTML5, CSS3 y JavaScript vanilla. Sin frameworks, instalaciones, Node.js ni compilación. Propuesta web no oficial.

## Abrir y publicar

Abrir `index.html` directamente en un navegador actual. Todos los recursos, incluida la tipografía, son locales. Para publicar en hosting estático, subir el contenido completo de esta carpeta a la raíz pública, conservando las rutas y usando HTTPS. Esta entrega modifica los archivos locales; no se ha realizado una publicación remota.

## Dirección visual y estructura

Cabecera tipográfica compacta con una sola navegación. Portada de gran formato con imagen desplazada. Seis secciones reorganizadas:

1. **El lugar:** introducción editorial con número monumental.
2. **La casa:** galería irregular, una imagen vertical y dos horizontales de distinto tamaño.
3. **La historia:** fondo carbón, títulos blancos y acento naranja.
4. **Los espacios:** cuatro filas desplegables para salón, dormitorios, cocina y terraza. Aire acondicionado y Wi-Fi en una franja tipográfica.
5. **El entorno:** panorámica auténtica con titular superpuesto y notas sobre el pueblo, el Majaceite y la Sierra de Grazalema.
6. **Reservas y contacto:** cierre naranja, teléfono, disponibilidad en Booking y Maps.

Pie oscuro tipográfico. Sin tarjetas, serif, formas orgánicas ni iconos de servicios. Se conservan lightbox, teclado, menú móvil y movimiento reducido.

```text
la-casa-del-muro/
  index.html
  css/style.css
  js/script.js
  img/
    muro.svg
    dormitorios.svg
    salon.svg
    cocina.svg
    piedra.svg
    terraza.svg
    el-bosque.jpg
  fonts/
    barlow-condensed-bold.ttf
    OFL.txt
  favicon.svg
  .gitignore
  README.md
```

## Modificar

- **Textos:** editar `index.html`. Secciones: `lugar`, `casa`, `historia`, `espacios`, `entorno`, `contacto`. `reservas` se conserva dentro de contacto.
- **Colores:** variables `:root` de CSS: `--paper: #F1EFE9`, `--ink: #191919`, `--accent: #D94F30`, `--surface: #DAD6CE`, `--dark: #252525`. El texto del bloque naranja usa `#101010` para mejorar el contraste del texto pequeño.
- **Tipografía:** Barlow Condensed Bold local para títulos, Arial/Helvetica para cuerpo, Courier New para etiquetas. No hay peticiones externas de fuentes.
- **Teléfono:** cambiar `644 863 760` en texto y `+34644863760` en todos los `tel:` y en Schema.org.
- **Booking:** reemplazar todas las apariciones de `https://www.booking.com/hotel/es/casa-del-muro.es.html`, también en Schema.org.
- **Menú:** un solo `nav`; desplegable hasta 700 px, horizontal desde 701 px. Sin JavaScript, los enlaces siguen visibles.
- **Espacios:** elementos `details` nativos que funcionan con teclado y sin JavaScript; sus botones abren el lightbox.
- **Animaciones:** `type-mask` revela títulos, `image-wipe` revela imágenes verticalmente, `rule-reveal` expande líneas. Intersection Observer activa `visible`. `prefers-reduced-motion` desactiva movimiento y navegación animada. Sin JS todo es visible.
- **Año:** actualización automática con respaldo en HTML.

## Sustituir placeholders

Los seis SVG se han redibujado como composiciones abstractas de materia, planos y líneas. **No representan habitaciones, fachadas, vistas, planos ni detalles constructivos reales.** No se utilizan fotografías de otros alojamientos ni recursos de las otras landings.

1. Obtener fotografías auténticas autorizadas por propietario y fotógrafo.
2. Exportar WebP o JPEG optimizados de unos 1400–2000 px y guardarlos con nombres distintos en `img/`.
3. Cambiar `src`, `alt`, `width` y `height` en los `img` correspondientes.
4. Actualizar también `data-image`, `data-alt`, `data-caption` y `aria-label` de los botones de galería. El lightbox toma esos datos explícitamente.
5. La cuarta imagen, terraza, se define en el botón `data-gallery` de su fila desplegable y se carga al abrirla. Cambiar allí los mismos atributos.
6. Conservar el orden del archivo: dormitorios (0), salón (1), cocina (2), terraza (3). Los botones de las filas usan `data-open-gallery` con esos índices.
7. Retirar etiquetas de provisional solo en imágenes auténticas autorizadas. Cuando toda la galería sea real, actualizar el aviso general y el encabezado del lightbox.
8. Revisar encuadres en móvil/escritorio y registrar aquí derechos y modificaciones.

## Origen y licencias

| Archivo | Origen y contenido | Derechos / modificaciones |
| --- | --- | --- |
| `img/muro.svg` | Estudio abstracto original de superficies y luz. | Placeholder propio del rediseño, sin material de terceros; no representa la casa. |
| `img/dormitorios.svg` | Composición original de bandas verticales. | Placeholder abstracto; no representa dormitorios ni distribución. |
| `img/salon.svg` | Composición original de planos y sombras. | Placeholder abstracto; no representa salón ni mobiliario. |
| `img/cocina.svg` | Composición original de retícula y superficies. | Placeholder abstracto; no representa cocina ni equipamiento. |
| `img/piedra.svg` | Estudio original de materia fragmentada. | Placeholder abstracto; no documenta el muro real. |
| `img/terraza.svg` | Composición original de luz y diagonales. | Placeholder abstracto; no representa terraza ni vistas. |
| `img/el-bosque.jpg` | **El Bosque Lomo de Enmedio**, Antonio Acosta Fernández, 2011. [Ficha de Wikimedia Commons](https://commons.wikimedia.org/wiki/File:El_Bosque_Lomo_de_Enmedio.JPG). | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). Conservada de este mismo proyecto, no de otra landing. Reducida de 6240 × 1632 a 1920 × 502, JPEG calidad 85 mediante wsrv.nl, y guardada localmente. Encuadre visual adaptado; atribución visible. No se presenta como vista desde la vivienda. |
| `favicon.svg` | Monograma geométrico original del rediseño. | Sin material de terceros. |
| `fonts/barlow-condensed-bold.ttf` | Barlow Condensed Bold, The Barlow Project Authors. Distribución Google Fonts. [Proyecto original](https://github.com/jpt/barlow). | SIL Open Font License 1.1; copia en `fonts/OFL.txt`. Archivo local sin modificaciones. |

No se han descargado fotografías del alojamiento de Booking, Maps u otros portales. La panorámica del entorno es la única fotografía real; los demás visuales son abstractos y provisionales.

## Datos conservados y pendientes

- La Casa del Muro; 11670 El Bosque, Cádiz; 644 863 760. Enlaces suministrados conservados.
- Información del documento de encargo: apartamento completo, tres dormitorios, salón, cocina equipada, chimenea, terraza, aire acondicionado y Wi-Fi. Antigüedad del muro atribuida a la descripción pública del anfitrión, sin fechas ni acontecimientos inventados.
- La [ficha de Booking](https://www.booking.com/hotel/es/casa-del-muro.es.html) requiere JavaScript y no permitió contrastar independientemente todos los datos durante la implementación inicial. Confirmar datos y autorización con la propiedad antes de presentar la web como oficial.
- **Plaza San Antonio, 4 sigue omitida:** dirección exacta pendiente de confirmación inequívoca. Maps abre una búsqueda por nombre y municipio, sin coordenadas inventadas.
- Fotografías auténticas y permisos pendientes de entrega.
- Sin precios, aforo, reseñas, premios, disponibilidad ficticia, políticas, WhatsApp ni redes sociales.
- Schema.org `LodgingBusiness` con dirección por localidad. Sin precios, puntuaciones ni geolocalización.
- Con dominio definitivo, añadir canonical, `og:url` y URL absoluta de `og:image`. Sustituir el SVG OG provisional por un JPEG autorizado de 1200 × 630 para mejorar compatibilidad social.

## Verificación del rediseño

Comprobaciones en Chrome mediante el archivo local:

- Revisión a **375, 768 y 1440 px**, más 320, 700, 701 y 1024 px.
- Carga de fuente local e imágenes; cuatro entradas distintas en lightbox.
- Sin scroll horizontal accidental; menús excluyentes y cabecera sin solapamientos.
- Menú: apertura, Escape, cierre al navegar y devolución del foco.
- Filas desplegables y apertura del lightbox desde galería y filas.
- Lightbox: navegación, flechas de teclado, Escape, bloqueo/desbloqueo de scroll y restauración del foco.
- Enlaces internos y teléfono `tel:+34644863760`.
- Movimiento reducido, contenido y navegación sin JavaScript.
- Revelados comprobados al recorrer la página: no quedan elementos pendientes de aparecer. Contraste del texto negro sobre el bloque naranja: 4,63:1.
- Sin errores JavaScript observados durante estas interacciones.
- Rutas locales, SVG, JSON-LD y `.gitignore`; ejecución sin compilación.

Los destinos externos se conservan. El flujo de Booking, el resultado de Maps y la apertura de una llamada dependen de los servicios y aplicaciones externos. No se han enviado reservas ni realizado llamadas. Las comprobaciones no equivalen a una auditoría completa en Safari, Firefox o lectores de pantalla.
