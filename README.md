# La Casa del Muro — Detrás de cada muro, una historia.

Landing de alojamiento rural en El Bosque, Cádiz. Nueva identidad de casa de pueblo contemporánea: blanco, azul petróleo y amarillo mantequilla, tipografía Outfit y fotografía abundante. HTML5, CSS3 y JavaScript vanilla, sin frameworks ni compilación. Propuesta web no oficial.

## Visualizar y desplegar

Abrir `index.html` en un navegador actual. Todos los recursos son locales; no hay fuentes ni imágenes remotas en tiempo de ejecución. Para Netlify u otro hosting estático, publicar esta carpeta sin comando de compilación, conservando `css/`, `js/`, `img/` y `fonts/`. El repositorio es [pabloldl/lacasadelmuro](https://github.com/pabloldl/lacasadelmuro) y el dominio actual es [lacasadelmuro.netlify.app](https://lacasadelmuro.netlify.app/).

## Estructura visual nueva

1. **Portada:** titular y CTA sobre blanco, con fotografía horizontal independiente de arquitectura tradicional, identificada como ambiente.
2. **Bienvenida:** texto a la izquierda y dos fotografías verticales escalonadas a la derecha.
3. **Los espacios:** carrusel horizontal de salón, dormitorios, cocina y terraza, con controles, teclado, arrastre de ratón y desplazamiento táctil nativo.
4. **Comodidades:** lista visual abierta con los seis servicios del encargo y SVG consistentes. Aire acondicionado con seis brazos idénticos, rotados cada 60° y centrados en viewBox 32 × 32.
5. **Historia:** fondo azul petróleo, texto blanco y fotografía ilustrativa de piedra, sin atribuirla al muro real.
6. **Entorno:** cuadrícula de tres fotografías reales y distintas del municipio, la sierra y el río.
7. **Contacto:** datos y enlaces verificados, sin reservas ficticias ni formularios.

Se han retirado las antiguas tipografías, los espacios sin fotografía, la imagen institucional y el CSS anterior. No se utiliza código de componentes de otras landings. Los recursos nuevos de stock no proceden de otros proyectos; las tres imágenes del entorno se conservan de este mismo proyecto.

## Distinción entre imágenes de ambiente y reales

**Las ocho fotografías de arquitectura, interiores, terraza y piedra son stock ilustrativo. No son fotografías de La Casa del Muro.** El encargo autoriza esta solución. La portada, la bienvenida, el carrusel, la historia, los textos alternativos, el lightbox y los créditos distinguen expresamente su carácter ilustrativo.

La nota junto al carrusel dice: «Imágenes de ambiente ilustrativas. Pueden no corresponder al alojamiento», y aclara además que son fotografías de stock, sin colocar un aviso sobre cada imagen.

Las únicas fotografías que se identifican como lugares reales son las tres del entorno: El Bosque, Sierra de Grazalema y río Majaceite. No se presentan como vistas desde la vivienda. No se utilizan imágenes del Ayuntamiento. No hay fotografías duplicadas en la página ni archivos originales duplicados en otro formato.

## Origen y licencia de cada imagen

Las ocho fotografías de ambiente se han obtenido de Pexels. La [licencia Pexels](https://www.pexels.com/license/) permite descargarlas, modificarlas y usarlas en una web, sin atribución obligatoria. No permite insinuar respaldos por personas o marcas, revender las copias sin modificar como productos fotográficos ni redistribuirlas en plataformas de stock. Aquí se usan como ilustración identificada, sin presentar los lugares como el establecimiento real. No se usa la fotografía en el logotipo.

| Archivo en `img/` | Contenido / autor y fuente | Licencia / tratamiento |
| --- | --- | --- |
| `ambiente-portada.webp` | Arquitectura tradicional en Granada, puerta, reja y cerámica. [Pexels 8426862](https://www.pexels.com/photo/black-metal-near-the-door-of-a-concrete-house-8426862/). | Licencia Pexels. 1800 px de ancho; WebP calidad 78. Encuadre CSS horizontal. Fotografía ilustrativa. |
| `ambiente-bienvenida-1.webp` | Fachada blanca con ventana azul. **Piers Olphin**. [Pexels 15172242](https://www.pexels.com/photo/mediterranean-white-house-15172242/). | Licencia Pexels. 1000 px de ancho; WebP calidad 78. Fotografía ilustrativa. |
| `ambiente-bienvenida-2.webp` | Patio blanco con flores y reja. **Şiba**. [Pexels 16637513](https://www.pexels.com/photo/elegant-white-house-16637513/). | Licencia Pexels. 1000 px de ancho; WebP calidad 78. Fotografía ilustrativa. |
| `ambiente-salon.webp` | Salón luminoso con chimenea. **Curtis Adams**. [Pexels 12700470](https://www.pexels.com/photo/the-interior-of-the-living-room-of-a-house-12700470/). | Licencia Pexels. 1800 px de ancho; WebP calidad 78. Interior ilustrativo. |
| `ambiente-dormitorios.webp` | Dormitorio con cabecero de madera y textiles. **Max Vakhtbovych**. [Pexels 7019019](https://www.pexels.com/photo/stylish-interior-of-bedroom-with-glowing-lamps-7019019/). | Licencia Pexels. 1600 px de ancho; WebP calidad 78. Interior ilustrativo. |
| `ambiente-cocina.webp` | Cocina blanca con encimera de madera y azulejos. **Max Vakhtbovych**. [Pexels 6436786](https://www.pexels.com/photo/interior-of-modern-white-kitchen-6436786/). | Licencia Pexels. 1600 px de ancho; WebP calidad 78. Interior ilustrativo. |
| `ambiente-terraza.webp` | Patio mediterráneo con plantas y muebles de exterior. **Chermiti Mohamed**. [Pexels 37515277](https://www.pexels.com/photo/tranquil-courtyard-in-sunlit-mediterranean-style-37515277/). | Licencia Pexels. 1000 px de ancho; WebP calidad 78. No es la terraza del alojamiento. |
| `ambiente-muro.webp` | Detalle de piedra en Valencia. **Marco De Luca**. [Pexels 16748601](https://www.pexels.com/photo/rough-texture-of-stone-wall-16748601/). | Licencia Pexels. 1800 px de ancho; WebP calidad 78. No representa el muro histórico original. |
| `el-bosque.webp` | El Bosque desde Lomo de Enmedio. **Antonio Acosta Fernández**, 2011. [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:El_Bosque_Lomo_de_Enmedio.JPG). | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). 3200 × 837, WebP calidad 78; encuadre CSS adaptado en miniatura. Lugar real. |
| `sierra-grazalema.webp` | Grazalema Mountains. **piet theisohn**. [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Grazalema_Mountains_(28227255684).jpg). | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/). 1800 × 475, WebP calidad 78; encuadre CSS adaptado en miniatura. Lugar real. |
| `rio-majaceite.webp` | Río Majaceite a su paso por El Bosque. **El Pantera**. [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:R%C3%ADo_Majaceite_-_P1460080.jpg). | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). 1600 × 1200, WebP calidad 78. La copia conserva CC BY-SA 4.0. Lugar real. |

Todas las copias locales mantienen su proporción original. El diseño usa `object-fit: cover` con encuadres revisados; el lightbox muestra el archivo completo con `object-fit: contain`. Las descargas se redujeron y exportaron a WebP localmente. No se han generado escenas ni alterado los elementos de las fotografías.

No se han descargado fotos de Booking, Airbnb, Maps ni redes sociales. Los fotógrafos y las plataformas no respaldan este alojamiento ni esta propuesta.

## Tipografía e iconos

Outfit Regular (400) y SemiBold (600), descargadas de Google Fonts y servidas desde `fonts/outfit/`. [Proyecto y distribución](https://github.com/google/fonts/tree/main/ofl/outfit). Licencia SIL Open Font License 1.1 completa en `fonts/outfit/OFL.txt`. No se usa la antigua serif ni una tipografía condensada.

Favicon y SVG de comodidades originales del proyecto, sin bibliotecas externas. Paleta en `:root` de CSS: `--white`, `--blue`, `--soft-blue`, `--yellow`, `--grey`, `--ink`. El amarillo se reserva para detalles; el texto usa tonos con contraste.

## Editar contenido e imágenes

- Textos directamente en `index.html`. Secciones: `inicio`, `casa`, `espacios`, `comodidades`, `historia`, `entorno`, `contacto`; `reservas` permanece dentro de contacto.
- Teléfono: cambiar `644 863 760` y todos los `tel:+34644863760`; también `telephone` en JSON-LD.
- Booking: conservar o actualizar todas las apariciones de `https://www.booking.com/hotel/es/casa-del-muro.es.html`.
- Fotografías: modificar `src`, `width`, `height`, `alt`, y en el botón `data-image`, `data-alt`, `data-caption`, `aria-label`. Usar las dimensiones reales y un archivo distinto por fotografía. Registrar nuevos derechos y créditos aquí.
- La galería ampliada incorpora automáticamente los botones `data-gallery`. El carrusel toma los elementos `.space-slide` y actualiza su contador con el número de elementos.
- Al sustituir ambiente por fotografías auténticas autorizadas, actualizar avisos y metadatos de cada imagen. Retirar el aviso general de stock solo cuando las cuatro imágenes del carrusel sean auténticas.
- Si cambia el dominio, actualizar canonical, Open Graph y Schema.org.

## Material real que puede aportar el propietario

La web ya tiene fotografías en todos los espacios previstos. Para reemplazar el stock por una presentación auténtica del establecimiento se necesitan: fachada o entrada horizontal, dos detalles verticales, salón con chimenea, dormitorios, cocina, terraza y muro original. Obtener originales de alta resolución, autor y permiso de uso web antes de sustituirlos.

Nombre, municipio, teléfono y servicios se conservan del encargo. El dato centenario se atribuye a la descripción pública del anfitrión, sin fechas ni acontecimientos inventados. Plaza San Antonio, 4 sigue omitida, pendiente de confirmación. Maps abre una búsqueda por nombre y municipio. No se incluyen precios, reseñas, aforo, WhatsApp, políticas o disponibilidad ficticia.

## Comprobaciones realizadas

En Chrome con archivos locales:

- Revisión a **375, 768 y 1440 px**, más 320, 600, 900, 901 y 1024 px.
- Once fotografías cargadas y distintas; cero espacios vacíos o placeholders.
- Navegación principal única: móvil hasta 900 px y horizontal desde 901 px. Enlaces internos existentes; sin enlaces vacíos.
- Menú: apertura, Escape, cierre al navegar y foco en el destino.
- Carrusel a 375, 768 y 1440 px: anterior/siguiente, flechas, Home y End, contador y desactivación de controles en extremos.
- Arrastre con ratón y gesto táctil emulado en Chrome: desplazamiento comprobado y sin apertura accidental del lightbox.
- Lightbox: apertura, anterior/siguiente, flechas, Escape, bloqueo y restitución del scroll, devolución del foco.
- Movimiento reducido, revelados al recorrer toda la página, y contenido y navegación sin JavaScript.
- Sin desbordamiento horizontal de la página ni solapamiento de marca y menú en los anchos comprobados.
- Sin errores JavaScript detectados durante estas interacciones. El gesto táctil se ha emulado; no se ha probado en un teléfono físico.

Imágenes fuera de portada con `loading="lazy"`; portada con prioridad alta. No se ha ejecutado Lighthouse ni se afirma una puntuación de rendimiento. No se ha efectuado auditoría completa en Safari, Firefox o lectores de pantalla. No se han realizado reservas ni llamadas reales.
