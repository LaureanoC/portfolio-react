export const allprojects = [
  {
    id: '1',
    title: 'Club de ajedrez',
    desc: 'Aplicación web que permite registrar y ver las partidas de los torneos creados. Consume la API de lichess para crear la partida. He incluido JWT para manejar la autenticación de manera segura.',
    date: 'Abr 16, 2024',
    img: './img/circulo-4.png',
    tech: ['Fast API', 'Svelte', 'mySQL'],
    repo: 'https://github.com/LaureanoC/Circulo-de-Ajedrez',
    imgs: [
      '../img/circulo-1.png',
      '../img/circulo-2.png',
      '../img/circulo-3.png',
      '../img/circulo-4.png',
    ],
    fulldesc:
      'Aplicación web para un club de ajedrez. Permite registrar y ver las partidas de los torneos creados por el club. Cada jugador podrá ver sin iniciar sesión como quedó posicionado en el torneo y ver sus propias partidas a traves de lichess. También puede ver los próximos torneos que se vienen. Por otro lado, el club de ajedrez tiene un apartado para iniciar sesión y registrar un torneo nuevo, partida o jugador. El posicionamiento de los jugadores dentro de un torneo es calculado de forma automática teniendo en cuenta las partidas registradas. Por ultimo, le he implementado JWT para manejar la autenticación de manera segura, de esta forma solo el club con su usuario y contraseña podrá consultar a la REST API.',
  },
  {
    id: '4',
    title: 'TryhardZone',
    desc: 'Proyecto realizado para la Formación ONE de Oracle y Alura Latam. Consta de un comercio electrónico que consume una Fake API REST alojada en Heroku.',
    date: 'May, 2022',
    img: './img/tryhard-1.png',
    tech: ['Javascript Vanilla'],
    repo: 'https://github.com/LaureanoC/TryhardZone',
    imgs: [
      '../img/tryhard-1.png',
      '../img/tryhard-2.png',
      '../img/tryhard-3.png',
      '../img/tryhard-4.png',
      '../img/tryhard-5.png'
    ],
    fulldesc:'Este proyecto está hecho en vanilla javascript, es decir, sin ningún framework que te facilite por ejemplo la creación de componentes. Aquí he aprendido a manipular de una forma mas cercana el DOM, a crear elementos, a anidarlos, a conectarlos y desconectarlos. Este proyecto fue un desafío propuesto por Oracle y Alura Latam, ellos nos proporcionaron el diseño en figma. Extraje imagenes de internet, las modifiqué en photoshop y le dí el toque friki a la página vendiendo videojuegos, peluches de pókemon y camisetas de e-sports. '
  },
  {
    id: '3',
    title: 'Foodtruck',
    desc: 'Este proyecto universitario de un carrito de comidas permite registrar el pedido de tus clientes ya sea por delivery o presencial. Existe la posibilidad de ver los pedidos en curso y en que estado están.',
    date: 'Dic 12, 2023',
    img: './img/sky.png',
    tech: ['Java JDBC', 'Java Servlet', 'mySQL'],
    repo: 'https://github.com/LaureanoC/Java-Foodtruck',
    imgs: [
      '../img/circulo-1.png',
      '../img/circulo-2.png',
      '../img/circulo-3.png',
      '../img/circulo-4.png',
    ],
  },
  {
    id: '2',
    title: 'Dólar Blue',
    desc: 'En esta página web utilicé una api gratuita que brinda la cotización de varias monedas. La página muestra el ultimo valor del dólar blue hasta las 20:00hs. También puedes buscar en el historial los valores anteriores hasta el 2011.',
    date: 'Abr 28, 2023',
    img: './img/dolar-1.png',
    tech: ['Svelte'],
    repo: 'https://github.com/LaureanoC/dolar-blue-actual',
    imgs: [
      '../img/dolar-1.png',
      '../img/dolar-2.png',
    ],
    fulldesc: 'Sitio web para consultar el valor del dólar blue. Este proyecto es muy pequeño pero me sirvió para poner en practica lo aprendido con Svelte. Se puede consultar valores hasta el año 2011. He utilizado una api gratuita de algunos valores monetarios y solo extraje el dólar blue.',
  },
  
  {
    id: '5',
    title: 'Academia',
    desc: 'Sistema que permite registrar profesores, alumnos, anotarse a materias. Utilicé Entity  Framework, winForms y Blazor.',
    date: 'Nov 10, 2023',
    img: './img/sky.png',
    tech: ['.NET', 'sqlServer'],
    repo: 'https://github.com/LaureanoC/TPI-NET',
    imgs: [
      '../img/circulo-1.png',
      '../img/circulo-2.png',
      '../img/circulo-3.png',
      '../img/circulo-4.png',
    ],
  },
]
