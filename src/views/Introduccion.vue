<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5.pb-4
          .row.align-items-center
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/intro/img2.png", alt="", style="width: 300px").m-auto
            .col-lg-9(data-aos="fade-left")
              p En una sociedad marcada por profundas heridas causadas por décadas de conflicto armado, violencia estructural y exclusión, se hace urgente formar sujetos capaces de promover una nueva cultura basada en la convivencia, el respeto, el reconocimiento del otro y la resolución pacífica de conflictos.
              .row.justify-content-center
                .col-md-7.col-lg-7.bg-c2
                  .row.align-items-center.h-100
                    .col
                      .p-4
                        p.mb-0 Este componente permite comprender los procesos históricos del conflicto en Colombia, los múltiples acuerdos de paz alcanzados con distintos actores armados, así como las herramientas jurídicas y sociales orientadas a la consolidación de la paz. Desde esta base, se fortalece el desarrollo de habilidades blandas y competencias ciudadanas que permiten abordar los conflictos cotidianos desde una perspectiva constructiva y transformadora.
                .col-md-7.col-lg-5.ps-lg-0.px-0
                  figure
                    img(src="@/assets/curso/intro/img3.png", alt="", style="width: 430px").m-auto
    .row.bg-c3
      .col-12
        .p-5
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/intro/img1.svg", alt="", style="width: 130px").m-auto
            .col(data-aos="fade-left")
              p.text-white.mb-0 El aprendizaje aquí propuesto articula el análisis crítico de la historia reciente con el estudio de mecanismos alternativos de resolución de conflictos y con la promoción de prácticas restaurativas, apostando a la formación de individuos comprometidos con el cambio social, la reconciliación y la justicia. En este sentido, ser agente de cambio significa ejercer un rol activo en la construcción de entornos pacíficos, participativos y solidarios, en los que la dignidad humana sea el principio rector de toda acción individual y colectiva.

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
