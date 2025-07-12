<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Aseguramiento de la carga
    .bg_img_1.mb-3
      .bloque-texto-t.justify-content-center.align-items-center.mb-0
        .bloque-texto-t__img.mb-0
          img(src='@/assets/curso/temas/tema_1/img_1.png')
        .bloque-texto-t__texto.color-adicional-gradient.col-10.mb-0
          p.mb-0 Es fundamental asegurarse que la carga esté bien asegurada en cualquier proceso logístico; y más precisan cuando se trata de materiales con montacargas. 
          p.mb-0 Si se lleva a cabo de forma adecuada, no solo protege los objetos que se traslada, sino que también se evitan accidentes, se conserva la integridad del equipo y se aumenta la eficiencia en bodegas, obras y centros de distribución. 

      separador

      #t_1_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 1.1	Concepto
      .mb-3
      
      .tarjeta.tarjeta--fondo__slider.p-4.mb-5
        SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
          .row.justify-content-center.align-items-center
            .col-12.col-lg-6.order-2.order-lg-1.mb-0
              p.mb-0 El aseguramiento de la carga es un proceso técnico que integra métodos y procedimientos específicos orientados a fijar, estabilizar y proteger la mercancía durante las fases de transporte, almacenamiento y manipulación. 
              p.mb-0 Su propósito principal es garantizar que los productos lleguen a su destino final en condiciones óptimas, evitando daños, pérdidas o incidentes ocasionados por factores como movimientos bruscos, vibraciones, impactos o condiciones climáticas adversas.
            .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_1/img_2.png', class="img-fluid")
          .row.justify-content-center.align-items-center
            .col-12.col-lg-6.order-2.order-lg-1.mb-0
              p.mb-0 Se requiere el uso adecuado de materiales y sistemas de sujeción (como amarres, cinchas, esquineros, entre otros), así como una correcta distribución del peso dentro del vehículo o contenedor, de modo que se preserve su estabilidad y se minimicen los riesgos operativos.
              p.mb-0 Esta práctica no solo contribuye a la eficiencia de la logística, sino que también permite el cumplimiento de normativas nacionales e internacionales de seguridad en el transporte de carga.
            .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_1/img_3.png', class="img-fluid")
    .row.d-flex.align-items-stretch.justify-content-center.mb-5
      .col-12.col-lg-4.d-flex.mb-lg-0.mb-3
        figured-flex.flex-column.justify-content-center.align-items-center.w-100.h-100
          img(src='@/assets/curso/temas/tema_1/img_4.png', class="img-fluid h-100")
      .col-12.col-lg-8.d-flex
        .d-flex.flex-column.justify-content-center.align-items-center.w-100.h-100
          .tarjeta_img_1.w-100.h-100
            p.mb-0 Cuando una carga no se asegura de forma adecuada, se generan riesgos que pueden comprometer tanto la integridad de la mercancía como la seguridad del personal y la eficiencia operativa. 
            p.mb-0 Estas consecuencias afectan directamente la rentabilidad, la logística y la reputación de las empresas involucradas en la cadena de suministro.

    .bg_img_2.mb-3
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-md-6.col-xl-3.mb-4.mb-lg-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema_1/img_6.png", class="img-fluid")
            .crd_hover_txt--body.color-primario
              h5.mb-4.text-center Daños en la mercancía
              p.mb-0.text-small Cuando los materiales se mueven de forma insegura, el impacto o la vibración durante el transporte pueden causar roturas, deformaciones o pérdida de valor en los productos.
        .col-12.col-md-6.col-xl-3.mb-4.mb-lg-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema_1/img_7.png", class="img-fluid")
            .crd_hover_txt--body.color-acento-contenido
              h5.mb-4.text-center Accidentes laborales
              p.mb-0.text-small Cargas inestables o mal sujetas pueden caer, provocando lesiones graves a los operadores de montacargas o al personal cercano.
        .col-12.col-md-6.col-xl-3.mb-4.mb-lg-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema_1/img_8.png", class="img-fluid")
            .crd_hover_txt--body.color-primario
              h5.mb-4.text-center Retrasos en la cadena de suministro
              p.mb-0.text-small Una carga mal asegurada puede provocar caídas o daños durante el transporte, lo que inevitablemente causa retrasos. Cuando un producto no llega a tiempo, toda la operación se ve afectada.
        .col-12.col-md-6.col-xl-3.mb-4.mb-lg-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema_1/img_9.png", class="img-fluid")
            .crd_hover_txt--body.color-acento-contenido
              h5.mb-4.text-center Costos adicionales de reemplazo y mantenimiento
              p.mb-0.text-small Cuando los materiales se dañan durante el transporte, la empresa debe asumir gastos adicionales, como: reemplazo de productos afectados y reparación de equipos dañados.
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10
          .cajon.color-primario-adicional-2.p-4.mb-3
            p.mb-0 El aseguramiento de la carga bien establece un proceso estructurado que ofrece a la carga estabilidad y seguridad durante su traslado. 
            p.mb-0 Los siguientes pasos claros incluyen:
    .row.d-flex.align-items-start.justify-content-center.mb-3(data-aos="zoom-in")
      .col-10.col-lg-4.d-flex.mb-lg-0.mb-3
        figure.d-flex.flex-column.justify-content-center.align-items-center.w-100.h-100
          img(src='@/assets/curso/temas/tema_1/img_10.png', class="img-fluid h-100")
      .col-12.col-lg-8.mb-lg-0.mb-3
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Evaluación de la carga")
            .col-md-12.mb-4.mb-md-0
              ul.text-small.mb-0.p-0
                li
                  i.fa-solid.fa-circle-check(style="color: #4ADBD1; font-size: 15px").mb-1
                  | &nbsp;&nbsp;Identificar el tipo de mercancía. 
                .border-bottom.mb-1
                li
                  i.fa-solid.fa-circle-check(style="color: #4ADBD1; font-size: 15px").mb-1
                  | &nbsp;&nbsp;Verificar peso, dimensiones y centro de gravedad.
                .border-bottom.mb-1
                li
                  i.fa-solid.fa-circle-check(style="color: #4ADBD1; font-size: 15px").mb-1
                  | &nbsp;&nbsp;Determinar el medio de transporte.
          .row(numero="2" titulo="Selección del método de aseguramiento")
            .col-md-12.mb-4.mb-md-0
              ul.text-small.mb-0.p-0
                li
                  i.fa-solid.fa-circle-check(style="color: #4ADBD1; font-size: 15px").mb-1
                  | &nbsp;&nbsp;Elegir entre trincaje, bloqueo, fijado, entibado o amortiguación, según las características de la carga. 
                .border-bottom.mb-1
                li
                  i.fa-solid.fa-circle-check(style="color: #4ADBD1; font-size: 15px").mb-1
                  | &nbsp;&nbsp;Usar materiales certificados.
          .row(numero="3" titulo="Preparación del soporte de carga")
            .col-md-12.mb-4.mb-md-0
              ul.text-small.mb-0.p-0
                li
                  i.fa-solid.fa-circle-check(style="color: #4ADBD1; font-size: 15px").mb-1
                  | &nbsp;&nbsp;Limpiar y acondicionar el área. 
                .border-bottom.mb-1
                li
                  i.fa-solid.fa-circle-check(style="color: #4ADBD1; font-size: 15px").mb-1
                  | &nbsp;&nbsp;Verificar que el piso sea antideslizante o usar esteras de fricción. 
                .border-bottom.mb-1
                li
                  i.fa-solid.fa-circle-check(style="color: #4ADBD1; font-size: 15px").mb-1
                  | &nbsp;&nbsp;Asegurar estructuras de anclaje.
          .row(numero="4" titulo="Distribución y estiba")
            .col-md-12.mb-4.mb-md-0
              ul.text-small.mb-0.p-0
                li
                  i.fa-solid.fa-circle-check(style="color: #4ADBD1; font-size: 15px").mb-1
                  | &nbsp;&nbsp;Colocar la carga de manera uniforme, evitando desbalances. 
                .border-bottom.mb-1
                li
                  i.fa-solid.fa-circle-check(style="color: #4ADBD1; font-size: 15px").mb-1
                  | &nbsp;&nbsp;Ubicar los elementos más pesados en la base y centrados.
                .border-bottom.mb-1
                li
                  i.fa-solid.fa-circle-check(style="color: #4ADBD1; font-size: 15px").mb-1
                  | &nbsp;&nbsp;Utilizar paletas o separadores.
          .row(numero="5" titulo="Aplicación de técnicas de fijación")
            .col-md-12.mb-4.mb-md-0
              ul.text-small.mb-0.p-0
                li
                  i.fa-solid.fa-circle-check(style="color: #4ADBD1; font-size: 15px").mb-1
                  | &nbsp;&nbsp;Trincar con cinchas / cadenas en ángulos adecuados (idealmente 45 °a 60 °). 
                .border-bottom.mb-1
                li
                  i.fa-solid.fa-circle-check(style="color: #4ADBD1; font-size: 15px").mb-1
                  | &nbsp;&nbsp;Bloquear con calzos o rellenos para evitar movimientos laterales. 
                .border-bottom.mb-1
                li
                  i.fa-solid.fa-circle-check(style="color: #4ADBD1; font-size: 15px").mb-1
                  | &nbsp;&nbsp;Aplicar flejes o <I>films</I>.
          .row(numero="6" titulo="Verificación final")
            .col-md-12.mb-4.mb-md-0
              ul.text-small.mb-0.p-0
                li
                  i.fa-solid.fa-circle-check(style="color: #4ADBD1; font-size: 15px").mb-1
                  | &nbsp;&nbsp;Comprobar que no haya desplazamientos al aplicar movimientos manuales. 
                .border-bottom.mb-1
                li
                  i.fa-solid.fa-circle-check(style="color: #4ADBD1; font-size: 15px").mb-1
                  | &nbsp;&nbsp;Asegurar que las tensiones de amarre sean uniformes
                .border-bottom.mb-1
                li
                  i.fa-solid.fa-circle-check(style="color: #4ADBD1; font-size: 15px").mb-1
                  | &nbsp;&nbsp;Confirmar cumplimiento normativo.
          .row(numero="7" titulo="Documentación y cumplimiento")
            .col-md-12.mb-4.mb-md-0
              ul.text-small.mb-0.p-0
                li
                  i.fa-solid.fa-circle-check(style="color: #4ADBD1; font-size: 15px").mb-1
                  | &nbsp;&nbsp;Registrar el método de aseguramiento en la documentación de transporte. 
                .border-bottom.mb-1
                li
                  i.fa-solid.fa-circle-check(style="color: #4ADBD1; font-size: 15px").mb-1
                  | &nbsp;&nbsp;Incluir etiquetas de advertencia si la carga requiere manejo especial.

    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.2	Métodos
    .mb-3

    .bg_img_3.mb-3
      p.mb-5 Existen múltiples procedimientos para garantizar la carga a utilizar dependiendo el objeto comercial y el medio de transporte, adaptándose a una cuestión de fragilidad, peso, tamaño y de normas complementarias. A continuación, se describen los principales métodos de aseguramiento de la carga:

      .titulo-sexto.color-acento-contenido
        h5 Tabla 1.
        |  Métodos de aseguramiento de la carga
      .tabla-a.mb-5
        table(data-aos="zoom-in-right")
          caption 
            p <b>Fuente:</b> SENA, 2025.
          thead
            tr
              th Método
              th Descripción
              th Materiales
              th Aplicación
          tbody
            tr
              td.text-start Bloqueo y calce 
              td.text-start Técnica que utiliza elementos rígidos o semirrígidos para rellenar espacios vacíos y evitar el movimiento de la carga.
              td.text-start Madera (tacos, vigas y listones). <br>Espumas de poliuretano o poliestireno. <br>Separadores plásticos o metálicos. <br>Bolsas de aire inflables.
              td.text-start Transporte de maquinaria pesada. <br>Carga de vidrio.
            tr.bg-table-01
              td.text-start Trincaje (Amarre)
              td.text-start Método de sujeción mediante elementos tensores (cinchas, cadenas o cables) que fijan la carga a estructuras rígidas del vehículo o contenedor.
              td.text-start Cinchas de poliéster o nylon. <br>Cadenas de acero con tensores. <br>Cables de acero con ganchos.
              td.text-start Transporte de vehículos. <br>Carga en barcos.
            tr
              td.text-start Encintado y flejado
              td.text-start Técnica de consolidación de paquetes o bultos mediante cintas adhesivas o flejes metálicos / plásticos.
              td.text-start Cinta adhesiva reforzada. <br>Flejes de poliéster o acero. <br>Flejadoras manuales o automáticas.
              td.text-start Cajas de cartón. <br>Paquetes de tubos metálicos.
            tr.bg-table-01
              td.text-start Uso de rellenos
              td.text-start Empleo de materiales de amortiguación para proteger la carga de impactos y vibraciones.
              td.text-start Burbujas de aire. <br>Espuma de poliestireno. <br>Papel <I>kraft</I> o rellenos biodegradables.
              td.text-start Electrónicos. <br>Muebles frágiles.

            tr
              td.text-start Sistemas modulares (paletización)
              td.text-start Agrupación de carga sobre paletas para facilitar su manejo con equipos mecánicos (montacargas, transpaletas, entre otros).
              td.text-start Paletas de madera, plástico o metal. <br><I>Film</I> estirable. <br>Cubiertas termorretráctiles.
              td.text-start Almacenamiento de alimentos. <br>Exportación de químicos.

    separador

    #t_1_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.3	Normativa
    .mb-3

    .bg_img_4.mb-3
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-4.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema_1/img_11.png', class="img-fluid")
        .col-12.col-lg-8
          .cajon.color-acento-contenido-ac5.p-3.mb-3
            p.mb-0 El aseguramiento de carga está regulado por estándares internacionales, regionales y nacionales para garantizar la seguridad en el transporte, prevenir accidentes y asegurar el cumplimiento de requisitos legales.
          p.mb-0 Para la seguridad y eficiencia en las operaciones logísticas, el cumplimiento de las normativas nacionales e internacionales es fundamental. En Colombia, el Ministerio de Transporte, la DIAN y la Superintendencia de Puertos coercitiva protegen el aseguramiento de carga correctamente con multas para quien no cumpla. Las empresas deben entregar la formación necesaria a su plantel y trabajar con materiales certificados, bancales de riesgo legal y operacional. A continuación, se detallan las principales normativas aplicables:

      .titulo-sexto.color-acento-contenido
        h5 Tabla 2.
        |  Normativa para el aseguramiento de la carga
      .tabla-a.mb-5
        table(data-aos="zoom-in-right")
          caption 
            p <b>Fuente:</b> SENA, 2025.
          thead
            tr
              th Normas
              th Descripción
              th Objetivo
          tbody
            tr
              td(rowspan="4") Internacionales
              td.text-start OMI (Organización Marítima Internacional) - Código CTU
              td.text-start Establecer directrices para el correcto estibado y trincaje de carga en contenedores y unidades de transporte.tr
            tr
              td.text-start Normas ISO <br>ISO 1496 <br>ISO 17712 <br>ISO 3874
              td.text-start Especificaciones técnicas para contenedores de carga. <br>Requisitos para sellos de seguridad en contenedores. <br>Estándares para manipulación de contenedores.
            tr
              td.text-start DOT (Departamento de Transporte - EE.UU.)
              td.text-start Regula el peso máximo, distribución y sujeción de carga en transporte terrestre. <br>Exige el uso de cinchas con resistencia certificada.
            tr
              td.text-start Unión Europea - Reglamento UE 2014/47
              td.text-start Establece requisitos técnicos para vehículos de carga. <br>Incluye inspecciones periódicas de sistemas de amarre. <br>Exige que la carga no sobresalga de los límites del vehículo.

            tr.bg-table-01
              td(rowspan="3") Regionales
              td.text-start CEMT (Conferencia Europea de Ministros de Transporte)
              td.text-start Fija límites de peso y dimensiones para camiones en Europa. <br>Promueve estándares de seguridad en logística internacional.

            tr.bg-table-01
              td.text-start Resolución 4100 de 2004 (Ministerio de Transporte)
              td.text-start Establece las condiciones técnicas para el transporte de carga por carretera. <br>Exige que la carga esté correctamente asegurada para evitar desplazamientos. <br>Prohíbe el transporte de mercancías sueltas sin sujeción adecuada.

            tr.bg-table-01
              td.text-start Decreto 1079 de 2015 (Reglamento de Tránsito)
              td.text-start Obliga a los conductores a garantizar la estabilidad de la carga. <br>Impone multas por carga mal asegurada que represente riesgo vial.

            tr
              td(rowspan="3") Colombianas
              td.text-start Normas Icontec <br>NTC 5205 <br>NTC 1695
              td.text-start Requisitos para flejes metálicos en carga. <br>Estándares para embalajes de madera
            tr
              td.text-start Superintendencia de Puertos y Transporte
              td.text-start Realiza operativos de control para verificar el correcto aseguramiento de carga. <br>Aplica sanciones por incumplimiento.
            tr
              td.text-start DIAN
              td.text-start Exige que la carga en contenedores cumpla con normas internacionales para exportaciones. <br>Rechaza mercancías mal estibadas que puedan sufrir daños en tránsito.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
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
