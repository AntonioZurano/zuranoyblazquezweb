import type { Locale } from '@types/locale';
import type { LegalSection } from '@types/legal';

const legalNoticeEs: LegalSection[] = [
  {
    title: '1. Información general e identificación del titular',
    blocks: [
      {
        type: 'p',
        text: 'En cumplimiento de lo dispuesto en la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico —en adelante, «LSSI-CE»—, se facilita a los usuarios la siguiente información identificativa del titular de este sitio web:',
      },
      { type: 'labeled', label: 'Titular:', text: 'ZURANO Y BLÁZQUEZ, S.L.' },
      { type: 'labeled', label: 'CIF:', text: 'B30571939' },
      {
        type: 'labeled',
        label: 'Domicilio social:',
        text: 'Camino La Noria, n.º 8, Diputación de La Escucha, 30813 Lorca, Murcia',
      },
      { type: 'labeled', label: 'Teléfono:', text: '617 414 350' },
      { type: 'p-email', before: 'Correo electrónico: ', after: '' },
      {
        type: 'p-link',
        before: 'Sitio web: ',
        linkText: 'https://zuranoyblazquez.com',
        href: 'https://zuranoyblazquez.com',
        external: true,
      },
      {
        type: 'labeled',
        label: 'Datos de constitución:',
        text: 'Sociedad constituida mediante escritura pública número 2025/3261, de fecha 26 de noviembre de 2025, autorizada por el notario D. Mariano Expósito Gil-Albaladejo.',
      },
      {
        type: 'labeled',
        label: 'Datos registrales:',
        text: 'Inscrita en el Registro Mercantil de Murcia el 11 de diciembre de 2025, en la hoja registral MU-26221, inscripciones 3 y 4. IRUS: 1000138606148.',
      },
      {
        type: 'p',
        text: 'En adelante, ZURANO Y BLÁZQUEZ, S.L. podrá ser denominada el titular, la empresa o el prestador.',
      },
      {
        type: 'p-link',
        before:
          'La información identificativa y de contacto del prestador debe permanecer accesible por medios electrónicos de forma permanente, fácil, directa y gratuita, de conformidad con el ',
        linkText: 'artículo 10 de la LSSI-CE',
        href: 'https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758',
        after: '.',
        external: true,
      },
    ],
  },
  {
    title: '2. Objeto del sitio web',
    blocks: [
      {
        type: 'p',
        text: 'El presente sitio web tiene como finalidad ofrecer información sobre ZURANO Y BLÁZQUEZ, S.L., su actividad y los productos y servicios que comercializa o presta.',
      },
      {
        type: 'p',
        text: 'Entre estos servicios pueden encontrarse:',
      },
      {
        type: 'ul',
        items: [
          'Desarrollo, diseño y mantenimiento de páginas web.',
          'Desarrollo de aplicaciones y soluciones digitales.',
          'Alojamiento de páginas web y administración de servidores.',
          'Registro, renovación y gestión de nombres de dominio.',
          'Servicios profesionales de correo electrónico.',
          'Comercialización, configuración y soporte de soluciones Microsoft 365.',
          'Servicios relacionados con software y sistemas informáticos.',
          'Soporte técnico, consultoría y mantenimiento informático.',
          'Automatización de procesos y soluciones tecnológicas.',
          'Cualquier otro producto o servicio tecnológico ofrecido por ZURANO Y BLÁZQUEZ, S.L.',
        ],
      },
      {
        type: 'p',
        text: 'La información publicada en el sitio web tiene carácter general e informativo y no constituye, por sí sola, una oferta contractual vinculante, salvo que se indique expresamente lo contrario.',
      },
      {
        type: 'p',
        text: 'Las condiciones concretas de cada producto o servicio se establecerán en el presupuesto, pedido, contrato, propuesta comercial o condiciones particulares correspondientes.',
      },
    ],
  },
  {
    title: '3. Usuarios y aceptación de las condiciones',
    blocks: [
      {
        type: 'p',
        text: 'El acceso, navegación y utilización del sitio web atribuyen la condición de usuario e implican la aceptación de las condiciones establecidas en este Aviso Legal.',
      },
      {
        type: 'p',
        text: 'El usuario deberá leer este Aviso Legal cada vez que acceda al sitio web, puesto que su contenido podrá ser modificado.',
      },
      {
        type: 'p',
        text: 'Cuando el usuario no esté de acuerdo con alguna de estas condiciones, deberá abstenerse de utilizar el sitio web.',
      },
      {
        type: 'p',
        text: 'La utilización o contratación de determinados productos o servicios podrá estar sometida a presupuestos, contratos o condiciones particulares que deberán ser aceptados expresamente por el usuario.',
      },
    ],
  },
  {
    title: '4. Condiciones de acceso y utilización',
    blocks: [
      {
        type: 'p',
        text: 'El acceso al sitio web tiene, con carácter general, naturaleza libre y gratuita, sin perjuicio del coste de conexión aplicado por el proveedor de telecomunicaciones del usuario.',
      },
      {
        type: 'p',
        text: 'El usuario se compromete a utilizar el sitio web, sus contenidos y servicios:',
      },
      {
        type: 'ul',
        items: [
          'De conformidad con la legislación vigente.',
          'De acuerdo con este Aviso Legal.',
          'Respetando la buena fe, el orden público y los derechos de terceros.',
          'Sin causar daños en los sistemas físicos, lógicos o tecnológicos del titular o de terceros.',
          'Sin introducir o difundir virus, código malicioso o cualquier otro elemento perjudicial.',
        ],
      },
      {
        type: 'p',
        text: 'Queda expresamente prohibido:',
      },
      {
        type: 'ul',
        items: [
          'Utilizar el sitio web con fines ilícitos, fraudulentos, lesivos o contrarios a la buena fe.',
          'Acceder o intentar acceder sin autorización a áreas restringidas, servidores, cuentas, sistemas o bases de datos.',
          'Eludir, desactivar o manipular las medidas de seguridad del sitio web.',
          'Realizar ataques de denegación de servicio o cualquier actuación que pueda sobrecargar o perjudicar la infraestructura.',
          'Introducir malware, virus, troyanos, ransomware, scripts maliciosos o cualquier otro código perjudicial.',
          'Suplantar la identidad de otras personas físicas o jurídicas.',
          'Utilizar los formularios para enviar spam, publicidad no solicitada o mensajes automatizados.',
          'Recoger, extraer o reutilizar contenidos o datos mediante técnicas automatizadas de scraping, crawling o similares sin autorización.',
          'Reproducir, copiar, distribuir, modificar o explotar los contenidos sin autorización del titular.',
          'Utilizar los datos de contacto publicados para enviar comunicaciones comerciales no solicitadas.',
        ],
      },
      {
        type: 'p',
        text: 'ZURANO Y BLÁZQUEZ, S.L. podrá limitar, suspender o bloquear el acceso de aquellos usuarios que incumplan estas condiciones, sin perjuicio de las acciones legales que puedan corresponder.',
      },
    ],
  },
  {
    title: '5. Formularios de contacto',
    blocks: [
      {
        type: 'p',
        text: 'El sitio web puede disponer de formularios destinados a solicitar información, presupuestos o contacto comercial.',
      },
      {
        type: 'p',
        text: 'Los datos introducidos en los formularios se envían por correo electrónico a ZURANO Y BLÁZQUEZ, S.L.',
      },
      {
        type: 'p',
        text: 'Los formularios:',
      },
      {
        type: 'ul',
        items: [
          'No almacenan los mensajes en una base de datos propia del sitio web.',
          'No crean cuentas de usuario.',
          'No generan una suscripción automática a una newsletter.',
          'No implican la contratación automática de ningún producto o servicio.',
          'No obligan a ZURANO Y BLÁZQUEZ, S.L. a aceptar la solicitud recibida.',
        ],
      },
      {
        type: 'p',
        text: 'El envío de un formulario acredita únicamente que el usuario ha remitido una consulta o solicitud.',
      },
      {
        type: 'p',
        text: 'La contratación de servicios requerirá, cuando proceda, la aceptación expresa de un presupuesto, pedido, contrato o condiciones particulares.',
      },
      {
        type: 'p',
        text: 'El usuario deberá facilitar datos verdaderos, exactos, completos, actualizados y suficientes para atender su solicitud.',
      },
      {
        type: 'p-link',
        before:
          'El tratamiento de los datos personales enviados mediante los formularios se regula en la ',
        linkText: 'Política de Privacidad',
        href: '/politica-de-privacidad/',
        after: ' del sitio web.',
      },
    ],
  },
  {
    title: '6. Contratación de productos y servicios',
    blocks: [
      {
        type: 'p',
        text: 'La información sobre productos, servicios, características o precios publicada en el sitio web tiene carácter orientativo, salvo que se indique expresamente lo contrario.',
      },
      {
        type: 'p',
        text: 'La contratación efectiva de un producto o servicio podrá estar condicionada a:',
      },
      {
        type: 'ul',
        items: [
          'La disponibilidad del producto o servicio.',
          'La aceptación expresa de un presupuesto o propuesta comercial.',
          'La comprobación de los datos del cliente.',
          'El cumplimiento de los requisitos técnicos o administrativos correspondientes.',
          'El pago de los importes acordados.',
          'La aceptación de las condiciones particulares aplicables.',
        ],
      },
      {
        type: 'p',
        text: 'Los precios, impuestos, formas de pago, alcance del servicio, duración, renovaciones, soporte y demás condiciones se especificarán en el presupuesto, pedido, factura, contrato o propuesta correspondiente.',
      },
      {
        type: 'p',
        text: 'En caso de contradicción entre este Aviso Legal y unas condiciones particulares expresamente aceptadas por el cliente, prevalecerán las condiciones particulares respecto del producto o servicio contratado.',
      },
    ],
  },
  {
    title: '7. Nombres de dominio, licencias y servicios de terceros',
    blocks: [
      {
        type: 'p',
        text: 'Algunos productos o servicios comercializados por ZURANO Y BLÁZQUEZ, S.L., como nombres de dominio, licencias de software, alojamiento web, servicios de correo electrónico o servicios en la nube, dependen de proveedores, fabricantes, distribuidores, registros o plataformas de terceros.',
      },
      {
        type: 'p',
        text: 'La disponibilidad de un nombre de dominio no quedará garantizada hasta que su registro haya sido confirmado por la entidad registradora correspondiente.',
      },
      {
        type: 'p',
        text: 'Los servicios de terceros pueden estar sujetos a:',
      },
      {
        type: 'ul',
        items: [
          'Sus propias condiciones de contratación y uso.',
          'Sus políticas de privacidad y seguridad.',
          'Requisitos y limitaciones técnicas.',
          'Restricciones territoriales.',
          'Políticas de renovación, suspensión o cancelación.',
          'Modificaciones de precio, características o disponibilidad decididas por el proveedor o fabricante.',
        ],
      },
      {
        type: 'p',
        text: 'ZURANO Y BLÁZQUEZ, S.L. no será responsable de cambios, interrupciones o decisiones imputables exclusivamente a dichos terceros, sin perjuicio de las obligaciones que legal o contractualmente le correspondan frente al cliente.',
      },
    ],
  },
  {
    title: '8. Propiedad intelectual e industrial',
    blocks: [
      {
        type: 'p',
        text: 'Todos los contenidos del sitio web, salvo indicación expresa en contrario, son titularidad de ZURANO Y BLÁZQUEZ, S.L. o se utilizan con autorización o licencia de sus respectivos titulares.',
      },
      {
        type: 'p',
        text: 'Entre estos contenidos se incluyen, con carácter enunciativo y no limitativo:',
      },
      {
        type: 'ul',
        items: [
          'Textos.',
          'Fotografías e imágenes.',
          'Logotipos.',
          'Marcas y nombres comerciales.',
          'Diseños gráficos.',
          'Iconos.',
          'Vídeos y audios.',
          'Estructura y diseño del sitio web.',
          'Código fuente y código ejecutable.',
          'Código HTML, CSS, JavaScript, TypeScript, Astro o Node.js.',
          'Bases de datos.',
          'Documentos descargables.',
          'Aplicaciones y programas informáticos.',
          'Cualquier otro contenido o elemento tecnológico.',
        ],
      },
      {
        type: 'p',
        text: 'Estos contenidos están protegidos por la normativa española, europea e internacional en materia de propiedad intelectual e industrial.',
      },
      {
        type: 'p',
        text: 'El acceso al sitio web no concede al usuario ningún derecho de propiedad, licencia, cesión o autorización sobre los contenidos, salvo el derecho limitado a visualizarlos y utilizarlos de manera personal, legítima y conforme a este Aviso Legal.',
      },
      {
        type: 'p',
        text: 'Queda prohibida, sin autorización previa y por escrito del titular:',
      },
      {
        type: 'ul',
        items: [
          'La reproducción total o parcial.',
          'La distribución.',
          'La comunicación pública.',
          'La transformación.',
          'La modificación.',
          'La extracción o reutilización.',
          'La comercialización.',
          'La puesta a disposición de terceros.',
          'La eliminación o manipulación de avisos de propiedad intelectual o industrial.',
        ],
      },
      {
        type: 'p',
        text: 'Las marcas, logotipos, nombres comerciales y demás elementos identificativos pertenecientes a terceros son propiedad de sus respectivos titulares.',
      },
      {
        type: 'p',
        text: 'La aparición de marcas de terceros en el sitio web no implica necesariamente la existencia de una relación de asociación, colaboración, patrocinio o aprobación, salvo que se indique expresamente.',
      },
    ],
  },
  {
    title: '9. Desarrollo, alojamiento y funcionamiento técnico',
    blocks: [
      {
        type: 'p',
        text: 'El sitio web ha sido desarrollado mediante tecnologías como Astro y Node.js.',
      },
      {
        type: 'p',
        text: 'El sitio web se ejecuta en un servidor privado virtual —VPS— administrado por ZURANO Y BLÁZQUEZ, S.L. y contratado a Profesional Hosting como proveedor de infraestructura.',
      },
      {
        type: 'p',
        text: 'ZURANO Y BLÁZQUEZ, S.L. adopta medidas razonables para mantener el sitio web disponible, actualizado y seguro. No obstante, no puede garantizar:',
      },
      {
        type: 'ul',
        items: [
          'La disponibilidad permanente e ininterrumpida.',
          'La ausencia absoluta de errores.',
          'La inexistencia de vulnerabilidades.',
          'La compatibilidad con todos los dispositivos, sistemas operativos y navegadores.',
          'La ausencia de virus u otros elementos dañinos introducidos por terceros.',
          'La recuperación inmediata ante cualquier incidencia técnica.',
        ],
      },
      {
        type: 'p',
        text: 'El acceso al sitio web podrá suspenderse temporalmente por:',
      },
      {
        type: 'ul',
        items: [
          'Operaciones de mantenimiento.',
          'Actualizaciones.',
          'Migraciones.',
          'Fallos del servidor o de las telecomunicaciones.',
          'Incidentes de seguridad.',
          'Ataques informáticos.',
          'Interrupciones del proveedor de infraestructura.',
          'Averías.',
          'Causas de fuerza mayor.',
        ],
      },
      {
        type: 'p',
        text: 'Cuando sea razonablemente posible, ZURANO Y BLÁZQUEZ, S.L. procurará reducir la duración y el impacto de estas interrupciones.',
      },
    ],
  },
  {
    title: '10. Exactitud y actualización de la información',
    blocks: [
      {
        type: 'p',
        text: 'ZURANO Y BLÁZQUEZ, S.L. procura que la información publicada en el sitio web sea correcta y esté actualizada.',
      },
      {
        type: 'p',
        text: 'No obstante, pueden existir:',
      },
      {
        type: 'ul',
        items: [
          'Errores u omisiones.',
          'Información pendiente de actualización.',
          'Cambios en precios o características.',
          'Modificaciones realizadas por fabricantes o proveedores.',
          'Contenidos que hayan quedado temporalmente desactualizados.',
        ],
      },
      {
        type: 'p',
        text: 'ZURANO Y BLÁZQUEZ, S.L. podrá modificar, corregir, actualizar o eliminar los contenidos del sitio web en cualquier momento.',
      },
      {
        type: 'p',
        text: 'La información publicada no sustituye el asesoramiento profesional personalizado ni las condiciones concretas recogidas en un presupuesto, pedido o contrato.',
      },
    ],
  },
  {
    title: '11. Exclusión de responsabilidad',
    blocks: [
      {
        type: 'p',
        text: 'Dentro de los límites permitidos por la legislación aplicable, ZURANO Y BLÁZQUEZ, S.L. no será responsable de los daños derivados de:',
      },
      {
        type: 'ul',
        items: [
          'El uso indebido del sitio web.',
          'El incumplimiento de este Aviso Legal por parte del usuario.',
          'Decisiones adoptadas exclusivamente a partir de información general publicada en el sitio web.',
          'Interrupciones, errores técnicos o falta de disponibilidad.',
          'Fallos de conexión o telecomunicaciones.',
          'Actuaciones maliciosas de terceros.',
          'Virus, malware, ataques informáticos o accesos no autorizados.',
          'Incompatibilidades con dispositivos, navegadores o sistemas operativos.',
          'Contenidos o servicios ofrecidos por páginas externas.',
          'Información falsa, incorrecta o incompleta proporcionada por el usuario.',
          'Actuaciones de proveedores o plataformas de terceros.',
          'Causas de fuerza mayor.',
        ],
      },
      {
        type: 'p',
        text: 'Esta limitación no afectará a las responsabilidades que legalmente no puedan ser excluidas o limitadas, especialmente cuando el usuario tenga la condición de consumidor.',
      },
    ],
  },
  {
    title: '12. Enlaces externos',
    blocks: [
      {
        type: 'p',
        text: 'El sitio web puede contener enlaces a páginas, plataformas, aplicaciones o servicios administrados por terceros.',
      },
      {
        type: 'p',
        text: 'Estos enlaces se ofrecen para ampliar información o facilitar el acceso a determinados contenidos o servicios.',
      },
      {
        type: 'p',
        text: 'ZURANO Y BLÁZQUEZ, S.L.:',
      },
      {
        type: 'ul',
        items: [
          'No controla las páginas externas.',
          'No garantiza su disponibilidad, seguridad o legalidad.',
          'No es responsable de sus contenidos.',
          'No es responsable de sus políticas de privacidad o cookies.',
          'No responde de los productos o servicios ofrecidos por terceros.',
          'No asume responsabilidad por los daños derivados de su utilización.',
        ],
      },
      {
        type: 'p',
        text: 'La inclusión de un enlace no implica necesariamente la existencia de una relación comercial, asociación, recomendación, patrocinio o aprobación del tercero.',
      },
      {
        type: 'p',
        text: 'El usuario deberá revisar las condiciones legales y las políticas de privacidad y cookies de cada sitio externo antes de utilizarlo o facilitar datos personales.',
      },
    ],
  },
  {
    title: '13. Enlaces hacia este sitio web',
    blocks: [
      {
        type: 'p',
        text: 'Se permite establecer enlaces hacia la página principal del sitio web siempre que:',
      },
      {
        type: 'ul',
        items: [
          'El enlace sea lícito.',
          'No cause perjuicio a la imagen o reputación de ZURANO Y BLÁZQUEZ, S.L.',
          'No se indique falsamente que existe una relación, colaboración, patrocinio o autorización.',
          'No se utilicen las marcas o logotipos del titular sin autorización.',
          'No se presente el sitio web dentro de marcos o frames que alteren su visualización.',
          'La página de origen no contenga contenidos ilícitos, engañosos, ofensivos, discriminatorios o perjudiciales.',
        ],
      },
      {
        type: 'p',
        text: 'ZURANO Y BLÁZQUEZ, S.L. podrá solicitar la retirada de cualquier enlace que incumpla estas condiciones.',
      },
    ],
  },
  {
    title: '14. Protección de datos personales',
    blocks: [
      {
        type: 'p',
        text: 'Los datos personales facilitados mediante el sitio web serán tratados conforme al Reglamento General de Protección de Datos, la Ley Orgánica 3/2018 y demás normativa aplicable.',
      },
      {
        type: 'p-link',
        before:
          'La información relativa al responsable del tratamiento, finalidades, bases jurídicas, conservación, destinatarios, transferencias internacionales y ejercicio de derechos está disponible en la ',
        linkText: 'Política de Privacidad',
        href: '/politica-de-privacidad/',
        after: '.',
      },
      {
        type: 'p',
        text: 'El acceso al sitio web no exige, con carácter general, que el usuario facilite datos personales.',
      },
      {
        type: 'p-link',
        before:
          'Cuando se obtengan datos directamente del interesado, deberá proporcionarse la información exigida por el ',
        linkText: 'artículo 13 del Reglamento General de Protección de Datos',
        href: 'https://www.boe.es/doue/2016/119/L00001-00088.pdf',
        after: '.',
        external: true,
      },
    ],
  },
  {
    title: '15. Cookies',
    blocks: [
      {
        type: 'p',
        text: 'Este sitio web no utiliza cookies de análisis, publicidad ni seguimiento.',
      },
      {
        type: 'p',
        text: 'Únicamente emplea `localStorage` del navegador para recordar preferencias técnicas del usuario, como el modo claro u oscuro (clave `zb-theme`).',
      },
      {
        type: 'p',
        text: 'Mientras se mantenga esta configuración, descrita en la Política de Cookies, no se muestra un banner de consentimiento de cookies.',
      },
      {
        type: 'p-link',
        before:
          'La información detallada sobre el almacenamiento local utilizado se encuentra en la ',
        linkText: 'Política de Cookies',
        href: '/politica-de-cookies/',
        after: '.',
      },
    ],
  },
  {
    title: '16. Comunicaciones comerciales',
    blocks: [
      {
        type: 'p',
        text: 'El envío de una consulta mediante los formularios o mediante correo electrónico no implica la suscripción automática a comunicaciones comerciales.',
      },
      {
        type: 'p',
        text: 'ZURANO Y BLÁZQUEZ, S.L. no enviará comunicaciones comerciales electrónicas no solicitadas cuando no exista consentimiento u otra base jurídica que lo permita.',
      },
      {
        type: 'p',
        text: 'Cuando el usuario reciba una comunicación comercial, podrá solicitar su baja mediante el procedimiento indicado en el propio mensaje o escribiendo a:',
      },
      { type: 'p-email', before: '', after: '' },
      {
        type: 'p',
        text: 'La solicitud de baja no afectará a las comunicaciones necesarias para gestionar productos o servicios contratados.',
      },
    ],
  },
  {
    title: '17. Seguridad del sitio web',
    blocks: [
      {
        type: 'p',
        text: 'ZURANO Y BLÁZQUEZ, S.L. adopta medidas técnicas y organizativas razonables para proteger el sitio web, el servidor y sus sistemas.',
      },
      {
        type: 'p',
        text: 'Estas medidas pueden incluir:',
      },
      {
        type: 'ul',
        items: [
          'Conexiones cifradas mediante HTTPS.',
          'Certificados digitales.',
          'Cortafuegos.',
          'Control de acceso al servidor.',
          'Gestión segura de usuarios y credenciales.',
          'Actualización de sistemas y dependencias.',
          'Copias de seguridad.',
          'Registros técnicos y de seguridad.',
          'Mecanismos de detección y prevención de accesos no autorizados.',
          'Limitación del acceso a personas autorizadas.',
        ],
      },
      {
        type: 'p',
        text: 'El usuario reconoce que ningún sistema conectado a Internet puede garantizar una seguridad absoluta.',
      },
      {
        type: 'p',
        text: 'El usuario deberá proteger adecuadamente sus dispositivos, conexiones, cuentas y contraseñas.',
      },
    ],
  },
  {
    title: '18. Comunicación de contenidos o conductas ilícitas',
    blocks: [
      {
        type: 'p',
        text: 'Cuando un usuario considere que existe en el sitio web algún contenido ilícito, contrario a derechos de terceros o que vulnere este Aviso Legal, podrá comunicarlo a:',
      },
      { type: 'p-email', before: '', after: '' },
      {
        type: 'p',
        text: 'La comunicación deberá identificar suficientemente:',
      },
      {
        type: 'ul',
        items: [
          'Al remitente.',
          'El contenido o conducta denunciada.',
          'Su localización concreta dentro del sitio web.',
          'Los motivos por los que se considera ilícita.',
          'La información o documentación que permita analizar la solicitud.',
        ],
      },
      {
        type: 'p',
        text: 'ZURANO Y BLÁZQUEZ, S.L. examinará las comunicaciones recibidas y adoptará, cuando corresponda, las medidas razonables necesarias.',
      },
      {
        type: 'p',
        text: 'La recepción de una comunicación no implica el reconocimiento automático de la existencia de una infracción.',
      },
    ],
  },
  {
    title: '19. Modificación del Aviso Legal',
    blocks: [
      {
        type: 'p',
        text: 'ZURANO Y BLÁZQUEZ, S.L. podrá modificar este Aviso Legal para adaptarlo a:',
      },
      {
        type: 'ul',
        items: [
          'Cambios legislativos o reglamentarios.',
          'Criterios administrativos o judiciales.',
          'Nuevos productos o servicios.',
          'Cambios tecnológicos.',
          'Modificaciones en el funcionamiento del sitio web.',
          'Cambios en los proveedores utilizados.',
          'Nuevos riesgos o necesidades de seguridad.',
        ],
      },
      {
        type: 'p',
        text: 'La versión publicada en cada momento será aplicable desde la fecha de su actualización.',
      },
      {
        type: 'p',
        text: 'Se recomienda al usuario consultar periódicamente este Aviso Legal.',
      },
    ],
  },
  {
    title: '20. Nulidad parcial',
    blocks: [
      {
        type: 'p',
        text: 'Cuando alguna disposición de este Aviso Legal sea declarada nula, inválida o inaplicable, dicha circunstancia no afectará a la validez del resto de las disposiciones.',
      },
      {
        type: 'p',
        text: 'La cláusula afectada se interpretará o sustituirá, cuando resulte posible, por otra válida que produzca un efecto equivalente y respete la normativa aplicable.',
      },
    ],
  },
  {
    title: '21. Legislación aplicable y jurisdicción',
    blocks: [
      {
        type: 'p',
        text: 'Este Aviso Legal se regirá por la legislación española y por la normativa de la Unión Europea que resulte aplicable.',
      },
      {
        type: 'p',
        text: 'Cuando el usuario actúe como consumidor o usuario, cualquier controversia se someterá a los juzgados y tribunales que correspondan conforme a la legislación aplicable, sin que este Aviso Legal limite sus derechos ni imponga un fuero distinto del previsto legalmente.',
      },
      {
        type: 'p',
        text: 'Cuando el usuario actúe como empresario o profesional y la legislación permita pactar la competencia territorial, las partes se someten a los juzgados y tribunales de Lorca, Murcia, salvo que se haya acordado expresamente otra cosa.',
      },
      {
        type: 'p',
        text: 'Antes de iniciar acciones judiciales, las partes procurarán resolver de buena fe cualquier controversia mediante una comunicación previa.',
      },
    ],
  },
  {
    title: '22. Contacto',
    blocks: [
      {
        type: 'p',
        text: 'Para cualquier consulta relacionada con el sitio web o con este Aviso Legal, el usuario puede contactar con ZURANO Y BLÁZQUEZ, S.L. mediante los siguientes medios:',
      },
      { type: 'p-email', before: 'Correo electrónico: ', after: '' },
      { type: 'labeled', label: 'Teléfono:', text: '617 414 350' },
      {
        type: 'labeled',
        label: 'Dirección postal:',
        text: 'Camino La Noria, n.º 8, Diputación de La Escucha, 30813 Lorca, Murcia',
      },
    ],
  },
];

const legalNoticeEn: LegalSection[] = [
  {
    title: 'Official Spanish version',
    blocks: [
      {
        type: 'p',
        text: 'The official Legal Notice is currently available in Spanish. An English translation will be published on this page as soon as it is available.',
      },
      {
        type: 'p-link',
        before: 'You can read the full notice here: ',
        linkText: 'Aviso legal (ES)',
        href: '/aviso-legal/',
      },
    ],
  },
];

export function getLegalNoticeSections(locale: Locale): LegalSection[] {
  return locale === 'en' ? legalNoticeEn : legalNoticeEs;
}

export const legalNoticeUpdated = {
  es: '14 de julio de 2026',
  en: '14 July 2026',
} as const;

export const legalNoticeUpdatedLabel = {
  es: 'Última actualización:',
  en: 'Last updated:',
} as const;
