<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Fundamentación de los acuerdos de paz
    .row.bg-c7
      .col-12
        .px-5.pb-5
          .row.align-items-center.mb-4
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              p Colombia vive un momento histórico en el que se ha avanzado en medio de una amplia movilización social hacia el cierre del conflicto armado más prolongado del hemisferio occidental. En efecto, luego de cerca de cuatro años de negociaciones públicas entre el gobierno colombiano y las Fuerzas Armadas Revolucionarias de Colombia (iniciadas el 18 de octubre de 2012, en Oslo -Noruega) se firmó el pasado 24 de noviembre de 2016 el “Acuerdo Final para la Terminación del Conflicto y la Construcción de una Paz Estable y Duradera” en el Teatro Colón en Bogotá (Alto Comisionado para la Paz, 2016). Se trata del acuerdo surgido luego del Plebiscito del 2 de octubre de 2016, luego de que el NO a la aprobación del acuerdo inicialmente firmado en La Habana el 24 de agosto de 2016 superará al SÍ por un estrecho margen (0,04%), lo que obligó a su revisión y modificación en varios puntos, manteniendo el espíritu del acuerdo inicial y también respondiendo a la exigencia ciudadana de no dar marcha atrás.
              .row
                .col-12
                  .p-4.bg-c4
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src="@/assets/curso/tema2/img1.svg", alt="", style="width: 180px").m-auto
                      .col
                        p.text-white.mb-0 El nuevo acuerdo fue refrendado por el Congreso de la República en noviembre 30 de 2016, y a partir de ese momento y por un espacio de seis meses prorrogables, sus puntos constitutivos serían sometidos a estudio y aprobación por el Congreso de la República. Su desarrollo es un proceso complejo por la amplitud y diversidad de asuntos que conforman los seis puntos de los acuerdos: 1.) reforma rural integral, 2.) participación política, 3.) fin del conflicto, 4.) solución al problema de las drogas ilícitas, 5.) acuerdo sobre las víctimas del conflicto, 6.) implementación, verificación y refrendación, y también por los contextos, los actores y los tiempos para hacerlos posibles y efectivos.
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema2/img2.png", alt="", style="width: 450px").m-auto
          p.mb-0(data-aos="fade-right") Para conocer más sobre los acuerdos de paz con las FARC, lo invitamos a ver el video #[b Explicación de los acuerdos de paz con las FARC], el cual se encuentra en el material complementario.

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
