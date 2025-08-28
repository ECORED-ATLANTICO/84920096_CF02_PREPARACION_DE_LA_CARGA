<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Contenedores

    .bg_img_12.mb-3
      .tarjeta.color-primario-10.rounded-0.p-0.mb-5
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-5.mb-lg-0.mb-0
            figure
              img(src="@/assets/curso/temas/tema_4/img_1.png", class="img-fluid")
          .col-12.col-lg-7.p-4
            p.mb-0 Corresponden a elementos portátiles y con gran resistencia que protegen a la mercancía que se aloja en su interior de posibles golpes y permiten la ubicación y el apilado de mercancía, construyendo una unidad de carga, que posibilita una posterior manipulación y almacenaje, la que se puede realizar de manera manual o a través de aparatos de manutención.

      separador

      #t_4_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 4.1	Concepto
      .mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-4.d-flex.mb-lg-0.mb-3(data-aos="flip-left")
          figure
            img(src='@/assets/curso/temas/tema_4/img_2.png', class="img-fluid")
        .col-12.col-lg-8.d-flex(data-aos="zoom-in-right")
          .row.d-flex.align-items-stretch.justify-content-center.mb-5
            .col-12.col-lg-12.mb-3
              p.mb-0 Según las normas ICONTEC (Instituto Colombiano de Normas Técnicas y Certificación), específicamente en la NTC 5131 ("Contenedores. Vocabulario"), un contenedor es un artículo de transporte equipado con características estructurales que permiten su manipulación, estiba y transporte, diseñado para ser utilizado en múltiples modos de transporte (marítimo, terrestre, ferroviario o aéreo) sin necesidad de descargar y recargar la mercancía en tránsito.
            .col-12.col-lg-12.d-flex(data-aos="zoom-in-right")
              .d-flex.flex-column.justify-content-center.align-items-center.w-100.h-100
                .tarjeta_img_1.w-100.h-100
                  p.mb-0 Los contenedores desempeñan un papel clave en la logística, ya que garantizan un transporte más eficiente, seguro y rentable. Gracias a su diseño estandarizado, agilizan los procesos de carga y descarga en puertos y otros centros de distribución.  

      separador

      #t_4_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 4.2	Tipos
      .mb-3

      p.mb-3 Los contenedores se clasifican según su estructura y el tipo de carga que pueden trasladar. Elegir el contenedor adecuado no solo preserva la calidad de los productos durante el transporte, sino que también maximiza el uso del espacio, disminuye costos y asegura el cumplimiento de regulaciones internacionales.        

    .tarjeta.tarjeta--fondo__slider.p-4.mb-5
      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 <I>Dry van</I> (Estándar)
            p.mb-0 Es el contenedor más utilizado en el transporte internacional. Diseñado para carga general que no requiere control de temperatura.
            p.mb-0 Usos comunes: ideal para transportar ropa, maquinaria, muebles, productos empacados, entre otros.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_4/img_3.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 <I>Reefer</I> (Refrigerado)
            p.mb-0 Contenedor con sistema de refrigeración incorporado para mantener temperaturas controladas durante el transporte.
            p.mb-0 Usos comunes: perfecto para alimentos congelados, productos frescos, farmacéuticos o perecederos.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_4/img_4.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 <I>Open top</I>
            p.mb-0 No posee techo rígido. Tiene una lona superior desmontable, lo que permite el ingreso de carga por la parte superior.
            p.mb-0 Usos comunes: adecuado para maquinaria pesada, materiales de gran altura o formas irregulares.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_4/img_5.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 <I>Flat rack</I>
            p.mb-0 Contenedor sin paredes laterales ni techo, diseñado para cargas anchas, altas o pesadas. Algunos modelos tienen extremos abatibles o removibles.
            p.mb-0 Usos comunes: transporta maquinaria industrial, vehículos grandes o cargas sobredimensionadas.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_4/img_6.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 <I>Tank</I> (Cisterna)
            p.mb-0 Diseñado para transportar líquidos a granel, incluyendo sustancias químicas o peligrosas.
            p.mb-0 Usos comunes: aceites, resinas, látex, leche, cerveza, vino, agua mineral, químicos, combustibles, entre otros.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_4/img_7.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 <I>High cube</I>
            p.mb-0 Similar al <I>Dry Van</I>, pero con mayor altura interna. Permite aprovechar mejor el espacio vertical.
            p.mb-0 Usos comunes: óptimo para cargas voluminosas y livianas que requieren más capacidad cúbica.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_4/img_8.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            h5 <I>Open side</I>
            p.mb-0 Contenedor con apertura lateral (en uno o ambos costados), ideal para cargas de difícil acceso desde el extremo.
            p.mb-0 Usos comunes: perfecto para objetos largos o grandes. Facilita la carga / descarga en estaciones de ferrocarril o zonas con espacio limitado.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_4/img_9.png', class="img-fluid")

    separador

    #t_4_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.3	Características
    .mb-3
    
    p.mb-3 Las características de los contenedores responden a las exigencias de un mercado globalizado, donde factores como la resistencia estructural, la estanqueidad, la modularidad y la adaptabilidad son determinantes para optimizar costos y reducir riesgos operativos. Se destacan:

    .bg_img_13.mb-0
      .row.justify-content-center.align-items-center.mb-0
        .col-10.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/temas/tema_4/img_10.png', class="img-fluid")
        .col-12.col-lg-8.mb-0
          .custom-slider.p-3.p-sm-3
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-3.pb-0.rounded-3
              .tarjeta.color-sistema-h-3
                .tarjeta--5
                .tarjeta--slider__title.mb-3.text-center.fw-bold Resistencia 
                .tarjeta--slider__content.text-center Fabricados con materiales robustos como acero o aluminio, capaces de soportar las condiciones del transporte y proteger la carga.              
              .tarjeta.color-sistema-h-3
                .tarjeta--6
                .tarjeta--slider__title.mb-3.text-center.fw-bold  Estanqueidad
                .tarjeta--slider__content.text-center Protección contra agua, polvo y contaminación externa.              
              .tarjeta.color-sistema-h-3
                .tarjeta--7
                .tarjeta--slider__title.mb-3.text-center.fw-bold Estandarización
                .tarjeta--slider__content.text-center Los contenedores tienen dimensiones estándar (20, 40 pies, entre otros) para facilitar el manejo y la carga en diferentes medios de transporte.              
              .tarjeta.color-sistema-h-3
                .tarjeta--8
                .tarjeta--slider__title.mb-3.text-center.fw-bold  Manipulación
                .tarjeta--slider__content.text-center Diseñados para ser apilables y movidos fácilmente mediante grúas, carretillas elevadoras, entre otros.
              .tarjeta.color-sistema-h-3
                .tarjeta--9
                .tarjeta--slider__title.mb-3.text-center.fw-bold  Seguridad
                .tarjeta--slider__content.text-center Cerraduras y sistemas de seguridad que garantizan la protección de la carga durante el transporte.
              .tarjeta.color-sistema-h-3
                .tarjeta--10
                .tarjeta--slider__title.mb-3.text-center.fw-bold  Uso multimodal
                .tarjeta--slider__content.text-center Compatibles con barcos, camiones y trenes.
    
    .bg_img_14.mb-3

      separador

      #t_4_4.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 4.4	Normativa 
      .mb-3
    
      .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_4/img_17.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Debido al uso extendido de los contenedores en distintos tipos de transporte, es necesario contar con reglas claras que garanticen su seguridad, su compatibilidad entre distintos sistemas y la protección de los productos que llevan. 
          p.mb-0 Estas reglas se organizan en varios niveles, combinando estándares internacionales con regulaciones locales, lo que facilita la comunicación entre fabricantes, empresas de logística y autoridades aduaneras, asegurando que todos sigan las mismas normas para un transporte más ordenado y confiable.
      
      .titulo-sexto.color-acento-contenido
        h5 Tabla 3.
        |  Normativas internacionales aplicables a contenedores
      .tabla-a.mb-5
        table(data-aos="zoom-in-right")
          caption 
            p <b>Fuente:</b> SENA, 2025.
          thead
            tr
              th Entidad / Norma
              th Contenido o Función Principal
          tbody
            tr
              td.text-start.fw-bold ISO (Organización Internacional de Normalización).
              td.text-start
                p.mb-0 <b>ISO 668:</b> clasificación y dimensiones estándar de contenedores (series 1A, 1B, 1C para 40’, 30’ y 20’).
                p.mb-0 <b>ISO 1496:</b> requisitos de diseño y pruebas para contenedores.
                p.mb-0 <b>ISO 6346:</b> identificación y marcado de contenedores.

            tr.bg-table-01
              td.text-start.fw-bold Convenio Internacional CSC (1972).
              td.text-start 
                p.mb-0 Regula la seguridad estructural y la inspección periódica de contenedores.
                p.mb-0 Exige la placa CSC Plate como certificación de cumplimiento.
            tr
              td.text-start.fw-bold IMO (Organización Marítima Internacional).
              td.text-start 
                p.mb-0 <b>SOLAS (Capítulo VI):</b>  normas para estiba y trincaje de contenedores.
                p.mb-0 <b>IMDG Code:</b>  transporte de mercancías peligrosas en contenedores.
            tr.bg-table-01
              td.text-start.fw-bold Otros.
              td.text-start 
                p.mb-0 <b>UIC 592-6:</b>  normas para contenedores en transporte ferroviario.
                p.mb-0 <b>ATA Carnet: </b> tránsito temporal de contenedores en aduanas.
            tr
              td.text-start.fw-bold ICONTEC (Colombia).
              td.text-start 
                p.mb-0 <b>NTC 5131:</b> vocabulario y definiciones.
                p.mb-0 <b>NTC 5132:</b> dimensiones y tipos.
                p.mb-0 <b>NTC 5140:</b> requisitos para contenedores refrigerados (<I>Reefers</I>).
                p.mb-0 <b>NTC 5207:</b> inspección y mantenimiento.
            tr.bg-table-01
              td.text-start.fw-bold Superintendencia de Transporte.
              td.text-start Regula operaciones portuarias y manipulación de contenedores en terminales marítimas.
            tr
              td.text-start.fw-bold Agencia Nacional de Aduanas (ANDA).
              td.text-start 
                p.mb-0 <b>Resolución 4246 de 2021:</b> normas para despacho y control aduanero de contenedores.
                p.mb-0 <b>Decreto 1165/2019:</b> inspección no intrusiva (escaneo).
            tr.bg-table-01
              td.text-start.fw-bold Ministerio de Transporte.
              td.text-start <b>Reglamento Técnico de Transporte Multimodal:</b> establece estándares para contenedores en carretera y ferrocarril.

    separador

    #t_4_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.5	Usos
    .mb-3

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0
        img(src="@/assets/curso/temas/tema_4/img_18.png", class="img-fluid")
      .col-12.col-lg-8
        p.mb-3 Los contenedores son fundamentales para el comercio internacional, ya que facilitan el transporte, almacenamiento y distribución de productos de manera eficiente. Gracias a las normas ISO, su diseño estandarizado permite que sean compatibles con distintos medios de transporte, lo que mejora la logística global.
        p.mb-0 Su versatilidad los convierte en una herramienta esencial en la cadena de suministro, permitiendo el movimiento seguro y ordenado de mercancías en todo el mundo. A continuación, se presentan sus principales aplicaciones en logística.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-5
        TabsA.mb-5.tarjeta-tabs-a.color-adicional-4
          .tarjeta.color-adicional-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Transporte de mercancías")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-sm-8.col-md-8.col-lg-8.col-xl-8.col-xxl-8.mb-4.mb-xl-0
                p.mb-0 Facilitan el movimiento seguro de bienes entre diferentes modos de transporte (marítimo, terrestre y ferroviario) sin necesidad de reembalaje.
              .col-8.col-sm-2.col-md-3.col-lg-3.col-xl-2.col-xxl-2.mb-4.mb-xl-0
                figure
                  img(src='@/assets/curso/temas/tema_4/img_19.svg', class="img-fluid")(data-aos="fade-up")
          .tarjeta.color-adicional-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Almacenamiento temporal")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-sm-8.col-md-8.col-lg-8.col-xl-8.col-xxl-8.mb-4.mb-xl-0
                p.mb-0 Se pueden utilizar como almacenes móviles para guardar mercancías en espera de ser transportadas. 
              .col-8.col-sm-2.col-md-3.col-lg-3.col-xl-2.col-xxl-2.mb-4.mb-xl-0
                figure
                  img(src='@/assets/curso/temas/tema_4/img_20.svg', class="img-fluid")(data-aos="fade-up")
          .tarjeta.color-adicional-5.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Solución de transporte flexible")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-sm-8.col-md-8.col-lg-8.col-xl-7.col-xxl-7.mb-4.mb-xl-0
                p.mb-0 Permiten el transporte de una amplia variedad de productos, desde mercancías paletizadas hasta maquinaria pesada, pasando por productos perecederos. 
              .col-8.col-sm-2.col-md-3.col-lg-3.col-xl-3.col-xxl-3.mb-4.mb-xl-0
                figure
                  img(src='@/assets/curso/temas/tema_4/img_21.svg', class="img-fluid")(data-aos="fade-up")
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
