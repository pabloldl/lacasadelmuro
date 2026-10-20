# La Casa del Muro — Entre muros y montañas

Landing estática en HTML5, CSS3 y JavaScript vanilla. Sin frameworks, instalaciones ni compilación. Conserva la identidad editorial, la tipografía Barlow Condensed y la paleta papel, carbón y naranja. Propuesta web no oficial.

## Visualizar y publicar

Abrir `index.html` en un navegador actual. Todos los recursos son locales: `css/`, `js/`, `img/` y `fonts/`. No se requieren Node.js, fuentes remotas ni un backend.

Para hosting estático, subir el contenido completo de esta carpeta conservando las rutas y servir `index.html` como inicio. El repositorio del proyecto es [pabloldl/lacasadelmuro](https://github.com/pabloldl/lacasadelmuro). La web de referencia es [lacasadelmuro.netlify.app](https://lacasadelmuro.netlify.app/); la publicación automática depende de la conexión del sitio Netlify con el repositorio.

## Renovación fotográfica

Se han retirado los seis SVG abstractos que ocupaban portada, dormitorios, salón, cocina, terraza y muro. No se utilizan fotografías de otras viviendas ni imágenes generadas del alojamiento.

- **Portada:** fotografía real del Ayuntamiento de El Bosque, identificada como imagen del entorno. Es una solución temporal mientras se recibe una fotografía autorizada de La Casa del Muro; no se presenta como su fachada.
- **La casa:** cuatro espacios editoriales de texto preparados para fotografías independientes de dormitorios, salón con chimenea, cocina y terraza. Se indica discretamente que las fotos están pendientes. No existen botones para ampliar imágenes inexistentes.
- **Historia:** espacio reservado para una fotografía del muro original. No se sustituye por un muro ajeno ni uno generado.
- **Entorno:** se conserva la panorámica de El Bosque de este mismo proyecto y se incorporan fotografías reales de la Sierra de Grazalema y el río Majaceite. No se repiten imágenes. El lightbox permite ampliar las tres fotografías nuevas a su encuadre completo.
- **Espacios:** las filas desplegables conservan sus textos y eliminan los enlaces «Ver estudio provisional».

## Origen, autoría y licencias

| Archivo local | Fuente y autor | Licencia y tratamiento |
| --- | --- | --- |
| `img/el-bosque-arquitectura.jpg` | **El Bosque (provincia de Cádiz, España) - P1470072.jpg**, Ayuntamiento. Autor: **El Pantera**. [Ficha original](https://commons.wikimedia.org/wiki/File:El_Bosque_(provincia_de_C%C3%A1diz,_Espa%C3%B1a)_-_P1470072.jpg). | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Copia de 1200 × 1600, JPEG calidad 85; encuadre CSS adaptado en escritorio. El archivo conserva el encuadre completo. La copia mantiene CC BY-SA 4.0. |
| `img/el-bosque.jpg` | **El Bosque Lomo de Enmedio.JPG**. Autor: **Antonio Acosta Fernández**, 2011. [Ficha original](https://commons.wikimedia.org/wiki/File:El_Bosque_Lomo_de_Enmedio.JPG). | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). Recurso conservado de este mismo proyecto, no de otra landing. Reducción de 6240 × 1632 a 1920 × 502, JPEG calidad 85; encuadre visual adaptado. |
| `img/sierra-grazalema.jpg` | **Grazalema Mountains (28227255684).jpg**. Autor: **piet theisohn**. [Ficha original](https://commons.wikimedia.org/wiki/File:Grazalema_Mountains_(28227255684).jpg). | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/). Copia de 1800 × 475, JPEG calidad 85; sin recorte del archivo ni en la galería. |
| `img/rio-majaceite.jpg` | **Río Majaceite - P1460080.jpg**, a su paso por El Bosque. Autor: **El Pantera**. [Ficha original](https://commons.wikimedia.org/wiki/File:R%C3%ADo_Majaceite_-_P1460080.jpg). | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Copia de 1600 × 1200, JPEG calidad 85; sin recorte del archivo ni en la galería. La copia mantiene CC BY-SA 4.0. |
| `fonts/barlow-condensed-bold.ttf` | Barlow Condensed Bold, **The Barlow Project Authors**. [Proyecto original](https://github.com/jpt/barlow). | SIL Open Font License 1.1. Copia completa de la licencia en `fonts/OFL.txt`; fuente local sin modificar. |
| `favicon.svg` | Monograma original del proyecto. | Sin recursos de terceros. |

Las fuentes y licencias se verificaron mediante los metadatos de Wikimedia Commons. Las copias reducidas de arquitectura y Majaceite se obtuvieron del servicio oficial de miniaturas y se optimizaron localmente; la sierra y la panorámica se redujeron mediante wsrv.nl. Ningún servicio externo es necesario para mostrar las imágenes. Los archivos locales no incorporan recortes, retoques del contenido ni deformaciones. Créditos y licencias accesibles en la propia web, en «Créditos fotográficos».

Las fotografías muestran el **entorno**. No se atribuyen al alojamiento ni se presentan como sus vistas. No se han descargado fotografías del alojamiento desde Booking, Maps, Airbnb o redes sociales. No se han reutilizado las imágenes de otras webs del espacio de trabajo.

## Material necesario del propietario

Para completar la fotografía del alojamiento se necesitan originales de alta resolución y permiso de uso web de:

1. Fachada, entrada o una vista arquitectónica reconocible para portada.
2. Dormitorios: al menos una toma vertical y, preferiblemente, una de cada dormitorio.
3. Salón donde se vea la chimenea.
4. Cocina equipada.
5. Terraza: una toma general que muestre su configuración real.
6. Muro histórico: una toma de contexto y otra de detalle, si es posible.

Se recomiendan imágenes nítidas, con luz natural, sin marcas de agua y sin enviar únicamente capturas de pantalla. Registrar nombre del fotógrafo y autorización del propietario. Mientras falte este material, la galería de la casa y el muro no pueden considerarse definitivos.

## Incorporar fotografías de la casa

Guardar JPEG o WebP optimizados en `img/`, con nombres distintos y sin duplicados. En `index.html` existen cinco contenedores `data-photo-slot`: `dormitorios`, `salon`, `cocina`, `terraza`, `muro`.

Sustituir el contenido de `.photo-pending` o `.wall-photo-pending` por la fotografía autorizada. La composición ya dispone de columnas y anchos desiguales. Respetar las proporciones naturales y revisar el resultado en móvil.

Para incorporar una imagen al lightbox, añadir este botón dentro de su figura, adaptando los datos:

```html
<button class="image-trigger" type="button" data-gallery
  data-image="img/salon-real.webp"
  data-alt="Descripción fiel del salón de La Casa del Muro"
  data-caption="Salón con chimenea · Fotografía: nombre del autor"
  aria-label="Ampliar fotografía del salón">
  <img src="img/salon-real.webp" width="1600" height="1067"
    loading="lazy" alt="Descripción fiel del salón de La Casa del Muro">
  <span class="expand-mark" aria-hidden="true">↗</span>
</button>
```

Usar las dimensiones reales del archivo y retirar las indicaciones de pendiente solo en las imágenes sustituidas. El script incorpora automáticamente cada botón `data-gallery` a la navegación del lightbox. Si se añaden fotografías de la casa, actualizar también el encabezado del lightbox para reflejar que ya no contiene solo imágenes del entorno.

En portada, actualizar `src`, `width`, `height`, `alt`, `data-image`, `data-alt`, `data-caption`, `aria-label` y el pie; retirar la atribución al Ayuntamiento al reemplazar su fotografía.

## Textos, colores y datos

- Editar los textos en `index.html`. Secciones: `lugar`, `casa`, `historia`, `espacios`, `entorno`, `contacto`; `reservas` permanece dentro de contacto.
- Variables CSS: `--paper: #F1EFE9`, `--ink: #191919`, `--accent: #D94F30`, `--surface: #DAD6CE`, `--dark: #252525`. El bloque naranja usa texto `#101010` para contraste. Se conserva el arreglo de la Ñ mediante el margen de recorte superior del título.
- Teléfono: sustituir `644 863 760` y todos los `tel:+34644863760`, también `telephone` en Schema.org.
- Booking: conservar o actualizar todas las apariciones de `https://www.booking.com/hotel/es/casa-del-muro.es.html`.
- Menú único: móvil hasta 700 px, horizontal desde 701 px. `details` funciona sin JS; el lightbox devuelve el foco y admite flechas y Escape. Animaciones con Intersection Observer y respeto a movimiento reducido.
- La información comercial sigue basada en el encargo; el texto del muro atribuye su antigüedad a la descripción pública del anfitrión. No se añaden servicios, aforo, reseñas, precios ni políticas.
- Plaza San Antonio, 4 sigue omitida, pendiente de confirmación inequívoca. Maps busca nombre y municipio.
- Confirmar datos y autorización con la propiedad antes de presentar la web como oficial. No se incluyen WhatsApp ni redes sociales no verificadas.
- Con dominio definitivo confirmado, añadir canonical, `og:url` y URL absoluta de `og:image`. La imagen OG actual es una panorámica del municipio, no de la vivienda.

## Validación

Comprobado en Chrome a 320, 375, 700, 701, 768, 1024 y 1440 px:

- Cuatro fotografías locales cargadas, sin duplicados; fuente local disponible.
- Sin gráficos abstractos, imágenes rotas ni enlaces vacíos.
- Proporciones originales en galería y lightbox; encuadre CSS en portada y panorámica.
- Sin desbordamientos horizontales ni solapamiento de la cabecera.
- Menú móvil, Escape, filas desplegables y navegación del lightbox funcionales.
- Restitución de foco, desbloqueo del scroll y navegación por flechas comprobados.
- Revelados al recorrer la página y movimiento reducido comprobados.
- Sin errores JavaScript detectados durante estas interacciones.

Las reservas, los resultados de Maps y la apertura de llamadas dependen de servicios externos; no se han enviado reservas ni realizado llamadas. La comprobación no sustituye una auditoría completa en Safari, Firefox o lectores de pantalla.
