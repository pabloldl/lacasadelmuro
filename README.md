# La Casa del Muro

Landing estática de presentación en español. HTML5, CSS3 y JavaScript vanilla, sin dependencias, compilación ni servicios de terceros para cargar fuentes o imágenes.

## Publicación y edición

Publicar la raíz de este directorio en Netlify. No se necesita comando de build. El repositorio conectado es https://github.com/pabloldl/lacasadelmuro y la web https://lacasadelmuro.netlify.app/.

- `index.html`: contenido, SEO, enlaces, imágenes y servicios.
- `css/style.css`: identidad visual, tipografías y responsive. Las variables iniciales definen la paleta.
- `js/script.js`: navegación móvil, filtros, lightbox y aparición discreta de contenido.
- `img/`: nueve fotografías nuevas con variantes WebP de 800 píxeles y versiones mayores.
- `fonts/`: Newsreader y Plus Jakarta Sans variables, alojadas localmente con sus licencias SIL OFL.
- `favicon.svg`: marca en berenjena y blanco.

Para revisar basta abrir `index.html` en un navegador o servir esta carpeta con un servidor HTTP estático. La navegación y los enlaces de imágenes también funcionan sin JavaScript; los filtros y el lightbox lo requieren.

## Dirección artística

Reconstrucción completa: blanco, grafito y berenjena; Newsreader editorial y Plus Jakarta Sans para navegación y texto. Portada con fotografía arquitectónica y panel tipográfico superpuesto; presentación asimétrica; galería modular con filtros; lista abierta de comodidades; historia en fondo malva; entorno con dos escalas fotográficas; reservas y contacto independientes. Sin carrusel, tarjetas repetidas, bibliotecas de iconos ni estructuras de las versiones anteriores.

Se revisó la web publicada antes de implementar. Se descartaron la portada deteriorada, el carrusel anterior, las fotografías escalonadas, la tipografía única y la paleta azul/amarillo. Se examinaron varias alternativas por categoría antes de seleccionar las imágenes. También se descartaron dormitorios oscuros, cocinas menos cuidadas y detalles monumentales poco adecuados.

## Información y alcance

Datos conservados: La Casa del Muro, 11670 El Bosque (Cádiz), teléfono 644 863 760. Servicios: tres dormitorios, cocina equipada, chimenea, terraza, aire acondicionado y Wi-Fi. No se muestran precios, capacidad de huéspedes, disponibilidad, opiniones, premios ni promociones.

El relato del muro de más de cien años se atribuye expresamente al anfitrión; no se añaden fechas ni hechos históricos. No se publica una dirección de calle sin confirmar.

Reserva: https://www.booking.com/hotel/es/casa-del-muro.es.html. Ubicación: búsqueda de La Casa del Muro en Google Maps. El teléfono usa `tel:+34644863760`. Los destinos externos no garantizan disponibilidad ni condiciones de reserva; se consultan en el proveedor.

**Esta es una propuesta no oficial. No se han recibido fotografías auténticas autorizadas de la propiedad.** Las siete imágenes de arquitectura, interiores y materiales son ilustrativas y no documentan el alojamiento. Se identifica esa circunstancia en portada, presentación, galería, historia, lightbox y pie. Para presentar el inmueble real al cliente deben sustituirse por una sesión autorizada del alojamiento; las vistas del entorno sí son auténticas. No se han tomado imágenes de Booking, Airbnb, Maps ni redes sociales.

## Fotografías y licencias

Todas las fotografías se han sustituido. No se reutiliza la imagen anterior llamada `el-bosque.webp`: el archivo conserva un nombre descriptivo, pero su contenido es ahora una obra distinta.

