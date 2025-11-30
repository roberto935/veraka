// Category Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Filter Functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const toolCards = document.querySelectorAll('.tool-card:not(.placeholder)');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            toolCards.forEach(card => {
                if (filterValue === 'all') {
                    card.classList.remove('hidden');
                    fadeIn(card);
                } else {
                    const cardCategory = card.getAttribute('data-category');
                    if (cardCategory && cardCategory.includes(filterValue)) {
                        card.classList.remove('hidden');
                        fadeIn(card);
                    } else {
                        fadeOut(card);
                    }
                }
            });
        });
    });
    
    // Comparison Functionality
    const compareCheckboxes = document.querySelectorAll('.compare-checkbox');
    const compareBtn = document.getElementById('compareBtn');
    let selectedTools = [];
    
    compareCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const toolName = this.getAttribute('data-tool');
            
            if (this.checked) {
                if (selectedTools.length < 3) {
                    selectedTools.push(toolName);
                } else {
                    this.checked = false;
                    alert('Solo puedes comparar hasta 3 herramientas a la vez');
                }
            } else {
                selectedTools = selectedTools.filter(tool => tool !== toolName);
            }
            
            updateCompareButton();
        });
    });
    
    function updateCompareButton() {
        if (selectedTools.length > 0) {
            compareBtn.disabled = false;
            compareBtn.textContent = `Comparar (${selectedTools.length})`;
        } else {
            compareBtn.disabled = true;
            compareBtn.textContent = 'Comparar (0)';
        }
    }
    
    // Compare button click
    if (compareBtn) {
        compareBtn.addEventListener('click', function() {
            if (selectedTools.length > 1) {
                // In a real implementation, this would open a comparison view
                alert(`Comparando: ${selectedTools.join(', ')}\n\nEsta funcionalidad mostrará una comparación lado a lado de las herramientas seleccionadas.`);
            } else {
                alert('Selecciona al menos 2 herramientas para comparar');
            }
        });
    }
    
    // Tool details buttons
    const detailButtons = document.querySelectorAll('.btn-tool-details');
    detailButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const toolCard = this.closest('.tool-card');
            const toolName = toolCard.querySelector('h3').textContent;
            
            // In a real implementation, this would navigate to a detailed tool page
            alert(`Mostrando detalles de: ${toolName}\n\nEsta página incluirá:\n- Características completas\n- Precios detallados\n- Capturas de pantalla\n- Casos de uso\n- Comparación con alternativas`);
        });
    });
    
    // Animation helpers
    function fadeIn(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.classList.remove('hidden');
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 10);
    }
    
    function fadeOut(element) {
        element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.classList.add('hidden');
        }, 300);
    }
    
    // Scroll to top on filter change
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            window.scrollTo({
                top: document.querySelector('.tools-section').offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
    
    // Add subtle animation on scroll for tool cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    toolCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
        observer.observe(card);
    });
});
