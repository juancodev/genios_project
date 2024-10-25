# Desarrollador Frontend - Prueba Técnica

Este es un proyecto de prueba técnica para evaluar habilidades de desarrollo frontend utilizando React y TypeScript, con integración de API con HugginFace y Firebase para la autenticación de usuarios. El proyecto está empaquetado con Vite.

## Tecnologías Utilizadas

Las tecnologías utilizadas en este proyecto son 🛠️:

- [React](https://react.dev/) - Librería.
- [TypeScript](https://www.typescriptlang.org/) - Lenguaje de programación.
- [Tailwindcss](https://tailwindcss.com/) - CSS framework.
- [Vite](https://vitejs.dev/) - Entorno de desarrollo.
- [Firebase](https://firebase.google.com/) - Base de datos.
- [HuggingFace](https://huggingface.co/) - API.

## Cómo Comenzar

Para obtener una copia local y ponerla en funcionamiento, sigue estos sencillos pasos:

### Prerrequisitos

- Asegúrate de tener **Node.js** instalado (preferiblemente versión 14.x o superior).
- Instala **npm** o **yarn** como gestor de paquetes.

  ```bash
  # Verifica la versión de Node.js
  node -v

  # Instala npm (si no está ya instalado)
  npm install -g npm

## Instalación
Clona el repositorio:

```bash
git clone https://github.com/juancodev/genios_project.git
cd genios_project
```

### Instala las dependencias: Usando npm:

```bash
npm install
```

### Configura las variables de entorno:

Debes crear un archivo .env en la raíz del proyecto y agregar la configuración de Firebase de la siguiente manera:

```env
VITE_FIREBASE_API_KEY=""
VITE_FIREBASE_AUTH_DOMAIN=""
VITE_FIREBASE_PROJECT_ID=""
VITE_FIREBASE_STORAGE_BUCKET=""
VITE_FIREBASE_MESSAGING_SENDER_ID=""
VITE_FIREBASE_APP_ID=""
VITE_HF_TOKEN=""
```

No te preocupes, te dejaré un ejemplo de archivo ```.env.example``` para que te sirva como referencia.

## Configuración de Firebase

Te dejaré un paso a paso para que puedas confiurar tu proyecto con Firebase y puedas registrar tus usuarios y probar la aplicación.

### Paso 1: Crear una cuenta de Firebase e ir a la cosola **Go to console**.
![Página principal de Firebase](https://res.cloudinary.com/disnetiflix/image/upload/v1729817414/Captura_desde_2024-10-24_20-47-49_idint9.png)

### paso 2: Crear un nuevo proyecto
![Crear nuevo proyecto](https://res.cloudinary.com/disnetiflix/image/upload/v1729817720/Captura_desde_2024-10-24_20-55-12_gardpl.png)

### paso 3: Ingresa el nombre del proyecto y le das click en **Continuar**

![Ingresar nombre del proyecto](https://res.cloudinary.com/disnetiflix/image/upload/v1729817955/Captura_desde_2024-10-24_20-59-07_ovcxs4.png)

### paso 4: Omitir o inhabilitar la opción de **Analytics** que no vamos a utilizar en nuestro proyecto.

![Omitir opción de Analitys](https://res.cloudinary.com/disnetiflix/image/upload/v1729818077/Captura_desde_2024-10-24_21-01-03_glgven.png)

### paso 5: Ir a la configuración del proyecto (Al icono de la tuerca ⚙)
![Configuración de la app](https://res.cloudinary.com/disnetiflix/image/upload/v1729818192/Captura_desde_2024-10-24_21-02-59_muqiuh.png)

### paso 6: Bajar hasta buscar la sección que dice **Agregar app**, escogemos la opción de **Web** y te generará un ejemplo de configuración con tu *API Key* muy similar al que tenemos en las variables de entorno como ejemplo.

![Agregando la app](https://res.cloudinary.com/disnetiflix/image/upload/v1729818610/Captura_desde_2024-10-24_21-09-53_tuvqin.png)

### paso 7: Ir a nuestro archivo ```.env`` y copiar la configuración de Firebase que acabamos de generar.

### paso 8: Ir a Firebase y buscar en la barra lateral la sección de **Compilación** y habilitar la opción de **Authentication**. En ese caso elegimos la opción **Correo electrónico/contraseña**.

![Agregando sección de Auth](https://res.cloudinary.com/disnetiflix/image/upload/v1729818732/Captura_desde_2024-10-24_21-12-04_ow01b2.png)

Una vez habilitada la opción de **Authentication** podemos empezar a registrar usuarios para utilizar nuestro sistema de autenticación.

## Comandos Disponibles

En el directorio del proyecto, puedes ejecutar:

```npm run dev```: Ejecuta la aplicación en modo desarrollo. Abre http://localhost:3000 para verla en el navegador.

```npm run build```: Construye la aplicación para producción.

```npm run preview```: Sirve la compilación de producción localmente para previsualizar.

```npm run lint```: Linter del código para encontrar posibles problemas.

---

## Conclusión 🎉

Este proyecto representa un paso adelante en la automatización del análisis de sentimientos en redes sociales, aprovechando la potencia de la API de HuggingFace y la flexibilidad de Firebase. Con una configuración adecuada y el seguimiento de los pasos descritos, estarás listo para comenzar a explorar y experimentar con las capacidades de análisis de sentimientos de este proyecto.

¡Gracias por utilizar este proyecto! 😊🚀
