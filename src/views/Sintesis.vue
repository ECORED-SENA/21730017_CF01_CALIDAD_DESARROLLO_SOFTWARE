<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p La síntesis integra los conceptos principales desarrollados en el componente formativo: 
      .row.justify-content-center
        .col-lg-12.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual presenta una visión integrada del diseño y la calidad del software, organizada en seis ejes principales. En primer lugar, aborda el diseño de software a partir de los requisitos y expectativas del cliente, considerando la arquitectura, los datos, las interfaces, los componentes y la trazabilidad. También incorpora los modelos de desarrollo de software, desde el ciclo de vida hasta enfoques como cascada, espiral, incremental, interactivo, ágil y codificación-corrección. Asimismo, relaciona la calidad del software con el cumplimiento de requisitos, la calidad del producto y del proceso, y los factores de calidad desde la perspectiva del cliente. El mapa integra además los modelos de calidad McCall y Ad-hoc, los estándares ISO 9001, SPICE y CMM, y finaliza con los criterios para seleccionar e implantar procesos de calidad de acuerdo con la información organizacional y el contexto del proyecto.")
        .col-auto
          a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
