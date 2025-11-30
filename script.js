// Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('mainSearch');
    const searchBtn = document.querySelector('.search-btn');
    
    // Search data - mapping keywords to pages
    const searchMap = {
        'nomina': 'hr.html',
        'nómina': 'hr.html',
        'recursos humanos': 'hr.html',
        'rh': 'hr.html',
        'hr': 'hr.html',
        'reclutamiento': 'hr.html',
        'empleados': 'hr.html',
        'evaluaciones': 'hr.html',
        
        'contabilidad': 'finance.html',
        'finanzas': 'finance.html',
        'facturacion': 'finance.html',
        'facturación': 'finance.html',
        'tesoreria': 'finance.html',
        'tesorería': 'finance.html',
        'impuestos': 'finance.html',
        'yaydoo': 'finance.html',
        'alegra': 'finance.html',
        'siigo': 'finance.html',
        'contpaqi': 'finance.html',
        
        'marketing': 'marketing.html',
        'email marketing': 'marketing.html',
        'redes sociales': 'marketing.html',
        'automatizacion': 'marketing.html',
        'automatización': 'marketing.html',
        'mailchimp': 'marketing.html',
        'hubspot': 'marketing.html',
        
        'ventas': 'sales.html',
        'crm': 'sales.html',
        'prospeccion': 'sales.html',
        'prospección': 'sales.html',
        'pipeline': 'sales.html',
        'salesforce': 'sales.html',
        
        'it': 'it.html',
        'seguridad': 'it.html',
        'ciberseguridad': 'it.html',
        'ti': 'it.html',
        'tecnologia': 'it.html',
        'tecnología': 'it.html',
        
        'logistica': 'logistics.html',
        'logística': 'logistics.html',
        'inventario': 'logistics.html',
        'almacen': 'logistics.html',
        'almacén': 'logistics.html',
        'envios': 'logistics.html',
        'envíos': 'logistics.html',
        
        'ia': 'ai-tools.html',
        'ai': 'ai-tools.html',
        'inteligencia artificial': 'ai-tools.html',
        'chatgpt': 'ai-tools.html',
        'automatizacion ia': 'ai-tools.html',
        'automatización ia': 'ai-tools.html'
    };
    
    // Handle search
    function handleSearch() {
        const query = searchInput.value.toLowerCase().trim();
        
        if (query === '') {
            alert('Por favor ingresa qué software estás buscando');
            return;
        }
        
        // Check if query matches any category
        for (let [keyword, page] of Object.entries(searchMap)) {
            if (query.includes(keyword)) {
                window.location.href = page;
                return;
            }
        }
        
        // If no match, show alert and suggest categories
        alert('No encontramos una categoría exacta. Te recomendamos explorar nuestras categorías principales o contactar a un experto.');
    }
    
    // Search button click
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }
    
    // Search on Enter key
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Observe steps
    document.querySelectorAll('.step').forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(20px)';
        step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(step);
    });
});

// Mobile menu toggle (for future mobile navigation)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
