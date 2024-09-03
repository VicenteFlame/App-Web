# Readme



## Características

1. **Agregar Donación**: 
   - Los usuarios pueden contribuir fácilmente agregando nuevas donaciones de dispositivos.
   - El formulario de donación recibe información completa, incluyendo:
     - Datos de contacto del donante (nombre, correo electrónico, número de teléfono)
     - Detalles del dispositivo (nombre, descripción, tipo, años de uso)
     - Estado funcional del dispositivo
     - Opción para subir fotos del dispositivo
   - Se pueden agregar múltiples dispositivos a una sola donación.
   - Si no se cumple con el formato deseado en algún dato, el formulario indicará error cuando se intente enviar.
   - La información aún no es almacenada, ya que esta tarea estaba más dirigida a la interfaz

2. **Ver Dispositivos**: 
   - Una interfaz amigable muestra todos los dispositivos disponibles para donación.
   - La lista incluye información clave a simple vista: tipo de dispositivo, nombre, estado funcional, ubicación y una imagen en miniatura.
   - Los usuarios pueden revisar rápidamente las diversas opciones de donación.

3. **Información del Dispositivo**: 
   - Cada dispositivo tiene una página dedicada con información detallada.
   - Incluye detalles completos del donante y especificaciones del dispositivo.
   - Presenta imágenes de alta calidad del dispositivo para una mejor evaluación.
   - Por ahora, al hacer click en cualquier fila se abré una imagen generica, más adelante estará conectada con la información de cada dispositivo.

4. **Sistema de Comentarios**: 
   - Los usuarios pueden dejar comentarios en los listados de dispositivos específicos.
   - Fomenta la participación de la comunidad y permite a los posibles receptores hacer preguntas.
   - Muestra el nombre del comentarista y la fecha del comentario para mayor transparencia.
   - Como indicó el profe en la clase, la plataforma web aún no deberá almacenar ni agrega los comentarios, por lo que se tomó la decisión de no implementar eso aún.

## Estructura del Proyecto

El proyecto está construido utilizando HTML, CSS y JavaScript. Los componentes clave incluyen:

- `index.html`: La página de inicio, con botones de navegación a las funcionalidades principales.
- `agregar-donacion.html`: Un formulario completo para enviar nuevas donaciones de dispositivos.
- `ver-dispositivos.html`: Muestra una lista paginada de todos los dispositivos donados disponibles.
- `informacion-dispositivo.html`: Proporciona información detallada sobre un dispositivo específico y aloja la sección de comentarios.
- Archivos CSS: Manejan el estilo y el diseño responsivo de la aplicación.
- Archivos JavaScript : Gestionan validaciones de formularios, comportamientos de los botones, y el menú de selecciones para las regiones y comunas.


