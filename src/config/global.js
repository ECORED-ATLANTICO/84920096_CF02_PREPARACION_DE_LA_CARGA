export default {
  global: {
    Name: 'Preservación y embalaje de carga',
    Description:
      'Este componente aborda el aseguramiento de la carga, paletas, embalaje y contenedores, cubriendo conceptos, tipos, características, normativas y métodos de uso. Brinda técnicas para optimizar el transporte, garantizar la seguridad de la mercancía y cumplir con regulaciones, utilizando herramientas como paletas, embalajes adecuados y contenedores según necesidades logísticas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-contenido.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-contenido.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-contenido-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-contenido-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-contenido-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-contenido-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-contenido-decorativo-5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-contenido-decorativo-6.png'),
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
        titulo: 'Aseguramiento de la carga',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Métodos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Normativa',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Paletas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Características',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Métodos de uso',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Embalaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Características',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Métodos de uso',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Técnicas',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Contenedores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Características',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Normativa',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Usos',
            hash: 't_4_5',
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
      tema: 'Paletas',
      referencia:
        'Brain Logistic. (2023). <i>¿Qué es un pallet</i>? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HzjVhHWmAVc',
    },
    {
      tema: 'Contenedores',
      referencia:
        'ARGalliance. (2024). <i>Tipos de contenedores</i>. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0EBpOmCS4JA',
    },
    {
      tema: 'Embalaje',
      referencia:
        'Líder del Emprendimiento. (2019). <i>Tipos de empaque y embalaje</i>. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uQvCZG3n6-o',
    },
  ],
  glosario: [
    {
      termino: 'Aseguramiento de la carga',
      significado:
        'conjunto de técnicas y procedimientos para fijar y proteger la mercancía durante su transporte, almacenamiento y manipulación.',
    },
    {
      termino: 'Bloqueo y calce',
      significado:
        'técnica que utiliza elementos rígidos o semirrígidos para evitar el movimiento de la carga rellenando espacios vacíos.',
    },
    {
      termino: 'Contenedor',
      significado:
        'artículo de transporte equipado con características estructurales que permiten su manipulación, estiba y transporte en múltiples modos.',
    },
    {
      termino: 'CTU',
      significado:
        'código CTU, directrices para el correcto estibado y trincaje de carga en contenedores y unidades de transporte.',
    },
    {
      termino: 'DIAN',
      significado:
        'Dirección de Impuestos y Aduanas Nacionales (Colombia), entidad gubernamental que gestiona los impuestos y el comercio exterior.',
    },
    {
      termino: 'DOT',
      significado:
        'Departamento de Transporte (EE.UU.), que regula el peso máximo, distribución y sujeción de la carga en transporte terrestre.',
    },
    {
      termino: 'Embalaje',
      significado:
        'conjunto de materiales, recipientes o envolturas que protegen, contienen y facilitan el manejo, transporte y almacenamiento de productos.',
    },
    {
      termino: 'Estabilidad',
      significado:
        'condición de la carga que, al estar bien asegurada, evita desplazamientos y accidentes durante el transporte.',
    },
    {
      termino: 'Estiba',
      significado:
        'acción de colocar y asegurar la carga dentro del contenedor para su transporte.',
    },
    {
      termino: '<i>Film</i> estirable',
      significado:
        'material utilizado para agrupar la carga sobre las paletas y facilitar su manejo.',
    },
    {
      termino: 'ISO',
      significado: 'Organización Internacional de Normalización.',
    },
    {
      termino: 'Normativa',
      significado:
        'conjunto de estándares y regulaciones (internacionales, regionales y nacionales) que rigen el aseguramiento de la carga.',
    },
    {
      termino: 'OMI',
      significado:
        'Organización Marítima Internacional, que establece directrices para el estibado y trincaje de carga en contenedores y unidades de transporte.',
    },
    {
      termino: 'Paleta (o <i>palet</i>)',
      significado:
        'plataforma plana, de madera, plástico o metal, utilizada para facilitar el almacenamiento, transporte y manipulación de mercancías.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'característica del embalaje que busca reducir el impacto ambiental.',
    },
    {
      termino: 'Trincaje',
      significado:
        'método de sujeción que utiliza elementos tensores como cinchas, cadenas o cables para fijar la carga.',
    },
  ],
  referencias: [
    {
      referencia:
        'Andes Montacargas. (2024). <i>Tipos de Contenedores: Guía Completa para su Negocio.</i>',
      link: 'https://andesmontacargas.com/tipos-de-contenedores/',
    },
    {
      referencia:
        'Andes Montacargas. (2025). <i>Asegurar la carga: Guía completa para garantizar seguridad y eficiencia.</i>',
      link: 'https://andesmontacargas.com/asegurar-la-carga/',
    },
    {
      referencia:
        'AR Racking. (2024). <i>Embalaje primario, secundario y terciario: Tipos.</i>',
      link:
        'https://www.ar-racking.com/co/blog/embalaje-primario-secundario-y-terciario-tipos-y-sus-funciones/',
    },
    {
      referencia:
        'IPLA Palletizers. (2024). <i>Tipos de palets y sus características.</i>',
      link: 'https://iplapalletizers.com/tipos-de-palets/',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2021). <i>Zajuna Semilla. 136200_1_virtual_1-Servicios postales y transporte de mercancías.</i>',
      link: 'https://zajuna.sena.edu.co/zajuna/course/view.php?id=12441',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