Las siete fotografías de Pexels se utilizan bajo la [licencia Pexels](https://www.pexels.com/license/), que permite uso web y modificación. No se atribuyen al alojamiento ni se insinúa respaldo del autor. Los originales se descargaron de `images.pexels.com`; se redimensionaron y convirtieron a WebP, con recorte de presentación mediante CSS.

| Archivo base en img/ | Contenido | Autor y fuente | Licencia |
| --- | --- | --- | --- |
| portada.webp | Arcos mediterráneos y jardín; ilustrativa | Brunxs, [Sunny Mediterranean Archway with Gardens](https://www.pexels.com/photo/sunny-mediterranean-archway-with-gardens-35162638/) | Pexels |
| arquitectura.webp | Casa blanca entre pinos; ilustrativa | Bianca Ngt, [White Mediterranean House with Pine Tree View](https://www.pexels.com/photo/white-mediterranean-house-with-pine-tree-view-37030528/) | Pexels |
| salon.webp | Salón blanco luminoso; ilustrativa | Kristina Kino, [Spacious Modern Living Room with White Sofas](https://www.pexels.com/photo/spacious-modern-living-room-with-white-sofas-30211356/) | Pexels |
| dormitorio.webp | Dormitorio de luz natural; ilustrativa | Curtis Adams, [A Bed With White Linen in a Bedroom](https://www.pexels.com/photo/a-bed-with-white-linen-in-a-bedroom-8583859/) | Pexels |
| cocina.webp | Cocina blanca y madera; ilustrativa | Curtis Adams, [Modern Kitchen Interior with Natural Light](https://www.pexels.com/photo/modern-kitchen-interior-with-natural-light-37760310/) | Pexels |
| terraza.webp | Patio de piedra con sillón y agave; ilustrativa | Shuttercraftsman, [Mediterranean Style Patio with Chair and Succulent](https://www.pexels.com/photo/mediterranean-style-patio-with-chair-and-succulent-37296905/) | Pexels |
| piedra.webp | Sombras sobre piedra; ilustrativa, no es el muro del alojamiento | lange x, [Stone Wall with Leaf Shadows in Sunlight](https://www.pexels.com/photo/stone-wall-with-leaf-shadows-in-sunlight-34186648/) | Pexels |
| el-bosque.webp | Vista real de El Bosque y su iglesia | El Pantera, [El Bosque — P1460804](https://commons.wikimedia.org/wiki/File:El_Bosque_(provincia_de_C%C3%A1diz,_Espa%C3%B1a)_-_P1460804.jpg) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| grazalema.webp | Panorámica real invernal desde el pico Simancón | David Garcia Rodriguez (Ehades), [Pano grazalema](https://commons.wikimedia.org/wiki/File:Pano_grazalema.jpg) | [CC BY-SA 3.0 ES](https://creativecommons.org/licenses/by-sa/3.0/es/) |

Las dos obras de Wikimedia y sus versiones `-800.webp` mantienen sus respectivas licencias CC BY-SA. Cambios: redimensionado, compresión WebP y recorte visual CSS, sin alterar el contenido. Los créditos están también junto a las imágenes públicas. No se aplica la licencia de las fotografías al código de la web.

## Rendimiento y accesibilidad

Imágenes locales con `width`, `height`, `srcset` y `sizes`; portada de alta prioridad y secundarias con carga diferida. Sin fuentes remotas, mapas embebidos ni vídeo. Las versiones pequeñas evitan descargar innecesariamente las fotografías mayores en móvil.

Menú móvil con `aria-expanded`, cierre con Escape y al elegir destino. Filtros con `aria-pressed`; lightbox nativo `dialog` con título, descripción, navegación por flechas, cierre con Escape y devolución del foco. Una selección de una sola imagen desactiva anterior/siguiente. Enlace de salto al contenido, foco visible y textos alternativos. Las animaciones no recortan titulares ni acentos. Se respeta `prefers-reduced-motion`; si JavaScript falla, el contenido permanece visible.

## Revisión

Se realizan comprobaciones en Chrome de escritorio con emulación de viewport a 375, 768, 1440 y 1920 px: carga de imágenes y fuentes, desbordamiento, secciones, menú, filtros, ampliación y navegación de teclado. Las capturas se revisan fuera del repositorio. También se comprueban el modo sin JavaScript y la preferencia de movimiento reducido. Esta revisión no equivale a pruebas en dispositivos físicos ni en Safari/Firefox.

No se afirma una puntuación Lighthouse ni una auditoría WCAG completa. Los enlaces comerciales de terceros pueden mostrar consentimientos o protecciones automáticas; no se verifica inventario ni se efectúan reservas.

## Sustituir por fotografías reales

Guardar originales autorizados y sus permisos; generar variantes WebP; actualizar imagen, dimensiones, `srcset`, `sizes` y texto alternativo. Actualizar la tabla de créditos. Retirar la etiqueta ilustrativa únicamente de las imágenes que ya representen realmente la propiedad y cuenten con permiso. Mantener las atribuciones del entorno mientras se utilicen esas obras.
