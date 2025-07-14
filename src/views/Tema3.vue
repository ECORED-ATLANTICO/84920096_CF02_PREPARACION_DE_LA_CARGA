<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Embalaje
    .bloque-texto-g.bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-0
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_3/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El embalaje sirve para proteger la mercancía ante posibles daños que se ocasionan durante la manipulación, el almacenamiento o el transporte. 
        p.mb-0 La función principal del embalaje es otorgar a la mercancía o a la unidad de carga una cobertura que permita su protección y, así mismo, poder identificarla y manejarla fácilmente. 
        p.mb-0 Un embalaje adecuado influye sobre la calidad y el precio del transporte. Por ejemplo, no debe ser muy voluminoso o pesado, porque tendrá efecto directo sobre los costos del transporte.

    separador

    #t_3_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.1	Concepto
    .mb-3

    .bloque-texto-t.justify-content-center.align-items-center.mb-5
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_3/img_2.png')
      .bloque-texto-t__texto.color-adicional-gradient.col-10.mb-0
        p.mb-0 Según las normas ICONTEC (Instituto Colombiano de Normas Técnicas y Certificación), específicamente en la NTC 1486 (Embalajes y envases para la unidad de carga paletizada), el embalaje se define como: el conjunto de materiales, recipientes o envolturas que protegen, contienen, agrupan y facilitan el manejo, transporte y almacenamiento de productos, garantizando su integridad durante la cadena de suministro:
        
    .bg_img_6.mb-3
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/temas/tema_3/img_3.png', class="img-fluid")
        .col-12.col-lg-8
          .custom-slider.p-5.p-sm-3
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta.color-adicional-2
                .tarjeta--1
                .tarjeta--slider__title.mb-3 Protección 
                .tarjeta--slider__content Evita daños por impactos, humedad, vibraciones o contaminación durante el transporte.
              .tarjeta.color-adicional-2
                .tarjeta--2
                .tarjeta--slider__title.mb-3  Unidad de carga
                .tarjeta--slider__content Permite agrupar productos en lotes por ejemplo cajas sobre una paleta, para optimizar el almacenamiento y transporte.
              .tarjeta.color-adicional-2
                .tarjeta--3
                .tarjeta--slider__title.mb-3  Compatibilidad con sistemas logísticos
                .tarjeta--slider__content Debe adaptarse a <I>palets</I>, contenedores, bandas transportadoras y equipos de manipulación (montacargas, transpaletas, entre otros).
              .tarjeta.color-adicional-2
                .tarjeta--4
                .tarjeta--slider__title.mb-3  Información y trazabilidad
                .tarjeta--slider__content Incluye etiquetas, códigos de barras o RFID para identificación y rastreo.
    
    .bg_img_5.mb-3

      separador

      #t_3_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 3.2	Tipos
      .mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/temas/tema_3/img_8.png', class="img-fluid")
        .col-12.col-lg-8
          p.mb-3 Los embalajes se clasifican de acuerdo con su función en la cadena de suministro. En la logística y preparación de la carga, los embalajes no solo cumplen una función física de resguardo, sino que forman parte estratégica de la cadena de suministro. 
          p.mb-3 Según el nivel de protección que ofrecen, los embalajes se clasifican en tres tipos:
          TabsA.mb-5.tarjeta-tabs-a.color-adicional-4
            .tarjeta.color-adicional-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Embalaje primario")
              .row.justify-content-center.align-items-center.mb-0
                .col-8.col-sm-8.col-md-8.col-lg-8.col-xl-8.col-xxl-8.mb-4.mb-xl-0
                  p.mb-0 Es el embalaje que está en contacto directo con el producto, protegiéndolo y manteniéndolo en condiciones óptimas.
                  p.mb-0 Ejemplo: el <I>brick</I> de cartón que contiene la leche o el saco que envuelve el hormigón.
                .col-2.col-sm-2.col-md-2.col-lg-2.col-xl-2.col-xxl-2.mb-4.mb-xl-0
                  figure
                    img(src='@/assets/curso/temas/tema_3/img_9.svg', class="img-fluid")(data-aos="fade-up")
            .tarjeta.color-adicional-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Embalaje secundario")
              .row.justify-content-center.align-items-center.mb-0
                .col-7.col-sm-7.col-md-7.col-lg-7.col-xl-7.col-xxl-7.mb-4.mb-xl-0
                  p.mb-0 Agrupa varios embalajes primarios en una sola unidad de carga, facilitando su manipulación y almacenamiento.
                  p.mb-0 Ejemplo: una caja de cartón con 12 latas o el <I>film</I> plástico que agrupa botellas de agua.
                .col-3.col-sm-3.col-md-3.col-lg-3.col-xl-3.col-xxl-3.mb-4.mb-xl-0
                  figure
                    img(src='@/assets/curso/temas/tema_3/img_10.svg', class="img-fluid")(data-aos="fade-up")
            .tarjeta.color-adicional-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Embalaje terciario")
              .row.justify-content-center.align-items-center.mb-0
                .col-7.col-sm-7.col-md-7.col-lg-7.col-xl-7.col-xxl-7.mb-4.mb-xl-0
                  p.mb-0 Es la capa externa que agrupa unidades secundarias para facilitar el transporte logístico a gran escala.
                  p.mb-0 Ejemplo: cajas grandes que contienen varios pedidos individuales para su distribución.
                .col-3.col-sm-3.col-md-3.col-lg-3.col-xl-3.col-xxl-3.mb-4.mb-xl-0
                  figure
                    img(src='@/assets/curso/temas/tema_3/img_11.svg', class="img-fluid")(data-aos="fade-up")

      ///.tarjeta_img_2

      .row.d-flex.align-items-stretch.justify-content-center.mb-3
        .col-12.col-lg-8.order-2.order-lg-1.mb-3
          AcordionA(tipo="b"  clase-tarjeta="tarjeta tarjeta--color-primario-5")
            div(titulo="Cartón corrugado")
              p.ps-5.mb-0 El cartón corrugado es uno de los materiales más utilizados en embalaje gracias a su bajo costo, ligereza y resistencia estructural. Su principal formato es la caja de cartón, ideal para proteger, almacenar y transportar productos de distintos tamaños en prácticamente cualquier sector económico. Además, es reciclable y adaptable a diferentes necesidades logísticas.
            div(titulo="Madera")
              p.ps-5.mb-0 El embalaje de madera es ideal para proteger mercancías pesadas, voluminosas o de formas irregulares. Su rigidez y capacidad de amortiguación lo convierten en la opción preferida para exportaciones o productos frágiles que requieren de estructuras robustas. También permite la fabricación a medida, garantizando un ajuste perfecto al contenido.
            div(titulo="Plástico")
              p.ps-5.mb-0 Los embalajes plásticos se destacan por ser ligeros, impermeables y resistentes a impactos. Su uso es común en sectores como el alimentario, farmacéutico e industrial, ya que ofrecen buena protección frente a factores ambientales. Al reducir el peso del empaque, también contribuyen a disminuir los costos logísticos.
            div(titulo="Metal")
              p.ps-5.mb-0 El metal es utilizado en embalajes cuando se requiere máxima durabilidad, hermeticidad y seguridad, como en el caso de productos químicos, materiales peligrosos o maquinaria de alto valor. Aunque su costo es elevado, su resistencia a condiciones extremas y reutilización lo hacen ideal para industrias pesadas y exportaciones críticas.
        .col-9.col-lg-4.d-flex.order-1.order-lg-2.mb-3(data-aos="flip-left")
          figure.w-100.h-100.d-flex.flex-column
            img(src='@/assets/curso/temas/tema_3/img_14.png', class="img-fluid w-100 h-100")
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-3
        .tarjeta.color-acento-contenido-5.p-4.rounded-0.mb-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.col-lg-1.mb-2.mb-lg-0
              img(src="@/assets/curso/temas/tema_3/img_15.png", class="img-fluid")
            .col-12.col-lg-10
              p.mb-0 La elección del embalaje más adecuado busca minimizar costos directos (compra de material y gestión de desecho) e indirectos procesos de <I>packing</I>, manipulación, almacenamiento y pérdidas por deterioro.
      
      .col-12.col-lg-8.mb-3
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          |    Factores clave para selección del tipo de embalaje
        figure
          img(src='@/assets/curso/temas/tema_3/img_16.svg', alt="Factores clave Características del producto Proceso de producción y envasado Manipulación en transporte y almacenaje Impacto medioambiental"  class="img-fluid")
          figcaption <b>Fuente.</b> SENA, 2025
    
    .bg_img_5.mb-3

      separador

      #t_3_3.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 3.3	Características
      .mb-3




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
