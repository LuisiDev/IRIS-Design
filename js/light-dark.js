import Prism from 'https://cdn.skypack.dev/prismjs'

// Obtener el tema actual desde localStorage o usar 'light' por defecto
let currentTheme = localStorage.getItem('theme') || 'light';

// Aplicar el tema guardado al cargar la página
document.documentElement.className = currentTheme;

// Crear un elemento de estilo para inyectar CSS
let styleElement = document.createElement('style');
document.head.appendChild(styleElement);

let activeButton = null;

// Inicializar VANTA
let vantaEffect = VANTA.TOPOLOGY({
  el: "html",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x59ff,
  backgroundColor: currentTheme === 'dark' ? 0x000000 : 0xffffff, // Color inicial basado en el tema
});

// Función para actualizar el backgroundColor de VANTA
function updateVantaBackground() {
  const isDarkMode = document.documentElement.classList.contains("dark");
  vantaEffect.setOptions({
    backgroundColor: isDarkMode ? 0x000000 : 0xffffff,
    color: isDarkMode ? 0x59ff : 0x2256ff,
  });
}

const injectCSS = (css) => {
  styleElement.textContent = css;
};

const SWITCH = (button, animation) => {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  button.setAttribute("aria-pressed", newTheme === 'dark');
  document.documentElement.className = newTheme;
  currentTheme = newTheme;
  localStorage.setItem('theme', newTheme); // Guardar el tema en localStorage
  injectCSS(animation.css);

  // Actualizar el fondo de VANTA
  updateVantaBackground();
};

const TOGGLE_THEME = (button, animation) => {
//   if (activeButton && activeButton !== button) {
//     return; // Si hay un botón activo y no es este, no hacer nada
//   }

  if (!document.startViewTransition) {
    SWITCH(button, animation);
    activeButton = currentTheme === 'dark' ? button : null;
    updateButtonStates();
  } else {
    const transition = document.startViewTransition(() => {
      SWITCH(button, animation);
      activeButton = currentTheme === 'dark' ? button : null;
    });
    transition.finished.then(() => {
      updateButtonStates();
    });
  }
};

const getAnimationByName = (name) => {
  return ANIMATIONS.find(animation => animation.name === name);
};

// Usar delegación de eventos en el cuerpo del documento
document.body.addEventListener('click', (event) => {
  if (event.target.classList.contains('theme-toggle') && !event.target.disabled) {
    const animationName = event.target.dataset.animation;
    const animation = getAnimationByName(animationName);
    
    if (animation) {
      TOGGLE_THEME(event.target, animation);
    } else {
      console.warn(`Animation "${animationName}" not found for button:`, event.target);
    }
  }
});

// Contenedores de demostración
const DEMO_CONTAINER = document.getElementById("demo-container");

ANIMATIONS.forEach((animation) => {
  const button = document.createElement("button");
  button.setAttribute("aria-pressed", "false");
  button.className = "theme-toggle";
  button.dataset.animation = animation.name;
  button.textContent = animation.name;
  DEMO_CONTAINER.appendChild(button);
});

// Configuración inicial del estado del botón
updateButtonStates();

// Llamar a la función inicialmente para asegurarse de que el fondo sea correcto
updateVantaBackground();

// Cleanup function para destruir la instancia de VANTA al salir de la página
window.addEventListener("beforeunload", () => {
  if (vantaEffect) {
    vantaEffect.destroy();
  }
});

// Aplicar el tema guardado al cargar la página
document.documentElement.className = currentTheme;