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
            title: 'BPS AI ASSISTANT',
            category: 'AI / HYBRID RAG / GOVTECH',
            description: 'Official conversational AI statistical assistant for Badan Pusat Statistik (BPS). Combines Hybrid RAG with real-time BPS WebAPI integration across 549 provincial and regency offices, PPID profile lookup, multi-layer ScopeGuard prompt defense, installable PWA, and a standalone embeddable cloud bubble widget.',
            images: ['assets/bps-chatbot.webp', 'assets/bps-chatbot-chat.webp'],
            stack: ['Laravel', 'Vue 3', 'BPS WebAPI', 'Hybrid RAG', 'PWA', 'Embeddable Widget'],
            liveUrl: 'https://bps-chatbot-v2.pinnhost.my.id/',
            repoUrl: 'https://github.com/Gimm17/bps-chatbot-ai-v2'
        },
        {
            title: 'CATUR WEB BPS',
            category: 'FULL-STACK / ENTERPRISE GOV',
            description: 'Control of Activity and Time Use Record (CATUR) — full-stack enterprise platform for BPS duty travel assignments, GPS/photo attendance, daily expense reporting, multi-role approval (Admin, Supervisor, Finance), 7-day WITA deadline lock enforcement, and fund disbursement, paired with a Flutter companion mobile app.',
            images: ['assets/catur.webp'],
            stack: ['React', 'Express.js', 'PostgreSQL', 'Sequelize', 'Flutter', 'REST API'],
            liveUrl: 'https://caturv2.gimmhost.my.id/',
            repoUrl: 'https://github.com/Gimm17/CATUR-web-bps'
        },
        {
            title: 'FULX EXTRACTOR',
            category: 'CHROME EXT / DISTRIBUTED',
            description: 'FASIH Unique Link eXtractor (FULX) — Chrome Manifest V3 extension + PHP 8.3/MySQL central server & React dashboard coordinating up to 5 PCs in parallel. Overcomes FASIH 1,000-row query limits via recursive region/SLS splitting, atomic task locking, Excel identity-list batching, and combined XLSX exports.',
            images: ['assets/fulx.webp', 'assets/fulx-panel.webp'],
            stack: ['Chrome MV3', 'React', 'PHP 8.3', 'MySQL', 'Atomic Locking', 'XLSX'],
            liveUrl: 'https://fulx.pinnhost.my.id/',
            repoUrl: 'https://github.com/Gimm17/fasih-extract-unique-link'
        },
        {
            title: 'BPS MONITORING FLEXIBLE',
            category: 'GOVTECH / ANALYTICS',
            description: 'Flexible statistical activity monitoring platform built with Vue 3 + TypeScript and Laravel 13. Supports multi-role regional scopes, idempotent batch realization input, versioned official snapshots, revision approval tickets, audit logs, CSV exports, and Playwright E2E verification.',
            images: ['assets/bps-dmf.webp'],
            stack: ['Laravel 13', 'Vue 3', 'TypeScript', 'MySQL', 'Playwright E2E'],
            liveUrl: 'https://bps-dashflex.pinnhost.my.id/',
            repoUrl: 'https://github.com/Gimm17/DASHBOARD-MONITORING-FLEXIBLE'
        },
        {
            title: 'SIKLAS-NB',
            category: 'ML / NAIVE BAYES / GOVTECH',
            description: 'Social Aid Eligibility Classification System for Pangalasiang Village using a custom Laravel 13 Naive Bayes engine + Vue 3 SPA. Features hold-out & k-fold cross-validation evaluation, confusion matrix analytics, multi-file CSV/XLSX bulk import, house photo gallery, approval queue, and PDF reporting (37/37 PHPUnit tests passing).',
            images: ['assets/siklas-nb.webp', 'assets/siklas-eval.webp'],
            stack: ['Laravel 13', 'Vue 3', 'Naive Bayes', 'MySQL', 'Sanctum', 'PHPUnit'],
            liveUrl: 'https://siklas.pinnhost.my.id/',
            repoUrl: 'https://github.com/Gimm17/Sistem-Klasifikasi-Bantuan-Sosial-Desa-Pangalasiang'
        },
        {
            title: 'CRISISMAP',
            category: 'AI / GEOSPATIAL / VISION',
            description: 'AI-Powered Humanitarian Infrastructure Damage Assessment Dashboard. Combines a Next.js + Leaflet AOI map workspace, FastAPI backend, PostGIS spatial database, Celery workers, and PyTorch SiamUnet Siamese CNNs to analyze pre/post-disaster satellite imagery and generate reconstruction reports.',
            images: ['assets/crisismap.webp', 'assets/crisismap-workspace.webp'],
            stack: ['Next.js', 'FastAPI', 'PyTorch (SiamUnet)', 'PostGIS', 'Leaflet.js', 'Docker'],
            repoUrl: 'https://github.com/Gimm17/CrisisMap'
        },
        {
            title: 'SAPA BPS SULTENG',
            category: 'OPS PLATFORM / WHATSAPP API',
            description: 'WhatsApp Broadcast & Operations Platform for BPS Sulawesi Tengah via Meta WhatsApp Cloud API. Automates employee attendance reminders, publication deadlines, and public opt-in BRS statistical news subscriptions with cron throttling, template sync, and full delivery audit trails.',
            images: ['assets/sapa-bps.webp'],
            stack: ['Svelte', 'Node.js', 'Meta WhatsApp API', 'Cron Scheduler', 'MySQL'],
            repoUrl: 'https://github.com/Gimm17/bps-wa-broadcast'
        },
        {
            title: 'GIMORA DIGITAL',
            category: 'AGENCY PLATFORM / CMS',
            description: 'Production web platform and custom CMS for Gimora Digital Solutions. Built with Laravel 12, Vue 3, Inertia.js v2, Tailwind CSS v4, and GSAP animations, featuring dynamic service showcases, portfolio/blog management, admin invoice generation, and 42 Pest PHP automated tests.',
            images: ['assets/gimora.webp'],
            stack: ['Laravel 12', 'Vue 3', 'Inertia.js', 'Tailwind v4', 'GSAP', 'Pest PHP'],
            liveUrl: 'https://gimora.my.id/'
        },
        {
            title: 'MAGANGHUB REMINDER',
            category: 'PWA / WEB PUSH / AUTOMATION',
            description: 'Installable Progressive Web App delivering automated Web Push attendance reminders 3x daily (16:30, 20:30, 23:00 WITA) for MagangHub Kemnaker interns. Built with Laravel 12, Vue 3, VAPID Web Push, Service Worker quick-action buttons, and cPanel-ready database queues.',
            images: ['assets/maganghub-reminder.webp'],
            stack: ['Laravel 12', 'Vue 3', 'Pinia', 'VAPID Web Push', 'Service Worker'],
            liveUrl: 'https://absendong.pinnhost.my.id/',
            repoUrl: 'https://github.com/Gimm17/absen-reminder-maganghub'
        },
        {
            title: 'CAFE QR',
            category: 'POS / ORDERING',
            description: 'A QR-code based smart ordering system designed for modern cafés. Customers scan a table QR to browse the menu, place orders, and track status in real-time. The kitchen dashboard receives live order feeds.',
            images: ['assets/cafeqr.webp'],
            stack: ['Laravel', 'Vue.js', 'Pinia', 'MySQL', 'REST API', 'QR Code'],
            liveUrl: 'https://cafeqrv2.gimmhost.my.id/',
            repoUrl: 'https://github.com/Gimm17/cafe-qr-ordering-v2'
        },
        {
            title: 'PULMONARY DETECT',
            category: 'AI / HEALTHCARE',
            description: 'An AI-powered pulmonary disease detection web application using a hybrid architecture. It runs MobileNet models directly in the browser via TensorFlow.js for privacy-focused, zero-server-inference of X-Ray images, achieving 99.51% accuracy in detecting Pneumonia and Tuberculosis.',
            images: ['assets/pulmonarydetect.webp'],
            stack: ['Python', 'Flask', 'JavaScript', 'TensorFlow.js', 'HTML/CSS'],
            liveUrl: 'https://pulmonarydetect.gimmhost.my.id/',
            repoUrl: 'https://github.com/Gimm17/PulmonaryDetect-Advanced-Lung-Disease-Detection'
        },
        {
            title: 'PEMWIL PALU',
            category: 'GIS / PUBLIC SECTOR',
            description: 'An interactive GIS-based mapping system built for Palu city government to manage and visualize regional administrative boundaries. Features include multi-layer spatial data, polygon editing, search functionality, and data export capabilities.',
            images: ['assets/pemwilpalu.webp'],
            stack: ['Laravel', 'PHP', 'Leaflet.js', 'MySQL', 'GeoJSON', 'Bootstrap'],
            liveUrl: 'https://pemwilpalu.gimmhost.my.id/',
            repoUrl: 'https://github.com/Gimm17/Pemetaan-wilayah'
        },
        {
            title: 'PHOTOBOOTH STUDIO',
            category: 'CLIENT-SIDE / WEBGL / PWA',
            description: 'Privacy-first browser photo booth studio built with React, TypeScript, and Zustand. Captures live camera shots entirely on-device with zero server uploads, offering 35mm retro film shaders, custom frame margin cropping, sticker personalization, 300 DPI strip export, and local IndexedDB gallery storage.',
            images: ['assets/photobooth.webp'],
            stack: ['React', 'TypeScript', 'Zustand', 'Canvas / WebGL', 'IndexedDB', 'Playwright'],
            liveUrl: 'https://photobooth-neon-alpha.vercel.app/',
            repoUrl: 'https://github.com/Gimm17/PhotoBooth'
        },
        {
            title: 'PROMPT STUDIO',
            category: 'NEXT.JS 16 / AI PROMPT',
            description: 'Viral AI image & multi-scene video prompt builder ("The Man Who Can\'t Be Moved") built with Next.js 16, React 19, Tailwind CSS, and Upstash Redis (5,700+ views). Supports 21 scene presets, 30+ character slots, couple positioning, 130 artists across 5 regions, and structured multi-scene camera timelines.',
            images: ['assets/promptstudio.webp'],
            stack: ['Next.js 16', 'React 19', 'TypeScript', 'Upstash Redis', 'Tailwind CSS'],
            liveUrl: 'https://man-who-cant-be-moved-prompt-genera.vercel.app/',
            repoUrl: 'https://github.com/Gimm17/ManWhoCantBeMoved-PromptGenerator'
        },
        {
            title: 'PINPLAY BOT WEB',
            category: 'REACT 19 / GSAP / DISCORD',
            description: 'Official web platform, feature showcase, interactive command directory, setup guide, and dashboard portal for PinPlay — a high-definition Discord Music Bot with Spotify integration, real-time audio filters, and Lavalink node streaming.',
            images: ['assets/pinplay.webp'],
            stack: ['React 19', 'GSAP', 'Vite', 'Discord Bot', 'Lavalink'],
            liveUrl: 'https://pin-play-website.vercel.app/',
            repoUrl: 'https://github.com/Gimm17/PinPlay-Website'
        },
        {
            title: 'RUANG PERIKSA',
            category: 'GOVTECH / AI AUDIT',
            description: 'Automated BPS statistical publication QA system built with Laravel 13, Vue 3, Inertia.js v2, and TypeScript. Extracts PDF page text and table structures via Poppler, evaluates layout, narrative consistency, and Excel table parity with rule-based + AI checks, and exports audit workbooks via PhpSpreadsheet.',
            images: ['assets/ruang-periksa.webp', 'assets/ruang-periksa-dash.webp'],
            stack: ['Laravel 13', 'Vue 3', 'Inertia.js v2', 'TypeScript', 'Poppler', 'PhpSpreadsheet', 'Playwright'],
            liveUrl: 'https://bps-cek-publikasi.pinnhost.my.id/',
            repoUrl: 'https://github.com/Gimm17/bps-revisi-publikasi'
        },
        {
            title: 'VERIF LOCATION BPS',
            category: 'GIS / SPATIAL VERIFICATION',
            description: 'Business Location Recovery & Spatial Verification platform for BPS Kota Palu (SBR/SE2026). Combines an interactive Leaflet.js map workspace, Excel dataset batch import, multi-role Sanctum verification workflows, and field coordinate validation built with Laravel 13, Vue 3, and Pinia.',
            images: ['assets/verif-location.webp', 'assets/verif-location-map.webp'],
            stack: ['Laravel 13', 'Vue 3', 'Pinia', 'Leaflet.js', 'Sanctum', 'Excel'],
            liveUrl: 'https://bps-verif-location.pinnhost.my.id/',
            repoUrl: 'https://github.com/Gimm17/Business-Location-Verification-v2'
        },
        {
            title: 'DATA NARASI',
            category: 'AI / DATA ANALYTICS',
            description: 'AI Report Analyst platform enabling users to upload CSV/Excel datasets for automated cleaning, exploratory statistics, interactive Chart.js visualizations, and Bahasa Indonesia executive narratives powered by FastAPI + Pandas with multi-AI provider fallback.',
            images: ['assets/datanarasi.webp'],
            stack: ['Laravel 12', 'Vue 3', 'Inertia.js', 'Python', 'FastAPI', 'Pandas', 'Chart.js', 'MySQL'],
            liveUrl: 'https://data-narasi.pinnhost.my.id/',
            repoUrl: 'https://github.com/Gimm17/data-narasi'
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

        // Live & GitHub buttons
        const liveBtn = document.getElementById('modal-live-btn');
        const repoBtn = document.getElementById('modal-repo-btn');

        if (project.liveUrl) {
            liveBtn.href = project.liveUrl;
            liveBtn.style.display = 'inline-flex';
        } else {
            liveBtn.style.display = 'none';
        }

        if (project.repoUrl) {
            repoBtn.href = project.repoUrl;
            repoBtn.style.display = 'inline-flex';
        } else {
            repoBtn.style.display = 'none';
        }

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
