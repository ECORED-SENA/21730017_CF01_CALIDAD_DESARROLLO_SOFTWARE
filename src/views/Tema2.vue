<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Modelos de desarrollo de #[i software]
      p.mb-5 Los modelos de desarrollo organizan el trabajo necesario para construir un sistema de información y proporcionan criterios para seleccionar una ruta acorde con las características del proyecto. Su elección depende de factores como la estabilidad de los requisitos, el tiempo disponible, el tamaño del equipo, los riesgos técnicos, la participación del cliente y las condiciones de la organización.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Ciclo de vida del #[i software]
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2(data-aos="fade-right").mb-3
            p.mb-0 El ciclo de vida del #[i software] comprende las fases que atraviesa una solución informática desde la identificación de una necesidad hasta su entrega, mantenimiento y evolución. Su gestión permite articular las decisiones técnicas y funcionales requeridas durante el desarrollo.
          p.mb-0 El ciclo de vida se desarrolla mediante fases relacionadas que cumplen una función específica dentro de la construcción de la solución:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img1.jpg', alt='' style="width: 500px").m-auto
      .bg___color_2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Identificación de necesidades
                    p.mb-0 Se reconoce el problema, la oportunidad o la necesidad que da origen al sistema.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img2.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img3.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Análisis de requisitos
                    p.mb-0 Se recopilan, interpretan y documentan las necesidades funcionales y no funcionales del cliente.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Diseño del #[i software]
                    p.mb-0 Se define la estructura de la solución, incluidos sus componentes, datos, interfaces y arquitectura.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img4.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img5.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Construcción o codificación
                    p.mb-0 Se desarrolla el #[i software] mediante lenguajes de programación, bases de datos y herramientas técnicas.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Verificación y validación
                    p.mb-0 Se comprueba si el producto construido cumple los requisitos y responde a las expectativas del cliente.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img6.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img7.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Implementación o entrega
                    p.mb-0 Se instala, publica o pone en funcionamiento el sistema dentro del entorno definido.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Mantenimiento y evolución
                    p.mb-0 Se corrigen fallas, se realizan ajustes y se incorporan mejoras de acuerdo con nuevas necesidades.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img8.png', alt='' style="width: 300px").m-auto
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img9.png', alt='' style="width: 500px").m-auto
            .col-xl
              .box___style_2.color___3(data-aos="fade-left").mb-3
                p.mb-0 Estas fases pueden ejecutarse de manera lineal o repetirse hasta alcanzar una versión más completa. Su organización depende del modelo de desarrollo seleccionado.
              p.mb-0 Tres aspectos permiten comprender la relación del ciclo de vida con la organización del proyecto y la calidad del producto:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Articulación de las fases
                  p.mb-0 El análisis determina qué necesita el cliente; el diseño establece cómo se construirá la solución; y la codificación convierte lo definido en un producto funcional. La verificación comprueba su cumplimiento, la implementación lo lleva al entorno de uso y el mantenimiento permite su evolución.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Prevención de errores
                  p.mb-0 Una adecuada gestión del ciclo evita iniciar la programación sin requisitos claros, diseñar sin considerar al usuario, entregar el sistema sin validación suficiente o desconocer las necesidades posteriores de mantenimiento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Distribución de responsabilidades
                  p.mb-0 En el ciclo pueden participar analistas, diseñadores, desarrolladores, líderes técnicos, responsables de calidad, usuarios clave y representantes del cliente. Cada rol aporta información necesaria para mantener la coherencia del producto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img12.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 El siguiente caso relaciona una necesidad empresarial con cada fase del ciclo de vida:
      .bg___color_2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Identificación de la necesidad
                    p.mb-0 Una empresa requiere controlar sus inventarios. Se establece la necesidad de registrar entradas, salidas y existencias.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img13.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img14.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Análisis de requisitos
                    p.mb-0 El cliente solicita reportes de productos agotados. El requisito se documenta y se definen las reglas de negocio correspondientes.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Diseño de la solución
                    p.mb-0 El equipo propone una aplicación web con base de datos. Se diseñan la arquitectura, las tablas, los formularios y los reportes.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img15.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img16.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Construcción
                    p.mb-0 Se desarrollan los módulos de productos y movimientos conforme con las funcionalidades definidas en el diseño.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Verificación y validación
                    p.mb-0 Se comprueba que los reportes contengan información correcta y cumplan el requisito solicitado.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img17.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img18.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Implementación
                    p.mb-0 El sistema se instala para su utilización en la empresa, se entrega la solución y se capacita a los usuarios.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Mantenimiento y evolución
                    p.mb-0 La empresa solicita incorporar alertas automáticas. El producto se ajusta mediante mantenimiento evolutivo.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img19.png', alt='' style="width: 300px").m-auto
          p.mb-0 La calidad del #[i software] depende de la gestión de cada fase. Los requisitos incompletos pueden afectar el diseño; un diseño deficiente puede desorganizar la construcción; y la falta de validación puede trasladar errores al producto final. Por ello, el ciclo de vida constituye una cadena de decisiones técnicas y funcionales que influye directamente en el resultado del proyecto.
          Separador
          #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.2 Modelo en cascada y modelo en espiral
      p.mb-5 Los modelos en cascada y en espiral organizan el desarrollo desde perspectivas diferentes. Su aplicación depende de la estabilidad de los requisitos, la complejidad del proyecto, los riesgos y la capacidad para realizar ajustes durante la construcción.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img21.png" style="max-width: 60px").m-auto
        .col
          h3 Modelo en cascada
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img20.jpg', alt='' style="width: 350px").m-auto
        .col-xl
          .box___style_2.color___2.fit___box_2(data-aos="fade-left").mb-3
            p.mb-0 El modelo en cascada organiza el desarrollo mediante fases secuenciales que deben completarse antes de avanzar. Se fundamenta en la planificación previa y la documentación detallada, por lo que resulta adecuado cuando los requisitos son claros, estables y poco propensos a cambios.
          p.mb-0 El desarrollo avanza mediante seis fases consecutivas, cada una con un propósito definido:
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Requisitos
                    p.mb-0 Define con claridad las funciones y condiciones que debe cumplir el sistema.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img21.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img22.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Diseño
                    p.mb-0 Establece la estructura técnica y funcional de la solución.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Codificación
                    p.mb-0 Construye el #[i software] de acuerdo con el diseño aprobado.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img23.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img24.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Verificación
                    p.mb-0 Comprueba si el producto cumple las especificaciones establecidas.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Implementación
                    p.mb-0 Entrega y pone en funcionamiento el sistema en el entorno definido.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img25.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img26.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Mantenimiento
                    p.mb-0 Corrige fallas, incorpora ajustes y mejora el producto entregado.
      p.mb-5 Las condiciones del modelo permiten reconocer sus aportes y restricciones durante el desarrollo:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img27.png', alt="" ).m-auto
                  h4.text-center Ventajas
                  .box___card_sinbordes_p
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Facilita la planificación y la asignación de tareas.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Favorece la documentación y el control del avance.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Permite establecer entregables por cada etapa.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Facilita la aprobación formal antes de continuar.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img28.png', alt="" ).m-auto
                  h4.text-center Limitaciones
                  .box___card_sinbordes_p
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Presenta poca flexibilidad ante cambios tardíos.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Puede exigir el retorno a fases anteriores.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Obliga a modificar documentos y decisiones aprobadas.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Puede generar costos adicionales y retrasos.
      p.mb-5 El siguiente caso reúne contextos en los que la estabilidad de los requisitos favorece la aplicación del modelo:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 5.
                span Ejemplo de aplicación del modelo en cascada:
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Contexto
                      th.texto-left Justificación
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Sistema con requisitos normativos claramente definidos.
                      td.texto-left El cliente conoce con precisión lo que necesita y los cambios son limitados.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Proyecto con documentación formal obligatoria.
                      td.texto-left Cada fase requiere aprobación antes de continuar.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Sistema pequeño o mediano con alcance estable.
                      td.texto-left La planificación inicial puede mantenerse durante el desarrollo.
          p.mb-5 El modelo en cascada puede ser útil, por ejemplo, en el desarrollo de un módulo administrativo con procesos ya definidos, como el registro de empleados, la generación de reportes fijos o la digitalización de un procedimiento que no cambia constantemente. En estos casos, la claridad de requisitos favorece un desarrollo ordenado y documentado.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img21.png" style="max-width: 60px").m-auto
            .col
              h3 Modelo en espiral
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_2.color___3(data-aos="fade-right").mb-3
                p.mb-0 El modelo en espiral organiza el desarrollo mediante ciclos sucesivos que combinan planificación, análisis de riesgos, construcción y evaluación. Cada ciclo permite revisar las decisiones, ajustar el proyecto y ampliar progresivamente el producto.
              p.mb-0 Cada ciclo integra cinco actividades que orientan la evolución controlada de la solución:
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t2/img29.jpg', alt='' style="width: 500px").m-auto
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Definir objetivos
                    p.mb-0 Se establece lo que debe alcanzarse durante el ciclo.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img30.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img31.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Identificar alternativas
                    p.mb-0 Se analizan posibles opciones para atender la necesidad.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Evaluar riesgos
                    p.mb-0 Se examinan incertidumbres técnicas, económicas, funcionales o de seguridad.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img32.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img33.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Desarrollar una versión
                    p.mb-0 Se construye una parte del producto o un prototipo funcional.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Validar y planificar
                    p.mb-0 Se evalúan los resultados y se determina si el proyecto continúa, se ajusta o se replantea.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img34.png', alt='' style="width: 300px").m-auto
      p.mb-5 Los siguientes aspectos permiten establecer cuándo resulta conveniente aplicar este modelo:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Principal fortaleza
                  p.mb-0 La gestión de riesgos orienta decisiones progresivas y evita comprometer todo el proyecto sin analizar previamente sus principales incertidumbres.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img35.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aplicación recomendada
                  p.mb-0 Resulta útil en proyectos complejos o críticos, con incertidumbre técnica, integraciones externas, requisitos sensibles o consecuencias importantes en caso de falla.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img36.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Principal limitación
                  p.mb-0 Requiere experiencia en gestión de proyectos, análisis de riesgos y toma de decisiones técnicas. Una gestión inadecuada puede producir ciclos extensos y mayores costos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img37.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 El siguiente caso concreta el avance progresivo de una solución con integraciones y requisitos críticos:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img38.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo aplicado
          br
          br
          p Una organización necesita integrar pagos en línea, autenticación de usuarios, reportes financieros y servicios externos. Para reducir los riesgos, avanza mediante ciclos: primero analiza la viabilidad técnica; después desarrolla un prototipo de integración, valida la seguridad y amplía progresivamente las funcionalidades.
      p.mb-5 La comparación permite diferenciar ambos modelos según su organización, flexibilidad y contexto de aplicación:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 6.
                span Comparación entre el modelo en cascada y el modelo en espiral
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Aspecto
                      th.ajuste-border-tabla.texto-left Modelo en cascada
                      th.texto-left Modelo en espiral
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Enfoque
                      td.ajuste-border-tabla.texto-left Secuencial.
                      td.texto-left Iterativo y orientado a riesgos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Requisitos
                      td.ajuste-border-tabla.texto-left Deben estar claros desde el inicio.
                      td.texto-left Pueden evolucionar con análisis progresivo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gestión de riesgos
                      td.ajuste-border-tabla.texto-left Menos explícita.
                      td.texto-left Es un elemento central del modelo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Flexibilidad
                      td.ajuste-border-tabla.texto-left Baja frente a cambios tardíos.
                      td.texto-left Mayor capacidad de ajuste por ciclos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Documentación
                      td.ajuste-border-tabla.texto-left Alta y formal.
                      td.texto-left También requiere documentación, pero ligada a cada ciclo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aplicación recomendada
                      td.ajuste-border-tabla.texto-left Proyectos estables y bien definidos.
                      td.texto-left Proyectos complejos, críticos o inciertos.
          p.mb-0 El modelo en cascada favorece el orden y el control documental cuando el alcance permanece estable. El modelo en espiral resulta conveniente cuando existen riesgos relevantes o incertidumbre técnica. Ambos modelos aportan criterios para organizar el ciclo de vida y tomar decisiones de diseño coherentes con el contexto del proyecto.
          Separador
          #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.3 Desarrollo incremental, iteractivo y ágil
      p.mb-5 El desarrollo incremental, iterativo y ágil permite construir soluciones de manera progresiva. Aunque estos enfoques pueden complementarse, cada uno responde a un propósito diferente relacionado con las entregas parciales, el perfeccionamiento por ciclos o la adaptación frecuente.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img21.png" style="max-width: 60px").m-auto
        .col
          h3 Desarrollo incremental
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.color___3(data-aos="fade-right").mb-3
            p.mb-0 El desarrollo incremental divide el producto en entregas parciales denominadas incrementos. Cada entrega incorpora nuevas funcionalidades, de manera que el sistema crece progresivamente hasta alcanzar el alcance esperado.
          p.mb-0 El siguiente caso distribuye las funcionalidades de un sistema de inventario en cuatro entregas acumulativas:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img39.png', alt='' style="width: 500px").m-auto
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 7.
                span Ejemplo de desarrollo incremental en un sistema de inventario:
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Incremento
                      th.texto-left Funcionalidades entregadas
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Primer incremento
                      td.texto-left Se desarrollan el registro de productos y la administración de categorías.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Segundo incremento
                      td.texto-left Se incorporan el registro de entradas y las salidas del inventario.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tercer incremento
                      td.texto-left Se agregan la consulta de existencias y las alertas de inventario mínimo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cuarto incremento
                      td.texto-left Se integran los reportes, la exportación de información y el control de usuarios.
          p.mb-5 El desarrollo incremental permite entregar primero las funcionalidades prioritarias, obtener retroalimentación temprana y ajustar el producto progresivamente. Sin embargo, requiere una arquitectura general que garantice la integración ordenada de cada incremento.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img21.png" style="max-width: 60px").m-auto
            .col
              h3 Desarrollo iteractivo
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img40.jpg', alt='' style="width: 350px").m-auto
            .col-xl
              .box___style_2.color___2.fit___box_2(data-aos="fade-left").mb-3
                p.mb-0 El desarrollo iterativo se basa en ciclos de construcción, revisión y ajuste. Cada iteración permite perfeccionar una versión previa, corregir inconsistencias y aclarar progresivamente las expectativas del cliente.
              p.mb-0 La solución evoluciona mediante un ciclo iteractivo que puede repetirse hasta alcanzar el resultado esperado:
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Primer ciclo
                    p.mb-0 Se desarrolla una versión inicial o prototipo.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img41.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img42.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Revisión
                    p.mb-0 El cliente y el equipo revisan si la solución responde a la necesidad.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Ajuste
                    p.mb-0 Se corrigen inconsistencias o se redefinen aspectos del diseño.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img43.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img44.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Nuevo ciclo
                    p.mb-0 Se mejora la versión anterior o se agregan nuevas funcionalidades.
      p.mb-5 El siguiente caso evidencia cómo una versión inicial facilita la precisión de las necesidades:
      .box___style_3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            h5 Ejemplo aplicado
            p.mb-0 En una plataforma de reservas, el cliente interactúa con un prototipo que incluye calendario, disponibilidad y confirmación. A partir de esta experiencia, puede precisar sus expectativas y solicitar ajustes antes de completar el sistema.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img45.png', alt='' style="width: 500px").m-auto
      p.mb-5 La iteración favorece la corrección temprana de errores de interpretación. Sin embargo, requiere decisiones documentadas, criterios claros, priorización y control del alcance para evitar modificaciones permanentes sin una finalidad definida.
      .bg___color_3
        .px-5
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img21.png" style="max-width: 60px").m-auto
            .col
              h3 Desarrollo ágil
          p El desarrollo ágil promueve entregas frecuentes de valor, colaboración con el cliente, adaptación al cambio y ciclos cortos de trabajo. No corresponde a una técnica única, sino a principios y prácticas aplicables a proyectos dinámicos.
          p.mb-5  Las principales características del desarrollo ágil son:
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 8.
                span Características de desarrollo ágil
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Característica del desarrollo ágil
                      th.texto-left Aplicación
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Entregas frecuentes
                      td.texto-left Se presentan avances funcionales en ciclos cortos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Colaboración con el cliente
                      td.texto-left El cliente participa en la revisión y priorización.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Adaptación al cambio
                      td.texto-left Los requisitos pueden ajustarse según nuevas necesidades.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Trabajo colaborativo
                      td.texto-left El equipo comparte responsabilidades y comunica avances.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mejora continua
                      td.texto-left Se revisa el proceso de trabajo para hacerlo más efectivo.
          p.mb-5 El siguiente ejemplo distribuye la construcción de una solución mediante cuatro ciclos cortos:
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 9.
                span Ejemplo de aplicación ágil
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left #[i Sprint]
                      th.texto-left Objetivo
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold #[i Sprint] 1
                      td.texto-left Crear inicio de sesión y roles de usuario.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold #[i Sprint] 2
                      td.texto-left Desarrollar registro de clientes.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold #[i Sprint] 3
                      td.texto-left Construir módulo de solicitudes.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold #[i Sprint] 4
                      td.texto-left Agregar reportes y notificaciones.
          p.mb-5 Al finalizar cada #[i sprint], el equipo evalúa lo construido, identifica mejoras y reorganiza las prioridades. El trabajo ágil requiere planificación, disciplina, tareas claras y criterios de aceptación definidos. 
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img46.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Relación entre desarrollo incremental, iteractivo y ágil
          br
          br
          p Los enfoques pueden integrarse dentro de un mismo proyecto. Una solución ágil puede ser incremental cuando entrega funcionalidades por partes y, al mismo tiempo, iterativa cuando perfecciona cada versión mediante ciclos de revisión y ajuste. 
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Incremental")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img47.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Incremental
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Pregunta:] ¿qué parte funcional se entregará primero?
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Aporte:] construcción progresiva del producto.
        .py-3.py-md-4(titulo="Iterativo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img48.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Iterativo
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Pregunta:] ¿qué se evaluará y mejorará en cada ciclo?
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Aporte:] retroalimentación y perfeccionamiento continuo.
        .py-3.py-md-4(titulo="Ágil")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img49.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ágil
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Pregunta:] ¿cómo se entregará valor frecuente y se responderá al cambio?
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Aporte:] flexibilidad, colaboración y priorización.
      p.mb-0 Estos enfoques resultan apropiados cuando el cliente puede participar activamente o cuando el sistema admite una división en módulos funcionales. Su aplicación exige una perspectiva general de arquitectura, datos, seguridad, integración y calidad.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Modelo de codificación y corrección según el contexto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2(data-aos="fade-right").mb-3
            p.mb-0 El modelo de codificación y corrección consiste en iniciar la programación con poca planificación formal y solucionar posteriormente los errores identificados. Aunque permite obtener resultados iniciales con rapidez, presenta riesgos cuando se emplea como enfoque principal en productos que requieren calidad, seguridad y mantenimiento.
          p.mb-0 Las características del modelo explican tanto su rapidez inicial como sus principales limitaciones:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img50.jpg', alt='' style="width: 500px").m-auto
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img51.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in").mb-5
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img52.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Inicio rápido
                    p.mb-0.text-center La programación comienza sin un diseño detallado.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img53.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Poca documentación
                    p.mb-0.text-center Las decisiones técnicas no siempre quedan registradas.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img54.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Corrección reactiva
                    p.mb-0.text-center Los errores se solucionan después de que aparecen.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img55.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Baja planificación
                    p.mb-0.text-center No siempre existe una ruta definida para completar el desarrollo.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img56.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Desorden técnico
                    p.mb-0.text-center El sistema puede crecer sin una arquitectura establecida.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img57.jpg', alt='' style="width: 350px").m-auto
        .col-xl
          .box___style_2.color___1.fit___box_2(data-aos="fade-left").mb-3
            p.mb-0 Este modelo puede utilizarse en contextos reducidos cuyo propósito sea explorar una alternativa, comprobar una posibilidad técnica o desarrollar una solución temporal.
          p.mb-0 Los siguientes ejemplos presentan contextos limitados en los que este modelo puede resultar aceptable:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 10.
                span Ejemplos de uso aceptable:
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Contexto
                      th.texto-left Uso posible
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Prueba rápida de una funcionalidad.
                      td.texto-left Verificar si una librería permite generar un reporte.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Prototipo desechable.
                      td.texto-left Representar una idea inicial de pantalla sin construir el sistema completo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ejercicio académico.
                      td.texto-left Comprender la lógica básica de una función.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Automatización personal muy simple.
                      td.texto-left Crear un script temporal para una tarea puntual.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img58.png', alt='' style="width: 500px").m-auto
            .col-xl
              .box___style_2.color___3(data-aos="fade-left").mb-3
                p.mb-0 Cuando el producto será utilizado por una organización, manejará información importante o deberá mantenerse durante un periodo prolongado, este modelo no resulta recomendable como enfoque principal.
              p.mb-0 Las siguientes situaciones relacionan la falta de planificación con sus posibles consecuencias:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 11.
                span Ejemplos de riesgo
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Situación
                      th.texto-left Consecuencia posible
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Se programa sin definir la estructura de datos.
                      td.texto-left La base de datos puede quedar duplicada o inconsistente.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Se agregan funciones sin arquitectura.
                      td.texto-left El sistema puede volverse difícil de mantener.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold No se documentan requisitos.
                      td.texto-left El producto puede no coincidir con lo solicitado por el cliente.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Se corrigen errores sin analizar la causa.
                      td.texto-left Pueden aparecer nuevas fallas en otras partes del sistema.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold No se define seguridad desde el diseño.
                      td.texto-left Pueden generarse accesos indebidos o exposición de información.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_2(data-aos="fade-right").mb-3
                p.mb-0 Desde la perspectiva de la calidad, este modelo responde a los errores de forma tardía. La rapidez inicial puede transformarse en retrasos, mayores costos y dificultades de integración cuando se acumulan fallas o cambios.
              p.mb-0 Si el modelo se emplea en un contexto limitado, deben establecerse medidas que controlen su alcance y sus riesgos:
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t2/img59.jpg', alt='' style="width: 500px").m-auto
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Delimitar el alcance
                    p.mb-0 Se evita que el prototipo se convierta en un sistema definitivo sin diseño.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img60.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img61.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Documentar las decisiones
                    p.mb-0 Se registra qué se desarrolló, por qué se hizo y cuáles son sus limitaciones.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Separar el prototipo
                    p.mb-0 El código experimental no debe convertirse automáticamente en la base del producto final.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img62.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img63.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Analizar los riesgos
                    p.mb-0 Se determinan las posibles afectaciones sobre la seguridad, los datos y las integraciones.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Planear la refactorización
                    p.mb-0 El código debe reorganizarse cuando la idea experimental se transforma en un producto real.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img64.png', alt='' style="width: 300px").m-auto
      p.mb-5 La comparación final sintetiza la fortaleza, el riesgo y el contexto recomendado para cada modelo estudiado:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img65.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Cascada").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Fortaleza:] orden y documentación.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Riesgo:] poca flexibilidad ante los cambios.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Contexto:] requisitos claros y estables.
            .row(titulo="Espiral").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Fortaleza:] gestión de riesgos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Riesgo:] mayor complejidad administrativa.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Contexto:] proyectos complejos o críticos.
            .row(titulo="Incremental").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Fortaleza:] entregas parciales de valor.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Riesgo:] problemas de integración sin una arquitectura definida.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Contexto:] sistemas que pueden construirse por módulos.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Iterativo").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Fortaleza:] retroalimentación y ajuste continuo.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Riesgo:] cambios excesivos sin control.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Contexto:] proyectos cuyas necesidades se precisan progresivamente.
            .row(titulo="Ágil").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Fortaleza:] adaptación y colaboración.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Riesgo:] desorden cuando falta disciplina técnica.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Contexto:] proyectos dinámicos con participación del cliente.
            .row(titulo="Codificación y corrección").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Fortaleza:] rapidez inicial.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Riesgo:] baja calidad si se adopta como modelo principal.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Contexto:] prototipos, pruebas rápidas o ejercicios simples.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img66.png", alt="" style="width: 350px").m-auto
      p.mb-0 La selección del modelo debe responder al contexto del proyecto, los requisitos, los riesgos y las expectativas del cliente. La codificación y corrección puede apoyar exploraciones limitadas, pero no reemplaza el análisis, el diseño, la documentación ni los controles de calidad.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
