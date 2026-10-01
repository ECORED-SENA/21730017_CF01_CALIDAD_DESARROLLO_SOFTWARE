<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Selección e implantación inicial de procesos de calidad
      p.mb-5 La selección e implantación inicial de procesos de calidad determina el referente adecuado según las necesidades, los riesgos y los recursos del proyecto. Su aplicación requiere definir responsabilidades, evidencias y controles desde el diseño para prevenir errores y cumplir las expectativas del cliente.
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.1 Información organizacional para seleccionar estándares
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2(data-aos="fade-right").mb-3
            p.mb-0 La información organizacional permite caracterizar las necesidades de calidad de una organización mediante sus datos, procesos, recursos, riesgos y nivel de madurez. Este análisis facilita seleccionar estándares acordes con la realidad y las características del proyecto.
          p.mb-0 La información requerida puede organizarse mediante los siguientes aspectos:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img1.jpg', alt='' style="width: 500px").m-auto
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img2.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Tipo de <i>software</i>").ajuste-cajaAcordion.ajuste-vineta
              p #[b Pregunta orientadora:] ¿qué clase de sistema se desarrollará o mejorará?
              p.mb-3 #[b Utilidad:] permite establecer el nivel de riesgo y los factores de calidad prioritarios.
            .row(titulo="Usuarios finales").ajuste-cajaAcordion.ajuste-vineta
              p #[b Pregunta orientadora:] ¿quiénes utilizarán el sistema y qué nivel de conocimiento poseen?
              p.mb-3 #[b Utilidad:] facilita la priorización de la usabilidad, la accesibilidad y el soporte.
            .row(titulo="Procesos actuales").ajuste-cajaAcordion.ajuste-vineta
              p #[b Pregunta orientadora:] ¿cómo desarrolla actualmente la organización sus actividades?
              p.mb-3 #[b Utilidad:] permite reconocer qué procesos deben mantenerse, ajustarse o formalizarse.
            .row(titulo="Documentación existente").ajuste-cajaAcordion.ajuste-vineta
              p #[b Pregunta orientadora:] ¿existen requisitos, procedimientos, manuales, registros y decisiones documentadas?
              p.mb-3 #[b Utilidad:] permite determinar el nivel de formalidad y trazabilidad disponible.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Problemas frecuentes").ajuste-cajaAcordion.ajuste-vineta
              p #[b Pregunta orientadora:] ¿qué fallas, retrasos, reprocesos o inconsistencias se presentan?
              p.mb-3 #[b Utilidad:] facilita la identificación de brechas y necesidades de calidad.
            .row(titulo="Recursos disponibles").ajuste-cajaAcordion.ajuste-vineta
              p #[b Pregunta orientadora:] ¿qué personal, tiempo, presupuesto y herramientas se encuentran disponibles?
              p.mb-3 #[b Utilidad:] permite seleccionar prácticas viables y proporcionales a la capacidad organizacional.
            .row(titulo="Riesgos del sistema").ajuste-cajaAcordion.ajuste-vineta
              p #[b Pregunta orientadora:] ¿qué consecuencias tendría una falla del #[i software]?
              p.mb-3 #[b Utilidad:] determina el nivel de control, documentación y formalidad requerido.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img3.png", alt="" style="width: 300px").m-auto
      .box___style_1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t6/img4.png', alt='' style="width: 500px").m-auto
          .col-xl.fit___box_container
            p.mb-0 La selección de estándares debe basarse en las necesidades y evidencias de la organización. Según sus dificultades, puede requerir mejorar la trazabilidad, estandarizar procesos, evaluar su capacidad mediante SPICE o fortalecer la gestión de calidad con ISO 9001. Además, el nivel de madurez permite definir prácticas de mejora acordes con la situación actual.
      p.mb-5 La selección debe partir de evidencias y del problema específico que necesita atender la organización:
      .bg___color_1
        .px-5
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 31.
            span Información organizacional para la selección de estándares de calidad
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Situación encontrada
                  th.ajuste-border-tabla.texto-left Necesidad de calidad
                  th.texto-left Referente que puede orientar
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Los requisitos se reciben de manera informal.
                  td.ajuste-border-tabla.texto-left Formalizar levantamiento y validación de requisitos.
                  td.texto-left ISO 9001 o prácticas internas de gestión de calidad.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Los cambios se aplican sin analizar impacto.
                  td.ajuste-border-tabla.texto-left Establecer control de cambios y trazabilidad.
                  td.texto-left ISO 9001, SPICE o modelo de proceso interno.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Cada equipo trabaja con formatos distintos.
                  td.ajuste-border-tabla.texto-left Estandarizar procesos y documentación.
                  td.texto-left ISO 9001 o CMM.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold No se conoce la capacidad de los procesos.
                  td.ajuste-border-tabla.texto-left Evaluar procesos específicos de #[i software].
                  td.texto-left SPICE.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Los errores se repiten entre proyectos.
                  td.ajuste-border-tabla.texto-left Analizar causas y mejorar procesos.
                  td.texto-left CMM, SPICE o mejora continua.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold El producto debe mantenerse por varios años.
                  td.ajuste-border-tabla.texto-left Fortalecer mantenibilidad, documentación y control.
                  td.texto-left McCall combinado con estándares de proceso.
          p.mb-5 La información organizacional también permite establecer el nivel de madurez. Una organización con poca documentación y cambios sin control necesita comenzar con prácticas básicas antes de incorporar mediciones o evaluaciones complejas.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t6/img5.jpg', alt='' style="width: 500px").m-auto
            .col-xl
              .box___style_2.color___3.fit___box_3(data-aos="fade-left").mb-3
                p.mb-0 Las expectativas del cliente deben orientar la selección del estándar de calidad. Según el tipo de sistema, pueden priorizarse aspectos como documentación, seguridad, confiabilidad, trazabilidad, usabilidad, validación de datos, mantenimiento o capacidad de adaptación.
              p.mb-0 A continuación, se presentan las principales expectativas del cliente y su relación con los factores de calidad y las decisiones aplicables al proceso:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 32.
                span Expectativas del cliente, factores de calidad e implicaciones para el proceso
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Expectativa del cliente
                      th.ajuste-border-tabla.texto-left Factor de calidad asociado
                      th.texto-left Implicación para el proceso
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Que el sistema sea fácil de usar.
                      td.ajuste-border-tabla.texto-left Usabilidad.
                      td.texto-left Diseñar interfaces claras y validar flujos de usuario.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Que la información esté protegida.
                      td.ajuste-border-tabla.texto-left Seguridad e integridad.
                      td.texto-left Definir roles, permisos y controles de acceso.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Que el sistema pueda crecer.
                      td.ajuste-border-tabla.texto-left Mantenibilidad y flexibilidad.
                      td.texto-left Diseñar arquitectura modular y documentar componentes.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Que las entregas sean controladas.
                      td.ajuste-border-tabla.texto-left Confiabilidad del proceso.
                      td.texto-left Establecer revisión, aprobación y control de versiones.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Que los cambios no generen errores.
                      td.ajuste-border-tabla.texto-left Trazabilidad y control de cambios.
                      td.texto-left Registrar solicitudes y analizar impacto antes de modificar.
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img6.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p La información organizacional debe relacionarse con los requisitos del cliente, el diseño del #[i software], los modelos de calidad y los estándares disponibles. Esta integración permite seleccionar un referente proporcional al alcance, los riesgos y la capacidad de la organización.
      p.mb-0 La selección no consiste en aplicar el estándar más complejo, sino en elegir prácticas viables que permitan controlar los procesos, conservar evidencias, atender las necesidades del cliente y mejorar progresivamente la calidad del #[i software].
      Separador
      #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.2 Criterios para seleccionar modelos y estándares
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.color___1(data-aos="fade-right").mb-3
            p.mb-0 La selección de modelos y estándares de calidad debe basarse en criterios claros que permitan elegir la opción más adecuada según las necesidades del proyecto, del cliente y de la organización, evitando decisiones arbitrarias y prácticas innecesarias.
          p.mb-0 A continuación, se presentan los principales criterios que deben considerarse:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img7.png', alt='' style="width: 500px").m-auto
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alcance del proyecto
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Pregunta:] ¿el sistema es pequeño, mediano, empresarial o crítico?
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Decisión:] establecer el nivel de estructura y formalidad requerido.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Riesgo del #[i software]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Pregunta:] ¿qué consecuencias tendría una falla del sistema?
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Decisión:] determinar la rigurosidad de los controles de calidad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Madurez organizacional
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Pregunta:] ¿la organización cuenta con procesos definidos?
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Decisión:] elegir entre prácticas básicas o modelos avanzados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Tipo de cliente
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Pregunta:] ¿el cliente requiere evidencias formales?
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Decisión:] establecer las necesidades de documentación y trazabilidad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Factores de calidad prioritarios
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Pregunta:] ¿qué características resultan fundamentales para el producto?
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Decisión:] seleccionar un modelo que incluya los factores requeridos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Recursos disponibles
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Pregunta:] ¿existen tiempo, personal y herramientas para aplicar el referente?
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Decisión:] comprobar que la alternativa seleccionada sea viable.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Necesidad de mejora
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Pregunta:] ¿se necesita organizar, evaluar o mejorar los procesos?
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Decisión:] elegir el referente que responda al propósito organizacional.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img14.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t6/img15.jpg', alt='' style="width: 500px").m-auto
        .col-xl
          .box___style_2.color___2.fit___box_2(data-aos="fade-left").mb-3
            p.mb-0 El alcance del proyecto es un criterio clave para seleccionar estándares de calidad: proyectos pequeños pueden requerir controles básicos, mientras que sistemas empresariales o críticos necesitan mayor estructura, trazabilidad y revisión formal.
          p.mb-0 El alcance determina el nivel de formalidad que requiere el proyecto:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 33.
                span Alcance y enfoque recomendado
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Alcance
                      th.texto-left Enfoque recomendado
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Bajo
                      td.texto-left Criterios #[i Ad hoc] documentados y buenas prácticas básicas.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Medio
                      td.texto-left Modelo de calidad combinado con procedimientos internos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Alto
                      td.texto-left Estándares de proceso, trazabilidad y revisión formal.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Crítico
                      td.texto-left Modelos estructurados, normas, evaluación y controles rigurosos.
          .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img16.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p El riesgo del #[i software] también orienta la selección de controles de calidad. A mayor impacto potencial de una falla, mayor debe ser el nivel de control, especialmente en sistemas financieros, de seguridad o de salud.
      p.mb-5 El riesgo también permite determinar la intensidad de los controles necesarios:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 34.
                span Nivel de riesgo
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Nivel de riesgo
                      th.ajuste-border-tabla.texto-left Ejemplo
                      th.texto-left Enfoque de calidad recomendado
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Bajo
                      td.ajuste-border-tabla.texto-left Aplicación interna de consulta básica.
                      td.texto-left Criterios mínimos de funcionalidad y usabilidad.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Medio
                      td.ajuste-border-tabla.texto-left Sistema de inventario o gestión documental.
                      td.texto-left Control de requisitos, diseño, datos y cambios.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Alto
                      td.ajuste-border-tabla.texto-left Sistema financiero o de información sensible.
                      td.texto-left Seguridad, trazabilidad, revisión formal y estándares.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Crítico
                      td.ajuste-border-tabla.texto-left Sistemas con impacto legal, clínico o institucional alto.
                      td.texto-left Controles rigurosos, evaluación, documentación y auditoría.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_2(data-aos="fade-right").mb-3
                p.mb-0 La madurez organizacional condiciona la selección de modelos de calidad. Las organizaciones con procesos informales deben comenzar con prácticas básicas de documentación, control y revisión antes de avanzar hacia modelos más complejos de evaluación y mejora.
              p.mb-0 La madurez organizacional condiciona las prácticas que pueden implantarse:
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t6/img17.jpg', alt='' style="width: 500px").m-auto
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t6/img18.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in").mb-5
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t6/img19.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Madurez inicial
                    p.mb-0.text-center La organización debe comenzar con prácticas básicas y criterios ad hoc documentados.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t6/img20.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Madurez gestionada
                    p.mb-0.text-center La organización puede establecer procedimientos repetibles, responsables y mecanismos de control.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t6/img21.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Madurez definida
                    p.mb-0.text-center La organización puede adoptar estándares comunes y modelos estructurados de calidad.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t6/img22.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Madurez medida
                    p.mb-0.text-center La organización puede evaluar sus procesos mediante indicadores y evidencias.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t6/img23.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Madurez optimizada
                    p.mb-0.text-center La organización puede aplicar una mejora continua sustentada en datos y resultados.
      .box___style_1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t6/img24.png', alt='' style="width: 500px").m-auto
          .col-xl.fit___box_container
            p.mb-0 La necesidad principal de calidad orienta la elección del referente: ISO 9001 apoya la gestión de calidad, SPICE evalúa la capacidad de procesos, CMM analiza su madurez y McCall permite valorar características del producto.
      p.mb-5 La necesidad principal permite seleccionar el referente que mejor responde al propósito:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 35.
                span Necesidad principal, referente recomendado y justificación
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Necesidad principal
                      th.ajuste-border-tabla.texto-left Referente recomendado
                      th.texto-left Justificación
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Organizar la gestión de calidad de la organización.
                      td.ajuste-border-tabla.texto-left ISO 9001.
                      td.texto-left Orienta procesos, documentación, enfoque al cliente y mejora.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Evaluar capacidad de procesos específicos.
                      td.ajuste-border-tabla.texto-left SPICE.
                      td.texto-left Permite analizar qué tan capaz es cada proceso.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mejorar madurez organizacional.
                      td.ajuste-border-tabla.texto-left CMM.
                      td.texto-left Ofrece una ruta progresiva de evolución de procesos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Analizar calidad del producto #[i software].
                      td.ajuste-border-tabla.texto-left McCall.
                      td.texto-left Organiza factores de operación, revisión y transición.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Atender una necesidad puntual del cliente.
                      td.ajuste-border-tabla.texto-left #[i Ad hoc] documentado.
                      td.texto-left Permite adaptar criterios al contexto específico.
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img25.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p La viabilidad es otro criterio de selección, ya que la aplicación de un estándar requiere tiempo, personal capacitado, herramientas y compromiso directivo. Sin estos recursos, puede generar carga documental sin aportar mejoras reales a la calidad.
      p.mb-5 La selección también debe considerar la viabilidad de aplicar el referente:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comprensión del referente
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Pregunta:] ¿el equipo comprende el modelo o estándar? 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Riesgo:] aplicación incorrecta o únicamente formal.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img26.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Tiempo disponible
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Pregunta:] ¿hay tiempo para documentar y revisar los procesos? 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Riesgo:] registros incompletos o abandono del proceso.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img27.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Apoyo de la dirección
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Pregunta:] ¿la dirección apoya la implementación? 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Riesgo:] falta de recursos y continuidad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img28.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Herramientas de seguimiento
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Pregunta:] ¿existen herramientas para realizar el seguimiento? 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Riesgo:] dificultad para controlar cambios y conservar evidencias.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img29.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Correspondencia con el proyecto
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Pregunta:] ¿el modelo o estándar se ajusta al tamaño del proyecto? 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Riesgo:] exceso de formalidad o escasa utilidad práctica.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img30.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La viabilidad permite seleccionar un referente que pueda aplicarse de manera consistente, con el respaldo, el tiempo, las herramientas y los recursos disponibles.
      Separador
      #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.3 Buenas prácticas de implantación desde el diseño
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.color___1(data-aos="fade-right").mb-3
            p.mb-0 La implantación de procesos de calidad debe iniciarse desde el diseño del #[i software], incorporando buenas prácticas que prevengan errores, mejoren la coordinación del equipo y faciliten el control, mantenimiento y evolución del producto.
          p.mb-0 Las principales buenas prácticas de diseño se presentan a continuación:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img31.png', alt='' style="width: 500px").m-auto
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Documentar los requisitos
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Propósito:] registrar las necesidades y expectativas del cliente.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado esperado:] menor ambigüedad durante el diseño.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img32.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Validar los requisitos con el cliente
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Propósito:] confirmar que lo comprendido corresponde a lo solicitado.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado esperado:] reducción de interpretaciones equivocadas y reprocesos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img33.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Definir una arquitectura inicial
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Propósito:] organizar la estructura general del sistema.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado esperado:] mayor claridad técnica y mejor distribución de responsabilidades.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img34.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diseñar los datos de forma coherente
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Propósito:] evitar duplicidad, pérdida o inconsistencia de la información.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado esperado:] mayor integridad y confiabilidad de los datos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img35.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Establecer la trazabilidad
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Propósito:]  relacionar los requisitos con el diseño y los criterios de calidad.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado esperado:] mayor control sobre el cumplimiento del producto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img36.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Controlar los cambios
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Propósito:] analizar el impacto antes de modificar los requisitos o el diseño.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado esperado:] menor riesgo de errores y pérdida de información.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img37.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Documentar las decisiones técnicas
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Propósito:] explicar las razones que sustentan la solución seleccionada.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado esperado:] mayor facilidad para mantener y ampliar el sistema.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img38.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t6/img39.jpg', alt='' style="width: 500px").m-auto
        .col-xl
          .box___style_2.color___2.fit___box_3(data-aos="fade-left").mb-3
            p.mb-0 Una de las principales prácticas es la validación temprana de los requisitos. Antes de diseñar, se debe confirmar que las necesidades del cliente fueron comprendidas correctamente. Esta validación puede realizarse mediante reuniones, actas, prototipos, historias de usuario, diagramas o matrices de requisitos.
          p.mb-0 La trazabilidad permite relacionar cada requisito con las pantallas, los componentes, los datos, las reglas de negocio y los criterios de calidad correspondientes. La siguiente tabla presenta algunos ejemplos:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 36.
                span Relación entre requisitos, elementos de diseño y buenas prácticas
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Requisito
                      th.ajuste-border-tabla.texto-left Elemento de diseño
                      th.texto-left Buena práctica asociada
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Registrar usuarios con roles.
                      td.ajuste-border-tabla.texto-left Módulo de autenticación y tabla de roles.
                      td.texto-left Trazabilidad y seguridad desde el diseño.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Generar reportes por fecha.
                      td.ajuste-border-tabla.texto-left Componente de reportes y filtros.
                      td.texto-left Diseño de datos orientado a consultas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Evitar registros duplicados.
                      td.ajuste-border-tabla.texto-left Validaciones y restricciones de base de datos.
                      td.texto-left Integridad de datos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Permitir acceso desde celular.
                      td.ajuste-border-tabla.texto-left Interfaz adaptable.
                      td.texto-left Portabilidad y usabilidad.
          .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img40.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p La documentación técnica debe registrar información útil sobre el alcance, requisitos, arquitectura, datos, componentes, decisiones y criterios de calidad del #[i software]. Esto facilita la comprensión, el trabajo del equipo y el mantenimiento posterior.
      p.mb-5 La documentación, la modularidad y el control técnico proporcionan una base organizada para desarrollar y mantener el producto:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Documentación técnica")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img41.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Documentación técnica
              p Consiste en registrar información útil sobre el alcance, los requisitos, la arquitectura, el modelo de datos, los componentes, las restricciones y los criterios de calidad.
              p Puede incluir los siguientes documentos:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Documento de requisitos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Matriz de trazabilidad.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Diagrama de arquitectura.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Modelo de datos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Registro de decisiones técnicas.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Registro de cambios.
              p.mb-0 La documentación debe ser clara, suficiente y pertinente para facilitar el trabajo del equipo y el mantenimiento posterior.
        .py-3.py-md-4(titulo="Diseño modular")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img42.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Diseño modular
              p Divide las funciones del sistema en componentes con responsabilidades definidas. Esta organización facilita el desarrollo, la revisión, el mantenimiento y la incorporación de nuevas funciones.
              p.mb-0 Por ejemplo, los módulos de usuarios, reportes e inventario pueden modificarse de manera independiente cuando cuentan con una estructura modular.
        .py-3.py-md-4(titulo="Revisión temprana")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img43.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Revisión temprana
              p.mb-0 Permite identificar inconsistencias antes de iniciar la codificación. La revisión debe comprobar la relación entre los requisitos, los datos, las interfaces, los componentes y los factores de calidad.
      p.mb-5 La gestión de cambios también debe incorporarse desde el inicio del proyecto. Para ello, se recomienda aplicar la siguiente secuencia:
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Registrar la solicitud
                    p.mb-0 Se documenta el cambio solicitado y la persona que lo propone.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t6/img44.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t6/img45.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Analizar el impacto
                    p.mb-0 Se identifican los requisitos, componentes, datos e interfaces que podrían resultar afectados.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Evaluar la viabilidad
                    p.mb-0 Se determina si el cambio puede realizarse con los recursos y las condiciones disponibles.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t6/img46.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t6/img47.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Aprobar o rechazar
                    p.mb-0 Se toma una decisión considerando el impacto, la prioridad y los riesgos.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Actualizar la documentación
                    p.mb-0 Se ajustan los requisitos, el diseño y la trazabilidad cuando el cambio es aprobado.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t6/img48.png', alt='' style="width: 300px").m-auto
      p.mb-5 Las preguntas siguientes permiten orientar la revisión del diseño antes de iniciar la construcción:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 37.
                span Aspectos por revisar y preguntas de control
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Aspecto por revisar
                      th.texto-left Pregunta de control
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Requisitos.
                      td.texto-left ¿Todos los requisitos están claros y aprobados?
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Arquitectura.
                      td.texto-left ¿La estructura propuesta soporta las necesidades del sistema?
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Datos.
                      td.texto-left ¿La información está organizada sin duplicidades innecesarias?
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Interfaces.
                      td.texto-left ¿Las pantallas facilitan las tareas del usuario?
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Componentes.
                      td.texto-left ¿Cada módulo tiene una responsabilidad clara?
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Calidad.
                      td.texto-left ¿El diseño considera seguridad, usabilidad, eficiencia y mantenibilidad?
          p.mb-0 Las buenas prácticas de calidad deben adaptarse a la complejidad del proyecto, evitando documentación innecesaria y garantizando el control requerido. Su aplicación desde el diseño favorece la prevención de fallas, la trazabilidad, la gestión de cambios y la construcción de #[i software] confiable.
          Separador
          #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 6.4 Caso práctico de selección de modelo y estándar
      p.mb-5 Para aplicar los criterios estudiados, se propone un caso práctico relacionado con la selección de modelos y estándares para un sistema de gestión de inventario.
      .call___to_action.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t6/img49.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 1. Caso práctico de selección de modelo y estándar
            p.mb-0 Consulte el documento anexo «Caso práctico de selección de modelo y estándar» para fortalecer la aplicación de los criterios abordados en este componente.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_01_Caso_Practico_Seleccion_Modelo_Estandar.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
              
</template>

<script>
export default {
  name: 'Tema6',
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
