<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-0 Este componente proporciona los conocimientos esenciales para garantizar el manejo seguro y eficiente de la carga en la cadena logística. 
    p.mb-0 Abarca desde el aseguramiento de la mercancía, incluyendo conceptos, métodos y normativas vigentes, hasta el uso adecuado de paletas, considerando sus tipos, características y aplicaciones prácticas.
    p.mb-5 Estos elementos son fundamentales para prevenir daños, optimizar el espacio y cumplir con estándares de transporte.
    
    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/introduccion/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Además, se profundiza en técnicas de embalaje, analizando distintos materiales, diseños y métodos de protección, así como en el manejo de contenedores, su clasificación, normativas y usos específicos. 
        p.mb-0 El objetivo es desarrollar competencias para seleccionar y aplicar las mejores prácticas en almacenamiento y distribución, asegurando la integridad de los productos y la eficiencia operativa en entornos logísticos globalizados.
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/4d_qM71avJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
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
