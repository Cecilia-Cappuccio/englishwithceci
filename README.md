# 🌟 English with Ceci — Sitio Web Oficial

Sitio web moderno, responsivo y optimizado para **GitHub Pages** para las clases de inglés de **Cecilia Cappuccio**.

![English with Ceci Preview](assets/images/favicon.svg)

---

## 🚀 ¿Cómo publicar este sitio en GitHub Pages?

Publicar este sitio en internet es 100% gratuito y toma menos de 1 minuto:

1. **Subí los cambios a GitHub**:
   - Si usás **GitHub Desktop**: Vas a ver todos los archivos nuevos en la columna izquierda. Escribí un resumen (por ejemplo: *"Crear sitio web English with Ceci"*), hacé clic en **Commit to main** y luego en **Push origin**.
   - O por consola:
     ```bash
     git add .
     git commit -m "Crear sitio web English with Ceci"
     git push origin main
     ```

2. **Activá GitHub Pages en tu repositorio**:
   - Entrá a tu repositorio en GitHub: `https://github.com/TU-USUARIO/englishwithceci`
   - Andá a la pestaña **Settings** (Configuración) ⚙️.
   - En el menú lateral izquierdo, buscá y hacé clic en **Pages**.
   - En la sección **Build and deployment**:
     - **Source**: Seleccioná `Deploy from a branch`.
     - **Branch**: Seleccioná `main` y en la carpeta elegí `/ (root)`.
     - Hacé clic en **Save** (Guardar).

3. **¡Listo!** En unos minutos tu sitio estará en vivo en:
   `https://TU-USUARIO.github.io/englishwithceci/`

---

## 🎨 Características del sitio

- **Diseño Premium & Responsive**: Se adapta perfectamente a celulares, tablets y computadoras de escritorio.
- **Identidad de Marca**: Creado para **Cecilia Cappuccio** bajo el lema **English with Ceci**.
- **Hero & Propuesta de Valor**: Presentación atractiva, beneficios destacados y llamadas a la acción claras.
- **Quiz Interactivo ("¿Cuál es tu clase ideal?")**: Cuestionario interactivo en 3 pasos que recomienda la modalidad adecuada y arma un mensaje directo de WhatsApp personalizado.
- **Secciones Completas**:
  - **Sobre Cecilia**: Historia, calidez y metodología humana sin miedo al error.
  - **Metodología**: Los 4 pilares de las clases comunicativas.
  - **Modalidades de Clases**: Clases 1 a 1, Business English & Entrevistas, Grupos Reducidos.
  - **Testimonios**: Opiniones de alumnos.
  - **Preguntas Frecuentes (FAQ)**: Acordeón interactivo con las consultas más comunes.
  - **Formulario de Contacto**: Conectado directamente para enviar consultas por WhatsApp y correo.
  - **Botón Flotante de WhatsApp**: Con saludo emergente animado y enlace directo.
- **Cero dependencias de compilación**: Funciona con HTML5, Tailwind CSS y JavaScript estándar. No requiere Node.js ni pasos de build.

---

## ✏️ ¿Cómo personalizar tus datos?

### 1. Cambiar tu número de WhatsApp
Abrí el archivo [`assets/js/script.js`](assets/js/script.js) y en las primeras líneas modificá:
```javascript
const CONFIG = {
  whatsappNumber: '5491167375706', // <-- Teléfono de Cecilia (Argentina)
  email: 'ceciliacappuccio05@gmail.com',
  instagram: 'englishwithceci',
  teacherName: 'Cecilia Cappuccio',
};
```
> *Nota: En Argentina el formato suele ser `549` seguido del código de área y número (ejemplo: `54911xxxxxxxx`).*

También podés cambiar el número en los enlaces `https://wa.me/...` que están en [`index.html`](index.html).

### 2. Foto de Cecilia
La foto real de Cecilia ya está integrada desde [`assets/images/ceci-foto.jpeg`](assets/images/ceci-foto.jpeg) y se muestra automáticamente en la portada, en la sección "Sobre mí", en la vista previa para redes sociales y en el botón flotante de WhatsApp. Si en el futuro querés cambiarla, simplemente reemplazá ese archivo con una nueva foto manteniendo el mismo nombre o actualizando la ruta en `index.html`.

### 3. Modificar textos, aranceles o agregar redes sociales
Todo el contenido está en [`index.html`](index.html) con etiquetas claras y comentarios en español para que sea muy fácil de editar.

---

## 📂 Estructura de archivos

```
englishwithceci/
├── index.html              # Página principal completa
├── README.md               # Este documento con las instrucciones
├── assets/
│   ├── css/
│   │   └── custom.css      # Estilos y animaciones personalizadas
│   ├── js/
│   │   └── script.js       # Interactividad (menú, quiz, FAQ, WhatsApp)
│   └── images/
│       ├── favicon.svg     # Ícono del sitio
│       ├── ceci-foto.jpeg  # Foto oficial de Cecilia
│       └── ceci-avatar.svg # Ilustración alternativa de Cecilia
```

---

Diseñado con cariño para **English with Ceci** — Cecilia Cappuccio ✨
