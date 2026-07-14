import type { Locale } from '@types/locale';
import type { PrivacySection } from '@types/legal';

const privacyPolicyEs: PrivacySection[] = [
  {
    title: '1. Identidad del responsable del tratamiento',
    blocks: [
      {
        type: 'p',
        text: 'En cumplimiento de lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos —en adelante, «RGPD»—, y en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales —en adelante, «LOPDGDD»—, se informa a los usuarios de los siguientes datos:',
      },
      {
        type: 'p',
        text: 'Responsable del tratamiento: ZURANO Y BLÁZQUEZ, S.L.',
      },
      {
        type: 'p',
        text: 'CIF: B30571939',
      },
      {
        type: 'p',
        text: 'Domicilio: Camino La Noria, n.º 8, Diputación de La Escucha, 30813 Lorca, Murcia',
      },
      {
        type: 'p-email',
        before: 'Correo electrónico: ',
        after: '',
      },
      {
        type: 'p-link',
        before: 'Sitio web: ',
        linkText: 'https://zuranoyblazquez.com',
        href: 'https://zuranoyblazquez.com',
        external: true,
      },
      {
        type: 'p',
        text: 'ZURANO Y BLÁZQUEZ, S.L. es responsable del tratamiento de los datos personales facilitados por los usuarios a través de este sitio web, por correo electrónico, por teléfono o mediante cualquier otro canal de comunicación habilitado.',
      },
    ],
  },
  {
    title: '2. Normativa aplicable',
    blocks: [
      {
        type: 'p',
        text: 'El tratamiento de los datos personales se realizará de conformidad con:',
      },
      {
        type: 'ul',
        items: [
          'El Reglamento (UE) 2016/679, General de Protección de Datos.',
          'La Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales.',
          'La Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico.',
          'Las demás disposiciones nacionales o europeas que resulten aplicables.',
        ],
      },
    ],
  },
  {
    title: '3. Principios aplicados al tratamiento',
    blocks: [
      {
        type: 'p',
        text: 'ZURANO Y BLÁZQUEZ, S.L. tratará los datos personales de acuerdo con los principios establecidos en el RGPD:',
      },
      {
        type: 'ul',
        items: [
          'Licitud, lealtad y transparencia.',
          'Limitación de la finalidad.',
          'Minimización de datos.',
          'Exactitud.',
          'Limitación del plazo de conservación.',
          'Integridad y confidencialidad.',
          'Responsabilidad proactiva.',
        ],
      },
      {
        type: 'p',
        text: 'Solo se solicitarán y tratarán los datos adecuados, pertinentes y necesarios para atender las consultas, solicitudes o servicios requeridos por los usuarios.',
      },
    ],
  },
  {
    title: '4. Datos personales tratados',
    blocks: [
      {
        type: 'p',
        text: 'Según la relación que el usuario mantenga con ZURANO Y BLÁZQUEZ, S.L., podrán tratarse las siguientes categorías de datos:',
      },
      {
        type: 'ul',
        items: [
          'Nombre y apellidos.',
          'Empresa o entidad a la que pertenece.',
          'Dirección de correo electrónico.',
          'Número de teléfono.',
          'Dirección postal.',
          'Datos fiscales y de facturación.',
          'Información profesional o empresarial.',
          'Contenido de las consultas, observaciones y mensajes enviados.',
          'Datos necesarios para elaborar presupuestos o prestar servicios.',
          'Dirección IP y otros datos técnicos básicos asociados al acceso, seguridad y funcionamiento del servidor web.',
        ],
      },
      {
        type: 'p',
        text: 'No se solicita al usuario que facilite categorías especiales de datos personales, como datos relativos a la salud, ideología, religión, orientación sexual, origen racial o étnico, datos biométricos o afiliación sindical.',
      },
      {
        type: 'p',
        text: 'El usuario deberá abstenerse de incluir este tipo de información en los formularios o mensajes, salvo que resulte estrictamente necesario y haya sido expresamente solicitada.',
      },
    ],
  },
  {
    title: '5. Procedencia de los datos',
    blocks: [
      {
        type: 'p',
        text: 'Los datos personales tratados proceden directamente del interesado cuando:',
      },
      {
        type: 'ul',
        items: [
          'Cumplimenta y envía un formulario de la página web.',
          'Envía un correo electrónico.',
          'Contacta telefónicamente.',
          'Solicita información o un presupuesto.',
          'Contrata un producto o servicio.',
          'Mantiene una relación comercial o profesional con ZURANO Y BLÁZQUEZ, S.L.',
        ],
      },
      {
        type: 'p',
        text: 'Cuando el usuario facilite datos de otra persona, declara que está autorizado para hacerlo y que ha informado previamente a esa persona sobre el tratamiento de sus datos.',
      },
    ],
  },
  {
    title: '6. Funcionamiento de los formularios web',
    blocks: [
      {
        type: 'p',
        text: 'El sitio web ha sido desarrollado utilizando tecnologías Astro y Node.js.',
      },
      {
        type: 'p',
        text: 'Los datos introducidos en los formularios:',
      },
      {
        type: 'ul',
        items: [
          'No se almacenan en WordPress.',
          'No se almacenan en una base de datos propia de la página web.',
          'No se conservan en un panel de administración de la aplicación.',
          'Se transmiten por medios electrónicos a la dirección de correo habilitada por ZURANO Y BLÁZQUEZ, S.L.',
          'Pueden quedar almacenados en el buzón de correo electrónico desde el que se recibe y gestiona la consulta.',
          'Pueden aparecer temporalmente en registros técnicos del servidor cuando ello sea necesario para garantizar el envío, la seguridad, el diagnóstico de errores o la prevención de usos fraudulentos.',
        ],
      },
      {
        type: 'p',
        text: 'El hecho de que los formularios no almacenen información en una base de datos propia no significa que no exista tratamiento de datos personales. La recepción, consulta, utilización, conservación y eliminación de los mensajes recibidos por correo electrónico constituyen operaciones de tratamiento de datos.',
      },
    ],
  },
  {
    title: '7. Finalidades del tratamiento',
    blocks: [
      { type: 'h3', text: '7.1. Atención de consultas' },
      {
        type: 'p',
        text: 'Los datos facilitados a través de los formularios, correo electrónico o teléfono serán tratados para:',
      },
      {
        type: 'ul',
        items: [
          'Atender consultas.',
          'Responder solicitudes de información.',
          'Contactar con el interesado.',
          'Facilitar información sobre productos o servicios.',
          'Realizar el seguimiento de la solicitud.',
        ],
      },
      { type: 'h3', text: '7.2. Solicitudes de presupuesto' },
      {
        type: 'p',
        text: 'Cuando el usuario solicite un presupuesto, los datos serán tratados para:',
      },
      {
        type: 'ul',
        items: [
          'Analizar las necesidades planteadas.',
          'Preparar y enviar el presupuesto.',
          'Resolver dudas relacionadas con la propuesta.',
          'Realizar un seguimiento razonable de la solicitud.',
        ],
      },
      { type: 'h3', text: '7.3. Prestación de servicios' },
      {
        type: 'p',
        text: 'Cuando el usuario contrate un servicio, sus datos serán tratados para:',
      },
      {
        type: 'ul',
        items: [
          'Gestionar la relación contractual.',
          'Prestar el servicio contratado.',
          'Mantener las comunicaciones necesarias con el cliente.',
          'Gestionar incidencias y asistencia técnica.',
          'Administrar dominios, alojamiento, servicios web, correo electrónico, licencias u otros servicios contratados.',
          'Cumplir las obligaciones derivadas del contrato.',
        ],
      },
      { type: 'h3', text: '7.4. Gestión administrativa, fiscal y contable' },
      {
        type: 'p',
        text: 'Los datos de clientes podrán ser tratados para:',
      },
      {
        type: 'ul',
        items: [
          'Elaborar presupuestos, pedidos y facturas.',
          'Gestionar cobros y pagos.',
          'Llevar la contabilidad.',
          'Cumplir obligaciones fiscales, mercantiles y administrativas.',
          'Atender posibles reclamaciones o responsabilidades.',
        ],
      },
      { type: 'h3', text: '7.5. Seguridad del sitio web y del servidor' },
      {
        type: 'p',
        text: 'Los datos técnicos, incluida la dirección IP cuando sea registrada, podrán tratarse para:',
      },
      {
        type: 'ul',
        items: [
          'Garantizar el funcionamiento de la página web.',
          'Mantener la seguridad del servidor VPS.',
          'Detectar accesos no autorizados.',
          'Prevenir ataques, abusos, fraude o usos ilícitos.',
          'Diagnosticar errores técnicos.',
          'Mantener registros de seguridad.',
          'Defender los sistemas y los derechos de ZURANO Y BLÁZQUEZ, S.L.',
        ],
      },
    ],
  },
  {
    title: '8. Comunicaciones comerciales',
    blocks: [
      {
        type: 'p',
        text: 'Actualmente, el sitio web no dispone de un servicio de newsletter ni de suscripción periódica a comunicaciones comerciales.',
      },
      {
        type: 'p',
        text: 'El envío de una consulta o solicitud mediante un formulario no supondrá la suscripción automática del usuario a comunicaciones publicitarias.',
      },
      {
        type: 'p',
        text: 'Cuando ZURANO Y BLÁZQUEZ, S.L. desee enviar comunicaciones comerciales por correo electrónico, lo hará únicamente cuando el interesado haya prestado previamente su consentimiento, o exista una relación contractual previa y la comunicación se refiera a productos o servicios propios similares a los contratados, dentro de los límites establecidos legalmente.',
      },
      {
        type: 'p-email',
        before:
          'El interesado podrá oponerse en cualquier momento al envío de comunicaciones comerciales mediante una solicitud dirigida a ',
        after: '.',
      },
      {
        type: 'p',
        text: 'La retirada del consentimiento o la oposición a recibir publicidad no afectará a la prestación de los servicios contratados.',
      },
    ],
  },
  {
    title: '9. Bases jurídicas del tratamiento',
    blocks: [
      {
        type: 'p',
        text: 'Las bases que legitiman el tratamiento son:',
      },
      { type: 'h3', text: 'Consultas generales' },
      {
        type: 'p',
        text: 'La base jurídica es el consentimiento del interesado, manifestado mediante el envío voluntario del formulario o del mensaje.',
      },
      { type: 'h3', text: 'Solicitudes de presupuesto' },
      {
        type: 'p',
        text: 'La base jurídica es la aplicación de medidas precontractuales adoptadas a petición del interesado.',
      },
      { type: 'h3', text: 'Servicios contratados' },
      {
        type: 'p',
        text: 'La base jurídica es la ejecución de un contrato en el que el interesado es parte.',
      },
      { type: 'h3', text: 'Facturación y obligaciones fiscales' },
      {
        type: 'p',
        text: 'La base jurídica es el cumplimiento de obligaciones legales aplicables a ZURANO Y BLÁZQUEZ, S.L.',
      },
      { type: 'h3', text: 'Seguridad del sitio web y del VPS' },
      {
        type: 'p',
        text: 'La base jurídica es el interés legítimo de ZURANO Y BLÁZQUEZ, S.L. en proteger su sitio web, sistemas, servicios, información y usuarios frente a accesos no autorizados, errores, abusos, fraude o ataques informáticos.',
      },
      { type: 'h3', text: 'Comunicaciones comerciales' },
      {
        type: 'p',
        text: 'La base jurídica será el consentimiento del interesado o, cuando legalmente proceda, el interés legítimo derivado de una relación contractual previa respecto de productos o servicios similares.',
      },
      {
        type: 'p',
        text: 'Cuando el tratamiento se base en el consentimiento, el interesado podrá retirarlo en cualquier momento. Su retirada no afectará a la licitud del tratamiento realizado con anterioridad.',
      },
    ],
  },
  {
    title: '10. Carácter obligatorio de los datos',
    blocks: [
      {
        type: 'p',
        text: 'Los campos identificados como obligatorios en los formularios deberán cumplimentarse para que ZURANO Y BLÁZQUEZ, S.L. pueda atender correctamente la solicitud.',
      },
      {
        type: 'p',
        text: 'La negativa a facilitar los datos necesarios podrá impedir:',
      },
      {
        type: 'ul',
        items: [
          'El envío del formulario.',
          'La atención de la consulta.',
          'La elaboración de un presupuesto.',
          'La contratación o prestación de un servicio.',
        ],
      },
      {
        type: 'p',
        text: 'El usuario garantiza que los datos facilitados son verdaderos, exactos, completos y actualizados.',
      },
    ],
  },
  {
    title: '11. Conservación de los datos',
    blocks: [
      {
        type: 'p',
        text: 'Los datos personales se conservarán durante el tiempo necesario para cumplir las finalidades para las que fueron recogidos.',
      },
      { type: 'h3', text: 'Consultas recibidas por formulario o correo electrónico' },
      {
        type: 'p',
        text: 'Los mensajes se conservarán durante el tiempo necesario para atender la consulta y realizar un seguimiento razonable. Cuando la consulta no dé lugar a una relación comercial o contractual, podrá eliminarse una vez atendida y cuando ya no sea necesaria, sin perjuicio de su conservación temporal para acreditar las comunicaciones mantenidas o atender posibles responsabilidades.',
      },
      { type: 'h3', text: 'Solicitudes de presupuesto' },
      {
        type: 'p',
        text: 'Los datos se conservarán mientras el presupuesto permanezca vigente y durante el tiempo razonablemente necesario para su seguimiento. Si no se formaliza la contratación, podrán conservarse posteriormente durante los plazos necesarios para atender posibles responsabilidades.',
      },
      { type: 'h3', text: 'Clientes y servicios contratados' },
      {
        type: 'p',
        text: 'Los datos se conservarán mientras se mantenga la relación contractual o comercial. Una vez terminada la relación, se conservarán debidamente bloqueados durante los plazos exigidos por la normativa fiscal, mercantil, contable y demás normativa aplicable.',
      },
      { type: 'h3', text: 'Facturas y documentación contable' },
      {
        type: 'p',
        text: 'La documentación fiscal, contable y de facturación se conservará durante los plazos legalmente obligatorios.',
      },
      { type: 'h3', text: 'Registros técnicos y de seguridad' },
      {
        type: 'p',
        text: 'Los registros del servidor se conservarán durante el periodo necesario para garantizar la seguridad, investigar incidencias y atender posibles responsabilidades. Estos registros no se utilizarán para elaborar perfiles comerciales de los usuarios.',
      },
      { type: 'h3', text: 'Comunicaciones comerciales' },
      {
        type: 'p',
        text: 'Los datos utilizados para comunicaciones comerciales se conservarán hasta que el interesado retire su consentimiento o ejerza su derecho de oposición. Finalizados los plazos correspondientes, los datos serán eliminados o anonimizados de forma segura.',
      },
    ],
  },
  {
    title: '12. Destinatarios y comunicaciones de datos',
    blocks: [
      {
        type: 'p',
        text: 'Con carácter general, los datos personales no se comunicarán a terceros, salvo:',
      },
      {
        type: 'ul',
        items: [
          'Cuando sea necesario para prestar el servicio solicitado.',
          'Cuando exista una obligación legal.',
          'Cuando el interesado lo haya autorizado.',
          'Cuando sea necesario para formular, ejercer o defender reclamaciones.',
        ],
      },
      {
        type: 'p',
        text: 'Los datos podrán ser comunicados, cuando resulte necesario, a:',
      },
      {
        type: 'ul',
        items: [
          'Agencia Estatal de Administración Tributaria.',
          'Administraciones públicas competentes.',
          'Juzgados y tribunales.',
          'Fuerzas y cuerpos de seguridad.',
          'Entidades financieras y proveedores de servicios de pago.',
          'Asesorías fiscales, contables, jurídicas o laborales.',
          'Proveedores, distribuidores o fabricantes que deban intervenir en la prestación del servicio contratado.',
        ],
      },
    ],
  },
  {
    title: '13. Proveedores con acceso a datos',
    blocks: [
      {
        type: 'p',
        text: 'Para el funcionamiento de la web y la prestación de sus servicios, ZURANO Y BLÁZQUEZ, S.L. puede utilizar proveedores que tengan acceso potencial a datos personales. Estos proveedores actuarán como encargados del tratamiento cuando traten datos por cuenta de ZURANO Y BLÁZQUEZ, S.L.',
      },
      { type: 'h3', text: 'Alojamiento web y servidor VPS' },
      {
        type: 'p',
        text: 'La página web se aloja en un servidor privado virtual —VPS— contratado a PROFESIONAL HOSTING. Profesional Hosting proporciona la infraestructura técnica sobre la que funciona el servidor, aunque la administración y configuración ordinaria del VPS sea realizada por ZURANO Y BLÁZQUEZ, S.L.',
      },
      {
        type: 'p',
        text: 'Como proveedor de infraestructura, Profesional Hosting podría tener acceso potencial y limitado a datos alojados o transmitidos a través del servidor cuando sea necesario para prestar asistencia técnica, mantener la infraestructura, resolver incidencias, realizar operaciones de seguridad o cumplir obligaciones legales. La relación con este proveedor deberá estar regulada por las condiciones contractuales y, cuando corresponda, por un acuerdo de encargo de tratamiento conforme al artículo 28 del RGPD.',
      },
      { type: 'h3', text: 'Servicio de correo electrónico' },
      {
        type: 'p',
        text: 'Los mensajes enviados mediante los formularios son recibidos y gestionados mediante un servicio profesional de correo electrónico. El proveedor del servicio de correo podrá actuar como encargado del tratamiento al alojar, transmitir, filtrar, proteger o realizar copias de seguridad de los mensajes.',
      },
      { type: 'h3', text: 'Otros proveedores tecnológicos' },
      {
        type: 'p',
        text: 'También podrán intervenir proveedores de administración y mantenimiento del servidor, copias de seguridad, seguridad informática, gestión de dominios y DNS, certificados digitales, telecomunicaciones, soporte técnico y servicios profesionales de asesoramiento.',
      },
      {
        type: 'p',
        text: 'ZURANO Y BLÁZQUEZ, S.L. procurará contratar únicamente proveedores que ofrezcan garantías suficientes para aplicar medidas técnicas y organizativas adecuadas.',
      },
    ],
  },
  {
    title: '14. Transferencias internacionales de datos',
    blocks: [
      {
        type: 'p',
        text: 'Con carácter general, ZURANO Y BLÁZQUEZ, S.L. procurará utilizar proveedores cuyos servicios se presten dentro del Espacio Económico Europeo.',
      },
      {
        type: 'p',
        text: 'No obstante, determinados proveedores tecnológicos, de correo electrónico, seguridad, comunicaciones o infraestructura podrían tratar datos desde países situados fuera del Espacio Económico Europeo.',
      },
      {
        type: 'p',
        text: 'Cuando se produzca una transferencia internacional de datos, se utilizará alguno de los mecanismos admitidos por el RGPD, como una decisión de adecuación de la Comisión Europea, las cláusulas contractuales tipo aprobadas por la Comisión Europea, normas corporativas vinculantes, el Marco de Privacidad de Datos UE-Estados Unidos cuando el proveedor se encuentre debidamente adherido y resulte aplicable, o cualquier otra garantía reconocida por la normativa.',
      },
      {
        type: 'p-email',
        before:
          'El interesado podrá solicitar información adicional sobre las garantías utilizadas escribiendo a ',
        after: '.',
      },
    ],
  },
  {
    title: '15. Uso de cookies y tecnologías similares',
    blocks: [
      {
        type: 'p',
        text: 'La página web podrá utilizar cookies técnicas necesarias para su funcionamiento, seguridad y correcta prestación.',
      },
      {
        type: 'p',
        text: 'Cuando se utilicen cookies analíticas, publicitarias, de personalización o pertenecientes a terceros que no sean estrictamente necesarias, estas no se instalarán hasta que el usuario haya prestado su consentimiento.',
      },
      {
        type: 'p',
        text: 'La información sobre las cookies utilizadas, sus proveedores, finalidades, duración y opciones de configuración deberá consultarse en la Política de Cookies.',
      },
    ],
  },
  {
    title: '16. Derechos de los interesados',
    blocks: [
      {
        type: 'p',
        text: 'El interesado podrá ejercer los siguientes derechos:',
      },
      { type: 'h3', text: 'Derecho de acceso' },
      {
        type: 'p',
        text: 'Conocer si ZURANO Y BLÁZQUEZ, S.L. está tratando sus datos y obtener información sobre dicho tratamiento.',
      },
      { type: 'h3', text: 'Derecho de rectificación' },
      {
        type: 'p',
        text: 'Solicitar la corrección de datos inexactos o incompletos.',
      },
      { type: 'h3', text: 'Derecho de supresión' },
      {
        type: 'p',
        text: 'Solicitar la eliminación de sus datos cuando concurran las circunstancias previstas legalmente.',
      },
      { type: 'h3', text: 'Derecho de oposición' },
      {
        type: 'p',
        text: 'Oponerse al tratamiento de sus datos cuando la base jurídica sea el interés legítimo o cuando se utilicen con fines de mercadotecnia directa.',
      },
      { type: 'h3', text: 'Derecho a la limitación del tratamiento' },
      {
        type: 'p',
        text: 'Solicitar que el tratamiento quede limitado en los casos establecidos en el RGPD.',
      },
      { type: 'h3', text: 'Derecho a la portabilidad' },
      {
        type: 'p',
        text: 'Recibir los datos facilitados en un formato estructurado, de uso común y lectura mecánica, y transmitirlos a otro responsable cuando resulte aplicable.',
      },
      { type: 'h3', text: 'Derecho a retirar el consentimiento' },
      {
        type: 'p',
        text: 'Retirar en cualquier momento el consentimiento prestado, sin que ello afecte a la licitud del tratamiento realizado anteriormente.',
      },
      { type: 'h3', text: 'Derecho a no ser objeto de decisiones automatizadas' },
      {
        type: 'p',
        text: 'No ser objeto de decisiones basadas únicamente en tratamientos automatizados, incluida la elaboración de perfiles, que produzcan efectos jurídicos o le afecten significativamente de forma similar.',
      },
    ],
  },
  {
    title: '17. Procedimiento para ejercer los derechos',
    blocks: [
      {
        type: 'p',
        text: 'Los derechos podrán ejercerse mediante una solicitud dirigida a:',
      },
      {
        type: 'address',
        lines: [
          'ZURANO Y BLÁZQUEZ, S.L.',
          'Camino La Noria, n.º 8',
          'Diputación de La Escucha',
          '30813 Lorca, Murcia',
        ],
      },
      {
        type: 'p',
        text: 'O mediante correo electrónico:',
      },
      {
        type: 'p-email',
        before: '',
        after: '',
      },
      {
        type: 'p',
        text: 'La solicitud deberá indicar:',
      },
      {
        type: 'ul',
        items: [
          'Nombre y apellidos del interesado.',
          'Derecho que desea ejercer.',
          'Información necesaria para localizar los datos.',
          'Dirección o medio para recibir la respuesta.',
          'Fecha y firma, cuando proceda.',
        ],
      },
      {
        type: 'p',
        text: 'Solo cuando existan dudas razonables sobre la identidad del solicitante se podrá pedir información adicional necesaria para verificarla.',
      },
      {
        type: 'p',
        text: 'No será obligatorio adjuntar de manera general una copia completa del DNI. Cuando resulte imprescindible solicitar un documento identificativo, el interesado podrá ocultar los datos que no sean necesarios para verificar su identidad.',
      },
      {
        type: 'p',
        text: 'El ejercicio de los derechos será gratuito, salvo que las solicitudes sean manifiestamente infundadas, repetitivas o excesivas.',
      },
    ],
  },
  {
    title: '18. Reclamación ante la autoridad de control',
    blocks: [
      {
        type: 'p',
        text: 'Si el interesado considera que el tratamiento de sus datos personales no se ajusta a la normativa, podrá presentar una reclamación ante:',
      },
      {
        type: 'address',
        lines: [
          'Agencia Española de Protección de Datos',
          'Calle Jorge Juan, 6',
          '28001 Madrid',
        ],
      },
      {
        type: 'p-link',
        before: 'Página web: ',
        linkText: 'https://www.aepd.es',
        href: 'https://www.aepd.es',
        external: true,
      },
      {
        type: 'p-email',
        before:
          'Antes de presentar una reclamación, el interesado puede contactar con ZURANO Y BLÁZQUEZ, S.L. en ',
        after: ' para intentar resolver la incidencia.',
      },
    ],
  },
  {
    title: '19. Medidas de seguridad',
    blocks: [
      {
        type: 'p',
        text: 'ZURANO Y BLÁZQUEZ, S.L. aplicará medidas técnicas y organizativas adecuadas al nivel de riesgo para proteger los datos personales.',
      },
      {
        type: 'p',
        text: 'Entre dichas medidas podrán encontrarse:',
      },
      {
        type: 'ul',
        items: [
          'Utilización de conexiones cifradas mediante HTTPS.',
          'Control de acceso al servidor VPS.',
          'Autenticación de los usuarios autorizados.',
          'Actualización de sistemas y dependencias.',
          'Configuración de cortafuegos.',
          'Gestión segura de credenciales.',
          'Protección del servicio de correo electrónico.',
          'Copias de seguridad cuando proceda.',
          'Registros de seguridad.',
          'Prevención y detección de accesos no autorizados.',
          'Limitación del acceso a los datos al personal o proveedores que necesiten conocerlos.',
        ],
      },
      {
        type: 'p',
        text: 'Aunque se adoptan medidas razonables de seguridad, ningún sistema conectado a Internet puede garantizar una seguridad absoluta.',
      },
    ],
  },
  {
    title: '20. Violaciones de seguridad',
    blocks: [
      {
        type: 'p',
        text: 'Cuando se produzca una violación de seguridad que afecte a datos personales, ZURANO Y BLÁZQUEZ, S.L. analizará el alcance y el riesgo del incidente.',
      },
      {
        type: 'p',
        text: 'Cuando sea legalmente obligatorio, se notificará la violación de seguridad a la Agencia Española de Protección de Datos y, si existe un alto riesgo para los derechos y libertades de los afectados, también se informará a las personas afectadas.',
      },
    ],
  },
  {
    title: '21. Menores de edad',
    blocks: [
      {
        type: 'p',
        text: 'Los servicios ofrecidos a través de esta web no están dirigidos específicamente a menores.',
      },
      {
        type: 'p',
        text: 'Los menores de catorce años no deberán facilitar datos personales sin el consentimiento de sus padres, tutores o representantes legales.',
      },
      {
        type: 'p',
        text: 'Si ZURANO Y BLÁZQUEZ, S.L. detecta que ha recibido datos de un menor sin la autorización necesaria, adoptará las medidas razonables para eliminarlos.',
      },
    ],
  },
  {
    title: '22. Decisiones automatizadas y perfiles',
    blocks: [
      {
        type: 'p',
        text: 'ZURANO Y BLÁZQUEZ, S.L. no utiliza los datos enviados mediante los formularios para adoptar decisiones basadas únicamente en tratamientos automatizados que produzcan efectos jurídicos sobre el usuario o le afecten significativamente.',
      },
      {
        type: 'p',
        text: 'Tampoco se elaboran perfiles comerciales mediante la información facilitada en los formularios.',
      },
    ],
  },
  {
    title: '23. Enlaces a páginas de terceros',
    blocks: [
      {
        type: 'p',
        text: 'La web puede contener enlaces a páginas o servicios gestionados por terceros.',
      },
      {
        type: 'p',
        text: 'ZURANO Y BLÁZQUEZ, S.L. no controla los tratamientos de datos realizados por esos terceros ni es responsable de sus políticas de privacidad.',
      },
      {
        type: 'p',
        text: 'El usuario deberá revisar la política de privacidad de cada página externa antes de facilitar datos personales.',
      },
    ],
  },
  {
    title: '24. Veracidad y actualización de los datos',
    blocks: [
      {
        type: 'p',
        text: 'El usuario garantiza que los datos proporcionados son verdaderos, exactos, completos y actualizados.',
      },
      {
        type: 'p',
        text: 'El usuario será responsable de comunicar cualquier modificación de sus datos y de la información falsa o inexacta que facilite.',
      },
    ],
  },
  {
    title: '25. Modificaciones de la Política de Privacidad',
    blocks: [
      {
        type: 'p',
        text: 'ZURANO Y BLÁZQUEZ, S.L. podrá modificar esta Política de Privacidad cuando:',
      },
      {
        type: 'ul',
        items: [
          'Cambie el funcionamiento de la página web.',
          'Se incorporen nuevos formularios o servicios.',
          'Cambien los proveedores tecnológicos.',
          'Se introduzcan herramientas de análisis, publicidad o seguimiento.',
          'Cambie la normativa aplicable.',
          'Lo requieran los criterios de las autoridades de protección de datos.',
        ],
      },
      {
        type: 'p',
        text: 'Las modificaciones relevantes serán publicadas en esta página.',
      },
    ],
  },
];

const privacyPolicyEn: PrivacySection[] = [
  {
    title: 'Official Spanish version',
    blocks: [
      {
        type: 'p',
        text: 'The official Privacy Policy is currently available in Spanish. An English translation will be published on this page as soon as it is available.',
      },
      {
        type: 'p-link',
        before: 'You can read the full policy here: ',
        linkText: 'Política de privacidad (ES)',
        href: '/politica-de-privacidad/',
      },
    ],
  },
];

export function getPrivacyPolicySections(locale: Locale): PrivacySection[] {
  return locale === 'en' ? privacyPolicyEn : privacyPolicyEs;
}

export const privacyPolicyUpdated = {
  es: '14 de julio de 2026',
  en: '14 July 2026',
} as const;

/** Versión de la cláusula de privacidad del formulario (ISO 8601, alineada con la política). */
export const privacyPolicyClauseVersion = '2026-07-14';

export const privacyPolicyUpdatedLabel = {
  es: 'Última actualización:',
  en: 'Last updated:',
} as const;
