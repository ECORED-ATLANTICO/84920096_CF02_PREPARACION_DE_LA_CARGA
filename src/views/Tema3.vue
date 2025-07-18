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
        
    .bg_img_8.mb-3
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/temas/tema_3/img_3.png', class="img-fluid")
        .col-12.col-lg-8
          .custom-slider.p-5.p-sm-3
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta.color-sistema-h-2
                .tarjeta--1
                .tarjeta--slider__title.mb-3.text-center.fw-bold Protección 
                .tarjeta--slider__content.text-center Evita daños por impactos, humedad, vibraciones o contaminación durante el transporte.
              .tarjeta.color-sistema-h-2
                .tarjeta--2
                .tarjeta--slider__title.mb-3.text-center.fw-bold  Unidad de carga
                .tarjeta--slider__content.text-center Permite agrupar productos en lotes por ejemplo cajas sobre una paleta, para optimizar el almacenamiento y transporte.
              .tarjeta.color-sistema-h-2
                .tarjeta--3
                .tarjeta--slider__title.mb-3.text-center.fw-bold  Compatibilidad con sistemas logísticos
                .tarjeta--slider__content.text-center Debe adaptarse a <I>palets</I>, contenedores, bandas transportadoras y equipos de manipulación (montacargas, transpaletas, entre otros).
              .tarjeta.color-sistema-h-2
                .tarjeta--4
                .tarjeta--slider__title.mb-3.text-center.fw-bold  Información y trazabilidad
                .tarjeta--slider__content.text-center Incluye etiquetas, códigos de barras o RFID para identificación y rastreo.
    
    .bg_img_9.mb-3

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

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10.mb-lg-0.mb-3(data-aos="zoom-in-right")
          .tarjeta_img_2.mb-3
            .row.justify-content-center.align-items-center.mb-0
              .col-8.col-lg-3.mb-0
                figure
                  img(src="@/assets/curso/temas/tema_3/img_12.png", class="img-fluid", style="transform: translateY(-30px); width: 100% !important; max-width: 1500% !important; height: 100% !important; max-height: 1500% !important; display: flex;")    
              .d-none.d-lg-block.col-lg-1.mb-0
                figure
                  img(src="@/assets/curso/temas/tema_2/img_17_1.png", class="img-fluid", style="transform: translateY(-10px); width: 70% !important; max-width: 1500% !important; height: 70% !important; max-height: 1500% !important; display: flex;")    
              .col-12.col-lg-7.mb-0
                p.mb-0 Los embalajes se pueden clasificar según el material con el que están fabricados, ya que este determina sus propiedades físicas, nivel de protección, durabilidad, impacto ambiental y costo logístico. Elegir el material adecuado depende del tipo de producto, su peso, condiciones de transporte y destino final. Entre los materiales más comunes se encuentran:
     

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
          img(src='@/assets/curso/temas/tema_3/img_16.svg', alt=" En la figura se presentan los factores clave para la selección del tipo de embalaje. Factores clave Características del producto Proceso de producción y envasado Manipulación en transporte y almacenaje Impacto medioambiental"  class="img-fluid")
          figcaption <b>Fuente.</b> SENA, 2025
    
    .bg_img_10.mb-3

      separador

      #t_3_3.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 3.3	Características
      .mb-3
      
      
      .tarjeta.color-primario-10.rounded-0.p-0.mb-5
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-5.mb-lg-0.mb-3.p-0
            figure.p-0
              img(src="@/assets/curso/temas/tema_3/img_17.png", class="img-fluid").p-0
          .col-12.col-lg-7.p-3
            p.mb-0 Un embalaje de alta calidad necesita cumplir requerimientos técnicos, logísticos y regulativos necesarios para proteger el producto y asegurar la eficacia de la cadena de suministro. Varios aspectos importantes se describen a continuación:
      .row.d-flex.align-items-stretch.justify-content-center.mb-5
        .col-12.col-lg-5.d-flex.mb-3(data-aos="zoom-in-right")
          .w-100.d-flex.flex-column
            .tarjeta.color-sistema-h.p-3.h-100
              .row.justify-content-center.align-items-center.mb-0.p-0
                .col-3.col-lg-2.mb-lg-0.mb-3
                  figure
                    img(src="@/assets/curso/temas/tema_3/img_18.svg", class="img-fluid")
                .col-12.col-lg-10
                  h6 Resistencia  mecánica
                  p.mb-0 Un embalaje debe soportar fuerzas externas durante el transporte y almacenamiento.
        .col-12.col-lg-5.d-flex.mb-3(data-aos="zoom-in-right")
          .w-100.d-flex.flex-column
            .tarjeta.color-sistema-h.p-3.h-100
              .row.justify-content-center.align-items-center.mb-0.p-0
                .col-3.col-lg-2.mb-lg-0.mb-3
                  figure
                    img(src="@/assets/curso/temas/tema_3/img_19.svg", class="img-fluid")
                .col-12.col-lg-10
                  h6 Protección ambiental
                  p.mb-0 El embalaje debe aislar el producto de factores externos que puedan degradarlo.
        .col-12.col-lg-5.d-flex.mb-3(data-aos="zoom-in-right")
          .w-100.d-flex.flex-column
            .tarjeta.color-sistema-h.p-3.h-100
              .row.justify-content-center.align-items-center.mb-0.p-0
                .col-3.col-lg-2.mb-lg-0.mb-3
                  figure
                    img(src="@/assets/curso/temas/tema_3/img_20.svg", class="img-fluid")
                .col-12.col-lg-10
                  h6 Eficiencia en espacio
                  p.mb-0 Optimizar dimensiones y diseño para reducir costos logísticos.
        .col-12.col-lg-5.d-flex.mb-3(data-aos="zoom-in-right")
          .w-100.d-flex.flex-column
            .tarjeta.color-sistema-h.p-3.h-100
              .row.justify-content-center.align-items-center.mb-0.p-0
                .col-3.col-lg-2.mb-lg-0.mb-3
                  figure
                    img(src="@/assets/curso/temas/tema_3/img_21.svg", class="img-fluid")
                .col-12.col-lg-10
                  h6 Sostenibilidad
                  p.mb-0 Reducir el impacto ambiental sin comprometer la protección.
        .col-12.col-lg-5.d-flex.mb-3(data-aos="zoom-in-right")
          .w-100.d-flex.flex-column
            .tarjeta.color-sistema-h.p-3.h-100
              .row.justify-content-center.align-items-center.mb-0.p-0
                .col-3.col-lg-2.mb-lg-0.mb-3
                  figure
                    img(src="@/assets/curso/temas/tema_3/img_22.svg", class="img-fluid")
                .col-12.col-lg-10
                  h6 Información clara y trazabilidad
                  p.mb-0 Facilitar la identificación y rastreo en la cadena de suministro.    
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-10.mb-3
          .tarjeta.color-acento-contenido-5.p-4.rounded-0.mb-3
            .row.justify-content-center.align-items-center.mb-0
              .col-4.col-lg-1.mb-2.mb-lg-0
                img(src="@/assets/curso/temas/tema_3/img_23.png", class="img-fluid")
              .col-12.col-lg-10
                p.mb-0 Es un embalaje óptimo el que equilibra resistencia, perforación funcional y sostenibilidad para servir las particularidades del producto a embalar y la reglamentación del ramo en específico. Invertir en un diseño bien planificado reduce pérdidas por daños y mejora la eficiencia logística.

      separador

      #t_3_4.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 3.4	Métodos de uso 
      .mb-3 
    
      p.mb-5(data-aos="fade-right") Los métodos de uso de embalaje en logística se seleccionan según el tipo de producto, volumen de producción y requisitos de la cadena de suministro.
    
      .row.d-flex.align-items-stretch.justify-content-center.mb-3
        .col-9.col-lg-4.d-flex.mb-3(data-aos="flip-left")
          figure.w-100.h-100.d-flex.flex-column
            img(src='@/assets/curso/temas/tema_3/img_24.png', class="img-fluid w-100 h-100")
        .col-12.col-lg-8.mb-3
          AcordionA(tipo="b"  clase-tarjeta="tarjeta tarjeta--color-primario-5")
            div(titulo="Embalaje manual")
              p.ps-5.mb-0 Proceso realizado por operarios que embalan productos de forma directa. Se caracteriza por su flexibilidad para adaptarse a formas irregulares, la posibilidad de personalización según requerimientos específicos y la precisión en el manejo de artículos frágiles o delicados.
            div(titulo="Embalaje automático")
              p.ps-5.mb-0 Proceso mecanizado mediante robots o sistemas automáticos que realizan el empaquetado a alta velocidad. Ofrece alta velocidad de operación, consistencia en los resultados y precisión robótica en el manejo exacto de productos, siendo ideal para grandes volúmenes.
            div(titulo="Embalaje retornable")
              p.ps-5.mb-0 Sistema de empaque reutilizable, donde los contenedores vuelven al origen para ser usados nuevamente. Se destaca por su durabilidad gracias a materiales resistentes, su capacidad de reutilización en múltiples ciclos logísticos y su enfoque en la sostenibilidad, al reducir residuos y costos operativos.
            div(titulo="Embalaje consumible")
              p.ps-5.mb-0 Empaques de un solo uso diseñados para ser descartados o reciclados tras su empleo. Son conocidos por su bajo costo unitario, su ligereza, lo que facilita el transporte, y su impacto ambiental, ya que generan residuos si no son correctamente gestionados o reciclados.

    separador

    #t_3_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.5	Técnicas
    .mb-3 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-2.mb-2.mb-lg-0
        img(src="@/assets/curso/temas/tema_3/img_25.png", class="img-fluid")
      .col-12.col-lg-10
        p.mb-3 El embalaje adecuado es fundamental para garantizar que la carga llegue en perfecto estado a su destino. 
        p.mb-0 Las técnicas de embalaje orientadas a resguardar la carga se centran en evitar daños por golpes, vibraciones, humedad o exposición a contaminantes. Utilizan materiales y métodos que actúan como barrera física frente a los riesgos del entorno logístico, asegurando que productos frágiles, delicados o sensibles conserven sus propiedades durante el transporte y manipulación, como lo son:
    
    .bg_img_11.mb-3
      .tarjeta--container.row.mb-5
        .col-md.tarjeta.color-acento-contenido-20.p-5.mb-lg-0.mb-3
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/tema_3/img_26.png', alt='Texto que describa la imagen')

          h2.text-center Amortiguación 
          p.mb-0.text-center Uso de materiales que absorben impactos y vibraciones para proteger productos frágiles o sensibles.
          p.mb-0.text-center Ejemplo: muebles, envíos de comercio electrónico, vidrio, entre otros.
        .col-md.tarjeta.color-primario-20.p-5.mb-lg-0.mb-3
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/tema_3/img_27.png', alt='Texto que describa la imagen')

          h2.text-center Blindaje rígido
          p.mb-0.text-center Estructuras resistentes que envuelven el producto para evitar deformaciones o aplastamiento.
          p.mb-0.text-center Ejemplo: maquinaria pesada, instrumentos ópticos y mercancías peligrosas.
        .col-md.tarjeta.color-acento-contenido-20.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/tema_3/img_28.png', alt='Texto que describa la imagen')

          h2.text-center Sellado al vacío
          p.mb-0.text-center Eliminación de aire del embalaje para prevenir oxidación, humedad o contaminación.
          p.mb-0.text-center Ejemplo: medicamentos, alimentos y electrónicos.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0
        img(src="@/assets/curso/temas/tema_3/img_29.png", class="img-fluid")
      .col-12.col-lg-6
        p.mb-0 También se aplican técnicas que garantizan que la carga se mantenga firme, compacta y equilibrada durante todo el trayecto logístico. 
        p.mb-0 Estas soluciones están orientadas a prevenir desplazamientos, caídas o inestabilidad que puedan comprometer la integridad del producto, al tiempo que optimizan el uso del espacio y disminuyen el riesgo de accidentes o daños causados por movimientos bruscos, entre las que se destacan:
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-5
        TabsA.mb-5.tarjeta-tabs-a.color-adicional-4
          .tarjeta.color-adicional-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Unitización")
            .row.justify-content-center.align-items-center.mb-0
              .col-7.col-sm-7.col-md-7.col-lg-7.col-xl-7.col-xxl-7.mb-4.mb-xl-0
                p.mb-0 Agrupación de múltiples cajas o productos en una sola unidad manejable.
              .col-3.col-sm-3.col-md-3.col-lg-3.col-xl-3.col-xxl-3.mb-4.mb-xl-0
                figure
                  img(src='@/assets/curso/temas/tema_3/img_30.png', class="img-fluid")(data-aos="fade-up")
          .tarjeta.color-adicional-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Contención con cantoneras")
            .row.justify-content-center.align-items-center.mb-0
              .col-7.col-sm-7.col-md-7.col-lg-7.col-xl-7.col-xxl-7.mb-4.mb-xl-0
                p.mb-0 Refuerzos en esquinas o bordes para evitar daños por impactos laterales.
              .col-3.col-sm-3.col-md-3.col-lg-3.col-xl-3.col-xxl-3.mb-4.mb-xl-0
                figure
                  img(src='@/assets/curso/temas/tema_3/img_31.png', class="img-fluid")(data-aos="fade-up")
          .tarjeta.color-adicional-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Anclaje en contenedores")
            .row.justify-content-center.align-items-center.mb-0
              .col-7.col-sm-7.col-md-7.col-lg-7.col-xl-7.col-xxl-7.mb-4.mb-xl-0
                p.mb-0 Técnicas para inmovilizar cargas dentro de contenedores o camiones y evitar desplazamientos.
              .col-3.col-sm-3.col-md-3.col-lg-3.col-xl-3.col-xxl-3.mb-4.mb-xl-0
                figure
                  img(src='@/assets/curso/temas/tema_3/img_32.png', class="img-fluid")(data-aos="fade-up")
      .col-12.col-lg-10.mb-3
        .cajon.color-primario-adicional-2.p-4.mb-0
          p.mb-0.text-center La elección de técnicas de embalaje depende del tipo de producto, medio de transporte y normativa aplicable.

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
