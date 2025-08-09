export default {
  global: {
    Name: 'Ser agente de cambio',
    Description:
      'La cultura de la paz consiste en una serie de valores, actitudes y comportamientos que rechazan la violencia y previenen los conflictos, teniendo en cuenta los Derechos Humanos. Este proceso es lento ya que significa un cambio de mentalidad individual y colectiva. Dos aspectos claves en el fortalecimiento de una cultura de paz son, por un lado, asumir el conflicto como parte de las dinámicas de las relaciones personales y por otra, el aprendizaje y aplicación de estrategias de transformación de los conflictos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Historia de Colombia en los últimos 50 años de violencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Contexto social y político',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Acuerdos que se han llevado a cabo en Colombia',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentación de los acuerdos de paz',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'La importancia de la cultura de paz',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Resolución de conflictos y negociación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Cultura de paz: concepto ',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Fundamentación de los acuerdos de paz',
      referencia:
        'Fundación ideas para la paz. (2016). Explicación de los acuerdos de paz con las FARC [video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YKmVbr3fRg0',
    },
    {
      tema: 'Fundamentación de los acuerdos de paz',
      referencia:
        'Seidman, J. (2013). Lecciones del proceso de paz Sudafricano. Revista de información y de debate Pueblos.',
      tipo: 'Artículo',
      link: 'https://rebelion.org/lecciones-del-proceso-de-paz-sudafricano/',
    },
    {
      tema: 'Fundamentación de los acuerdos de paz',
      referencia:
        'Presidencia de la República - Colombia. (2017). ¿Qué es el #AcuerdoDePaz? (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IlrzkNKf7cU',
    },
    {
      tema: 'Fundamentación de los acuerdos de paz',
      referencia:
        'VICE News. (2020). Las fallas en la implementación del acuerdo de paz en Colombia (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FNGFbFAowOQ',
    },
  ],
  glosario: [
    {
      termino: 'Conflicto armado',
      significado:
        'el concepto de conflicto armado es muy complejo, ya que hace referencia a todos aquellos enfrentamientos en los que están involucradas las armas y su uso. Los conflictos armados son un fenómeno histórico que existe desde el comienzo de la historia y pueden darse entre distintos pueblos así como también entre el mismo pueblo, es decir, a nivel interno. De cualquier manera, el conflicto armado es muy doloroso ya que produce muertes y mutilaciones de todo tipo, abusos, asesinatos y violencia sin fin que muchas es difícil de controlar, revertir o superar.',
    },
    {
      termino: 'Cultura de Paz',
      significado:
        'según la definición de las Naciones Unidas (1998, Resolución A/52/13), la cultura de paz consiste en una serie de valores, actitudes y comportamientos que rechazan la violencia y previenen los conflictos tratando de atacar sus causas para solucionar los problemas mediante el diálogo y la negociación entre las personas, los grupos y las naciones.',
    },
    {
      termino: 'Guerrilla',
      significado:
        'el concepto está asociado a la partida del grupo de personas que, sin dependencia del Ejército y bajo el mando de un jefe particular, acosa y enfrenta a un enemigo (que, muchas veces, puede ser el propio Ejército de un país).',
    },
    {
      termino: 'Reconciliación',
      significado:
        'la reconciliación es la acción y la consecuencia de reconciliar. Este verbo hace mención a dejar atrás una pelea o un enfrentamiento, retomando una amistad u otro vínculo que se encontraba interrumpido por una desavenencia.',
    },
    {
      termino: 'Resolución de conflictos',
      significado:
        'proceso por el cual un conflicto de carácter interpersonal, intergrupal, interorganizacional o internacional de raíces profundas es resuelto por medios no violentos y de forma relativamente estable, a través, primero, del análisis e identificación de las causas subyacentes al conflicto, y, consiguientemente, del establecimiento de las condiciones estructurales en las que las necesidades e intereses de todas las partes enfrentadas puedan ser satisfechas simultáneamente.',
    },
    {
      termino: 'Violencia',
      significado:
        'la violencia es la cualidad de violento o la acción y efecto de violentar o violentarse. Lo violento, por su parte, es aquello que está fuera de su natural estado, situación o modo; que se ejecuta con fuerza, ímpetu o brusquedad; o que se hace contra el gusto o la voluntad de uno mismo. La violencia, por lo tanto, es un comportamiento deliberado que puede provocar daños físicos o psíquicos al prójimo. Es importante tener en cuenta que, más allá de la agresión física, la violencia puede ser emocional mediante ofensas o amenazas. Por eso la violencia puede causar tanto secuelas físicas como psicológicas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez-Rodríguez, A. A. (2017). Acuerdos y construcción de paz en Colombia: retos a la gobernabilidad y la cultura de paz. Prospectiva, 24, 13-45. Doi: 10.25100/prts.v%vi%i.5872.',
      link: '',
    },
    {
      referencia:
        'Ávila, N. (2015). Los retos en convivencia, administración de justicia y seguridad rural en el posconflicto. Bogotá D.C: Colombia Editorial (FES).',
      link: '',
    },
    {
      referencia:
        'Carrillo, F., Gómez, D. (2020). Mecanismos alternativos de solución en Colombia MASC. Tomo II Colección fortalecimiento institucional y ética. Procuraduría General de la Nación.',
      link: '',
    },
    {
      referencia:
        'Fernández, O. (2006). Una aproximación a la cultura de paz en la escuela. Revista Scielo.',
      link: '',
    },
    {
      referencia: 'King Center, The. (2014). The King Philosophy.',
      link: '',
    },
    {
      referencia:
        'Magallón, C. (2016). La paz en Colombia: decepción, controversia y esperanza. Cultura de Paz, Año 22 (70) P. 4 - 10 • ISSN 2308-2771.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas (ONU). 2015. Objetivos de desarrollo sostenible. 17 objetivos para transformar nuestro mundo.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Educación, Ciencia y la Cultura - UNESCO (2015). Replantear la Educación ¿hacia un bien común mundial?',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas. (1998). Resolución 52/13, Cultura de Paz. Nueva York, Nueva York, EU: Asamblea General, ONU.',
      link: '',
    },
    {
      referencia:
        'Rojas L. Díaz B. Arapé E. Romero S. Rojas A. y Rojas R. (2006). Comunicación, conflictos y cultura de paz: percepción en grupos de estudiantes universitarios. Revista Redalyc.',
      link: '',
    },
    {
      referencia:
        'Seidman, J., (2013). Lecciones del proceso de paz Sudafricano. Revista de información y de debate Pueblos.',
      link: 'https://rebelion.org/lecciones-del-proceso-de-paz-sudafricano/',
    },
    {
      referencia:
        'Villarraga, A. (2015). Biblioteca de la Paz. Los procesos de paz en Colombia, 1982-2014 (Documento resumen). Fundación Cultura Democrática. Gente Nueva Editorial.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mónica Suárez Aya',
          cargo: 'Experta temática',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora Instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de contenidos',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
