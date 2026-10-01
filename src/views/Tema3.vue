<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Calidad en el desarrollo de #[i software]
      p.mb-5 La calidad debe gestionarse desde las primeras fases del desarrollo y responder a las condiciones particulares de cada proyecto. Su adecuada integración permite prevenir errores, reducir reprocesos y orientar la construcción de soluciones coherentes con las necesidades organizacionales.
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Concepto de calidad de #[i software]
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.color___1(data-aos="fade-right").mb-3
            p.mb-0 La calidad de #[i software] corresponde al grado en que un producto cumple los requisitos definidos y satisface las necesidades explícitas e implícitas del cliente y de los usuarios. Comprende tanto el cumplimiento técnico como la utilidad, la confianza y la satisfacción generadas durante su uso.
          p.mb-0 Las necesidades del cliente pueden expresarse directamente o estar implícitas en las condiciones esperadas del producto:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img1.jpg', alt='' style="width: 500px").m-auto
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Requisitos explícitos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Requisitos explícitos
              p Corresponden a las funciones y condiciones declaradas directamente por el cliente.
              p.mb-0 #[b Ejemplo:] el sistema debe generar reportes mensuales de ventas.
        .py-3.py-md-4(titulo="Requisitos implícitos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Requisitos implícitos
              p Representan expectativas necesarias para que el producto sea aceptado, aunque no estén documentadas formalmente.
              p.mb-0 #[b Ejemplos:] reportes comprensibles, datos correctos, consultas rápidas y acceso exclusivo para usuarios autorizados.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img4.jpg', alt='' style="width: 350px").m-auto
        .col-xl
          .box___style_2.color___2.fit___box_2(data-aos="fade-left").mb-3
            p.mb-0 La calidad no se limita a la ausencia de errores. También comprende el cumplimiento, la utilidad, la estabilidad y la capacidad del producto para adaptarse a cambios futuros.
          p.mb-0 En la siguiente tabla se presentan los principales aspectos permiten valorar el comportamiento integral del producto:
      .bg___color_1
        .px-5
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 12.
            span Principales aspectos
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Aspecto de la calidad
                  th.ajuste-border-tabla.texto-left Descripción
                  th.texto-left Ejemplo
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Cumplimiento funcional
                  td.ajuste-border-tabla.texto-left El sistema realiza las funciones solicitadas.
                  td.texto-left Permite registrar, consultar y actualizar clientes.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Confiabilidad
                  td.ajuste-border-tabla.texto-left El sistema funciona de manera estable y reduce fallas inesperadas.
                  td.texto-left No pierde información al guardar registros.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Usabilidad
                  td.ajuste-border-tabla.texto-left El sistema puede ser utilizado con facilidad por los usuarios.
                  td.texto-left Los formularios son claros y los mensajes orientan la acción.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Eficiencia
                  td.ajuste-border-tabla.texto-left El sistema responde en tiempos adecuados y usa bien los recursos.
                  td.texto-left Los reportes se generan sin demoras excesivas.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Seguridad
                  td.ajuste-border-tabla.texto-left El sistema protege la información y controla accesos.
                  td.texto-left Solo usuarios autorizados pueden consultar datos sensibles.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Mantenibilidad
                  td.ajuste-border-tabla.texto-left El sistema puede corregirse o modificarse sin afectar todo el producto.
                  td.texto-left Se puede agregar un nuevo campo sin rediseñar todo el sistema.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Portabilidad
                  td.ajuste-border-tabla.texto-left El sistema puede funcionar en diferentes entornos o dispositivos.
                  td.texto-left La aplicación web se visualiza correctamente en computador y celular.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_2.color___3(data-aos="fade-right").mb-3
                p.mb-0 La calidad surge de la relación entre requisitos, producto y satisfacción. Una falla en cualquiera de estos elementos puede impedir que la solución responda efectivamente a la necesidad identificada.
              p.mb-0 Las siguientes situaciones explican cómo una falla en los requisitos, el producto o la experiencia del usuario puede afectar la calidad:
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t3/img5.png', alt='' style="width: 500px").m-auto
      .box___style_1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t3/img6.jpg', alt='' style="width: 500px").m-auto
          .col-xl.fit___box_container
            h5 Ejemplos aplicados
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Un producto puede estar correctamente programado y no resolver el problema real cuando sus requisitos se interpretan de manera incorrecta. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El producto puede cumplir sus funciones, pero presentar bajo rendimiento si el diseño no considera la cantidad de usuarios. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El producto puede ser rechazado cuando su funcionamiento resulta difícil de comprender, aunque técnicamente opere de manera adecuada.
            p.mb-0 Por ello, la calidad debe abordarse integralmente.
      p.mb-5 La calidad puede analizarse en tres momentos relacionados, cada uno con un riesgo específico:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img7.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Calidad esperada").ajuste-cajaAcordion.ajuste-vineta
              p Corresponde a las condiciones establecidas en los requisitos, el diseño y los criterios técnicos.
              p.mb-3 #[b Riesgo:] el equipo puede construir sin una meta definida.
            .row(titulo="Calidad construida").ajuste-cajaAcordion.ajuste-vineta
              p Comprende las características implementadas realmente en el producto.
              p.mb-3 #[b Riesgo:] el sistema puede incumplir las especificaciones.
            .row(titulo="Calidad percibida").ajuste-cajaAcordion.ajuste-vineta
              p Corresponde a la experiencia y satisfacción del usuario durante la interacción con el sistema.
              p.mb-3 #[b Riesgo:] el producto puede ser rechazado, aunque funcione técnicamente.
      p.mb-0 La calidad requiere coherencia entre lo esperado, lo construido y la experiencia obtenida. Por esta razón, debe incorporarse desde el análisis y mantenerse durante el diseño, el desarrollo y la evaluación.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Calidad del producto y calidad del proceso
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.color___1(data-aos="fade-right").mb-3
            p.mb-0 La calidad puede analizarse desde dos perspectivas complementarias. La calidad del producto se relaciona con las características de la solución entregada, mientras que la calidad del proceso comprende las prácticas empleadas para desarrollarla.
          p.mb-0 Las dos perspectivas responden preguntas diferentes, pero deben gestionarse de manera articulada:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img8.jpg', alt='' style="width: 500px").m-auto
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Calidad del producto")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img9.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Calidad del producto
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  #[b Enfoque:] características del #[i software] construido.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Pregunta:] ¿el sistema funciona adecuadamente y satisface al cliente?
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:] registra ventas correctamente y genera reportes confiables.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Aspectos:] funcionalidad, usabilidad, rendimiento, seguridad, confiabilidad, mantenibilidad y compatibilidad.
        .py-3.py-md-4(titulo="Calidad del proceso")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img10.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Calidad del proceso
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  #[b Enfoque:] actividades empleadas para construir el #[i software].
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Pregunta:] ¿el equipo trabajó con orden, control y buenas prácticas?
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:] documentó requisitos, diseñó los módulos y evaluó los avances.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Prácticas:] documentación, control de cambios, seguimiento, estándares y validación de entregables.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img11.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Un proceso desorganizado puede producir fallas, inconsistencias y dificultades de mantenimiento. De igual manera, los errores frecuentes del producto pueden indicar problemas en el análisis, el diseño o el desarrollo.
      p.mb-5 Los elementos del proceso contribuyen a prevenir defectos y conservar la coherencia del producto. Estos se detallan en la siguiente tabla:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 13.
                span Elementos del proceso
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Elemento de calidad del proceso
                      th.texto-left Contribución a la calidad
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Análisis de requisitos
                      td.texto-left Reduce ambigüedades sobre lo que debe hacer el sistema.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Diseño estructurado
                      td.texto-left Facilita la organización técnica del #[i software].
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Documentación
                      td.texto-left Permite comprender decisiones y mantener el producto.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Control de cambios
                      td.texto-left Evita modificaciones desordenadas o sin impacto evaluado.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Revisión continua
                      td.texto-left Permite detectar inconsistencias de forma temprana.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Uso de estándares
                      td.texto-left Orienta buenas prácticas y criterios comunes de trabajo.
          p.mb-5 El siguiente caso diferencia el resultado entregado de las prácticas utilizadas para construirlo:
          .box___style_3(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl.order-2.order-lg-1.fit___box_container
                h5 Ejemplo aplicado
                p.mb-0 Una empresa solicita un sistema de inventario que registre productos, consulte existencias y genere reportes. Estas funciones corresponden a la calidad del producto. Si los requisitos no se documentan, la estructura de datos resulta inadecuada o los cambios se realizan sin control, se evidencian deficiencias en la calidad del proceso.
              .col-xl-auto.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/t3/img12.png', alt='' style="width: 500px").m-auto
      p.mb-5 Algunos problemas del producto pueden relacionarse directamente con decisiones tomadas durante el proceso:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Función ausente
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Situación:] el sistema no genera el reporte solicitado.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Problema:] falta una funcionalidad clave.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Posible causa:] requisito omitido o mal interpretado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Consulta lenta
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Situación:] el sistema tarda al consultar datos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Problema:] bajo rendimiento.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Posible causa:] arquitectura o diseño de datos inadecuado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Errores de diligenciamiento
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Situación:] los usuarios se equivocan al completar formularios.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Problema:] baja usabilidad.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Posible causa:] interfaz diseñada sin considerar al usuario final.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cambios con múltiples efectos
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Situación:] una modificación afecta varios módulos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Problema:] baja mantenibilidad.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Posible causa:] componentes acoplados o diseño poco modular.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Accesos indebidos
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Situación:] usuarios no autorizados acceden a la información.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Problema:] falla de seguridad.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Posible causa:] ausencia de reglas de acceso desde el diseño.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img17.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La calidad debe planearse y construirse, no limitarse a una evaluación final. Un proceso organizado incrementa las posibilidades de obtener un producto estable, comprensible, útil y sostenible.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Factores de calidad desde la perspectiva del cliente
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img18.jpg', alt='' style="width: 500px").m-auto
        .col-xl
          .box___style_2.color___1(data-aos="fade-left").mb-3
            p.mb-0 Los factores de calidad permiten convertir las expectativas del cliente en criterios comparables y comprobables. Su importancia depende del tipo de sistema, los riesgos, los usuarios, la información gestionada y las condiciones organizacionales.
          p.mb-0 Los factores se agrupan en tres dimensiones que permiten analizar el desempeño, la capacidad de mejora y la adaptación del producto:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Operación del producto")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img19.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Operación del producto
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  #[b Enfoque:] funcionamiento del sistema durante su utilización.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  #[b Pregunta:] ¿el sistema funciona correctamente para el usuario?
        .py-3.py-md-4(titulo="Revisión del producto")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img20.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Revisión del producto
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  #[b Enfoque:] facilidad para corregir, mantener o mejorar el sistema.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  #[b Pregunta:] ¿el sistema puede ajustarse sin afectar su estabilidad?
        .py-3.py-md-4(titulo="Transición del producto")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Transición del producto
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  #[b Enfoque:] capacidad para funcionar en nuevos entornos o integrarse con otros sistemas.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  #[b Pregunta:] ¿el producto puede evolucionar según nuevas necesidades?
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img21.png" style="max-width: 60px").m-auto
        .col
          h3 Factores de operación del producto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img22.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Los factores de operación se relacionan con el desempeño del sistema durante su utilización. Inciden directamente en el cumplimiento de las funciones, la protección de la información y la experiencia del usuario.
      p.mb-5 Los factores de operación se concretan mediante las siguientes condiciones y aplicaciones:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 14.
                span Factores de operación
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Factor de operación
                      th.ajuste-border-tabla.texto-left Descripción
                      th.texto-left Ejemplo aplicado
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Funcionalidad
                      td.ajuste-border-tabla.texto-left Capacidad del sistema para realizar las funciones requeridas.
                      td.texto-left El sistema permite registrar ventas y generar facturas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Confiabilidad
                      td.ajuste-border-tabla.texto-left Capacidad para funcionar sin fallas frecuentes.
                      td.texto-left Los datos no se pierden al guardar información.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Usabilidad
                      td.ajuste-border-tabla.texto-left Facilidad con la que los usuarios comprenden y utilizan el sistema.
                      td.texto-left Los formularios son claros y tienen mensajes de ayuda.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Eficiencia
                      td.ajuste-border-tabla.texto-left Uso adecuado del tiempo y recursos del sistema.
                      td.texto-left Las consultas responden en pocos segundos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Seguridad
                      td.ajuste-border-tabla.texto-left Protección de datos y control de accesos.
                      td.texto-left Cada usuario ingresa con credenciales y permisos definidos.
          p.mb-5 La prioridad de estos factores depende del contexto. Una aplicación médica puede requerir mayor seguridad y confiabilidad; una tienda virtual puede priorizar eficiencia y disponibilidad.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img21.png" style="max-width: 60px").m-auto
            .col
              h3 Factores de revisión del producto
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t3/img23.jpg', alt='' style="width: 350px").m-auto
            .col-xl
              .box___style_2.color___2.fit___box_2(data-aos="fade-left").mb-3
                p.mb-0 Los factores de revisión determinan la capacidad del #[i software] para ser analizado, corregido, mantenido o mejorado. Sus deficiencias pueden traducirse en mayores costos, demoras y dificultades para incorporar cambios.
              p.mb-0 Estos factores permiten determinar la facilidad con la que el producto admite ajustes y conserva su estabilidad:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img24.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in").mb-5
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img25.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Mantenibilidad
                    p Facilidad para corregir errores o realizar ajustes.
                    p.mb-0 #[b Ejemplo:] una regla de descuento se modifica sin afectar todo el sistema.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img26.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Flexibilidad
                    p Capacidad para adaptarse a nuevos requisitos.
                    p.mb-0 #[b Ejemplo:] el sistema permite incorporar nuevos tipos de usuario.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img27.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Capacidad de prueba (testabilidad)
                    p Facilidad para comprobar el funcionamiento de las características implementadas.
                    p.mb-0 #[b Ejemplo:] cada módulo puede evaluarse independientemente.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img28.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Modularidad
                    p Organización del sistema en partes con responsabilidades definidas.
                    p.mb-0 #[b Ejemplo:] el módulo de facturación permanece separado del módulo de inventario.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img29.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Claridad técnica
                    p Comprensión de la estructura del #[i software] y de sus decisiones.
                    p.mb-0 #[b Ejemplo:] la documentación explica la función de cada componente.
      p.mb-5 Un sistema modular, documentado y organizado facilita los cambios posteriores. Por el contrario, la ausencia de una estructura clara puede aumentar el esfuerzo y reducir la confianza del cliente.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img21.png" style="max-width: 60px").m-auto
        .col
          h3 Factores de transición del producto
      .box___style_3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 Los factores de transición comprenden la capacidad del sistema para funcionar en diferentes entornos, adaptarse a nuevas condiciones, reutilizar componentes e intercambiar información con otras soluciones.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img30.png', alt='' style="width: 500px").m-auto
      p.mb-5 Los factores de transición facilitan la evolución tecnológica y la integración del producto:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img31.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Portabilidad").ajuste-cajaAcordion.ajuste-vineta
              p Capacidad para funcionar en diferentes entornos tecnológicos.
              p.mb-0 #[b Ejemplo:] el sistema puede utilizarse desde distintos navegadores.
            .row(titulo="Interoperabilidad").ajuste-cajaAcordion.ajuste-vineta
              p Capacidad para comunicarse con otros sistemas.
              p.mb-0 #[b Ejemplo:] la solución se integra con una pasarela de pagos.
            .row(titulo="Reusabilidad").ajuste-cajaAcordion.ajuste-vineta
              p Posibilidad de utilizar componentes en otros módulos o proyectos.
              p.mb-0 #[b Ejemplo:] el componente de autenticación puede emplearse en varios sistemas.
            .row(titulo="Adaptabilidad").ajuste-cajaAcordion.ajuste-vineta
              p Capacidad para ajustarse a nuevas condiciones de uso.
              p.mb-0 #[b Ejemplo:] el sistema se adapta a una nueva sede de la organización.
            .row(titulo="Compatibilidad").ajuste-cajaAcordion.ajuste-vineta
              p Funcionamiento adecuado con las plataformas, los dispositivos o las versiones requeridas.
              p.mb-0 #[b Ejemplo:] la aplicación funciona en computador, tableta y teléfono celular.
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img32.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Estos factores deben considerarse desde el diseño cuando el sistema necesite migrar a nuevos entornos, integrarse con servicios externos o mantenerse vigente durante un periodo prolongado.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img21.png" style="max-width: 60px").m-auto
        .col
          h3 Priorización de factores según necesidades del cliente
      p No todos los factores tienen el mismo nivel de importancia. Su priorización depende del tipo de producto, los riesgos, el número de usuarios, la información gestionada y el impacto organizacional.
      p.mb-5 En la siguiente tabla se presentan los sistemas requieren combinaciones diferentes de factores prioritarios:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 15.
                span Tipos de sistemas y factores prioritarios 
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Tipo de sistema
                      th.texto-left Factores prioritarios
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Sistema financiero
                      td.texto-left Seguridad, confiabilidad, trazabilidad, eficiencia.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Sistema académico
                      td.texto-left Usabilidad, disponibilidad, integridad de datos, reportes.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tienda virtual
                      td.texto-left Eficiencia, seguridad, disponibilidad, facilidad de compra.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Sistema de inventario
                      td.texto-left Precisión, confiabilidad, mantenibilidad, reportes.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aplicación móvil de servicios
                      td.texto-left Usabilidad, rendimiento, portabilidad, disponibilidad.
          p.mb-5 Los siguientes ejemplos relacionan el contexto de cada sistema con los factores de calidad que deben priorizarse:
          .box___style_1.color___4(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t3/img33.jpg', alt='' style="width: 500px").m-auto
              .col-xl.fit___box_container
                h5 Ejemplos aplicados
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    |  En un sistema académico pueden priorizarse la precisión de los datos, la seguridad de acceso, la generación de reportes y la facilidad de uso para instructores y personal administrativo. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    |  En una plataforma de comercio electrónico pueden priorizarse la disponibilidad, el rendimiento durante los periodos de alta demanda, la seguridad en los pagos y la facilidad de navegación.
      p.mb-0 Los factores deben identificarse durante el análisis de requisitos y consolidarse en el diseño. Así, las decisiones técnicas pueden justificarse según las prioridades establecidas por el cliente.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Relación entre diseño, desarrollo y calidad
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.color___3(data-aos="fade-right").mb-3
            p.mb-0 El diseño, el desarrollo y la calidad cumplen funciones diferentes, pero deben actuar de manera articulada. El diseño define la estructura; el desarrollo materializa las decisiones; y la calidad orienta el cumplimiento de los requisitos y las expectativas.
          p.mb-0 Cada elemento cumple una función dentro del proyecto y realiza un aporte específico a la calidad:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img34.png', alt='' style="width: 500px").m-auto
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img35.png', alt="" ).m-auto
                  h4.text-center Diseño
                  .box___card_sinbordes_p
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Función:] define la estructura y organización de la solución.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Aporte:] previene errores y orienta las decisiones técnicas.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img36.png', alt="" ).m-auto
                  h4.text-center Desarrollo
                  .box___card_sinbordes_p
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Función:] construye el producto según el diseño establecido.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Aporte:] implementa funcionalidades con criterios técnicos adecuados.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img37.png', alt="" ).m-auto
                  h4.text-center Calidad
                  .box___card_sinbordes_p
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Función:] evalúa y orienta el cumplimiento de requisitos y expectativas.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Aporte:] determina si el producto es útil, confiable y mantenible.
          p.mb-5 Las decisiones de diseño inciden directamente en la construcción y en las características finales del producto. Estas se presentan en la siguiente tabla:
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 16.
                span Decisiones de diseño e impactos
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Decisión de diseño
                      th.ajuste-border-tabla.texto-left Impacto en el desarrollo
                      th.texto-left Impacto en la calidad
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Definir arquitectura por capas.
                      td.ajuste-border-tabla.texto-left Facilita separar responsabilidades.
                      td.texto-left Mejora mantenibilidad y escalabilidad.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Diseñar base de datos con relaciones claras.
                      td.ajuste-border-tabla.texto-left Facilita consultas y operaciones.
                      td.texto-left Mejora integridad y precisión de la información.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Diseñar interfaces consistentes.
                      td.ajuste-border-tabla.texto-left Facilita construcción de pantallas similares.
                      td.texto-left Mejora usabilidad y reduce errores del usuario.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Separar componentes por responsabilidad.
                      td.ajuste-border-tabla.texto-left Facilita trabajo del equipo y revisión del código.
                      td.texto-left Mejora mantenibilidad y testabilidad.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Definir reglas de negocio desde el diseño.
                      td.ajuste-border-tabla.texto-left Reduce improvisación en la codificación.
                      td.texto-left Mejora funcionalidad y coherencia del sistema.
      .box___style_3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 La estructura del diseño también determina la capacidad para gestionar los cambios solicitados por el cliente.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img38.png', alt='' style="width: 500px").m-auto
      p.mb-5 Los siguientes ejemplos comparan los efectos de cada cambio en un diseño bien estructurado y en uno débil o incompleto:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 17.
                span Ejemplos de gestión de cambios
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Cambio solicitado por el cliente
                      th.ajuste-border-tabla.texto-left Diseño bien estructurado
                      th.texto-left Diseño débil o incompleto
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Agregar un nuevo tipo de usuario.
                      td.ajuste-border-tabla.texto-left Se ajustan roles y permisos en el componente correspondiente.
                      td.texto-left Se deben modificar varias partes sin claridad de impacto.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Incluir un nuevo reporte.
                      td.ajuste-border-tabla.texto-left Se aprovechan datos organizados y módulo de reportes existente.
                      td.texto-left Se crean consultas improvisadas y posiblemente inconsistentes.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Integrar con otro sistema.
                      td.ajuste-border-tabla.texto-left La arquitectura contempla servicios o puntos de integración.
                      td.texto-left Se requiere rediseñar partes importantes del sistema.
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img39.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p La calidad debe estar presente en cada etapa y no limitarse a una comprobación aislada al finalizar el desarrollo.
      p.mb-5 Una forma de comprender esta relación es mediante el flujo entre las etapas. Estas articulan las necesidades, las decisiones, la construcción y la evolución del producto:
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Requisitos
                    p #[b Pregunta:] ¿qué necesita el cliente?
                    p.mb-0 #[b Aporte:] define las condiciones que deben cumplirse.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img40.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img41.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Diseño
                    p #[b Pregunta:] ¿cómo se organizará la solución?
                    p.mb-0 #[b Aporte:] permite anticipar decisiones que afectan el producto.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Desarrollo
                    p #[b Pregunta:] ¿cómo se construirá lo diseñado?
                    p.mb-0 #[b Aporte:] materializa las funciones y condiciones técnicas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img42.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img43.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Revisión
                    p #[b Pregunta:] ¿lo construido cumple lo definido?
                    p.mb-0 #[b Aporte:] identifica inconsistencias y oportunidades de mejora.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Mantenimiento
                    p #[b Pregunta:] ¿cómo se ajustará el sistema con el tiempo?
                    p.mb-0 #[b Aporte:] sostiene la calidad durante la evolución del producto.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img44.png', alt='' style="width: 300px").m-auto
      p.mb-0 El desarrollo de #[i software] con calidad exige coherencia entre todas las etapas. La calidad surge de la articulación entre la necesidad identificada, el diseño de la solución, su construcción, su evaluación y su evolución.

</template>

<script>
export default {
  name: 'Tema3',
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
