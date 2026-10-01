<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          p El desarrollo de #[i software] implica mucho más que escribir código o construir funcionalidades aisladas. Antes de iniciar la construcción de un sistema de información, es necesario comprender las necesidades del cliente, interpretar sus requisitos y transformar esa información en un diseño técnico claro, organizado y coherente. El diseño de #[i software] permite definir la arquitectura, los datos, las interfaces, los componentes y la manera en que cada parte del sistema responderá a las condiciones establecidas. Por esta razón, un diseño bien estructurado constituye la base para desarrollar soluciones funcionales, comprensibles, mantenibles y acordes con su contexto de uso.
          p.mb-0 La calidad del #[i software] se relaciona directamente con las decisiones adoptadas desde las primeras fases del proyecto. Un producto puede cumplir sus funciones básicas y, aun así, presentar dificultades de rendimiento, seguridad, usabilidad, mantenimiento o adaptación. Por ello, la calidad no debe asumirse únicamente como una revisión final, sino como un criterio permanente que acompaña la interpretación de requisitos, el diseño, la selección del modelo de desarrollo y la organización de los procesos. Este enfoque contribuye a prevenir errores, reducir reprocesos y favorecer el cumplimiento de las expectativas del cliente.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='' style="width: 250px").m-auto
      .box___style_1(data-aos="zoom-in").mb-3
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/intro/img1.jpg', alt='' style="width: 500px").m-auto
          .col-xl.fit___box_container
            p.mb-0 Este componente aborda los fundamentos necesarios para relacionar el diseño de #[i software] con los requisitos del cliente y los criterios de calidad aplicables al desarrollo de sistemas de información. Se estudian los modelos de desarrollo en cascada, espiral, incremental, iterativo, ágil y codificación-corrección, con el propósito de reconocer la manera en que cada enfoque organiza el ciclo de vida del producto. Asimismo, se analizan el modelo de calidad de McCall, los criterios ad hoc, los factores de calidad y referentes como ISO 9001, la familia ISO/IEC 330xx y CMM.
      p.mb-0 El contenido integra explicaciones conceptuales, comparaciones, ejemplos aplicados y un caso práctico que permite seleccionar modelos, referentes y buenas prácticas de acuerdo con la información organizacional y las necesidades del cliente. De esta manera, se fortalece la capacidad para interpretar el diseño de #[i software], diferenciar modelos de desarrollo y de calidad, reconocer normas aplicables y tomar decisiones iniciales que contribuyan a la construcción de productos de #[i software] funcionales, confiables y pertinentes para la organización.
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
