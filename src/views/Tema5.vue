<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Estándares de calidad del #[i software]
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2(data-aos="fade-right").mb-3
            p.mb-0 Los estándares de calidad proporcionan criterios para organizar, controlar y evaluar los procesos relacionados con el desarrollo de #[i software]. Su aplicación favorece la documentación, la trazabilidad, la gestión de riesgos, la mejora continua y la construcción de productos acordes con las necesidades del cliente.
          p.mb-0 Los principales referentes abordan la calidad desde diferentes perspectivas:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img1.jpg', alt='' style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img2.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="ISO 9001").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Orienta la gestión de la calidad en los procesos de la organización.
            .row(titulo="SPICE").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite evaluar la capacidad y el mejoramiento de los procesos de #[i software].
            .row(titulo="CMM").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite analizar el nivel de madurez de los procesos organizacionales.
            .row(titulo="ISO/IEC 330xx").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Proporciona lineamientos para evaluar y medir la capacidad de los procesos.
      p.mb-0 La selección de estos referentes depende del contexto, el tamaño, los riesgos y el nivel de formalidad requerido por el proyecto.
      Separador
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Concepto de estándar y norma de calidad
      .box___style_3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 Un estándar establece criterios comunes para desarrollar una actividad de manera organizada y consistente. Una norma, por su parte, es un documento formal emitido por una entidad reconocida que contiene requisitos o lineamientos aplicables a procesos, productos o sistemas de gestión.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t5/img3.png', alt='' style="width: 500px").m-auto
      p.mb-5 Los siguientes conceptos permiten diferenciar los referentes utilizados para orientar y evaluar la calidad:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estándar
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Definición:] conjunto de criterios aceptados para orientar una práctica.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ejemplo:] formato común para documentar requisitos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Norma
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Definición:] documento formal que establece requisitos o lineamientos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ejemplo:] ISO 9001 para sistemas de gestión de la calidad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Modelo
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Definición:] estructura conceptual que organiza factores, niveles o prácticas de calidad.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ejemplo:] McCall, CMM o un modelo de madurez.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Procedimiento
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Definición:] secuencia de actividades establecida por una organización.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ejemplo:] procedimiento interno para controlar cambios en el #[i software].
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Certificación
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Definición:] reconocimiento formal del cumplimiento de una norma o esquema definido.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ejemplo:] certificación del sistema de gestión de la calidad de una organización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img8.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.color___1(data-aos="fade-right").mb-3
            p.mb-0 En el desarrollo de #[i software], los estándares reducen la improvisación al establecer criterios comunes para documentar requisitos y evaluar el producto. Su aplicación favorece la revisión, la trazabilidad y la comunicación, además de permitir la definición de condiciones observables relacionadas con el cumplimiento, la seguridad, el rendimiento, el mantenimiento, la integridad de los datos y la facilidad de uso.
          p.mb-0 Los estándares se aplican en diferentes actividades del desarrollo y aportan condiciones concretas de calidad:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img9.png', alt='' style="width: 500px").m-auto
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img10.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Definición de formatos de requisitos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Mejora la claridad, la consistencia y la trazabilidad de la información.
            .row(titulo="Control de versiones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Evita la pérdida de información y la confusión entre entregas.
            .row(titulo="Revisión del diseño").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite identificar inconsistencias antes de iniciar la codificación.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Gestión de cambios").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Facilita el análisis del impacto antes de modificar el sistema.
            .row(titulo="Documentación técnica y funcional").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Favorece el mantenimiento y la transferencia de conocimiento.
            .row(titulo="Medición de procesos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite identificar debilidades y oportunidades de mejora.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img11.png", alt="" style="width: 300px").m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img12.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Un estándar fortalece la calidad del #[i software] cuando se utiliza para organizar el trabajo, medir resultados y corregir fallas. Su selección y nivel de formalidad deben responder al tamaño, las necesidades y los riesgos del proyecto, pues los sistemas críticos requieren mayores controles, trazabilidad, evidencias y cumplimiento normativo.
      p.mb-5 La aplicación de un estándar debe responder a las características y necesidades de cada proyecto:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 22.
                span Nivel de formalidad de los estándares según el contexto del proyecto 
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Contexto del proyecto
                      th.texto-left Nivel de formalidad recomendado
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Prototipo o prueba de concepto.
                      td.texto-left Criterios mínimos documentados.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Sistema interno pequeño.
                      td.texto-left Procedimientos básicos de requisitos, diseño y control de cambios.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Sistema empresarial.
                      td.texto-left Estándares de gestión, documentación, revisión y mantenimiento.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Sistema crítico.
                      td.texto-left Normas, modelos de evaluación, trazabilidad y controles rigurosos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Organización con varios equipos.
                      td.texto-left Estandarización de procesos para asegurar consistencia.
          p.mb-0 Un estándar no garantiza por sí solo la calidad del #[i software]. Su utilidad depende de la aplicación coherente, la documentación de las decisiones, la medición de los resultados y el compromiso de la organización.
          Separador
          #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 5.2 ISO 9001 aplicada a procesos de #[i software]
      p.mb-5 ISO 9001 establece requisitos para gestionar la calidad mediante procesos organizados, responsabilidades definidas, documentación, control de cambios, evaluación y mejora continua, sin imponer metodologías específicas para el desarrollo de #[i software]. Los principales enfoques de ISO 9001 se relacionan con el desarrollo de #[i software] de la siguiente manera:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Enfoque al cliente
                  p.mb-0 Permite identificar los requisitos, las expectativas y el nivel de satisfacción del cliente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Enfoque basado en procesos
                  p.mb-0 Favorece la definición de actividades, responsables, controles y resultados para cada proceso.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Gestión de riesgos
                  p.mb-0 Permite identificar condiciones que pueden afectar el cumplimiento de los requisitos del producto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Información documentada
                  p.mb-0 Conserva registros relacionados con requisitos, decisiones, cambios, revisiones y entregas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Evaluación del desempeño
                  p.mb-0 Permite comprobar el cumplimiento de los objetivos y la eficacia de los procesos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mejora continua
                  p.mb-0 Orienta la corrección de fallas y el fortalecimiento de las prácticas organizacionales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img18.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t5/img19.jpg', alt='' style="width: 350px").m-auto
        .col-xl
          .box___style_2.color___2.fit___box_3(data-aos="fade-left").mb-3
            p.mb-0 Un sistema de gestión de calidad aplicado al #[i software] permite organizar y controlar requisitos, diseño, cambios, evidencias, satisfacción del cliente y acciones correctivas. ISO 9001 facilita establecer procesos comunes para gestionar proyectos de manera ordenada, trazable y orientada a la mejora continua.
          p.mb-0 Estos enfoques pueden aplicarse en diferentes procesos relacionados con la construcción del producto:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Levantamiento de requisitos
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Aplicación:] establecer formatos, responsables, mecanismos de revisión y aprobación.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado:] requisitos claros, documentados y validados por el cliente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diseño del #[i software]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Aplicación:] definir criterios para revisar la arquitectura, los datos, las interfaces y los componentes.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado:] decisiones de diseño documentadas y coherentes con los requisitos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Desarrollo
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Aplicación:] controlar versiones, responsabilidades y cumplimiento de especificaciones.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado:] código organizado y asociado con las decisiones aprobadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Revisión de entregables
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Aplicación:] comprobar que el producto corresponda a los requisitos definidos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado:] entregas verificadas antes de su aceptación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Gestión de cambios
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Aplicación:] registrar solicitudes, analizar sus efectos y aprobar las modificaciones.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado:] cambios controlados y trazables.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img24.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Atención de fallas
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Aplicación:] documentar las no conformidades e implementar acciones correctivas.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado:] fallas analizadas y procesos fortalecidos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img25.png', alt='' style="max-width: 500px").m-auto
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img26.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p ISO 9001 orienta el desarrollo de #[i software] hacia la satisfacción del cliente, mediante requisitos claros, expectativas documentadas y cambios controlados. Además, exige conservar evidencias que demuestren las actividades realizadas, como requisitos, prototipos, registros de cambios, matrices de trazabilidad e informes de revisión.
      p.mb-5 La información documentada proporciona evidencias sobre las decisiones, revisiones y controles realizados durante el proyecto:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 23.
                span Evidencias documentadas y su utilidad en el desarrollo de #[i software]
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Evidencia
                      th.texto-left Utilidad
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Documento de requisitos.
                      td.texto-left Demuestra qué solicitó el cliente y qué se acordó desarrollar.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Acta de validación.
                      td.texto-left Registra aprobación o ajustes solicitados.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Diseño técnico.
                      td.texto-left Soporta decisiones sobre arquitectura, datos e interfaces.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Registro de cambios.
                      td.texto-left Permite controlar modificaciones y analizar impacto.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Informe de revisión.
                      td.texto-left Evidencia observaciones, hallazgos y acciones tomadas.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Registro de no conformidades.
                      td.texto-left Documenta fallas y acciones correctivas.
          p.mb-5 El siguiente caso relaciona situaciones frecuentes con su análisis y las acciones de mejora correspondientes:
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_2(data-aos="fade-right")
                h5 Ejemplo aplicado
                p.mb-0 Una organización desarrolla sistemas de información para diferentes clientes. Durante la revisión de sus proyectos, identifica cambios tardíos, errores repetitivos, interpretaciones diferentes y afectaciones no previstas entre módulos.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t5/img27.jpg', alt='' style="width: 500px").m-auto
      .bg___color_1
        .px-5
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 24.
            span Análisis de situaciones y acciones de mejora en procesos de #[i software]
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Situación detectada
                  th.ajuste-border-tabla.texto-left Análisis del proceso
                  th.texto-left Acción de mejora
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold El cliente solicita cambios porque el diseño no refleja su necesidad.
                  td.ajuste-border-tabla.texto-left Los requisitos no fueron validados formalmente.
                  td.texto-left Incorporar revisión y aprobación de requisitos antes del diseño.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Se repiten errores en varios módulos.
                  td.ajuste-border-tabla.texto-left No existe revisión técnica previa a la entrega.
                  td.texto-left Definir revisión interna antes de publicar versiones.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Los desarrolladores interpretan de forma diferente una funcionalidad.
                  td.ajuste-border-tabla.texto-left La documentación es ambigua.
                  td.texto-left Mejorar especificación de requisitos y criterios de aceptación.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Los cambios afectan módulos no previstos.
                  td.ajuste-border-tabla.texto-left No se analiza impacto antes de modificar.
                  td.texto-left Implementar registro y evaluación de solicitudes de cambio.
          p.mb-5 La aplicación de ISO 9001 no certifica directamente la calidad de un producto de #[i software] ni reemplaza los modelos técnicos. Su aporte consiste en fortalecer la gestión de los procesos, la satisfacción del cliente, la documentación, la trazabilidad, la evaluación del desempeño y la mejora continua.
          Separador
          #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 5.3 SPICE como referente para evaluación de procesos
      .box___style_3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 SPICE evalúa la capacidad de los procesos de desarrollo de #[i software] para identificar fortalezas, debilidades y oportunidades de mejora. Surgió con ISO/IEC 15504 y evolucionó hacia la familia ISO/IEC 330xx.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t5/img28.png', alt='' style="width: 500px").m-auto
      p.mb-5 Los conceptos fundamentales permiten comprender el alcance de la evaluación:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img29.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Proceso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Conjunto de actividades relacionadas que producen un resultado.
            .row(titulo="Evaluación del proceso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Análisis sistemático de la manera en que se ejecuta un proceso.
            .row(titulo="Capacidad del proceso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Grado en que un proceso alcanza sus objetivos de manera consistente.
            .row(titulo="Evidencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Información que permite comprobar cómo se desarrolla el proceso.
            .row(titulo="Mejora del proceso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Acciones orientadas a corregir debilidades y aumentar su capacidad.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.color___2.fit___box_3(data-aos="fade-right").mb-3
            p.mb-0 SPICE evalúa los procesos según distintos niveles, desde una ejecución improvisada hasta una gestión definida, medida y optimizada. Su enfoque combina dos dimensiones: los procesos que se evalúan y el grado de capacidad con que se ejecutan.
          p.mb-0 La evaluación considera dos dimensiones complementarias:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img30.png', alt='' style="width: 500px").m-auto
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img31.png', alt="" ).m-auto
                  h4.text-center Dimensión de procesos
                  .box___card_sinbordes_p
                    p.mb-0 Identifica los procesos que serán evaluados, como requisitos, diseño, desarrollo, gestión de cambios o aseguramiento de la calidad.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img32.png', alt="" ).m-auto
                  h4.text-center Dimensión de capacidad
                  .box___card_sinbordes_p
                    p.mb-0 Determina el nivel de control, repetibilidad, medición y mejora de cada proceso evaluado.
          p.mb-5 Los niveles permiten reconocer la evolución de un proceso desde la improvisación hasta la mejora continua:
          .bg___color_1
            .px-5
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 25.
                span Niveles de capacidad de los procesos según SPICE
              .tabla-a(data-aos="zoom-in").mb-5
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Nivel de capacidad
                      th.ajuste-border-tabla.texto-left Descripción general
                      th.texto-left Interpretación en #[i software]
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Nivel 0. Incompleto
                      td.ajuste-border-tabla.texto-left El proceso no se realiza o no logra su propósito.
                      td.texto-left No existe una forma clara de gestionar requisitos o diseño.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Nivel 1. Realizado
                      td.ajuste-border-tabla.texto-left El proceso logra su propósito básico.
                      td.texto-left Se documentan requisitos, pero sin control suficiente.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Nivel 2. Gestionado
                      td.ajuste-border-tabla.texto-left El proceso se planifica, controla y genera productos de trabajo.
                      td.texto-left Hay responsables, registros y seguimiento de actividades.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Nivel 3. Establecido
                      td.ajuste-border-tabla.texto-left El proceso está definido y se aplica de manera estandarizada.
                      td.texto-left La organización cuenta con procedimientos comunes.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Nivel 4. Predecible
                      td.ajuste-border-tabla.texto-left El proceso se mide y controla cuantitativamente.
                      td.texto-left Se usan métricas para analizar desempeño del proceso.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Nivel 5. En optimización
                      td.ajuste-border-tabla.texto-left El proceso mejora continuamente.
                      td.texto-left Se aplican mejoras con base en datos, resultados y lecciones aprendidas.
              .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
                .bloque-texto-g__img(
                  :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img33.jpg')})` }")
                .bloque-texto-g__texto.p-4
                  p La aplicación de SPICE en #[i software] puede iniciar con una evaluación de procesos clave. Por ejemplo, una organización puede revisar cómo gestiona requisitos, cómo diseña soluciones, cómo controla cambios y cómo verifica entregables. Para cada proceso se recopilan evidencias y se determina su nivel de capacidad.
      p.mb-5 La evaluación puede aplicarse a procesos clave mediante evidencias que permitan identificar debilidades:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 26.
                span Procesos evaluados, evidencias y debilidades frecuentes
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Proceso evaluado
                      th.ajuste-border-tabla.texto-left Evidencia posible
                      th.texto-left Debilidad frecuente
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gestión de requisitos.
                      td.ajuste-border-tabla.texto-left Documento de requisitos, actas de validación, matriz de trazabilidad.
                      td.texto-left Requisitos incompletos o no aprobados.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Diseño de #[i software].
                      td.ajuste-border-tabla.texto-left Diagramas, prototipos, arquitectura, modelo de datos.
                      td.texto-left Diseño no actualizado frente a cambios.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gestión de cambios.
                      td.ajuste-border-tabla.texto-left Solicitudes, análisis de impacto, aprobaciones.
                      td.texto-left Cambios aplicados sin control formal.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gestión de configuración.
                      td.ajuste-border-tabla.texto-left Versiones, repositorios, registros de entrega.
                      td.texto-left Confusión entre versiones del producto.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aseguramiento de calidad.
                      td.ajuste-border-tabla.texto-left Listas de revisión, informes, hallazgos.
                      td.texto-left Revisiones tardías o no documentadas.
          p.mb-5 El siguiente caso relaciona los hallazgos de una evaluación con las acciones necesarias para mejorar los procesos:
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t5/img34.png', alt='' style="width: 500px").m-auto
            .col-xl
              .box___style_2.color___2(data-aos="fade-left")
                h5 Ejemplo aplicado
                p.mb-0   Una organización evalúa la gestión de requisitos, los cambios, el diseño y el seguimiento de sus proyectos. Los resultados permiten identificar procesos existentes que todavía no se encuentran estandarizados o medidos.
      .bg___color_1
        .px-5
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 27.
            span Ejemplo aplicado
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Hallazgo
                  th.ajuste-border-tabla.texto-left Interpretación
                  th.texto-left Acción de mejora
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold No todos los proyectos documentan requisitos de la misma forma.
                  td.ajuste-border-tabla.texto-left El proceso existe, pero no está estandarizado.
                  td.texto-left Definir formato común y procedimiento de validación.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Los cambios se solicitan por mensajes informales.
                  td.ajuste-border-tabla.texto-left Falta control de solicitudes y análisis de impacto.
                  td.texto-left Crear registro de cambios con responsable y aprobación.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold El diseño no siempre se actualiza después de modificar requisitos.
                  td.ajuste-border-tabla.texto-left Hay pérdida de trazabilidad.
                  td.texto-left Establecer revisión obligatoria de diseño ante cambios aprobados.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold No se miden retrasos ni defectos recurrentes.
                  td.ajuste-border-tabla.texto-left El proceso no cuenta con datos de desempeño.
                  td.texto-left  Definir indicadores básicos de cumplimiento y defectos.
          p.mb-0 SPICE no se limita a determinar si un proceso existe, sino que permite valorar su capacidad para producir resultados consistentes. Su aplicación requiere evidencias, criterios claros y acciones concretas de mejora.
          Separador
          #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 5.4 CMM y madurez de procesos de #[i software]
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img35.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p CMM permite evaluar la madurez de los procesos de desarrollo de #[i software], desde prácticas informales hasta procesos definidos, medidos y optimizados. Sus principios evolucionaron posteriormente hacia CMMI, orientado a fortalecer el desempeño y la capacidad organizacional.
      p.mb-5 Los siguientes conceptos permiten comprender el enfoque de madurez:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t5/img36.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in").mb-5
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img37.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Madurez del proceso
                    p.mb-0.text-center Grado en que un proceso se encuentra definido, gestionado, medido y mejorado.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img38.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Estandarización
                    p.mb-0.text-center Aplicación de procedimientos comunes para reducir diferencias entre proyectos y equipos.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img39.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Medición
                    p.mb-0.text-center Utilización de indicadores para determinar el desempeño de los procesos.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img40.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Mejora continua
                    p.mb-0.text-center Análisis de resultados para corregir debilidades y fortalecer las prácticas organizacionales.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t5/img41.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Capacidad organizacional
                    p.mb-0.text-center Condiciones que permiten desarrollar productos consistentes sin depender exclusivamente del conocimiento individual.
      p.mb-5 Los niveles representan una evolución progresiva desde la improvisación hasta la mejora continua:         
      .bg___color_3
        .px-5
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 28.
            span Niveles de madurez del modelo CMM aplicados al desarrollo de #[i software]
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Nivel de madurez tradicional
                  th.ajuste-border-tabla.texto-left Descripción
                  th.texto-left Interpretación en desarrollo de #[i software]
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Nivel 1. Inicial
                  td.ajuste-border-tabla.texto-left Los procesos son informales, variables y dependen de personas específicas.
                  td.texto-left Cada proyecto trabaja de forma distinta y hay alta improvisación.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Nivel 2. Gestionado o repetible
                  td.ajuste-border-tabla.texto-left Se gestionan proyectos básicos y algunas prácticas pueden repetirse.
                  td.texto-left  Existen responsables, cronogramas y controles mínimos.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Nivel 3. Definido
                  td.ajuste-border-tabla.texto-left Los procesos están documentados y estandarizados en la organización.
                  td.texto-left Se usan procedimientos comunes para requisitos, diseño, desarrollo y revisión.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Nivel 4. Gestionado cuantitativamente
                  td.ajuste-border-tabla.texto-left Los procesos se miden y controlan con datos.
                  td.texto-left  Se analizan métricas de defectos, tiempos, productividad y cumplimiento.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Nivel 5. Optimizado
                  td.ajuste-border-tabla.texto-left La organización mejora continuamente sus procesos.
                  td.texto-left Se aplican acciones preventivas, innovación y aprendizaje organizacional.
          p.mb-5 La madurez influye en la calidad del producto y en la capacidad para controlar diferentes situaciones:
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 29.
            span Situaciones organizacionales, niveles de madurez y riesgos asociados
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Situación organizacional
                  th.ajuste-border-tabla.texto-left Nivel de madurez asociado
                  th.texto-left Riesgo principal
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold El conocimiento del proyecto está solo en la mente de un desarrollador.
                  td.ajuste-border-tabla.texto-left Inicial.
                  td.texto-left Dependencia de personas y pérdida de conocimiento.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Se planifican proyectos, pero los procesos varían entre equipos.
                  td.ajuste-border-tabla.texto-left Gestionado.
                  td.texto-left  Resultados parcialmente controlados.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Todos los equipos usan procedimientos comunes.
                  td.ajuste-border-tabla.texto-left Definido.
                  td.texto-left Menor variabilidad y mayor consistencia.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Se analizan métricas de defectos y retrasos.
                  td.ajuste-border-tabla.texto-left Gestionado cuantitativamente.
                  td.texto-left  Mayor capacidad de predicción.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Se mejoran procesos con base en datos y lecciones aprendidas.
                  td.ajuste-border-tabla.texto-left Optimizado.
                  td.texto-left Mayor adaptación y prevención de fallas.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_5(data-aos="fade-right")
            p.mb-0 La madurez de los procesos influye en la calidad del #[i software]. A mayor madurez, se fortalecen la planificación, la trazabilidad, la gestión de riesgos, la revisión y la mejora continua, reduciendo errores, retrasos y problemas de documentación.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img42.jpg', alt='' style="width: 500px").m-auto
      p.mb-5 El siguiente caso relaciona problemas frecuentes con prácticas orientadas a incrementar la madurez:
      .box___style_1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img43.png', alt='' style="width: 500px").m-auto
          .col-xl.fit___box_container
            h5 Ejemplo aplicado
            p.mb-0 Una organización desarrolla soluciones para diferentes clientes, pero presenta retrasos, errores repetitivos y documentación inconsistente. El análisis de sus procesos permite establecer acciones progresivas de mejoramiento.
      p.mb-5 A continuación se realiza el análisis:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img44.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Cambios no controlados").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Problema:] los proyectos se retrasan por modificaciones imprevistas.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Acción:] fortalecer la gestión de requisitos y el control de cambios.
            .row(titulo="Documentación diferente").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Problema:] cada equipo registra la información de manera distinta.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Acción:] establecer formatos y procedimientos organizacionales comunes.
            .row(titulo="Errores repetitivos").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Problema:] las mismas fallas aparecen en varios proyectos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Acción:] registrar los defectos, analizar sus causas y definir acciones preventivas.
            .row(titulo="Tiempos desconocidos").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Problema:] no se conoce cuánto tarda cada fase del proyecto.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Acción:] establecer indicadores de duración, cumplimiento y desempeño.
            .row(titulo="Dependencia de personas").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Problema:] la calidad depende del conocimiento de colaboradores específicos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Acción:] documentar las prácticas y facilitar la transferencia de conocimiento.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.color___2.fit___box_4(data-aos="fade-right").mb-3
            p.mb-0 CMM propone una mejora gradual de los procesos: primero se estabilizan las prácticas básicas, luego se estandarizan, se miden y, finalmente, se optimizan de forma continua.
          p.mb-0 La mejora de la madurez debe realizarse de manera gradual:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img45.png', alt='' style="width: 500px").m-auto
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Estabilizar las prácticas básicas
                    p.mb-0 Se definen responsables, cronogramas, entregables y registros mínimos.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img46.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img47.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Estandarizar los procesos
                    p.mb-0 Se documentan procedimientos comunes y se orienta al equipo para su aplicación.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Establecer mediciones
                    p.mb-0 Se definen indicadores de cumplimiento, tiempos, defectos, productividad y cambios.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img48.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img49.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Analizar los resultados
                    p.mb-0 Se identifican desviaciones, causas recurrentes y oportunidades de mejora.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Optimizar los procesos
                    p.mb-0 Se aplican acciones preventivas, innovaciones y mejoras fundamentadas en datos.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img50.png', alt='' style="width: 300px").m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img51.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p ISO 9001, SPICE y CMM tienen enfoques complementarios: ISO 9001 se centra en la gestión de la calidad, SPICE en la capacidad de procesos específicos y CMM en la madurez organizacional.
      p.mb-5 Los referentes estudiados se diferencian por el aspecto de la calidad que analizan:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 30.
                span Comparación de los enfoques de ISO 9001, SPICE y CMM
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Referente
                      th.ajuste-border-tabla.texto-left Enfoque principal
                      th.texto-left Pregunta que ayuda a responder
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold ISO 9001
                      td.ajuste-border-tabla.texto-left Sistema de gestión de calidad.
                      td.texto-left ¿La organización gestiona sus procesos para cumplir requisitos del cliente?
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold SPICE
                      td.ajuste-border-tabla.texto-left Evaluación de capacidad de procesos.
                      td.texto-left ¿Qué tan capaz es un proceso específico para lograr resultados consistentes?
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold CMM
                      td.ajuste-border-tabla.texto-left Madurez de procesos organizacionales.
                      td.texto-left ¿En qué nivel de madurez se encuentra la organización y cómo puede mejorar?
          p.mb-5 Estos referentes pueden complementarse. ISO 9001 organiza el sistema de gestión de la calidad, SPICE evalúa la capacidad de procesos específicos y CMM orienta la evolución de la madurez organizacional.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t5/img52.jpg', alt='' style="width: 500px").m-auto
            .col-xl
              .box___style_2.color___3.fit___box_4(data-aos="fade-left").mb-3
                p.mb-0 CMM permite reconocer si una organización trabaja de manera improvisada, gestionada, definida, medida u optimizada. Su aplicación fortalece las prácticas que sustentan el análisis, el diseño, el desarrollo, la revisión y la mejora continua del #[i software].
              p.mb-0 La calidad del #[i software] también depende de la manera en que trabaja la organización. Reproduzca el video e identifique cómo los niveles de CMM orientan el paso desde la improvisación hasta la mejora continua.
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video Video. De la improvisación a la mejora continua: los niveles de CMM
      
</template>

<script>
export default {
  name: 'Tema5',
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
