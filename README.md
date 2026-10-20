# La Casa del Muro — Un lugar para desconectar

Nueva landing boutique de inspiración mediterránea. HTML5, CSS3 y JavaScript vanilla, sin frameworks, instalaciones ni compilación. Propuesta web no oficial.

## Visualizar y publicar

Abrir `index.html` en un navegador actual. Todos los recursos se sirven localmente: `css/`, `js/`, `img/`, `fonts/`. No se requieren Node.js, fuentes remotas ni backend.

En hosting estático, subir el contenido completo de esta carpeta conservando las rutas. El repositorio es [pabloldl/lacasadelmuro](https://github.com/pabloldl/lacasadelmuro) y el sitio es [lacasadelmuro.netlify.app](https://lacasadelmuro.netlify.app/). Netlify publica automáticamente los cambios de la rama conectada. Las URL canonical, Open Graph y Schema.org apuntan al dominio actual; actualizarlas si cambia.

## Nuevo diseño

Se han reconstruido encabezado, portada, secciones, galería, botones, footer y animaciones. No se conservan componentes ni CSS de la versión brutalista.

- Blanco cálido, arena, espresso, oliva y cobre.
- DM Serif Display local para titulares, Arial/Helvetica para contenido. Se ha retirado Barlow Condensed y su antiguo archivo de licencia.
- Header integrado sobre la portada; fondo claro al desplazarse. Navegación horizontal desde 901 px y un único menú desplegable hasta 900 px.
- Hero panorámico con título moderado, dos acciones y degradado para legibilidad.
- Bienvenida equilibrada con fotografía vertical del municipio.
- Galería preparada para salón, dormitorios, cocina y terraza; fotografías aún pendientes.
- Comodidades confirmadas con SVG originales y discretos, sin tarjetas.
- Historia sobre arena con espacio preparado para el muro auténtico.
- Paisajes de Grazalema y Majaceite a su proporción natural, sin duplicar fotografías.
- Contacto sencillo y pie espresso con navegación y créditos.
- Apariciones suaves con Intersection Observer, navegación por teclado y respeto a `prefers-reduced-motion`.

## Editar textos, colores y teléfono

- Contenido directamente en `index.html`. Anclas: `inicio`, `casa`, `rincones`, `comodidades`, `historia`, `entorno`, `contacto`, `reservas`.
- Variables en `:root` de `css/style.css`: `--warm: #FCFAF7`, `--sand: #E8DFD3`, `--espresso: #382D27`, `--olive: #4E5946`, `--copper: #B58A69`. Cobre se reserva para detalles decorativos; el cuerpo de texto usa tonos oscuros.
- Teléfono: buscar `644 863 760` y `tel:+34644863760`; actualizar también `telephone` en JSON-LD.
- Reserva: buscar todas las apariciones de `https://www.booking.com/hotel/es/casa-del-muro.es.html`.
- El año se actualiza con JavaScript; HTML incluye un respaldo.
- La tipografía se carga desde `fonts/dm-serif-display/regular.ttf`, con licencia SIL OFL en esa misma carpeta.

## Fotografías disponibles y pendientes

**Las cuatro fotografías disponibles son del entorno, no del alojamiento.** La panorámica de portada y el Ayuntamiento se identifican expresamente. No hay imágenes de otras viviendas ni fotografías generadas presentadas como reales. Las fotos del alojamiento no se han descargado desde Booking, Airbnb, Maps ni redes sociales.

El propietario debe aportar originales y autorización de uso web para:

1. Una panorámica atractiva de la casa para portada.
2. Una fotografía vertical del alojamiento para bienvenida, si se desea sustituir la arquitectura del pueblo.
3. Salón donde aparezca la chimenea.
4. Dormitorios, preferiblemente una toma de cada dormitorio.
5. Cocina equipada.
6. Terraza en su configuración real.
7. Muro histórico: contexto y detalle.

Se recomiendan originales de alta resolución, luminosos, nítidos, sin marcas de agua ni capturas de pantalla. Registrar autor y permiso de la propiedad. Los espacios de galería y muro siguen pendientes y no constituyen una presentación fotográfica definitiva del alojamiento.

## Incorporar imágenes auténticas

Guardar JPEG o WebP optimizados y con nombres distintos en `img/`. No duplicar una misma toma en varias secciones.

- **Portada:** sustituir `src`, `width`, `height` y `alt` de `.hero-photo`; actualizar la indicación del pie y el crédito. Revisar `object-position` en móvil y escritorio. No retirar el aviso hasta que se use una imagen real autorizada de la casa.
- **Bienvenida:** actualizar el `img`, los datos `data-*`, `aria-label` del botón y el pie con fotógrafo y licencia.
- **Galería:** contenedores `data-photo-slot="salon"`, `"dormitorios"`, `"cocina"`, `"terraza"`. Sustituir `.room-pending` por una fotografía o un botón ampliable como el ejemplo inferior. Mantener dimensiones naturales; la CSS ya admite imágenes completas.
- **Historia:** sustituir `.wall-pending` dentro de `data-photo-slot="muro"`. No usar un muro genérico como si fuera el original.
- Retirar avisos de pendiente solo en los recursos sustituidos; actualizar el aviso general cuando estén todas las fotos de los espacios.
- Actualizar README, créditos y el encabezado del lightbox si este deja de mostrar solo el entorno.

```html
<button class="photo-button" type="button" data-gallery
  data-image="img/salon-real.webp"
  data-alt="Descripción fiel del salón de La Casa del Muro"
  data-caption="Salón con chimenea · Fotografía: autor y licencia"
  aria-label="Ampliar fotografía del salón">
  <img src="img/salon-real.webp" width="1600" height="1067"
    loading="lazy" alt="Descripción fiel del salón de La Casa del Muro">
  <span class="photo-expand" aria-hidden="true">↗</span>
</button>
```

El lightbox incorpora automáticamente cada botón `data-gallery` del HTML. Los espacios sin fotografía no tienen botones vacíos. Admite anterior/siguiente, flechas, Escape, cierre fuera de la ventana, bloqueo de scroll y restauración del foco.

## Fuentes y licencias

| Archivo | Fuente y autor | Licencia y tratamiento |
| --- | --- | --- |
| `img/el-bosque.webp` | **El Bosque Lomo de Enmedio.JPG**, Antonio Acosta Fernández, 2011. [Original](https://commons.wikimedia.org/wiki/File:El_Bosque_Lomo_de_Enmedio.JPG). | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). Nueva copia de 3200 × 837, optimizada localmente a WebP calidad 78. Archivo completo; encuadre CSS adaptado en portada. |
| `img/el-bosque-arquitectura.webp` | Ayuntamiento, **El Bosque (provincia de Cádiz, España) - P1470072.jpg**, El Pantera. [Original](https://commons.wikimedia.org/wiki/File:El_Bosque_(provincia_de_C%C3%A1diz,_Espa%C3%B1a)_-_P1470072.jpg). | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). 1200 × 1600, WebP calidad 78. Copia con la misma licencia, sin recortar. |
| `img/sierra-grazalema.webp` | **Grazalema Mountains (28227255684).jpg**, piet theisohn. [Original](https://commons.wikimedia.org/wiki/File:Grazalema_Mountains_(28227255684).jpg). | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/). 1800 × 475, WebP calidad 78; sin recorte. |
| `img/rio-majaceite.webp` | **Río Majaceite - P1460080.jpg**, El Pantera. [Original](https://commons.wikimedia.org/wiki/File:R%C3%ADo_Majaceite_-_P1460080.jpg). | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). 1600 × 1200, WebP calidad 78; copia con la misma licencia, sin recorte. |
| `fonts/dm-serif-display/regular.ttf` | **DM Serif Display**, Adobe y Google. [Distribución Google Fonts](https://github.com/google/fonts/tree/main/ofl/dmserifdisplay). | SIL Open Font License 1.1; texto completo en `fonts/dm-serif-display/OFL.txt`. Fuente local sin modificaciones. |
| `favicon.svg` y SVG de comodidades | Dibujos originales de este rediseño. | Sin recursos gráficos de terceros. |

Fotografías y permisos verificados durante su incorporación al proyecto. Se conservan únicamente recursos de **este mismo proyecto**, no de La Casita de El Bosque ni de otras webs. Los créditos y enlaces a licencias están accesibles en el pie. Las copias de arquitectura y río se descargaron de las miniaturas oficiales y se optimizaron localmente; la sierra se redujo mediante wsrv.nl. Los cuatro archivos se exportaron a WebP sin alterar su contenido. Todos se sirven localmente, sin dependencias de esos servicios.

## Datos comerciales

Nombre, municipio, teléfono, enlaces y servicios se conservan del encargo. Se atribuye la antigüedad del muro a la descripción pública del anfitrión, sin fechas exactas ni acontecimientos inventados.

Confirmar datos y autorización con la propiedad antes de presentar la web como oficial. Plaza San Antonio, 4 sigue omitida por estar pendiente de confirmación inequívoca. Maps abre una búsqueda por nombre y municipio. No se añaden aforo, precios, reseñas, disponibilidad, WhatsApp ni perfiles sociales no verificados. Schema.org usa `LodgingBusiness` con dirección por localidad, sin puntuaciones ni precios.

## Comprobaciones

Comprobado en Chrome con los archivos locales a **320, 375, 600, 768, 900, 901, 1024 y 1440 px**:

- Cuatro imágenes cargadas, sin duplicados, y nueva serif local disponible.
- Sin desbordamientos horizontales ni solapamiento entre marca y menú.
- Menú móvil exclusivo hasta 900 px; horizontal exclusivo desde 901 px.
- Apertura/cierre del menú, Escape, cierre al navegar y foco en el destino.
- Lightbox con tres fotografías reales del entorno: navegación, flechas, Escape, restitución de foco y desbloqueo del scroll.
- Todos los enlaces internos encuentran su destino; ningún enlace vacío.
- Revelados al recorrer toda la página y movimiento reducido comprobados.
- Navegación y contenido visibles con JavaScript desactivado.
- Sin errores JavaScript detectados durante estas interacciones.
- Inspección de capturas completas de escritorio, tableta y móvil.
- Rutas locales, JSON-LD y `.gitignore` comprobados. Las cuatro fotografías suman 1.320.626 bytes; la fuente, 70.348 bytes. No se ha ejecutado Lighthouse ni se afirma una puntuación de rendimiento.

No se han enviado reservas ni realizado llamadas. Booking, Maps y la aplicación telefónica dependen de servicios externos. No se ha efectuado una auditoría completa en Safari, Firefox ni lectores de pantalla.
