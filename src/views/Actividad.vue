<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Desafío de diseño y calidad del <i>software</i>',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los conceptos, modelos, estándares y buenas prácticas relacionados con el diseño y la calidad del <i>software</i>, mediante su aplicación en diferentes contextos de desarrollo.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del diseño de <i>software</i>?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir el análisis del cliente por una programación rápida y directa, como parte del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Convertir los requisitos del cliente en una solución técnica organizada, como parte del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Limitar la solución informática al diseño visual de pantallas y formularios, durante el proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Comprobar únicamente el código cuando el producto ya está terminado, en el contexto del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué caracteriza a un requisito no funcional?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Describe las tareas específicas que debe ejecutar el sistema para el usuario, en el proyecto actual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registra las decisiones técnicas adoptadas durante la codificación del sistema, durante el proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Establece las actividades laborales asignadas a cada integrante del proyecto, en el proyecto actual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Define condiciones de calidad, rendimiento, seguridad o usabilidad del sistema, durante el proyecto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué elemento del diseño define la estructura general del sistema?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La arquitectura, porque establece las partes y relaciones generales del sistema, en el proyecto actual.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El diseño de datos, porque determina la información que será almacenada, en el desarrollo del <i>software</i>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El diseño de interfaces, porque organiza la interacción con cada usuario, durante el proyecto definido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La trazabilidad, porque registra el estado asignado a todos los requisitos, durante el proyecto actual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Para qué se utiliza la trazabilidad en el diseño de <i>software</i>?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para reemplazar los requisitos del cliente con decisiones internas del equipo, en el contexto del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para evitar la documentación técnica durante las diferentes fases del proyecto, durante el proyecto actual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para relacionar cada requisito con el diseño, la construcción y la evaluación, en el contexto del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Para concentrar la calidad únicamente en la verificación final del producto, en el desarrollo del software.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué actividad corresponde a la fase de verificación y validación?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir la estructura técnica, los datos y las interfaces de toda la solución, en el proyecto actual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reconocer el problema u oportunidad que da origen al sistema de información, como parte del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Revisar si el producto cumple los requisitos y las expectativas del cliente, como parte del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Instalar el producto en el entorno establecido y capacitar a todos sus usuarios, durante el proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿En qué contexto resulta más adecuado el modelo en cascada?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'En proyectos con requisitos claros, estables y con poca posibilidad de cambios, en el contexto del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'En proyectos con incertidumbre técnica y riesgos que deben revisarse por ciclos, durante el proyecto actual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'En proyectos que requieren entregas frecuentes y ajustes continuos del cliente, en el contexto del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'En proyectos exploratorios construidos con planificación y documentación mínima, durante el proyecto actual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál es la principal fortaleza del modelo en espiral?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La eliminación de la documentación para acelerar las entregas del producto, en el proyecto actual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La ejecución lineal de fases que no admite revisiones ni ajustes posteriores, durante el proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La construcción improvisada del sistema a partir de correcciones reactivas, en el proyecto actual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La gestión de riesgos mediante ciclos sucesivos de análisis y construcción, en el proyecto actual.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué distingue principalmente al desarrollo incremental?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La definición completa del producto antes de iniciar cualquier construcción, durante el proyecto actual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La entrega de partes funcionales que amplían progresivamente el producto, en el desarrollo del <i>software</i>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La corrección de errores después de entregar todo el sistema a la organización, como parte del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La ejecución del proyecto sin una arquitectura que integre sus funcionalidades, como parte del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué práctica caracteriza al desarrollo ágil?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Entregar valor con frecuencia, colaborar con el cliente y adaptarse al cambio, en todo el proyecto de <i>software</i>.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Completar cada fase definitivamente antes de comenzar la actividad siguiente, durante el proceso de desarrollo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Iniciar la programación sin definir tareas, prioridades ni criterios de aceptación, durante el proyecto actual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Mantener al cliente fuera de las revisiones para proteger el alcance del proyecto, en el contexto del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuándo puede resultar aceptable el modelo de codificación y corrección?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cuando el <i>software</i> manejará información crítica durante un periodo prolongado, durante el proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cuando el proyecto exige trazabilidad completa, seguridad y mantenimiento continuo, en el proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cuando se realiza un prototipo desechable o una prueba rápida de una idea, como parte del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Cuando se construye un sistema empresarial con numerosos módulos integrados, en el proyecto actual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cómo se entiende la calidad del <i>software</i> en el componente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Como la ausencia total de fallas visibles durante la primera entrega del sistema, durante el proyecto actual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Como el cumplimiento exclusivo de las funciones escritas por el equipo técnico, durante el proyecto definido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Como la aplicación obligatoria de un único modelo de calidad en todos los proyectos, como parte del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Como el grado de cumplimiento de requisitos y satisfacción de necesidades del cliente, en el proyecto actual.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué diferencia existe entre la calidad del producto y la calidad del proceso?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El producto revisa documentos y el proceso evalúa únicamente las interfaces finales, en el desarrollo del <i>software</i>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El producto valora el <i>software</i> entregado y el proceso valora cómo fue desarrollado, según el contexto del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El producto controla al equipo y el proceso mide solamente la satisfacción del cliente, durante el proyecto actual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El producto organiza actividades y el proceso comprueba las funciones ya construidas, durante el proyecto definido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál de los siguientes es un factor de operación del producto?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La flexibilidad, porque permite modificar el producto ante nuevas necesidades, según el contexto del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La portabilidad, porque facilita usar el producto en diferentes entornos técnicos, durante el proyecto actual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La seguridad, porque protege los datos y controla el acceso de los usuarios, durante el proceso de desarrollo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La reusabilidad, porque permite emplear componentes en otros módulos o proyectos, en el contexto del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué factor de transición permite la comunicación con otros sistemas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La interoperabilidad, porque posibilita integrarse con plataformas externas, durante el proyecto actual.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La mantenibilidad, porque facilita corregir y modificar el producto construido, como parte del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La confiabilidad, porque reduce la aparición de fallas durante el funcionamiento, en el proyecto actual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La usabilidad, porque facilita que los usuarios comprendan y operen el sistema, como parte del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué característica corresponde al modelo de calidad <i>ad hoc</i>?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Clasifica obligatoriamente la calidad en operación, revisión y transición del producto, en el desarrollo del <i>software</i>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Define criterios específicos según el proyecto, el cliente y el contexto organizacional, durante el proyecto definido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Exige aplicar criterios universales sin considerar las restricciones de cada proyecto, según el contexto del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Elimina la necesidad de documentar las decisiones y verificar los criterios seleccionados, durante el proyecto actual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Cuál es una ventaja principal del modelo <i>McCall</i>?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir que cada equipo improvise criterios sin una estructura de referencia común, como parte del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir la calidad a las funciones visibles que utiliza directamente el cliente final, en el proyecto actual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir los estándares de procesos por una valoración informal del producto final, como parte del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Organizar factores de calidad relacionados con operación, revisión y transición, en el contexto del proyecto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es el enfoque principal de ISO 9001 aplicado al <i>software</i>?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar la gestión de procesos, la documentación y la mejora continua, durante el proyecto definido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Definir los lenguajes de programación que debe utilizar el equipo técnico, durante el proyecto actual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Medir exclusivamente la velocidad de respuesta del producto desarrollado, en el contexto del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Establecer una arquitectura tecnológica idéntica para todos los proyectos, durante el proyecto actual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué permite evaluar SPICE principalmente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La apariencia de las interfaces y la aceptación visual por parte del usuario, durante el proyecto actual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La cantidad de funcionalidades incorporadas en cada versión del producto, según el contexto del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La capacidad de los procesos para lograr resultados de manera consistente, en el desarrollo del software.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La selección de lenguajes y herramientas utilizados durante la codificación, en el contexto del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Para qué se utiliza CMM en una organización de <i>software</i>?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para definir criterios particulares de calidad sin niveles de evolución establecidos, durante el proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para comprender y mejorar progresivamente la madurez de sus procesos de <i>software</i>, como parte del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Para certificar de manera directa que cada producto terminado carece de defectos, como parte del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para reemplazar el análisis de requisitos por procedimientos técnicos estandarizados, durante el proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué acción corresponde a una buena práctica para controlar cambios?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Modificar de inmediato el diseño y documentar la solicitud al finalizar el proyecto, como parte del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aceptar todos los cambios del cliente sin considerar el alcance ni los recursos, en el contexto del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Actualizar únicamente el código para evitar ajustes en requisitos y trazabilidad, durante el proyecto actual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Registrar la solicitud, analizar su impacto y decidir si se aprueba o se rechaza, durante el proyecto actual.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
