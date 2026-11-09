/**
 * English with Ceci - JavaScript Interactivo
 * Profesora: Cecilia Cappuccio
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // CONFIGURACIÓN DE CONTACTO
  // Reemplazar con el número de teléfono real (con código de país, ej: 54911xxxxxxxx para Argentina)
  // ==========================================
  const CONFIG = {
    whatsappNumber: '5491167375706',
    email: 'ceciliacappuccio05@gmail.com',
    instagram: 'englishwithceci',
    teacherName: 'Cecilia Cappuccio',
  };

  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      menuIconOpen.classList.toggle('hidden');
      menuIconClose.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIconOpen.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const button = item.querySelector('.faq-button');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (button && answer) {
      button.addEventListener('click', () => {
        const isOpen = answer.classList.contains('open');

        // Cerrar otros abiertos
        document.querySelectorAll('.faq-answer').forEach(el => el.classList.remove('open'));
        document.querySelectorAll('.faq-icon').forEach(el => el.classList.remove('rotate'));

        if (!isOpen) {
          answer.classList.add('open');
          if (icon) icon.classList.add('rotate');
        }
      });
    }
  });

  // 3. Quiz interactivo de Recomendación de Clases
  let quizData = {
    objective: '',
    level: '',
    modality: ''
  };

  const steps = [
    document.getElementById('step-1'),
    document.getElementById('step-2'),
    document.getElementById('step-3'),
    document.getElementById('quiz-result')
  ];

  const quizOptions = document.querySelectorAll('.quiz-option');

  quizOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const stepIndex = parseInt(opt.getAttribute('data-step'), 10);
      const field = opt.getAttribute('data-field');
      const value = opt.getAttribute('data-value');

      quizData[field] = value;

      // Highlight selected in current step
      const currentContainer = opt.closest('.quiz-step');
      currentContainer.querySelectorAll('.quiz-option').forEach(el => {
        el.classList.remove('border-indigo-600', 'bg-indigo-50');
      });
      opt.classList.add('border-indigo-600', 'bg-indigo-50');

      // Move to next step with slight smooth delay
      setTimeout(() => {
        currentContainer.classList.remove('active');
        if (stepIndex < 3) {
          const nextStep = document.getElementById(`step-${stepIndex + 1}`);
          if (nextStep) nextStep.classList.add('active');
        } else {
          // Show result
          calculateQuizResult();
        }
      }, 250);
    });
  });

  function calculateQuizResult() {
    const resultContainer = document.getElementById('quiz-result');
    if (!resultContainer) return;

    let planName = 'Clases Personalizadas 1 a 1';
    let planDesc = 'El formato ideal para avanzar a tu propio ritmo con la guía exclusiva de Cecilia.';
    let recommendationBadge = '100% A Tu Medida';

    if (quizData.objective === 'trabajo') {
      planName = 'Business English & Entrevistas';
      planDesc = 'Enfocado en vocabulario profesional, simulaciones de entrevistas, presentaciones y redacción de emails.';
      recommendationBadge = 'Enfoque Profesional';
    } else if (quizData.objective === 'fluidez') {
      planName = 'Conversación & Fluidez Real';
      planDesc = 'Diseñado para vencer la barrera de la timidez, soltar la lengua y ganar confianza en cualquier situación.';
      recommendationBadge = 'Conversacional';
    } else if (quizData.objective === 'viajes') {
      planName = 'Inglés Práctico para Viajeros';
      planDesc = 'Situaciones cotidianas de viaje: aeropuertos, reservas, restaurantes, compras y cómo resolver imprevistos.';
      recommendationBadge = 'Práctico & Dinámico';
    } else if (quizData.level === 'cero') {
      planName = 'Inglés Inicial sin Presiones';
      planDesc = 'Empezá desde las bases con explicaciones claras, calidez y paciencia infinita. ¡Equivocarse es bienvenido!';
      recommendationBadge = 'Primeros Pasos';
    }

    if (quizData.modality === 'grupo') {
      planName += ' (Modalidad Grupal)';
      planDesc += ' En grupos pequeños para interactuar y debatir con compañeros.';
    }

    // Actualizar campos del resultado
    document.getElementById('result-badge').innerText = recommendationBadge;
    document.getElementById('result-title').innerText = planName;
    document.getElementById('result-desc').innerText = planDesc;
    document.getElementById('result-user-summary').innerText = 
      `Tu objetivo: ${quizData.objective} | Nivel inicial: ${quizData.level} | Preferencia: ${quizData.modality}`;

    // Armar enlace de WhatsApp con el resultado
    const waText = `¡Hola Ceci! Hice el cuestionario en tu web "English with Ceci" 🌟%0A%0A` +
      `📌 *Mi resultado recomendado:* ${planName}%0A` +
      `🎯 *Objetivo:* ${quizData.objective}%0A` +
      `📊 *Nivel actual:* ${quizData.level}%0A` +
      `👥 *Modalidad:* ${quizData.modality}%0A%0A` +
      `¿Podrías contarme sobre disponibilidad de horarios y aranceles? ¡Muchas gracias!`;

    const resultWaBtn = document.getElementById('result-whatsapp-btn');
    if (resultWaBtn) {
      resultWaBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${waText}`;
    }

    resultContainer.classList.add('active');
  }

  // Botón reiniciar quiz
  const resetQuizBtn = document.getElementById('reset-quiz-btn');
  if (resetQuizBtn) {
    resetQuizBtn.addEventListener('click', () => {
      quizData = { objective: '', level: '', modality: '' };
      document.querySelectorAll('.quiz-option').forEach(el => {
        el.classList.remove('border-indigo-600', 'bg-indigo-50');
      });
      document.querySelectorAll('.quiz-step').forEach(el => el.classList.remove('active'));
      const step1 = document.getElementById('step-1');
      if (step1) step1.classList.add('active');
    });
  }

  // 4. Formulario de Contacto
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name')?.value.trim() || 'Estudiante';
      const email = document.getElementById('form-email')?.value.trim() || '';
      const goal = document.getElementById('form-goal')?.value || 'Aprender inglés';
      const level = document.getElementById('form-level')?.value || 'No sé mi nivel';
      const message = document.getElementById('form-message')?.value.trim() || '';

      const waMsg = `¡Hola Ceci! Te contacto desde la web "English with Ceci" 👋%0A%0A` +
        `👤 *Nombre:* ${name}%0A` +
        `📧 *Email:* ${email}%0A` +
        `🎯 *Objetivo:* ${goal}%0A` +
        `📊 *Nivel estimado:* ${level}%0A` +
        `💬 *Mensaje:* ${message}%0A%0A` +
        `¡Me gustaría coordinar una charla de diagnóstico / clase de prueba!`;

      // Abrir WhatsApp directamente
      window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${waMsg}`, '_blank');
    });
  }

  // 5. Botón flotante de WhatsApp & Saludo emergente
  const waToast = document.getElementById('wa-floating-toast');
  const closeWaToast = document.getElementById('close-wa-toast');
  
  if (waToast) {
    // Mostrar saludo flotante después de 3.5 segundos
    setTimeout(() => {
      waToast.classList.remove('hidden');
      waToast.classList.add('flex');
    }, 3500);

    if (closeWaToast) {
      closeWaToast.addEventListener('click', (e) => {
        e.stopPropagation();
        waToast.classList.add('hidden');
      });
    }
  }

  // Actualizar año automático en el footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.innerText = new Date().getFullYear();
  }
});
