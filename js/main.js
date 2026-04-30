document.addEventListener("DOMContentLoaded", () => {

    // 1. Splash Screen Logic
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1500);

    // 2. Custom Cursor Logic
    const cursor = document.getElementById('cursor');
    const hoverTargets = document.querySelectorAll('.hover-target, a, .catalog-card');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top  = e.clientY + 'px';
    });

    hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
        target.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });

    // 3. Project Data Store
    const projectsData = [
        {
            title: 'PEMWIL PALU',
            category: 'GIS / PUBLIC SECTOR',
            description: 'An interactive GIS-based mapping system built for Palu city government to manage and visualize regional administrative boundaries. Features include multi-layer spatial data, polygon editing, search functionality, and data export capabilities.',
            images: ['assets/pemwilpalu.webp'],
            stack: ['Laravel', 'PHP', 'Leaflet.js', 'MySQL', 'GeoJSON', 'Bootstrap'],
            liveUrl: 'https://pemwilpalu.gimmhost.my.id/'
        },
        {
            title: 'UMKM BANGGAI',
            category: 'E-COMMERCE',
            description: 'A full-featured e-commerce marketplace empowering local SMEs (UMKM) in the Banggai region. Includes product catalogs, shopping cart, checkout flow, seller dashboards, and order management system.',
            images: ['assets/umkm-banggai.webp'],
            stack: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Midtrans API'],
            liveUrl: 'https://banggaiumkm.gimmhost.my.id/'
        },
        {
            title: 'CAFE QR',
            category: 'POS / ORDERING',
            description: 'A QR-code based smart ordering system designed for modern cafés. Customers scan a table QR to browse the menu, place orders, and track status in real-time. The kitchen dashboard receives live order feeds.',
            images: ['assets/cafeqr.webp'],
            stack: ['Laravel', 'Vue.js', 'Pinia', 'MySQL', 'REST API', 'QR Code'],
            liveUrl: 'https://cafeqrv2.gimmhost.my.id/'
        },
        {
            title: 'PETSHOP ROUTING',
            category: 'ALGORITHMS + MAPS',
            description: "An interactive map application that finds the shortest path to nearby pet shops using Dijkstra's algorithm. Users can select start/end nodes on the map and visualize the optimal route with distance calculations.",
            images: ['assets/petshop-dijkstra.webp'],
            stack: ['CodeIgniter', 'PHP', 'Leaflet.js', 'MySQL', 'Dijkstra Algorithm'],
            liveUrl: 'https://petshopfinder.gimmhost.my.id/'
        },
        {
            title: 'WEB TRAVEL',
            category: 'TRAVEL / BOOKING',
            description: 'A visually rich travel destination showcase and booking platform. Features destination discovery, package browsing, gallery views, and booking forms with an emphasis on beautiful imagery and smooth UX.',
            images: ['assets/webtravel.webp'],
            stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
            liveUrl: 'https://webtravel.gimmhost.my.id/'
        },
        {
            title: 'PULMONARY DETECT',
            category: 'AI / HEALTHCARE',
            description: 'An AI-powered pulmonary disease detection web application using a hybrid architecture. It runs MobileNet models directly in the browser via TensorFlow.js for privacy-focused, zero-server-inference of X-Ray images, achieving 99.51% accuracy in detecting Pneumonia and Tuberculosis.',
            images: ['assets/pulmonarydetect.webp'],
            stack: ['Python', 'Flask', 'JavaScript', 'TensorFlow.js', 'HTML/CSS'],
            liveUrl: 'https://pulmonarydetect.gimmhost.my.id/'
        },
        {
            title: 'DATA NARASI',
            category: 'AI / LLM / DATA ANALYTICS',
            description: 'AI Report Analyst platform — upload CSV/Excel, data is auto-cleaned, visualized with interactive charts, and AI writes business narratives in Bahasa Indonesia. Features 11 analysis types, 6 tone options, and multi-AI fallback chain (Gemini, Claude, Kimi, GLM, MiniMax, AI Nvidia) for maximum reliability.',
            images: ['assets/datanarasi.webp'],
            stack: ['Laravel 12', 'Vue 3', 'Inertia.js', 'Python', 'FastAPI', 'Pandas', 'Chart.js', 'MySQL'],
            liveUrl: 'https://data-narasi-production.up.railway.app/'
        }
    ];

    // 4. Modal & Carousel Logic
    const modal        = document.getElementById('project-modal');
    const modalClose   = document.getElementById('modal-close');
    const carouselTrack = document.getElementById('carousel-track');
    const carouselDots  = document.getElementById('carousel-dots');
    const prevBtn      = document.getElementById('carousel-prev');
    const nextBtn      = document.getElementById('carousel-next');
    let currentSlide = 0;
    let totalSlides  = 0;

    function openModal(projectIndex) {
        const project = projectsData[projectIndex];
        if (!project) return;

        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-cat').textContent   = project.category;
        document.getElementById('modal-desc').textContent  = project.description;

        // Stack tags
        const stackContainer = document.getElementById('modal-stack');
        stackContainer.innerHTML = '';
        project.stack.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'modal-stack-tag';
            tag.textContent = tech;
            stackContainer.appendChild(tag);
        });

        // Live button
        document.getElementById('modal-live-btn').href = project.liveUrl;

        // Carousel slides
        carouselTrack.innerHTML = '';
        carouselDots.innerHTML  = '';
        currentSlide = 0;
        totalSlides  = project.images.length;

        project.images.forEach((imgSrc, i) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.innerHTML = `<img src="${imgSrc}" alt="${project.title} screenshot ${i + 1}"
                onerror="this.src='https://placehold.co/720x380/0b0c10/ccff00?text=${encodeURIComponent(project.title)}'">`;
            carouselTrack.appendChild(slide);

            const dot = document.createElement('button');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => goToSlide(i));
            carouselDots.appendChild(dot);
        });

        updateCarouselButtons();
        updateCarousel();

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
    }

    function updateCarousel() {
        carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        carouselDots.querySelectorAll('.carousel-dot')
            .forEach((d, i) => d.classList.toggle('active', i === currentSlide));
    }

    function updateCarouselButtons() {
        const show = totalSlides > 1;
        prevBtn.style.display      = show ? 'flex' : 'none';
        nextBtn.style.display      = show ? 'flex' : 'none';
        carouselDots.style.display = show ? 'flex' : 'none';
    }

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    });

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
        if (modal.classList.contains('active')) {
            if (e.key === 'ArrowLeft')  { currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; updateCarousel(); }
            if (e.key === 'ArrowRight') { currentSlide = (currentSlide + 1) % totalSlides; updateCarousel(); }
        }
    });

    // Card click handlers
    document.querySelectorAll('.catalog-card').forEach(card => {
        card.addEventListener('click', () => {
            const idx = parseInt(card.getAttribute('data-project'));
            openModal(idx);
        });
    });

    // Archive Accordion (Mobile)
    document.querySelectorAll('.archive-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent toggling if clicking the GitHub link
            if (!e.target.closest('.archive-links a')) {
                card.classList.toggle('active');
            }
        });
    });

    // 5. Scroll Intersection Observer (Fade Up)
    const fadeElements  = document.querySelectorAll('.fade-up');
    const appearOptions = {
        threshold:  0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    fadeElements.forEach(el => appearOnScroll.observe(el));
});

// 6. View Counter — memanggil counter.php (backend sendiri agar bebas CORS)
(async () => {
    try {
        const res  = await fetch('./counter.php');
        const data = await res.json();
        document.getElementById('view-count').textContent = (data.count ?? 0).toLocaleString();
    } catch (e) {
        document.getElementById('view-count').textContent = '--';
    }
})();
