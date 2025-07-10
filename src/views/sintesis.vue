<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-5.col-lg-1.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
          img(src='@/assets/curso/sintesis/img_1.png', class="img-fluid").height-100  
      .col-12.col-lg-11
        p.mb-0 A continuación, se describe una visión general sobre los aspectos clave de la preservación y embalaje de la carga. Comienza con todo lo relacionado al aseguramiento de la carga. Además, se explora la todo lo referente a los tipos y métodos de uso de las paletas y los embalajes para la protección de la carga.
        p.mb-0 Finalmente, se abordan los contenedores, los tipos existentes, sus características, la normativa que los rige y los métodos de uso.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="A continuación, se describe una visión general sobre los aspectos clave de la preservación y embalaje de la carga. Comienza con todo lo relacionado al aseguramiento de la carga. Además, se explora la todo lo referente a los tipos y métodos de uso de las paletas y los embalajes para la protección de la carga. Finalmente, se abordan los contenedores, los tipos existentes, sus características, la normativa que los rige y los métodos de uso.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
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
