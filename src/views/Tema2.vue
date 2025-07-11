<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Paletas
    .bg_img_5.mb-3
      .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Las paletas (<I>palets</I>) tienen un importante impacto en la logística, almacenamiento, sostenibilidad y la economía del transporte. 
          p.mb-0 De allí que es esencial comprender las principales alternativas disponibles de paletas con sus peculiaridades para hacer la elección correcta para el negocio o el proyecto.

      separador

      #t_2_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.1.	Concepto
      .mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-4.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema_2/img_2.png', class="img-fluid")
        .col-12.col-lg-8
          p.mb-3 Las paletas o (<I>palets</I>) son plataformas planas, generalmente de madera, plástico o metal, diseñadas para facilitar el almacenamiento, transporte y manipulación de mercancías mediante grúas, carretillas elevadoras o transpaletas. Son un elemento clave en la logística y la cadena de suministro.
          p.mb-0 La principal función de las paletas es agrupar productos en una sola unidad, lo que facilita su manejo, transporte y almacenamiento.
      
      .row.d-flex.align-items-stretch.justify-content-center.mb-0
        .col-12.col-lg-5.d-flex.mb-3
          .w-100.d-flex.flex-column
            .tarjeta.color-sistema-h.p-3.h-100
              .row.justify-content-center.align-items-center.mb-0.p-0
                .col-3.col-lg-2.mb-lg-0.mb-3
                  figure
                    img(src="@/assets/curso/temas/tema_2/img_3.png", class="img-fluid")
                .col-12.col-lg-10
                  h6 Portabilidad
                  p.mb-0 Conseguir que los artículos sean fáciles de transportar es el objetivo principal.
        .col-12.col-lg-5.d-flex.mb-3
          .w-100.d-flex.flex-column
            .tarjeta.color-sistema-h.p-3.h-100
              .row.justify-content-center.align-items-center.mb-0.p-0
                .col-3.col-lg-2.mb-lg-0.mb-3
                  figure
                    img(src="@/assets/curso/temas/tema_2/img_4.png", class="img-fluid")
                .col-12.col-lg-10
                  h6 Fuerza
                  p.mb-0 Los <I>palets</I> son más fuertes que otras opciones de envío como cajas o envoltorios de plástico.
        .col-12.col-lg-5.d-flex.mb-3
          .w-100.d-flex.flex-column
            .tarjeta.color-sistema-h.p-3.h-100
              .row.justify-content-center.align-items-center.mb-0.p-0
                .col-3.col-lg-2.mb-lg-0.mb-3
                  figure
                    img(src="@/assets/curso/temas/tema_2/img_5.png", class="img-fluid")
                .col-12.col-lg-10
                  h6 Peso y tamaño
                  p.mb-0 En la actualidad los <I>palets</I> son más ligeros y resistentes, y la fabricación de nuevas paletas que se acoplan reducen el espacio de almacenamiento.
        .col-12.col-lg-5.d-flex.mb-3
          .w-100.d-flex.flex-column
            .tarjeta.color-sistema-h.p-3.h-100
              .row.justify-content-center.align-items-center.mb-0.p-0
                .col-3.col-lg-2.mb-lg-0.mb-3
                  figure
                    img(src="@/assets/curso/temas/tema_2/img_6.png", class="img-fluid")
                .col-12.col-lg-10
                  h6 Reciclaje
                  p.mb-0 La mayoría de los <I>palets</I> son reutilizables, y pueden ser enviados entre fabricante y distribuidor muchas veces antes de repararse.

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.2.	Tipos
    .mb-3

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema_2/img_7.png', class="img-fluid")
      .col-12.col-lg-8
        p.mb-0 Las paletas son plataformas esenciales en logística, diseñadas para almacenar y transportar mercancías de manera eficiente. 
        p.mb-3 Cada tipo se adapta a necesidades específicas de carga, higiene o transporte, optimizando la cadena de suministro.
        .cajon.color-primario-adicional-2.p-4.mb-3
          p.mb-0 Según el material, las paletas se clasifican con base en la materia prima con la que han sido fabricadas, lo cual influye directamente en su resistencia, durabilidad, reutilización y condiciones de uso. 
          p.mb-0 Esta clasificación permite seleccionar la paleta adecuada según el tipo de carga, entorno logístico o requisitos sanitarios, siendo los más comunes: 
      
    .tarjeta.tarjeta--fondo__slider.p-4.mb-5
      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 Paleta de Madera
            p Son las más comunes en la logística, conocidas por su resistencia y precio accesible. Son ideales para cargas pesadas, aunque su vida útil depende de condiciones ambientales.
            h5 Ventajas:
            ul(style="list-style-type: disc; padding-left: 20px")  
              li  Precio competitivo en relación con su resistencia.
              li  Fácil reciclaje y disponibilidad en el mercado.
              li  Soporta cargas pesadas en múltiples sectores.
            h5 Desventajas:
            ul(style="list-style-type: disc; padding-left: 20px")
              li  Se deterioran con golpes o humedad.
              li  Difíciles de limpiar y desinfectar.
              li  Pueden ser afectadas por plagas si no se tratan adecuadamente.
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_8.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 Paleta de Plástico
            p Fabricadas en polietileno o polipropileno, estas paletas son resistentes a la humedad, higiénicas y de larga duración. Suelen usarse en industrias con altos estándares sanitarios.
            h5 Ventajas:
            ul(style="list-style-type: disc; padding-left: 20px")
              li  Fáciles de limpiar y desinfectar
              li  Ligeras, resistentes y 100 % reciclables.
              li  No absorben humedad ni generan astillas.
            h5 Desventajas:
            ul(style="list-style-type: disc; padding-left: 20px")
              li  Mayor costo inicial frente a las de madera.
              li  Pueden deformarse bajo cargas muy pesadas o altas temperaturas.
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_9.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 Paleta de Metal (acero o aluminio)
            p Diseñadas para entornos industriales exigentes, las paletas metálicas ofrecen gran durabilidad y resistencia a impactos. Son adecuadas para ambientes de alta temperatura o cargas constantes.
            h5 Ventajas:
            ul(style="list-style-type: disc; padding-left: 20px")
              li  Alta resistencia a impactos y cargas pesadas.
              li  Fáciles de desinfectar.
              li  Larga vida útil y reutilizables en múltiples ciclos logísticos.
            h5 Desventajas:
            ul(style="list-style-type: disc; padding-left: 20px")
              li  Peso elevado, lo que dificulta su manipulación manual.
              li  Costo más alto en comparación con otros materiales.
              li  Puede generar ruido o rayar superficies si no se manejan adecuadamente.
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_10.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 Paleta de Cartón o Corcho
            p Son livianas, desechables y reciclables. Se utilizan principalmente en exportaciones o envíos donde no se espera la devolución de embalaje.
            h5 Ventajas:
            ul(style="list-style-type: disc; padding-left: 20px")
              li  Muy ligeras y económicas.
              li  100 % reciclables y fáciles de manipular.
              li  No requieren devolución en envíos internacionales.
            h5 Desventajas:
            ul(style="list-style-type: disc; padding-left: 20px")
              li  Baja resistencia, solo aptas para cargas ligeras.
              li  Vida útil limitada, diseñadas para un solo uso.
              li  Vulnerables a la humedad y daños por presión.
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_11.png', class="img-fluid")
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-3
        .tarjeta.color-acento-contenido-5.p-3.rounded-0
          .row.justify-content-center.align-items-center
            .col-3.col-lg-1.mb-lg-0.mb-3
              figure
                img(src="@/assets/curso/temas/tema_2/img_12.png", class="img-fluid")
            .col-12.col-lg-10
              p.mb-0 Según su estructura, las paletas se diferencian por el diseño de sus componentes y la forma en que están ensambladas. 
              p.mb-0 Esta clasificación influye en la estabilidad de la carga, la facilidad de manipulación y la compatibilidad con equipos de transporte como montacargas o estanterías. Entre las más comunes se encuentran: 
    
    .row.d-flex.justify-content-center.align-items-stretch.mb-5
      .col-12.col-lg-6.mb-3.d-flex
        .w-100.d-flex.flex-column.h-100
          .tarjeta.color-primario.d-flex.flex-column.h-100.rounded-0
            figure.mb-0
              img(src="@/assets/curso/temas/tema_2/img_13.png", class="img-fluid w-100")
            .flex-grow-1.d-flex.flex-column
              h5.p-3.pb-0.mb-0 <I>palets</I> de dos entradas (2 vías)
              p.p-3.pb-0.mb-3 Solo se puede manipular por dos lados con carretilla.
      .col-12.col-lg-6.mb-3.d-flex
        .w-100.d-flex.flex-column.h-100
          .tarjeta.color-acento-contenido.d-flex.flex-column.h-100.rounded-0
            figure.mb-0
              img(src="@/assets/curso/temas/tema_2/img_14.png", class="img-fluid w-100")
            .flex-grow-1.d-flex.flex-column
              h5.p-3.pb-0.mb-0 <I>palets</I> de cuatro entradas (4 vías)
              p.p-3.pb-0.mb-3 Permite el acceso desde cualquier lado, más versátil.
      .col-12.col-lg-6.mb-3.d-flex
        .w-100.d-flex.flex-column.h-100
          .tarjeta.color-primario.d-flex.flex-column.h-100.rounded-0
            figure.mb-0
              img(src="@/assets/curso/temas/tema_2/img_15.png", class="img-fluid w-100")
            .flex-grow-1.d-flex.flex-column
              h5.p-3.pb-0.mb-0 <I>palets</I> reversible (de doble cara)
              p.p-3.pb-0.mb-3 Tienen tablas tanto en la parte superior como inferior, soportando más peso.
      .col-12.col-lg-6.mb-3.d-flex
        .w-100.d-flex.flex-column.h-100
          .tarjeta.color-acento-contenido.d-flex.flex-column.h-100.rounded-0
            figure.mb-0
              img(src="@/assets/curso/temas/tema_2/img_16.png", class="img-fluid w-100")
            .flex-grow-1.d-flex.flex-column
              h5.p-3.pb-0.mb-0 <I>palets</I> cerrado (bloque)
              p.p-3.pb-0.mb-3 Diseño más robusto, con bloques de soporte en las esquinas.

    
    .tarjeta_img_2
      .row.justify-content-center.align-items-center
        .col-8.col-lg-3.mb-lg-0.mb-3
          figure
            img(src="@/assets/curso/temas/tema_2/img_17.png", class="img-fluid", style="transform: translateY(-10px); width: 100% !important; max-width: 1500% !important; height: 100% !important; max-height: 1500% !important; display: flex;")
        .col-12.col-lg-7
          p.mb-0  Según sus dimensiones, las paletas se clasifican atendiendo al largo y ancho estandarizado de su superficie útil. Esta categorización es clave para garantizar la compatibilidad con contenedores, estanterías, vehículos de transporte y sistemas de almacenamiento automatizado. 
          p.mb-0 Las dimensiones varían según normativas internacionales, siendo las más utilizadas las de tipo europeo (EUR), americano (GMA) y otras adaptadas a sectores o regiones específica:
     
    .bg_img_6.mb-3
      .row.justify-content-center.align-items-center
        .col-12.col-lg-4.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema_2/img_19.png', class="img-fluid")
        .col-12.col-lg-4.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema_2/img_20.png', class="img-fluid")

    separador

    #t_2_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.3	Características
    .mb-3

    p.mb-3 Las paletas se definen por un conjunto de atributos clave que determinan su uso, eficiencia y vida útil. Estas son las características principales:
    
    .row.d-flex.align-items-stretch.justify-content-center.mb-0
      .col-12.col-lg-2.d-flex.mb-3.mb-lg-0.mb-3
        .w-100.d-flex.flex-column
          .tarjeta.color-sistema-h.p-3.h-100
            .row.justify-content-center.align-items-center.mb-0.p-0
              .col-12.col-lg-12.mb-3
                figure
                  img(src="@/assets/curso/temas/tema_2/img_21.svg", class="img-fluid")
              .col-12.col-lg-12
                h6.text-center Durabilidad 
                p.text-center.mb-0 Se refiere a la vida útil del <I>palet</I> bajo condiciones normales de uso.
      .col-12.col-lg-2.d-flex.mb-3.mb-lg-0.mb-3
        .w-100.d-flex.flex-column
          .tarjeta.color-sistema-h.p-3.h-100
            .row.justify-content-center.align-items-center.mb-0.p-0
              .col-12.col-lg-12.mb-3
                figure
                  img(src="@/assets/curso/temas/tema_2/img_22.svg", class="img-fluid")
              .col-12.col-lg-12
                h6.text-center Peso 
                p.text-center.mb-0 Influye en la manejo y costos de transporte.
      .col-12.col-lg-2.d-flex.mb-3.mb-lg-0.mb-3
        .w-100.d-flex.flex-column
          .tarjeta.color-sistema-h.p-3.h-100
            .row.justify-content-center.align-items-center.mb-0.p-0
              .col-12.col-lg-12.mb-3
                figure
                  img(src="@/assets/curso/temas/tema_2/img_23.svg", class="img-fluid")
              .col-12.col-lg-12
                h6.text-center Resistencia 
                p.text-center.mb-0 Capacidad para soportar cargas sin deformarse.
      .col-12.col-lg-2.d-flex.mb-3.mb-lg-0.mb-3
        .w-100.d-flex.flex-column
          .tarjeta.color-sistema-h.p-3.h-100
            .row.justify-content-center.align-items-center.mb-0.p-0
              .col-12.col-lg-12.mb-3
                figure
                  img(src="@/assets/curso/temas/tema_2/img_24.svg", class="img-fluid")
              .col-12.col-lg-12
                h6.text-center Higiene 
                p.text-center.mb-0 Facilidad de limpieza y prevención de contaminación.
      .col-12.col-lg-2.d-flex.mb-3.mb-lg-0.mb-3
        .w-100.d-flex.flex-column
          .tarjeta.color-sistema-h.p-3.h-100
            .row.justify-content-center.align-items-center.mb-0.p-0
              .col-12.col-lg-12.mb-3
                figure
                  img(src="@/assets/curso/temas/tema_2/img_25.svg", class="img-fluid")
              .col-12.col-lg-12
                h6.text-center Sostenibilidad 
                p.text-center.mb-0 Impacto ambiental y posibilidad de reciclaje.
      .col-12.col-lg-2.d-flex.mb-3.mb-lg-0.mb-3
        .w-100.d-flex.flex-column
          .tarjeta.color-sistema-h.p-3.h-100
            .row.justify-content-center.align-items-center.mb-0.p-0
              .col-12.col-lg-12.mb-3
                figure
                  img(src="@/assets/curso/temas/tema_2/img_26.svg", class="img-fluid")
              .col-12.col-lg-12
                h6.text-center Adaptabilidad 
                p.text-center.mb-0 Versatilidad para usos específicos o personalización.
    .bg_img_7.mb-3

      separador

      #t_2_4.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.4	Métodos de uso
      .mb-3

      p.mb-3 Las paletas son fundamentales en la cadena logística, y su correcto uso garantiza eficiencia, seguridad y protección de la carga. A continuación, se detallan los métodos clave:
      
      .row.d-flex.align-items-start.justify-content-center.mb-3
        .col-12.col-lg-8.order-2.order-lg-1.mb-3
          AcordionA(tipo="b"  clase-tarjeta="tarjeta tarjeta--color-primario-5")
            div(titulo="Carga")
              p.ps-5.mb-0 Se distribuye la mercancía sobre el <I>palet</I> de forma equilibrada, asegurando peso uniforme y fijación con flejado, <I>film</I> estirable o cantoneras para evitar movimientos durante el transporte.
            div(titulo="Elevación")
              p.ps-5.mb-0 Se emplean carretillas elevadoras, transpaletas o grúas horquilla para levantar el <I>palet</I>, introduciendo las horquillas por sus entradas (2 o 4 lados) según su diseño.
            div(titulo="Transporte")
              p.ps-5.mb-0 Los <I>palets</I> cargados se movilizan en camiones, contenedores o almacenes mediante equipos logísticos, optimizando espacio y evitando impactos que dañen la mercancía.
            div(titulo="Almacenamiento")
              p.ps-5.mb-0 Se apilan en estanterías metálicas o directamente en suelo, respetando límites de altura y peso para prevenir colapsos. Se usan bases para evitar humedad.
            div(titulo="Descarga")
              p.ps-5.mb-0 Al llegar a destino, se retira la mercancía del <I>palet</I> con cuidado, utilizando maquinaria o manualmente, y se almacena o reutiliza el <I>palet</I> según su condición.
        .col-9.col-lg-4.d-flex.order-1.order-lg-2.mb-3
          figure.d-flex.flex-column.justify-content-center.align-items-center.w-100.h-100
            img(src='@/assets/curso/temas/tema_2/img_27.png', class="img-fluid h-100")
    

</template>

<script>
export default {
  name: 'Tema2',
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
