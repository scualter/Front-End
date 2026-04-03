# 🎮 Pokédex Full Stack App

Aplicación web full stack inspirada en la Pokédex clásica de Nintendo, desarrollada como proyecto final de bootcamp. Permite buscar Pokémon, gestionar favoritos y trabajar con autenticación de usuarios mediante JWT.

---

## 🚀 Tecnologías utilizadas

### 🖥️ Frontend

* React
* React Router DOM
* Axios
* CSS (estilo Pokédex personalizado)

### ⚙️ Backend

* Node.js
* Express
* MongoDB (Atlas)
* Mongoose
* JWT (JSON Web Token)
* Bcrypt

---

## 🎯 Funcionalidades principales

* 🔐 Registro y login de usuarios
* 🔑 Autenticación con JWT
* 🔍 Búsqueda de Pokémon (API externa)
* ⭐ Guardar Pokémon en favoritos
* 📂 Visualizar lista de favoritos
* 🎨 Interfaz estilo Pokédex (Nintendo-like)
* 🌙 Dark mode (opcional)
* 🔊 Sonidos de Pokémon (opcional)

---

## 🧠 Arquitectura del proyecto

### Backend

```bash
Backend/
│
├─ app.js
├─ config/
├─ controllers/
├─ models/
├─ routes/
├─ middlewares/
└─ .env
```

### Frontend

```bash
pokedex-frontend/
│
├─ src/
│   ├─ pages/
│   ├─ components/
│   ├─ services/
│   ├─ utils/
│   ├─ App.jsx
│   └─ App.css
```

---

## ⚙️ Instalación y ejecución

### 🔧 1. Clonar repositorios

```bash
git clone <repo-backend>
git clone <repo-frontend>
```

---

### 🔧 2. Backend

```bash
cd Backend
npm install
```

Crear archivo `.env`:

```env
PORT=3000
MONGODB_URI=tu_uri_de_mongodb
JWT_SECRET=tu_clave_secreta
```

Ejecutar:

```bash
node app.js
```

---

### 💻 3. Frontend

```bash
cd pokedex-frontend
npm install
npm start
```

---

## 🔁 Flujo de la aplicación

1. Usuario se registra o inicia sesión
2. Backend genera un token JWT
3. Frontend guarda el token en `localStorage`
4. Usuario accede a rutas protegidas
5. Puede buscar Pokémon desde la API externa
6. Puede guardar Pokémon en favoritos
7. Puede visualizar sus favoritos

---

## 🔌 Endpoints principales

### Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### Favoritos

* `GET /api/favorites`
* `POST /api/favorites`

---

## 🎮 Diseño UI/UX

La interfaz está inspirada en la Pokédex clásica:

* 🎨 Colores rojos característicos
* 💡 LED decorativo
* 🖥️ Pantalla tipo consola
* 🎴 Tarjetas de Pokémon
* ✨ Animaciones y efectos

---

## 📸 Capturas (opcional)

*Añadir screenshots del proyecto aquí*

---

## 🏆 Mejoras futuras

* 🔍 Buscador avanzado con filtros
* 🎴 Cartas con estadísticas detalladas
* 🧠 Context API / Redux
* 💾 Persistencia avanzada
* 📱 Responsive completo
* 🎮 Interacciones tipo videojuego

---

## 👨‍💻 Autor

Rubén Carretero Peláez
📧 [rubencarreteropelaez@gmail.com](mailto:rubencarreteropelaez@gmail.com)

---

## 📢 Nota final

Proyecto desarrollado como práctica final de bootcamp Full Stack, integrando frontend y backend con autenticación y consumo de APIs externas.

---
