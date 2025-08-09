<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave, actitudes y responsabilidades vinculadas al desarrollo personal y social del agente de cambio en el contexto de la formación ciudadana, la ética y la transformación social.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es un agente de cambio?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una persona que solo busca el cambio individual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alguien que obedece normas sin cuestionarlas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una persona que transforma su entorno desde la conciencia y el compromiso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un líder político que impone decisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué valor es fundamental para actuar como agente de cambio?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Empatía.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sumisión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Indiferencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Resignación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es uno de los principales retos de un agente de cambio?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comprometerse con la transformación de su realidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mantener el <i>statu quo</i>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar el pensamiento crítico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aceptar pasivamente los problemas sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'El agente de cambio se construye a partir de:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La reflexión crítica, la participación y el compromiso social.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La formación académica exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La repetición de conductas sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La obediencia a figuras de autoridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué se busca promover con la acción del agente de cambio?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La transformación social basada en principios éticos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La indiferencia frente al conflicto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El individualismo como eje central.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El poder como fin último.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es la base para desarrollar una ciudadanía activa?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La participación responsable y el ejercicio de los derechos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El aislamiento social.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La cultura del miedo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El cumplimiento pasivo de normas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'La ética como agente de cambio se relaciona con:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La reflexión sobre el bien común y las acciones responsables.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Las leyes impuestas por el Estado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El interés económico individual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La obediencia a figuras religiosas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: 'Uno de los pilares de la ciudadanía ética es:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El respeto por la diversidad y la justicia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El pensamiento único.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La exclusión de los que piensan diferente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La imposición de valores propios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'La transformación social comienza con:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las reformas del gobierno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La presión de los medios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El apoyo de grandes empresas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La conciencia y acción de cada individuo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de los siguientes no es un rasgo de un agente de cambio?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Indiferencia ante la injusticia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Participación activa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Espíritu crítico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Compromiso social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
