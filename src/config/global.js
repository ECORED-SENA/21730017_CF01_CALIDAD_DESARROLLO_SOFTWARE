export default {
  global: {
    Name: 'Diseño y calidad del <i>software</i>',
    Description:
      'Este componente orienta la interpretación del diseño de <i>software</i> con base en los requisitos del cliente, los modelos de desarrollo, los modelos de calidad y los estándares aplicables, con el propósito de identificar prácticas que favorezcan la construcción de soluciones funcionales, confiables y acordes con las necesidades de la organización.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
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
        titulo: 'Diseño de <i>software</i> y requisitos del cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y propósito del diseño de <i>software</i>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Interpretación de requisitos y expectativas del cliente',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Elementos del diseño: arquitectura, datos, interfaces y componentes',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Trazabilidad entre requisitos, diseño y calidad',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Modelos de desarrollo de <i>software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Ciclo de vida del <i>software</i>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Modelo en cascada y modelo en espiral',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Desarrollo incremental, iteractivo y ágil',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Modelo de codificación y corrección según el contexto',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Calidad en el desarrollo de <i>software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de calidad de <i>software</i>',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Calidad del producto y calidad del proceso',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Factores de calidad desde la perspectiva del cliente',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Relación entre diseño, desarrollo y calidad',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Modelos de calidad del <i>software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto y utilidad de los modelos de calidad',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Modelo de calidad <i>McCall</i>',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Modelo de calidad <i>Ad hoc</i>',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Comparación de modelos según las necesidades del cliente',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Estándares de calidad del <i>software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto de estándar y norma de calidad',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'ISO 9001 aplicada a procesos de <i>software</i>',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'SPICE como referente para evaluación de procesos',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'CMM y madurez de procesos de <i>software</i>',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Selección e implantación inicial de procesos de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Información organizacional para seleccionar estándares',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Criterios para seleccionar modelos y estándares',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Buenas prácticas de implantación desde el diseño',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Caso práctico de selección de modelo y estándar',
            hash: 't_6_4',
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
  glosario: [
    {
      termino: 'Arquitectura de <i>software</i>',
      significado:
        'estructura general de un sistema que define sus componentes, responsabilidades, relaciones y mecanismos de comunicación.',
    },
    {
      termino: 'Calidad del <i>software</i>',
      significado:
        'grado en que un producto de <i>software</i> cumple los requisitos establecidos y satisface las necesidades de sus usuarios.',
    },
    {
      termino: 'Ciclo de vida del <i>software</i>',
      significado:
        'conjunto de fases por las que pasa un producto, desde la identificación de necesidades hasta su mantenimiento y evolución.',
    },
    {
      termino: 'CMM',
      significado:
        'modelo de madurez que permite caracterizar y mejorar progresivamente los procesos empleados por una organización para desarrollar <i>software</i>.',
    },
    {
      termino: 'Componente de <i>software</i>',
      significado:
        'unidad funcional del sistema que cumple una responsabilidad específica y se relaciona con otros elementos de la solución.',
    },
    {
      termino: 'Diseño de <i>software</i>',
      significado:
        'proceso mediante el cual los requisitos se transforman en una estructura técnica y funcional que orienta la construcción del sistema.',
    },
    {
      termino: 'Estándar de calidad',
      significado:
        'conjunto de criterios, requisitos o lineamientos utilizados como referencia para organizar, controlar y mejorar productos o procesos.',
    },
    {
      termino: 'Factor de calidad',
      significado:
        'característica empleada para determinar si un producto de <i>software</i> cumple determinadas condiciones de funcionamiento, mantenimiento o adaptación.',
    },
    {
      termino: 'ISO 9001',
      significado:
        'norma internacional que establece requisitos para implementar y mantener un sistema de gestión de la calidad en una organización.',
    },
    {
      termino: 'Mantenibilidad',
      significado:
        'capacidad del <i>software</i> para ser corregido, modificado, actualizado o ampliado de manera controlada.',
    },
    {
      termino: 'Modelo de desarrollo',
      significado:
        'enfoque que organiza las actividades y fases necesarias para diseñar, construir, validar, entregar y mantener un producto de <i>software</i>.',
    },
    {
      termino: 'Modelo de calidad',
      significado:
        'estructura que agrupa características y criterios utilizados para especificar, analizar o evaluar la calidad de un producto o proceso.',
    },
    {
      termino: 'Requisito funcional',
      significado:
        'condición que especifica una función, servicio o comportamiento que debe ejecutar el sistema.',
    },
    {
      termino: 'Requisito no funcional',
      significado:
        'condición que define características de calidad, restricciones técnicas o niveles de desempeño que debe cumplir el <i>software</i>.',
    },
    {
      termino: 'SPICE',
      significado:
        'denominación histórica de un marco internacional para evaluar la capacidad y mejorar los procesos de <i>software</i>, actualmente desarrollado por la familia ISO/IEC 330xx.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'capacidad de relacionar los requisitos con el diseño, la construcción, las pruebas y demás elementos del ciclo de vida del <i>software</i>.',
    },
    {
      termino: 'Usabilidad',
      significado:
        'capacidad del <i>software</i> para facilitar que determinados usuarios alcancen sus objetivos de manera eficaz, eficiente y satisfactoria.',
    },
  ],
  referencias: [
    {
      referencia:
        'Beck, K., Beedle, M., van Bennekum, A., Cockburn, A., Cunningham, W., Fowler, M., Grenning, J., Highsmith, J., Hunt, A., Jeffries, R., Kern, J., Marick, B., Martin, R. C., Mellor, S., Schwaber, K., Sutherland, J., & Thomas, D. (2001). Manifesto for Agile Software Development. ',
      link: 'https://agilemanifesto.org/',
    },
    {
      referencia:
        'Boehm, B. W. (1988). A spiral model of software development and enhancement. Computer, 21(5), 61–72. ',
      link: 'https://doi.org/10.1109/2.59',
    },
    {
      referencia:
        'Cavano, J. P., & McCall, J. A. (1978). A framework for the measurement of software quality. ACM SIGMETRICS Performance Evaluation Review, 7(3–4), 133–139. ',
      link: 'https://doi.org/10.1145/800283.811113',
    },
    {
      referencia:
        'González, E. (2025, 4 de agosto). Calidad de un producto: definición, indicadores y cómo mejorarla. ESDESIGN. ',
      link: 'https://www.esdesignbarcelona.com/actualidad/diseno-producto/5-consejos-para-mejorar-la-calidad-de-un-producto',
    },
    {
      referencia:
        'IEEE Computer Society. (2024). Guide to the Software Engineering Body of Knowledge: SWEBOK Guide V4.0. ',
      link: 'https://www.computer.org/education/bodies-of-knowledge/software-engineering',
    },
    {
      referencia:
        'International Organization for Standardization. (2015). Quality management systems—Requirements (ISO Standard No. 9001:2015). ',
      link: 'https://www.iso.org/standard/62085.html',
    },
    {
      referencia:
        'International Organization for Standardization. (2015). Information technology—Process assessment—Concepts and terminology (ISO/IEC Standard No. 33001:2015). ',
      link: 'https://www.iso.org/standard/54175.html',
    },
    {
      referencia:
        'International Organization for Standardization. (2023). Systems and software engineering—Systems and software Quality Requirements and Evaluation (SQuaRE)—Product quality model (ISO/IEC Standard No. 25010:2023). ',
      link: 'https://www.iso.org/standard/78176.html',
    },
    {
      referencia:
        'Paulk, M. C., Curtis, B., Chrissis, M. B., & Weber, C. V. (1993). Capability Maturity Model for Software, version 1.1 (CMU/SEI-93-TR-024). Software Engineering Institute, Carnegie Mellon University. ',
      link: 'https://www.sei.cmu.edu/library/capability-maturity-model-for-software-version-11/',
    },
    {
      referencia:
        'Quiroa, M. (2022, 24 de noviembre). Proceso de calidad. Economipedia. ',
      link: 'https://economipedia.com/definiciones/proceso-de-calidad.html',
    },
    {
      referencia:
        'Universidad El Bosque. (2026, 16 de enero). ¿Qué es arquitectura de software? ',
      link: 'https://www.unbosque.edu.co/educacion-continua/blog-educacion-continua/que-es-arquitectura-de-software',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martinez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortiz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
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
