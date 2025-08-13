# 🎁 Amigo Secreto

Aplicación web sencilla que permite agregar nombres de amigos a una lista y realizar un sorteo aleatorio para elegir al "amigo secreto".

## 📌 Características
- Agregar nombres a una lista.
- Visualizar en pantalla los nombres ingresados.
- Sortear un amigo secreto de forma aleatoria.
- Limpieza automática de la lista al realizar el sorteo.

## 📂 Estructura del proyecto
```
├── index.html       # Página principal
├── style.css        # Estilos de la aplicación
├── app.js           # Lógica en JavaScript
└── assets/          # Imágenes y recursos
```

## 🚀 Instalación y uso
1. **Clonar el repositorio**
   ```git clone https://github.com/usuario/amigo-secreto.git```
2. **Abrir el proyecto**  
   - Abre el archivo `index.html` en tu navegador.

3. **Agregar amigos**  
   - Escribe un nombre en el campo de texto y haz clic en **"Añadir"**.

4. **Sortear amigo secreto**  
   - Haz clic en **"Sortear amigo"** para elegir uno al azar.  
   - La lista se limpiará y se mostrará el amigo seleccionado.

## 📜 Dependencias
Este proyecto **no requiere dependencias externas**. Solo necesitas un navegador web moderno.

## ⚠️ Posibles problemas
- Si solo agregas un nombre, siempre se seleccionará ese mismo (no es un error, es comportamiento esperado).
- El sorteo es completamente aleatorio, así que puede repetirse el mismo nombre en sorteos diferentes.
