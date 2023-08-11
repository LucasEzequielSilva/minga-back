¿Qué es una API?

En términos sencillos, una API actúa como un intermediario que permite que dos aplicaciones se comuniquen y trabajen juntas. Permite a los desarrolladores acceder a ciertas funcionalidades o datos de una aplicación o servicio específico sin tener que conocer los detalles internos o la implementación subyacente.

API de Mercado Pago

En este proyecto utilizamos la API de mercado pago para instanciar donaciones de nuestros lectores, autores o usuarios, instalando las librerias en nuestro proyecto. Tuvimos que configurar routes, endpoint y el **ACCES_TOKEN** en el archivo **.env** (para tener mayor seguridad), la _key_ o _ACCES_TOKEN_ es proporcionado una vez que hemos creado la aplicación en la plataforma de Mp. Podemos configurar la aplicación de manera muy simple para poder trabajar en modo _prueba o producción_.

La api es muy sencilla e intuitiva, tiene diferentes maneras de lograr su configuración, nosotros elegimos la _CheckoutPro_ y generamos del lado del front, 3 cards que tienen establecidos el monto a donar. Cada una de esas "Cards", re-direccionan a los usuarios a la plataforma de Mercado Pago, para poder terminar la gestión.