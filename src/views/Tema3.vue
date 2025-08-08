<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 La importancia de la cultura de paz
    .row.justify-content-center
      .col-12
        .p-4.bg-c4(data-aos="fade-down")
          .row.align-items-center
            .col-md.mb-4.mb-md-0
              p.text-white.mb-0 En este tema, lo invitamos a conocer sobre la resolución de conflictos y negociación y cultura de paz.
            .col-md-auto
              figure
                img(src="@/assets/curso/tema3/img1.svg", alt="", style="width: 180px").m-auto
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1 Resolución de conflictos y negociación
    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .row.align-items-center.h-100
          .col-12
            .p-4.bg-c8
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src="@/assets/curso/tema3/img2.svg", alt="", style="width: 180px").m-auto
                .col-md
                  p.mb-0 Después del proceso de paz realizado por Colombia con el grupo armado “FARC-EP” y el proceso de postconflicto por el cual atraviesa nuestro país, es pertinente hablar acerca del acceso a la justicia que se debe garantizar a todos los ciudadanos, teniendo en cuenta la deficiencia de la justicia tradicional por el gran número de conflictos o desacuerdos que se presentan diariamente en los juzgados. Como solución se ha venido desarrollando una nueva opción en la que las personas tienen la facultad de resolver sus disputas a través de los mecanismos alternativos de solución de conflictos (M.A.S.C.). A continuación, veremos cuáles son sus características y los aportes que estos mecanismos pueden ofrecer a nuestro país en época de posconflicto y a la construcción de una cultura de paz.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/img1.png", alt="", style="width: 450px").m-auto

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
