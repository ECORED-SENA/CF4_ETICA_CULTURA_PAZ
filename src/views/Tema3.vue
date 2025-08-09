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
    .row.mb-5
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
    .row.mb-4.ms-0
      .col-auto.bg-c9(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema3/img2.png', alt='', style='width: 60px')
          .col
            h3.mb-0 Los mecanismos autocompositivos
    p(data-aos="fade-right") Son aquellos a los cuales las partes acuden por voluntad propia cuando se encuentran frente a una disputa y son ellas mismas quienes toman la decisión del arreglo al cual quieren llegar.
    TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo="Transacción" :icono="require('@/assets/curso/tema3/img4.svg')")
        .row.justify-content-center.align-items-center
          .col-11.col-md-10.col-lg-5.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/img3.png", alt="", style="width: 450px").m-auto
          .col-11.col-md-10.col-lg-6
            p #[b Transacción]
            p.mb-0 Esta clase de mecanismo consiste en que las partes puedan llegar a un acuerdo por voluntad propia, sin la intervención de ningún tercero, anterior a la presentación de un litigio. La figura de la transacción únicamente genera efecto interpartes y después de realizada presta mérito ejecutivo y hace tránsito a cosa juzgada.
      .py-4.py-md-5(titulo="Mediación" :icono="require('@/assets/curso/tema3/img5.svg')")
        .row.justify-content-center.align-items-center
          .col-11.col-md-10.col-lg-5.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/img3.png", alt="", style="width: 450px").m-auto
          .col-11.col-md-10.col-lg-6
            p #[b Mediación]
            p.mb-0 La mediación como su nombre lo indica busca llegar a un punto medio entre las partes que se encuentran en una disputa, en la cual un tercero imparcial llamado mediador los asiste y facilita la comunicación entre las partes, para que estas como protagonistas tomen una decisión que logre satisfacer las necesidades de ambos por medio del diálogo. Un punto importante a tener en cuenta acerca de este mecanismo “es que este carece de efectos jurídicos para las partes”, su cumplimiento se deriva únicamente de la voluntad que estas tengan para cumplir lo pactado, para que la mediación genere efectos jurídicos debe ser llevada ante una notaría o un centro de conciliación (Carrillo, F., Gómez, D. 2020).
      .py-4.py-md-5(titulo="Amigable composición" :icono="require('@/assets/curso/tema3/img6.svg')")
        .row.justify-content-center.align-items-center
          .col-11.col-md-10.col-lg-5.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/img3.png", alt="", style="width: 450px").m-auto
          .col-11.col-md-10.col-lg-6
            p #[b Amigable composición]
            p.mb-0 En este mecanismo la decisión final tomada por el amigable componedor tiene carácter vinculante y de obligatorio cumplimiento para las partes. El amigable componedor es un tercero imparcial designado por las partes que puede ser una persona particular o una entidad. La decisión final pactada debe constar por escrito y presta mérito ejecutivo y hace tránsito a cosa juzgada.
      .py-4.py-md-5(titulo="Conciliación" :icono="require('@/assets/curso/tema3/img7.svg')")
        .row.justify-content-center.align-items-center
          .col-11.col-md-10.col-lg-5.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/img3.png", alt="", style="width: 450px").m-auto
          .col-11.col-md-10.col-lg-6
            p #[b Conciliación]
            p.mb-0 Es un mecanismo de solución de conflictos por excelencia y actualmente el más utilizado por la sociedad colombiana, en el que las partes que tienen una disputa asisten ante un tercero imparcial designado ya sea por las partes o por la legislación colombiana, el cual guía, asiste y propone distintas soluciones a las partes, pero son estas quienes toman la decisión final, pues el conciliador no puede imponerlas. Si las partes logran llegar a un acuerdo, el conciliador lo debe aprobar y estas se encuentran en la obligación de cumplirlo, ya que presta mérito ejecutivo y hace tránsito a cosa juzgada.
    .row.mb-4.ms-0
      .col-auto.bg-c9(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema3/img2.png', alt='', style='width: 60px')
          .col
            h3.mb-0 Los mecanismos heterocompositivos
    p(data-aos="fade-right") En estos mecanismos se resuelven los conflictos cuando un tercero completamente ajeno a las partes impone una decisión a las mismas. Esta vía funciona únicamente cuando alguna de las partes así lo decide. Como mecanismo de solución de conflicto encontramos la vía judicial ordinaria y el arbitraje.
    .row.mb-4
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        ol.lista-ol--cuadro
          li.d-flex
            .lista-ol--cuadro__vineta.v--green
              span A
            |
            p.mb-0 #[b Arbitraje:] el arbitraje consiste en un mecanismo mediante el cual las partes pactan que previa o posteriormente al nacimiento de una controversia estas serán resueltas por medio de un tercero llamado árbitro, el cual decide por medio de un litigio y resuelve el conflicto por medio de un laudo arbitral que es de obligatorio cumplimiento para las partes (Carrillo, F., Gómez, D. 2020).
        .row.mb-3
          .col-12
            .p-4.bg-c10
              p.mb-0 El proyecto de construir una cultura de paz en buena medida no es otra cosa que el reto de abordar los conflictos desde otra mirada, con otras herramientas y con otros propósitos; cuando hablamos de conflictos tenemos que recordar que en ocasiones nos referimos a los conflictos armados; sin embargo, estos los encontramos en los diferentes ámbitos de la vida. Para avanzar en la reconstrucción y en la rehabilitación en este escenario de posconflicto se necesitan estrategias que ayuden a consolidar una cultura de paz, de esta manera los mecanismos alternativos juegan un papel importante en la resolución de controversias de manera pacífica, buscando que las disputas sean resueltas de la mejor forma y otorgando los mayores beneficios, sin necesidad de una confrontación. Los principales mecanismos que resultarían útiles serían: los jueces de paz, los conciliadores en equidad y los conciliadores en derecho.
        ol.lista-ol--cuadro
          li.d-flex
            .lista-ol--cuadro__vineta.v--green
              span B
            |
            p.mb-0 Jueces de paz: el Congreso les dio vida a los jueces de paz mediante la Ley 497 de 1999, un juez de paz representa el derecho del Estado en la comunidad, y mantiene un carácter de institución. Pero a diferencia de otros mecanismos de solución de conflictos, los jueces de paz se encuentran dentro del organigrama del Estado en la Rama Judicial, según expresa Ávila (2015, p.28):
        p.mb-0 #[b Los jueces de paz tienen características importantes como:]
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/img7.png", alt="", style="width: 360px").m-auto
    .row.bg-c11
      .col-12
        .px-5
          .row.align-items-center.mb-4
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema3/img8.png", alt="", style="width: 360px").m-auto
            .col-lg-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6")
                .tarjeta.color-acento-botones.p-3
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema3/img8.svg' alt='AvatarTop')
                  p.text-center #[b 01]
                  p.text-center.mb-0 Ser gestores de convivencia en los lugares y las comunidades donde fueron elegidos.
                .tarjeta.color-acento-botones.p-3
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema3/img9.svg' alt='AvatarTop')
                  p.text-center #[b 02]
                  p.text-center.mb-0 Resuelven de manera rápida, eficaz y eficiente los conflictos que la comunidad somete a su consideración.
                .tarjeta.color-acento-botones.p-3
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema3/img10.svg' alt='AvatarTop')
                  p.text-center #[b 03]
                  p.text-center.mb-0 Son pedagogos en la prevención de conflictos, tarea previa para prevenir, tarea de resolverlos cuando ocurren y tarea posterior de seguimiento.
                .tarjeta.color-acento-botones.p-3
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema3/img11.svg' alt='AvatarTop')
                  p.text-center #[b 04]
                  p.text-center.mb-0 Ayudan a acceder a la justicia porque los ciudadanos de ciertas áreas rurales no pueden hacerlo por la distancia que los separa de las cabeceras municipales o departamentales, garantizando el acceso a la justicia.
                .tarjeta.color-acento-botones.p-3
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema3/img12.svg' alt='AvatarTop')
                  p.text-center #[b 05]
                  p.text-center.mb-0 Desarrollan una actividad de acompañamiento a los problemas de las personas para que no suban de nivel.
          .row
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              ol.lista-ol--cuadro
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span C
                  |
                  p.mb-0 #[b Conciliadores:] es un mecanismo alternativo de solución de conflictos por medio del cual dos o más personas gestionan por sí mismas de manera voluntaria y con plenos efectos jurídicos la solución de sus conflictos con la ayuda de un tercero neutral y calificado, llamado conciliador.
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span D
                  |
                  p.mb-0 #[b Conciliadores en derecho:] cuando se realiza en un centro de conciliación ante un abogado y el trámite se desarrolla en el marco de la normativa vigente.
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span E
                  |
                  p.mb-0 #[b Conciliadores en equidad:] es un mecanismo por medio del cual dos o más personas resuelven sus controversias por intermedio de un tercero neutral llamado conciliador en equidad: es una persona con reconocimiento comunitario, que administra justicia de manera gratuita, motivando a que las personas involucradas en un conflicto consigan de mutuo acuerdo una solución al mismo.
              .row
                .col-12
                  .p-4.bg-c5
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src="@/assets/curso/tema3/img13.svg", alt="", style="width: 180px").m-auto
                      .col-md
                        p.mb-0 Estos mecanismos son complementarios a la justicia tradicional, pero son figuras importantes para la promoción de justicia en zonas rurales en donde después de la firma del acuerdo de paz se pueden generar mayores conflictos y se necesita impartir justicia de manera inmediata. De igual forma, cada persona se debe involucrar con la responsabilidad social que tiene al crear una convivencia integral, respetando y reconociendo al otro, para poder llegar a una nueva cultura de paz.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema3/img10.png", alt="", style="width: 360px").m-auto
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2 Cultura de paz: concepto
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/img11.png", alt="", style="width: 340px").m-auto
      .col-lg-8(data-aos="fade-left")
        .row.mb-3
          .col-12
            .p-4.bg-c12
              p.mb-0 Según la definición de las Naciones Unidas (1998, Res. A/52/13) la cultura de paz consiste en una serie de valores, actitudes y comportamientos que rechazan la violencia y previenen los conflictos, tratando de atacar sus causas para solucionar los problemas mediante el diálogo y la negociación entre las personas, los grupos y las naciones. En igual sentido, la Organización de las Naciones Unidas (ONU) promulga los Objetivos de Desarrollo Sostenible (ODS), 17 objetivos para transformar el mundo; el número 16 corresponde a promover sociedades pacíficas e inclusivas para el desarrollo sostenible, facilitar el acceso a la justicia para todos y crear instituciones eficaces, responsables e inclusivas a todos los niveles. Al respecto afirma que “la paz y la seguridad duraderas en el mundo no pueden existir si no se respetan los Derechos Humanos, y que el desarrollo sostenible no se puede alcanzar sin paz y seguridad” (Organización de las Naciones Unidas, 2015).
        p.mb-0 La Declaración y el Programa de Acción sobre una Cultura de Paz (1999, Res. A/53/243) identifica ocho ámbitos de acción para los actores al nivel local, nacional e internacional que proponen:
    .row.bg-c13.mb-5
      .col-12
        .px-5.pt-5
          .row.align-items-center.justify-content-center
            .col-xl-6.mb-5.mb-xl-0(data-aos="fade-right")
              .row
                .col-12
                  .p-3.bg-c14
                    p #[b Ámbitos de acción]
                    ol.lista-ol--cuadro.mb-0
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 1
                        |
                        p.mb-0 Promover una cultura de paz por medio de la educación.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 2
                        |
                        p.mb-0 Promover el desarrollo económico y social sostenible.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 3
                        |
                        p.mb-0 Promover el respeto de todos los Derechos Humanos.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 4
                        |
                        p.mb-0 Garantizar la igualdad entre mujeres y hombres.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 5
                        |
                        p.mb-0 Promover la participación democrática.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 6
                        |
                        p.mb-0 Promover la comprensión, la tolerancia y la solidaridad.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 7
                        |
                        p.mb-0 Apoyar la comunicación participativa y la libre circulación de información y conocimientos.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 8
                        |
                        p.mb-0 Promover la paz y la seguridad internacional.
            .col-lg-5.d-none.d-xl-block(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema3/img14.svg", alt="", style="width: 480px").m-auto
    .row.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .row.mb-3
          .col-12
            .p-4.bg-c10
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src="@/assets/curso/tema3/img15.svg", alt="", style="width: 180px").m-auto
                .col-md
                  p.mb-0 La resolución y transformación de conflictos implica habilidades para resolver problemas entre individuos, grupos, organizaciones y naciones. La siguiente metodología recomendada por el Centro Martin Luther King para el Cambio Social No Violento comprende seis pasos en la resolución de problemas: 1) reunir información acerca del conflicto y sus participantes, 2) presentar todos los lados de la disputa, 3) comprometerse a resolver el conflicto sin el uso de la fuerza, 4) negociar un acuerdo satisfactorio para todas las partes, 5) llevar el acuerdo a la acción e 6) intentar la reconciliación de las partes y evaluar las acciones efectuadas.
        p.mb-0 Todo lo anterior requiere de habilidades específicas que se pueden enseñar y aprender en las áreas de orientación, percepción, manejo de las emociones, comunicación y creatividad (Bodine y Crawford, 1998 citado en Díaz s.f.; King Center, 2014).
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/img13.png", alt="", style="width: 380px").m-auto
    TabsA.color-acento-botones.mb-4
      .tarjeta.color-acento-botones1.p-4(titulo="De orientación")
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            p #[b De orientación]
            p.mb-0 Ciertas actitudes y habilidades generales son esenciales para la transformación de conflictos. Entre ellas están las siguientes: no violencia, compasión, equidad, justicia, confianza, respeto, tolerancia, diversidad y aprecio por la controversia pacífica.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema3/img16.svg", alt="", style="width: 200px").m-auto
      .tarjeta.color-acento-botones1.p-4(titulo="De Percepción")
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            p #[b De Percepción]
            p.mb-0 Las habilidades de percepción nos comunican que los conflictos no se dan únicamente en la realidad, sino también en la forma en que las personas perciben esa realidad. Estas destrezas son: empatía, autoevaluación, suspensión de juicios y culpas, y reformulación de problemas.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema3/img17.svg", alt="", style="width: 200px").m-auto
      .tarjeta.color-acento-botones1.p-4(titulo="Manejo de las emociones")
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            p #[b Manejo de las emociones]
            p.mb-0 Para la transformación de los conflictos es necesario desarrollar comportamientos dirigidos a la adecuada expresión de sentimientos como la ira, la frustración y el miedo. Para lograrlo, lo más importante es el ejercicio del autocontrol para evitar reaccionar de manera desfavorable a las emociones de otros. Promover este tipo de habilidades incrementa la autoconfianza y el autodominio, capacidades necesarias para transformar los conflictos.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema3/img18.svg", alt="", style="width: 200px").m-auto
      .tarjeta.color-acento-botones1.p-4(titulo="De comunicación")
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            p #[b De comunicación]
            p.mb-0 Las destrezas comunicativas que facilitan la resolución de conflictos tienen relación con los actos de hablar y escuchar (escucha activa), el intercambio efectivo de percepciones de hechos y de los sentimientos que las acompañan.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema3/img19.svg", alt="", style="width: 200px").m-auto
      .tarjeta.color-acento-botones1.p-4(titulo="De pensamiento creativo")
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            p #[b De pensamiento creativo]
            p.mb-0 Las habilidades para el pensamiento creativo capacitan a las personas para la innovación en la definición de problemas y en la toma de decisiones. Entre las más importantes se encuentran la apertura de perspectivas para poder contemplar los problemas desde varios ángulos, la colaboración, así como el cultivo de los pensamientos lateral y lógico para la generación y corrección de ideas.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema3/img20.svg", alt="", style="width: 200px").m-auto
    .row
      .col-12
        .p-4.bg-c4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema3/img21.svg", alt="", style="width: 130px").m-auto
            .col-md(data-aos="fade-left")
              p.text-white La construcción de una cultura de paz requiere un compromiso de todos los actores involucrados, esto lleva a una transformación de la sociedad, resignificar el conflicto como oportunidad de cambio. Esta perspectiva genera nuevas dinámicas sociales más dispuestas al diálogo, el entendimiento, los acuerdos y la actuación basada en valores.
              p.text-white.mb-0 “Trabajar por la paz es trabajar por uno mismo. Es llenarse de valores para verlos en los demás”. Líder Campesina. Valencia, Córdoba.

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
