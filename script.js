document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.main-nav a');
    const sections = document.querySelectorAll('.page-section');
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    // Función para mostrar la sección correcta
    const showSection = (id) => {
        sections.forEach(section => {
            if (section.id === id) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });
    };

    // Manejo de la navegación
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evita el salto de página

            // Eliminar 'active' de todos los enlaces y añadir al clicado
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');

            // Obtener el ID de la sección desde el href del enlace
            const targetId = link.getAttribute('href').substring(1);
            showSection(targetId);

            // Si el menú móvil está abierto, ciérralo al hacer clic en un enlace
            if (sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        });
    });

    // Mostrar la sección "Inicio" al cargar la página
    showSection('inicio');

    // Manejo del botón de menú móvil
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Cerrar el menú móvil si se hace clic fuera de él (opcional)
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });

    // Evitar que el clic en el sidebar mismo cierre el menú
    sidebar.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
