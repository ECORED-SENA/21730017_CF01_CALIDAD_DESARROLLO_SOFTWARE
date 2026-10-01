<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Modelos de calidad del #[i software]
      p.mb-5 Los modelos de calidad proporcionan referentes para organizar y valorar las condiciones que debe cumplir una solución informática. Su aplicación permite convertir expectativas generales en criterios concretos y orientar decisiones acordes con el cliente, el contexto y los riesgos del proyecto.
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Concepto y utilidad de los modelos de calidad
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2(data-aos="fade-right").mb-3
            p.mb-0 Un modelo de calidad es una estructura conceptual que organiza las características, los factores y los criterios utilizados para valorar un producto o proceso de #[i software]. Su utilidad consiste en determinar qué tan adecuadamente responde la solución a las necesidades del cliente, los usuarios y la organización.
          p.mb-0 Los conceptos siguientes permiten comprender la estructura y aplicación de un modelo de calidad:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img1.jpg', alt='' style="width: 500px").m-auto
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t4/img2.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in").mb-5
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img3.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Modelo de calidad
                    p.mb-0.text-center Organiza los factores y las características empleados para valorar la calidad del #[i software].
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img4.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Factor de calidad
                    p.mb-0.text-center Representa una característica general que se desea evaluar, como usabilidad, seguridad o confiabilidad.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img5.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Criterio de calidad
                    p.mb-0.text-center Define condiciones específicas que permiten determinar el cumplimiento de un factor.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img6.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Necesidad del cliente
                    p.mb-0.text-center Establece el contexto que orienta la selección de los factores relevantes.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img7.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Producto de #[i software]
                    p.mb-0.text-center Corresponde al sistema, la aplicación o la solución que será valorada mediante criterios de calidad.
      .box___style_3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 Los modelos permiten superar valoraciones subjetivas y considerar aspectos adicionales al funcionamiento, como mantenimiento, adaptación, seguridad, rendimiento y satisfacción del usuario.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img8.png', alt='' style="width: 500px").m-auto
      p.mb-5 El siguiente caso relaciona las necesidades de una organización con los factores de calidad y las decisiones de diseño correspondientes:
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img9.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo aplicado
          br
          br
          p Una organización requiere un sistema para administrar solicitudes internas. La solución debe reducir errores, proteger la información, generar reportes oportunos, facilitar cambios futuros y permitir el acceso desde diferentes dispositivos. Un modelo de calidad ayuda a organizar estas condiciones.
      p.mb-5 A continuación, se relaciona cada necesidad de la organización con los factores de calidad y las decisiones de diseño correspondientes:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Reducir errores
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Necesidad:] disminuir errores en el registro de las solicitudes.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Factores:] usabilidad e integridad.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Diseño:] formularios comprensibles, validaciones y mensajes de orientación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Proteger datos
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Necesidad:] proteger la información registrada.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Factores:] seguridad y confiabilidad.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Diseño:] autenticación, roles, control de acceso y protección de datos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Generar reportes
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Necesidad:] obtener reportes oportunos sobre las solicitudes.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Factores:] eficiencia y funcionalidad.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Diseño:] consultas optimizadas y estructura adecuada de datos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Incorporar cambios
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Necesidad:] facilitar modificaciones futuras en el sistema.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Factores:] mantenibilidad y flexibilidad.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Diseño:] estructura modular y documentación técnica.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Utilizar varios dispositivos
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Necesidad:] acceder al sistema desde diferentes dispositivos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Factores:] portabilidad y compatibilidad.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Diseño:] interfaz adaptable y validación en diferentes entornos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img14.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.color___1(data-aos="fade-right").mb-3
            p.mb-0 El caso evidencia cómo las necesidades del cliente se convierten en factores de calidad y decisiones concretas de diseño.
          p.mb-0 Los modelos también facilitan la comunicación entre el cliente y el equipo técnico, debido a que convierten las expectativas en factores de calidad y decisiones concretas de diseño.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img15.png', alt='' style="width: 500px").m-auto
      p.mb-5 Los factores prioritarios varían según el tipo de sistema y sus condiciones de utilización:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t4/img16.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in").mb-5
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img17.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Sistema financiero
                    p.mb-0.text-center Seguridad, confiabilidad, trazabilidad y eficiencia.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img18.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Sistema académico
                    p.mb-0.text-center Usabilidad, integridad de los datos, disponibilidad y generación de reportes.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img19.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Tienda virtual
                    p.mb-0.text-center Seguridad, rendimiento, disponibilidad y facilidad de compra.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img20.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Sistema de inventario
                    p.mb-0.text-center Precisión, confiabilidad, mantenibilidad y eficiencia.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img21.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Aplicación móvil
                    p.mb-0.text-center Usabilidad, portabilidad, rendimiento y compatibilidad.
      p.mb-0 Los modelos ayudan a identificar diferencias entre las necesidades del cliente y las condiciones del producto. Estas brechas pueden relacionarse con interfaces confusas, baja seguridad, mantenimiento complejo o rendimiento deficiente.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Modelo de calidad #[i McCall]
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img22.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El modelo McCall organiza la calidad del #[i software] mediante factores relacionados con la operación, la revisión y la transición del producto. Esta estructura permite valorar su funcionamiento, mantenimiento, modificación y adaptación durante su vida útil.
      p.mb-5 Las tres perspectivas reúnen factores que responden a diferentes condiciones de la vida útil del producto:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Operación del producto")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img23.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Operación del producto
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Enfoque:] funcionamiento del sistema durante su utilización.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Pregunta:] ¿el producto cumple adecuadamente sus funciones en condiciones reales?
        .py-3.py-md-4(titulo="Revisión del producto")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img24.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Revisión del producto
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Enfoque:] facilidad para corregir, mantener o mejorar el sistema.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Pregunta:] ¿el producto puede modificarse y evaluarse con facilidad?
        .py-3.py-md-4(titulo="Transición del producto")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img25.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Transición del producto
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Enfoque:] capacidad para adaptarse, trasladarse o integrarse.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Pregunta:] ¿el producto puede funcionar en otros entornos o relacionarse con otros sistemas?
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img21.png" style="max-width: 60px").m-auto
        .col
          h3 Operación del producto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t4/img26.jpg', alt='' style="width: 350px").m-auto
        .col-xl
          .box___style_2.color___2.fit___box_2(data-aos="fade-left").mb-3
            p.mb-0  Esta perspectiva comprende las características que intervienen durante la utilización del sistema y que influyen directamente en su aceptación.
          p.mb-0 Los factores de operación permiten valorar el cumplimiento, la estabilidad, el desempeño, la protección y la facilidad de uso. A continuación, se presentan los factores con su descripción y ejemplo.
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 18.
                span Factores de operación
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Factor de operación
                      th.ajuste-border-tabla.texto-left Descripción
                      th.texto-left Ejemplo
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Corrección
                      td.ajuste-border-tabla.texto-left Capacidad del sistema para cumplir las funciones requeridas.
                      td.texto-left El sistema calcula correctamente el total de una factura.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Confiabilidad
                      td.ajuste-border-tabla.texto-left Capacidad para funcionar sin fallas frecuentes.
                      td.texto-left El sistema guarda datos sin pérdidas o errores inesperados.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Eficiencia
                      td.ajuste-border-tabla.texto-left Uso adecuado de tiempo y recursos.
                      td.texto-left Las consultas responden en tiempos aceptables.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Integridad
                      td.ajuste-border-tabla.texto-left Protección de datos frente a accesos o modificaciones no autorizadas.
                      td.texto-left Solo usuarios autorizados pueden editar información sensible.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Facilidad de uso
                      td.ajuste-border-tabla.texto-left Posibilidad de que los usuarios utilicen el sistema de manera comprensible.
                      td.texto-left Las pantallas son claras y los mensajes orientan la acción.
          p.mb-5 Desde la perspectiva del cliente, estos factores suelen tener alto impacto porque afectan directamente la aceptación del sistema. Un producto que cumple funciones, pero es lento, inseguro o difícil de usar, puede generar insatisfacción aunque técnicamente esté construido.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img21.png" style="max-width: 60px").m-auto
            .col
              h3 Revisión del producto
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_2(data-aos="fade-right").mb-3
                p.mb-0 Esta perspectiva se relaciona con la capacidad del #[i software] para ser evaluado, corregido y modificado durante su vida útil.
              p.mb-0 Los factores de revisión determinan la facilidad para mantener, adaptar y comprobar el funcionamiento del producto:
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t4/img27.jpg', alt='' style="width: 500px").m-auto
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mantenibilidad
                  p Facilidad para corregir errores o realizar mejoras.
                  p.mb-0 #[b Ejemplo:] una regla de cálculo puede ajustarse sin afectar todo el sistema.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img28.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Flexibilidad
                  p Capacidad para adaptarse a cambios en los requisitos o procesos.
                  p.mb-0 #[b Ejemplo:] el sistema permite incorporar un nuevo tipo de usuario.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img29.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Facilidad de prueba
                  p Posibilidad de comprobar el funcionamiento de módulos o componentes.
                  p.mb-0 #[b Ejemplo:] cada módulo puede evaluarse de manera independiente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img30.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Un sistema modular, documentado y organizado facilita el mantenimiento y las pruebas. Una solución con múltiples dependencias puede dificultar las modificaciones, aunque funcione correctamente al momento de su entrega.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img21.png" style="max-width: 60px").m-auto
        .col
          h3 Transición del producto
      .box___style_3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 En el modelo McCall, esta perspectiva reúne la portabilidad, la reusabilidad y la interoperabilidad. Estos factores permiten valorar si el #[i software] puede trasladarse a otros entornos, aprovechar sus componentes e integrarse con otros sistemas.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img31.png', alt='' style="width: 500px").m-auto
      p.mb-5 Los factores de transición permiten proyectar la evolución del producto después de su entrega:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img32.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Portabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Valora la capacidad del producto para funcionar en diferentes entornos tecnológicos.
            .row(titulo="Reusabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Valora la posibilidad de utilizar sus componentes en otros módulos o proyectos.
            .row(titulo="Interoperabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Valora la capacidad del producto para comunicarse con otros sistemas.
      p.mb-5 Dentro del modelo McCall, estos factores permiten analizar las posibilidades de evolución del producto después de su implementación.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img21.png" style="max-width: 60px").m-auto
        .col
          h3 Aplicación del modelo McCall
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.color___1.fit___box_1(data-aos="fade-right").mb-3
            p.mb-0 El modelo McCall permite relacionar las necesidades del cliente con factores de calidad y decisiones de diseño acordes con el contexto.
          p.mb-0 El siguiente caso aplica los factores del modelo McCall a las necesidades de una organización:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img33.png', alt='' style="width: 500px").m-auto
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img34.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo aplicado
          br
          br
          p Una empresa requiere un sistema para gestionar su inventario. La solución debe controlar las existencias, restringir el acceso, facilitar las consultas, incorporar nuevos reportes y funcionar desde diferentes sedes.
      p.mb-5 Las siguientes diapositivas relacionan cada necesidad con los factores de calidad y las decisiones de diseño correspondientes:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Control de existencias
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Necesidad:] evitar errores en las existencias.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Factores:] corrección y confiabilidad.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Diseño:] validaciones, reglas de inventario y control de movimientos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img35.png', alt='' style="max-width: 500px").m-auto 
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Acceso autorizado
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Necesidad:] restringir el acceso al personal autorizado.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Factores:] integridad.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Diseño:] roles, permisos y autenticación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img36.png', alt='' style="max-width: 500px").m-auto 
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Consultas rápidas
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Necesidad:] consultar los productos con rapidez.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Factores:] eficiencia.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Diseño:] consultas optimizadas y estructura adecuada de datos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img37.png', alt='' style="max-width: 500px").m-auto 
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Nuevos reportes
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Necesidad:] incorporar reportes posteriormente.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Factores:] mantenibilidad y flexibilidad.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Diseño:] estructura modular y documentación de los componentes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img38.png', alt='' style="max-width: 500px").m-auto 
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Varias sedes
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Necesidad:] acceder al sistema desde diferentes sedes.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Factores:] portabilidad e interoperabilidad.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Diseño:] arquitectura web y mecanismos de integración.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img39.png', alt='' style="max-width: 500px").m-auto 
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img40.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El caso evidencia cómo el modelo McCall permite interpretar las necesidades del cliente y convertirlas en factores de calidad y decisiones de diseño.
      p.mb-0 El modelo integra condiciones de operación, revisión y transición. Su aplicación orienta la construcción de productos funcionales, confiables, mantenibles y adaptables.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Modelo de calidad #[i Ad hoc]
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t4/img41.jpg', alt='' style="width: 350px").m-auto
        .col-xl
          .box___style_2.color___2.fit___box_3(data-aos="fade-left").mb-3
            p.mb-0 El modelo #[i ad hoc] define criterios de calidad adaptados a las necesidades de un proyecto, cliente u organización. Aunque no parte de una estructura estandarizada, requiere seleccionar, justificar y documentar condiciones pertinentes para cada contexto.
          p.mb-0 Las siguientes características permiten reconocer el alcance y las precauciones de este enfoque:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Origen de los criterios
                  p.mb-0 Se establecen según las necesidades específicas del proyecto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img42.png', alt='' style="max-width: 500px").m-auto 
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Nivel de formalidad
                  p.mb-0 Puede ser menor que el de los modelos estandarizados, pero requiere documentación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img43.png', alt='' style="max-width: 500px").m-auto 
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Flexibilidad
                  p.mb-0 Permite adaptar los criterios al cliente, al producto y al contexto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img44.png', alt='' style="max-width: 500px").m-auto 
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Riesgo principal
                  p.mb-0 Puede volverse subjetivo si no se establecen condiciones claras.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img45.png', alt='' style="max-width: 500px").m-auto 
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Uso recomendado
                  p.mb-0 Resulta apropiado para proyectos pequeños, contextos particulares o necesidades no cubiertas completamente por un modelo formal.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img46.png', alt='' style="max-width: 500px").m-auto 
      p.mb-5 El siguiente caso concreta una situación en la que puede aplicarse este enfoque:
      .box___style_3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            h5 Ejemplo aplicado
            p.mb-0 Una empresa pequeña necesita evaluar un sistema interno y no utiliza un modelo formal de calidad. En este caso, puede establecer criterios relacionados con la facilidad de uso, la rapidez de las consultas, la protección básica de los datos, la generación de reportes y la posibilidad de realizar ajustes menores.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img47.png', alt='' style="width: 500px").m-auto
      p.mb-5 El enfoque también permite establecer criterios específicos para las necesidades de un producto determinado. Los siguientes criterios ad hoc se aplican a un sistema de reservas:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 19.
                span Ejemplo de criterios #[i Ad hoc] para un sistema de reservas
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Necesidad específica
                      th.ajuste-border-tabla.texto-left Criterio #[i Ad hoc] definido
                      th.texto-left Forma de observarlo
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Los usuarios deben reservar sin asistencia.
                      td.ajuste-border-tabla.texto-left Facilidad de reserva.
                      td.texto-left El usuario completa la reserva en pocos pasos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold El administrador debe ver disponibilidad rápidamente.
                      td.ajuste-border-tabla.texto-left Consulta clara de agenda.
                      td.texto-left El calendario muestra horarios ocupados y disponibles.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Se deben evitar reservas duplicadas.
                      td.ajuste-border-tabla.texto-left Control de conflictos.
                      td.texto-left El sistema bloquea horarios ya ocupados.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold El cliente requiere confirmación inmediata.
                      td.ajuste-border-tabla.texto-left Notificación oportuna.
                      td.texto-left El sistema genera mensaje de confirmación.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold El negocio cambia horarios con frecuencia.
                      td.ajuste-border-tabla.texto-left Facilidad de configuración.
                      td.texto-left El administrador modifica horarios sin intervención técnica.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_2(data-aos="fade-right").mb-3
                p.mb-0 El enfoque #[i ad hoc] permite adaptar la calidad al valor esperado por el cliente. Sin embargo, la ausencia de documentación puede generar evaluaciones incompletas, subjetivas o inconsistentes.
              p.mb-0 La aplicación rigurosa del enfoque requiere una secuencia que sustente la selección de los criterios:
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t4/img48.jpg', alt='' style="width: 500px").m-auto
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Analizar el contexto
                    p.mb-0 Se identifican el tipo de #[i software], los usuarios, los procesos y las restricciones.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img49.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img50.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Reconocer las expectativas
                    p.mb-0 Se determinan las condiciones necesarias para la aceptación del producto.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Seleccionar los factores
                    p.mb-0 Se eligen las características de calidad pertinentes para el proyecto.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img51.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img52.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Establecer los criterios
                    p.mb-0 Los factores se convierten en condiciones concretas y comprobables.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Documentar las decisiones
                    p.mb-0 Se registran las razones que justifican la selección de los criterios.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img53.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img54.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Revisar coherencia
                    p.mb-0 Se comprueba si los criterios corresponden a los requisitos y las expectativas del cliente.
      p.mb-0 El enfoque #[i ad hoc] puede incorporar factores de modelos formales y utilizarse en proyectos exploratorios o productos iniciales, siempre que se definan criterios mínimos de utilidad y seguridad. Su flexibilidad no debe conducir a la improvisación, por lo que debe sustentarse en los requisitos del cliente, los riesgos, los usuarios y las condiciones técnicas del proyecto.
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Comparación de modelos según las necesidades del cliente
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.color___1(data-aos="fade-right").mb-3
            p.mb-0 La selección de un modelo de calidad depende de las necesidades del cliente, las características del proyecto, los riesgos y el nivel de madurez organizacional. También pueden combinarse diferentes referentes cuando el contexto lo requiera.
          p.mb-0 Los siguientes aspectos permiten comparar el modelo McCall y el enfoque #[i ad hoc]:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img55.png', alt='' style="width: 500px").m-auto
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Estructura
                    p #[b McCall:] organiza la calidad mediante factores de operación, revisión y transición.
                    p.mb-0 #[b #[i Ad hoc]:] define los criterios según las necesidades específicas del proyecto.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img56.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img57.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Formalidad
                    p #[b McCall:] cuenta con una estructura conceptual definida.
                    p.mb-0 #[b #[i Ad hoc]:] depende de la documentación y del rigor aplicado.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Aplicación
                    p #[b McCall:] permite realizar un análisis integral del producto.
                    p.mb-0 #[b #[i Ad hoc]:] atiende contextos o necesidades particulares.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img58.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img59.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Ventaja
                    p #[b McCall:] proporciona una perspectiva completa y organizada.
                    p.mb-0 #[b #[i Ad hoc]:] se adapta con facilidad al cliente y al contexto.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Riesgo
                    p #[b McCall:] puede requerir mayor esfuerzo de análisis.
                    p.mb-0 #[b #[i Ad hoc]:] puede generar valoraciones subjetivas si carece de criterios claros.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img60.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img61.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Uso recomendado
                    p #[b McCall:] proyectos medianos o grandes que requieren una evaluación estructurada.
                    p.mb-0 #[b #[i Ad hoc]:] proyectos pequeños, prototipos o sistemas con necesidades particulares.
      p.mb-5 Para seleccionar entre un modelo estructurado y un enfoque #[i Ad hoc], conviene analizar primero qué espera el cliente del producto. Si el cliente requiere confiabilidad, mantenimiento futuro, integración y evolución, un modelo como McCall puede ofrecer una guía más completa. Si el cliente necesita una solución puntual, con criterios muy específicos y alcance reducido, un enfoque #[i Ad hoc] puede ser suficiente, siempre que esté bien documentado.
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img62.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La finalidad y las condiciones del producto orientan la elección del modelo más conveniente, como se presenta en la siguiente tabla:
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 20.
                span Modelo más conveniente
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Necesidad del cliente
                      th.ajuste-border-tabla.texto-left Modelo más conveniente
                      th.texto-left Justificación
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Evaluar integralmente un sistema que será usado durante varios años.
                      td.ajuste-border-tabla.texto-left McCall.
                      td.texto-left Permite analizar operación, revisión y transición.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Definir criterios mínimos para un prototipo funcional.
                      td.ajuste-border-tabla.texto-left #[i Ad hoc.]
                      td.texto-left Permite adaptar criterios al alcance reducido del proyecto.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Analizar facilidad de mantenimiento y evolución.
                      td.ajuste-border-tabla.texto-left McCall.
                      td.texto-left Incluye factores asociados a revisión del producto.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Evaluar una necesidad muy particular de una organización pequeña.
                      td.ajuste-border-tabla.texto-left #[i Ad hoc.]
                      td.texto-left Permite definir criterios específicos del contexto.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Seleccionar factores de calidad para un sistema crítico.
                      td.ajuste-border-tabla.texto-left McCall combinado con criterios específicos.
                      td.texto-left Aporta estructura y permite ajustar prioridades.
          p.mb-5 Los modelos pueden combinarse para convertir factores generales en criterios ajustados al contexto. El siguiente caso corresponde a un sistema académico:
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 21.
                span Ejemplo de combinación para un sistema académico:
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Factor general tomado de McCall
                      th.texto-left Criterio específico #[i Ad hoc]
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Facilidad de uso.
                      td.texto-left Los instructores deben registrar notas sin requerir asistencia técnica.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Integridad.
                      td.texto-left El sistema no debe permitir notas fuera del rango definido.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Confiabilidad.
                      td.texto-left Los registros guardados deben mantenerse disponibles para consulta posterior.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mantenibilidad.
                      td.texto-left El administrador debe poder actualizar periodos académicos sin modificar código.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Portabilidad.
                      td.texto-left El sistema debe funcionar en navegadores usados por la institución.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t4/img63.jpg', alt='' style="width: 350px").m-auto
            .col-xl
              .box___style_2.color___2.fit___box_4(data-aos="fade-left").mb-3
                p.mb-0 Esta combinación conserva una estructura reconocible y la adapta a las condiciones del cliente.
              p.mb-0 El nivel de madurez organizacional determina la formalidad requerida para aplicar los modelos de calidad:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Procesos poco documentados")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img64.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Procesos poco documentados
              p.mb-0 Se establecen criterios #[i ad hoc] básicos, claros y acompañados de documentación mínima.
        .py-3.py-md-4(titulo="Procesos en formalización")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img65.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Procesos en formalización
              p.mb-0 Se combinan criterios específicos con factores procedentes de modelos reconocidos.
        .py-3.py-md-4(titulo="Procesos definidos y repetibles")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img66.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Procesos definidos y repetibles
              p.mb-0 Se aplican modelos estructurados y estándares de calidad.
        .py-3.py-md-4(titulo="Procesos orientados a la mejora")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img67.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Procesos orientados a la mejora
              p.mb-0 Se integran modelos, estándares y mecanismos permanentes de medición.
      p.mb-5 Otro elemento importante es el riesgo. Mientras mayor sea el impacto de una falla, mayor debe ser el nivel de formalidad en la selección del modelo de calidad. El nivel de riesgo también determina la rigurosidad necesaria para evaluar la calidad:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img68.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Riesgo bajo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los criterios #[i ad hoc] pueden ser suficientes cuando se encuentran documentados.
            .row(titulo="Riesgo medio").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Conviene combinar un modelo estructurado con criterios específicos.
            .row(titulo="Riesgo alto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se requiere mayor formalidad, trazabilidad y aplicación de estándares.
            .row(titulo="Riesgo crítico").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Deben aplicarse modelos, normas, controles y evaluaciones rigurosas.
      p.mb-0 McCall proporciona una estructura amplia para evaluar la calidad, mientras que el enfoque ad hoc permite adaptar los criterios al contexto. Su selección o combinación debe responder a las necesidades del cliente, la madurez organizacional y el nivel de riesgo.

</template>

<script>
export default {
  name: 'Tema4',
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
