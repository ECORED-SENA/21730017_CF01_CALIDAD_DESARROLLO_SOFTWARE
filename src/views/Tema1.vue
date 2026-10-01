<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Diseño de #[i software] y requisitos del cliente.
      p.mb-5 El diseño de #[i software] constituye una etapa fundamental para orientar la construcción de sistemas de información acordes con las necesidades del cliente y las condiciones de la organización. Su adecuada planificación permite anticipar dificultades, reducir la improvisación y coordinar las decisiones que intervienen antes de la codificación. En este contexto, el diseño articula las necesidades organizacionales con la propuesta técnica y establece una base para abordar su propósito, la interpretación de los requisitos, los elementos que lo conforman y su relación con la calidad.
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Concepto y propósito del diseño de #[i software]
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2(data-aos="fade-right").mb-3
            p.mb-0 El diseño de #[i software] define la estructura técnica y funcional de una solución antes de su construcción. Parte de los requisitos identificados y establece cómo se desarrollará el sistema. Además, permite documentar decisiones sobre la aplicación, las tecnologías, los módulos, los permisos y la seguridad, con el fin de orientar el trabajo del equipo.
          p.mb-0 Estos propósitos explican cómo el diseño orienta la construcción y favorece la evolución de la solución:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img1.jpg', alt='' style="width: 500px").m-auto
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img2.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Organizar la solución").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite dividir el sistema en partes comprensibles, como módulos, componentes, interfaces y servicios.
            .row(titulo="Facilitar la construcción").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Sirve como guía para que el equipo implemente el #[i software] de forma coherente.
            .row(titulo="Reducir errores").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Ayuda a identificar inconsistencias antes de iniciar la programación.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Mejorar la comunicación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Facilita que el cliente, los analistas, los diseñadores, los desarrolladores y los evaluadores comprendan la solución propuesta.
            .row(titulo="Favorecer la calidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Contribuye a que el sistema sea funcional, mantenible, seguro, usable y adaptable.
            .row(titulo="Soportar cambios futuros").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite construir soluciones que puedan ajustarse a nuevas necesidades de la organización.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img3.png", alt="" style="width: 300px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img4.jpg', alt='' style="width: 500px").m-auto
        .col-xl
          .box___style_2.color___1(data-aos="fade-left").mb-3
            p.mb-0 El diseño funciona como un plano técnico y funcional que orienta la construcción del sistema. Aunque no elimina los cambios, permite gestionarlos de manera controlada y con menores costos.
          p.mb-0 Un buen diseño debe ser claro, coherente, verificable y estar alineado con los requisitos. También puede documentarse mediante diagramas, descripciones, prototipos, modelos, especificaciones, flujos de procesos y reglas de negocio.
      p.mb-5 El siguiente caso concreta la aplicación del diseño en una necesidad empresarial:
      .box___style_3(data-aos="zoom-in").mb-0
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            h5 Ejemplo aplicado
            p.mb-0 En un sistema de inventario, el diseño puede establecer la información sobre productos, proveedores y movimientos; las funciones de compras y ventas; los reportes de existencias; los roles de usuario; y las reglas que impiden vender productos sin disponibilidad. Estas decisiones convierten una necesidad empresarial en una solución organizada.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t1/img5.png', alt='' style="width: 500px").m-auto
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Interpretación de requisitos y expectativas del cliente
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img6.png', alt='' style="width: 500px").m-auto
        .col-xl
          .box___style_2.color___2(data-aos="fade-left").mb-3
            p.mb-0 La interpretación de requisitos permite convertir las necesidades expresadas por el cliente en especificaciones claras del sistema. El equipo técnico debe traducir el lenguaje cotidiano en funciones, reglas, restricciones y condiciones de calidad que orienten el diseño de la solución.
          p.mb-0 Esta clasificación diferencia el alcance de cada requisito y facilita su aplicación durante el diseño:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Requisito funcional")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img7.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Requisito funcional
              p Indica una acción, un servicio o un comportamiento que debe realizar el sistema.
              p.mb-0 #[b Ejemplo:] el sistema debe permitir registrar clientes nuevos.
        .py-3.py-md-4(titulo="Requisito no funcional")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img8.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Requisito no funcional
              p Define condiciones de calidad, rendimiento, seguridad, usabilidad o restricciones técnicas.
              p.mb-0 #[b Ejemplo:] el sistema debe permitir el ingreso únicamente a usuarios autenticados.
        .py-3.py-md-4(titulo="Restricción del proyecto")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img9.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Restricción del proyecto
              p Establece límites técnicos, normativos, económicos o de tiempo que condicionan el desarrollo.
              p.mb-0 #[b Ejemplo:] el sistema debe funcionar en navegadores web actuales.
        .py-3.py-md-4(titulo="Regla de negocio")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img10.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Regla de negocio
              p Describe una condición propia del proceso de la organización que debe cumplirse.
              p.mb-0 #[b Ejemplo:] una solicitud no puede aprobarse si faltan documentos obligatorios.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.color___2(data-aos="fade-right").mb-3
            p.mb-0 Interpretar requisitos no consiste únicamente en documentarlos. También implica determinar si son completos, comprensibles, viables, verificables y coherentes. Una interpretación incorrecta puede afectar las decisiones posteriores del diseño y la construcción.
          p.mb-0 El siguiente caso explica por qué una necesidad debe expresarse mediante condiciones específicas:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img11.jpg', alt='' style="width: 500px").m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img12.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo aplicado
          br
          br
          p La solicitud de un “sistema rápido” resulta insuficiente para orientar el diseño. El equipo debe precisar si se requieren consultas en pocos segundos, atención simultánea de varios usuarios, generación ágil de reportes o reducción del tiempo de registro. Esta precisión evita que la solución se aparte de la expectativa del cliente.
          br
          br
          p Las expectativas corresponden a los resultados que el cliente espera, aunque no siempre estén formulados como requisitos. Pueden relacionarse con facilidad de uso, reducción de tiempos, disminución de errores, automatización, control de información, cumplimiento normativo y disponibilidad de reportes.
      p.mb-5 Para interpretar las expectativas del cliente, se analizan siete aspectos mediante preguntas orientadoras:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img13.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Necesidad principal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 ¿Qué problema busca resolver el cliente?
            .row(titulo="Proceso actual").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 ¿Cómo desarrolla actualmente la organización esa actividad?
            .row(titulo="Usuarios involucrados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 ¿Quiénes utilizarán el sistema y qué permisos tendrán?
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Información requerida").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 ¿Qué datos deben registrarse, consultarse, modificarse o eliminarse?
            .row(titulo="Reglas de negocio").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 ¿Qué condiciones propias de la organización deben cumplirse?
            .row(titulo="Condiciones de calidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 ¿Qué espera el cliente en términos de seguridad, rendimiento y facilidad de uso?
            .row(titulo="Restricciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 ¿Qué límites técnicos, económicos, normativos o de tiempo existen?
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img14.png", alt="" style="width: 350px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img15.png', alt='' style="width: 500px").m-auto
        .col-xl
          .box___style_2.color___2(data-aos="fade-left").mb-3
            p.mb-0 La comunicación con el cliente puede apoyarse en entrevistas, reuniones, cuestionarios, análisis de procesos, revisión documental, historias de usuario, prototipos y diagramas. Estas técnicas permiten aclarar dudas y validar la interpretación realizada por el equipo.
          p.mb-0 También debe diferenciarse lo solicitado por el cliente de la necesidad real del proceso. La petición inicial puede corresponder a una solución imaginada y no al objetivo organizacional que se pretende alcanzar.
      p.mb-5 El siguiente caso diferencia una petición literal de la necesidad real del proceso:
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img16.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo aplicado
          br
          br
          p Un cliente puede solicitar un botón para enviar correos manualmente, aunque el proceso requiera una notificación automática cuando cambie el estado de una solicitud. En este caso, la interpretación debe centrarse en el objetivo de negocio y no solamente en la petición inicial.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img17.jpg', alt='' style="width: 350px").m-auto
        .col-xl
          .box___style_2.color___2.fit___box_2(data-aos="fade-left").mb-3
            p.mb-0 Los requisitos deben documentarse de forma clara, específica, medible y verificable. Estas condiciones permiten comprobar posteriormente si el sistema cumple lo establecido y responde a la necesidad identificada.
          p.mb-0 Los siguientes ejemplos relacionan diferentes necesidades expresadas por los clientes con los requisitos interpretados y sus implicaciones para el diseño:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Préstamos de equipos
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Necesidad:] “Necesitamos controlar mejor los préstamos de equipos”.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Requisito interpretado:] el sistema debe registrar préstamos, devoluciones, responsables, fechas y estado del equipo.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Implicación para el diseño:] se requieren módulos de equipos, usuarios, préstamos, devoluciones y reportes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Productos agotados
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Necesidad:] “Queremos saber qué productos se están agotando”.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Requisito interpretado:] el sistema debe generar alertas cuando la existencia sea inferior al mínimo definido.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Implicación para el diseño:] se requieren reglas de inventario, un campo de existencia mínima y un mecanismo de alerta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Acceso diferenciado
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Necesidad:] “No todos deben acceder a la misma información”.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Requisito interpretado:] el sistema debe administrar roles y permisos según el tipo de usuario.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Implicación para el diseño:] se requieren mecanismos de autenticación, autorización y control de acceso.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img20.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Una interpretación adecuada también permite priorizar los requisitos según su importancia, urgencia, dependencia y aporte al funcionamiento del sistema. Esta priorización facilita la planeación y evita una complejidad innecesaria desde el inicio.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Elementos del diseño: arquitectura, datos, interfaces y componentes
      p.mb-5 El diseño de #[i software] integra diferentes perspectivas para estructurar la solución. La arquitectura, los datos, las interfaces y los componentes cumplen funciones específicas, pero deben conservar coherencia entre sí, debido a que una modificación en cualquiera de ellos puede afectar los demás.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img21.png" style="max-width: 60px").m-auto
        .col
          h3 Arquitectura del #[i software]
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img22.jpg', alt='' style="width: 500px").m-auto
        .col-xl
          .box___style_2.color___1(data-aos="fade-left").mb-3
            p.mb-0 La arquitectura define la estructura general del sistema, la distribución de responsabilidades y la comunicación entre sus partes. Una organización adecuada facilita el mantenimiento, la ampliación, las pruebas y la adaptación del #[i software] (Universidad El Bosque, 2026).
          p.mb-0 Los elementos arquitectónicos distribuyen responsabilidades y establecen la forma en que opera la estructura general del sistema:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img23.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in").mb-5
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img24.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Capa de presentación
                    p.mb-0.text-center Facilita la interacción del usuario mediante pantallas, formularios y demás opciones de acceso.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img25.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Capa de lógica de negocio
                    p.mb-0.text-center Contiene las reglas, las validaciones y los procesos propios de la organización.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img26.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Capa de datos
                    p.mb-0.text-center Gestiona la conexión, consulta, almacenamiento y actualización de la información.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img27.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Servicios o integraciones
                    p.mb-0.text-center Permiten la comunicación con otros sistemas, aplicaciones o plataformas externas.
      p.mb-5 La arquitectura debe responder a los requisitos y las condiciones técnicas del proyecto. También debe considerar el rendimiento, la escalabilidad, la seguridad y la integración con otros sistemas.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img21.png" style="max-width: 60px").m-auto
        .col
          h3 Diseño de datos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2(data-aos="fade-right").mb-3
            p.mb-0 El diseño de datos establece cómo se organizará, almacenará y relacionará la información. Su adecuada estructuración permite conservar datos consistentes, precisos, recuperables y útiles para los procesos de la organización.
          p.mb-0 El diseño de datos se organiza mediante cinco elementos que contribuyen a mantener la coherencia de la información. Estos se presentan en la siguiente tabla:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img28.png', alt='' style="width: 500px").m-auto
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 1.
                span Elementos del diseño de datos
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Elemento del diseño de datos
                      th.ajuste-border-tabla.texto-left Descripción
                      th.texto-left Ejemplo
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Entidad
                      td.ajuste-border-tabla.texto-left Objeto o concepto sobre el cual se almacena información.
                      td.texto-left Cliente, producto o factura.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Atributo
                      td.ajuste-border-tabla.texto-left Característica o dato específico de una entidad. 
                      td.texto-left Nombre, precio o fecha.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Relación
                      td.ajuste-border-tabla.texto-left Asociación entre dos o más entidades.
                      td.texto-left Un cliente puede tener varias facturas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Restricción
                      td.ajuste-border-tabla.texto-left Regla que limita o controla los datos registrados.
                      td.texto-left El número de documento no puede repetirse.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Integridad
                      td.ajuste-border-tabla.texto-left Condición que mantiene la coherencia de los datos.
                      td.texto-left No registrar una venta sin cliente asociado.
          p.mb-5 Un diseño de datos deficiente puede generar duplicidad, pérdida de información, errores en los reportes y dificultades para realizar consultas.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img21.png" style="max-width: 60px").m-auto
            .col
              h3 Diseño de interfaces
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t1/img29.jpg', alt='' style="width: 350px").m-auto
            .col-xl
              .box___style_2.color___2.fit___box_2(data-aos="fade-left").mb-3
                p.mb-0 El diseño de interfaces establece la forma en que el usuario interactúa con el sistema mediante pantallas, formularios, menús, botones, mensajes, alertas y reportes. Su propósito comprende la facilidad de uso, la navegación y la prevención de errores.
              p.mb-0 Estos criterios orientan la construcción de interfaces comprensibles, consistentes y adecuadas para las tareas del usuario:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img30.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Claridad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los textos, botones y opciones deben ser comprensibles.
            .row(titulo="Consistencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las pantallas deben conservar una estructura y un comportamiento similares.
            .row(titulo="Usabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El usuario debe completar sus tareas sin pasos innecesarios.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Retroalimentación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El sistema debe informar el resultado de una acción o la ocurrencia de un error.
            .row(titulo="Accesibilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La interfaz debe facilitar el uso a personas con diferentes características y necesidades.
            .row(titulo="Prevención de errores").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los formularios deben validar los datos y proporcionar indicaciones pertinentes.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img31.png", alt="" style="width: 300px").m-auto
      p.mb-5 El siguiente caso concreta la aplicación de estos criterios durante el diligenciamiento de información:
      .box___style_3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            h5 Ejemplo aplicado
            p.mb-0 Cuando el sistema solicita una fecha, la interfaz puede incluir un calendario para prevenir formatos incorrectos. Si el usuario elimina información, puede emitir un mensaje de confirmación antes de ejecutar la acción. Estas decisiones reducen errores operativos.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t1/img32.png', alt='' style="width: 500px").m-auto
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img21.png" style="max-width: 60px").m-auto
        .col
          h3 Diseño de componentes
      p.mb-5 El diseño de componentes divide el sistema en partes funcionales pequeñas y manejables. Cada componente debe cumplir una responsabilidad específica para facilitar el desarrollo, las pruebas, el mantenimiento y la reutilización.
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img33.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in").mb-5
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img34.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Gestión de usuarios
                    p.mb-0.text-center Registra usuarios, controla accesos y asigna permisos.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img35.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Gestión de productos
                    p.mb-0.text-center Permite crear, consultar, actualizar y eliminar productos.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img36.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Facturación
                    p.mb-0.text-center Genera facturas, calcula valores y registra ventas.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img37.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Reportes
                    p.mb-0.text-center Consolida información necesaria para apoyar la toma de decisiones.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img38.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Seguridad
                    p.mb-0.text-center Gestiona la autenticación, la autorización y la protección de los datos.
      p.mb-5 Un componente no debe concentrar funciones diferentes o responsabilidades excesivas. Una distribución clara favorece un sistema ordenado, flexible y fácil de mantener.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.color___1(data-aos="fade-right").mb-3
            h5 Relación entre los elementos del diseño
            p.mb-0 Los elementos del diseño funcionan de manera articulada. La arquitectura establece la estructura general; los datos organizan la información; las interfaces permiten la interacción; y los componentes distribuyen la lógica funcional.
          p.mb-0 Cada elemento responde una pregunta específica y aporta una perspectiva necesaria para estructurar la solución. 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img39.jpg', alt='' style="width: 500px").m-auto
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 2.
                span Relación elemento del diseño y pregunta que responde
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Elemento del diseño
                      th.texto-left Pregunta que responde
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Arquitectura
                      td.texto-left ¿Cómo estará organizado el sistema en su estructura general?
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Datos
                      td.texto-left ¿Qué información se almacenará y cómo se relacionará?
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Interfaces
                      td.texto-left ¿Cómo interactuará el usuario con el sistema?
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Componentes
                      td.texto-left ¿Qué partes funcionales tendrá el sistema y qué responsabilidad cumplirá cada una?
          p.mb-5 El siguiente caso integra los cuatro elementos frente a un mismo requisito:
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img40.jpg')})` }")
            .bloque-texto-g__texto.p-4
              h5 Ejemplo aplicado
              br
              br
              p Si el sistema debe permitir la consulta de reportes por diferentes usuarios, el diseño requiere datos organizados, interfaces para seleccionar filtros, componentes que procesen la información y una arquitectura que permita generar los reportes con un rendimiento adecuado.
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Trazabilidad entre requisitos, diseño y calidad
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.color___3(data-aos="fade-right").mb-3
            p.mb-0 La trazabilidad relaciona cada requisito del cliente con el diseño, la construcción y la evaluación del #[i software]. Esta correspondencia permite justificar las decisiones, comprobar el cumplimiento de lo solicitado y determinar las consecuencias de los cambios. Asimismo, ayuda a prevenir la incorporación de funciones innecesarias y la omisión de requisitos importantes.
          p.mb-0 La relación puede representarse mediante casos que vinculan el requisito, la decisión de diseño y el criterio de calidad:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img41.png', alt='' style="width: 500px").m-auto
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Registro de clientes
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Requisito:] el sistema debe permitir registrar clientes.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Diseño asociado:] formulario de registro, base de datos y componente de gestión de clientes.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Calidad relacionada:] funcionalidad, usabilidad e integridad de los datos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img42.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Control de acceso
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Requisito:] el sistema debe restringir el acceso según los roles.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Diseño asociado:] módulo de autenticación, permisos de usuario y reglas de autorización.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Calidad relacionada:] seguridad y confiabilidad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img43.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Reportes mensuales
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Requisito:] el sistema debe generar reportes mensuales.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Diseño asociado:] módulo de reportes, consultas a la base de datos y filtros por fecha.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Calidad relacionada:] eficiencia, precisión y utilidad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img44.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Consulta desde diferentes dispositivos
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Requisito:] el sistema debe permitir la consulta de información desde diferentes dispositivos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Diseño asociado:] interfaz adaptable y arquitectura web.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Calidad relacionada:] portabilidad, accesibilidad y usabilidad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img45.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img46.jpg', alt='' style="width: 350px").m-auto
        .col-xl
          .box___style_2.color___2.fit___box_2(data-aos="fade-left").mb-3
            p.mb-0  La relación entre estos elementos y la trazabilidad fortalece la calidad del software. Cuando un requisito carece de una decisión de diseño asociada, puede quedar sin implementar. Asimismo, un elemento que no responde a ningún requisito puede representar una función innecesaria.
          p.mb-0 La trazabilidad puede analizarse en cuatro direcciones, según los elementos y las etapas que se relacionan:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img47.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Trazabilidad hacia adelante").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Relaciona los requisitos con el diseño, la construcción y las pruebas posteriores. Permite establecer cómo será atendida cada necesidad durante el desarrollo.
            .row(titulo="Trazabilidad hacia atrás").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite identificar el requisito que justifica un elemento del diseño o una funcionalidad. Contribuye a evitar decisiones sin una necesidad que las respalde.
            .row(titulo="Trazabilidad horizontal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Relaciona elementos pertenecientes a una misma etapa, como requisitos entre sí o componentes del diseño entre sí.
            .row(titulo="Trazabilidad vertical").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Relaciona elementos de diferentes etapas del desarrollo, como los requisitos, el diseño, el código y las pruebas.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2(data-aos="fade-right").mb-3
            p.mb-0 La trazabilidad prepara las condiciones para evaluar la calidad del producto. Un requisito correctamente relacionado puede convertirse en un criterio de comprobación durante las pruebas.
          p.mb-0 El siguiente caso explica cómo un requisito trazado puede transformarse posteriormente en un criterio de comprobación:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img48.jpg', alt='' style="width: 500px").m-auto
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img49.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo aplicado
          br
          br
          p Si el requisito establece que el sistema debe permitir el registro de clientes, posteriormente se podrá comprobar la existencia de la funcionalidad, la validación de los campos obligatorios, el almacenamiento correcto de los datos y el cumplimiento de las reglas de negocio.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.color___3(data-aos="fade-right").mb-3
            p.mb-0 La trazabilidad también facilita la gestión de cambios. Cuando el cliente modifica, incorpora o elimina un requisito, el equipo puede determinar previamente las consecuencias sobre el tiempo, los costos, la arquitectura, los datos, las interfaces y los componentes.
          p.mb-0 Los siguientes casos permiten identificar los elementos afectados y la magnitud del impacto generado por cada cambio:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img50.png', alt='' style="width: 500px").m-auto
      .bg___color_1
        .px-5
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 3.
            span Casos de elementos afectados e impactos generados
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Cambio solicitado
                  th.ajuste-border-tabla.texto-left Elementos afectados
                  th.texto-left Posible impacto
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Agregar validación de correo electrónico en el registro de clientes.
                  td.ajuste-border-tabla.texto-left Formulario, base de datos, componente de validación, mensajes de error.
                  td.texto-left Ajuste menor en interfaz y lógica de negocio.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Permitir que los clientes tengan varias sedes.
                  td.ajuste-border-tabla.texto-left Modelo de datos, formularios, reportes, reglas de negocio.
                  td.texto-left Ajuste medio porque modifica relaciones de información.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Integrar el sistema con una plataforma externa de pagos.
                  td.ajuste-border-tabla.texto-left Arquitectura, seguridad, componentes, datos, interfaces.
                  td.texto-left Ajuste alto porque implica integración técnica y validaciones adicionales.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t1/img51.jpg', alt='' style="width: 350px").m-auto
            .col-xl
              .box___style_2.color___2.fit___box_2(data-aos="fade-left").mb-3
                p.mb-0 La trazabilidad puede mantenerse mediante documentos de requisitos, matrices, diagramas, historias de usuario, casos de uso, prototipos y registros de cambios. Estos elementos deben conservar una relación clara entre la necesidad del cliente y la solución propuesta.
              p.mb-0 Una matriz básica organiza la información necesaria para controlar la relación entre los requisitos, el diseño y la calidad:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img52.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in").mb-5
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img53.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Código del requisito
                    p.mb-0.text-center Identificador único que permite localizar y diferenciar cada requisito.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img54.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Descripción
                    p.mb-0.text-center Necesidad funcional o no funcional redactada de manera clara.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img55.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Diseño asociado
                    p.mb-0.text-center Pantalla, componente, entidad, regla o módulo que responde al requisito.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img56.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Criterio de calidad
                    p.mb-0.text-center Característica empleada para determinar si el requisito se cumple adecuadamente.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img57.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Estado
                    p.mb-0.text-center Indica si el requisito se encuentra pendiente, diseñado, ajustado o validado.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t1/img58.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Comentarios
                    p.mb-0.text-center Registra información relacionada con cambios, restricciones o decisiones tomadas durante el proyecto.
      .bg___color_1
        .px-5
          p.mb-5 El siguiente ejemplo aplica los campos de la matriz a requisitos funcionales y no funcionales de un sistema:
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 4.
            span Ejemplo de cambios aplicados en la matriz a requisitos funcionales y no funcionales
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Código
                  th.ajuste-border-tabla.texto-left Requisito
                  th.ajuste-border-tabla.texto-left Elemento de diseño
                  th.ajuste-border-tabla.texto-left Criterio de calidad
                  th.texto-left Estado
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold RF-01
                  td.ajuste-border-tabla.texto-left Registrar clientes con datos básicos.
                  td.ajuste-border-tabla.texto-left Formulario de clientes y tabla Cliente.
                  td.ajuste-border-tabla.texto-left Funcionalidad e integridad.
                  td.texto-left Diseñado
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold RF-02
                  td.ajuste-border-tabla.texto-left Consultar clientes por número de documento.
                  td.ajuste-border-tabla.texto-left Buscador de clientes y consulta por documento.
                  td.ajuste-border-tabla.texto-left Eficiencia y usabilidad.
                  td.texto-left Diseñado
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold RNF-01
                  td.ajuste-border-tabla.texto-left Permitir acceso solo a usuarios autorizados.
                  td.ajuste-border-tabla.texto-left Módulo de autenticación y roles.
                  td.ajuste-border-tabla.texto-left Seguridad.
                  td.texto-left Diseñado
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold RNF-02
                  td.ajuste-border-tabla.texto-left Facilitar el uso desde dispositivos móviles.
                  td.ajuste-border-tabla.texto-left Interfaz adaptable.
                  td.ajuste-border-tabla.texto-left Portabilidad y usabilidad.
                  td.texto-left Pendiente de ajuste
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_2(data-aos="fade-right").mb-3
                p.mb-0 La trazabilidad permite que el diseño sea justificable, comprobable y coherente con las necesidades del cliente. Además, facilita la comunicación entre los participantes del proyecto al establecer cómo cada requisito se transforma en una parte concreta del sistema.
              p.mb-0 Cada requisito debe conservar una relación clara con los elementos que permiten su cumplimiento. Acceda al pódcast y descubra cómo la trazabilidad facilita el control de cambios y fortalece la calidad del #[i software].
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t1/img59.jpg', alt='' style="width: 500px").m-auto
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t1/img60.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Del requisito a la solución: la ruta de la trazabilidad"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t1/img61.png" style="max-width: 510px").m-auto

</template>

<script>
import audio1 from '@/assets/curso/temas/t1/audios/Podcast_Del_requisito_solucion_ruta_trazabilidad.mp3'
export default {
  name: 'Tema1',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
