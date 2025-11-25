document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const isExpanded = mobileMenu.classList.contains('hidden') ? 'false' : 'true';
        mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-item').forEach(item => {
        const toggle = item.querySelector('.faq-toggle');
        const answer = item.querySelector('.faq-answer');
        const icon = toggle.querySelector('svg');

        toggle.addEventListener('click', () => {
            const isOpen = answer.classList.contains('hidden');

            // Close all other open answers
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-answer').classList.add('hidden');
                    otherItem.querySelector('.faq-toggle').setAttribute('aria-expanded', 'false');
                    otherItem.querySelector('svg').classList.remove('rotate-180');
                }
            });

            // Toggle current answer
            answer.classList.toggle('hidden');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            icon.classList.toggle('rotate-180', isOpen);
        });
    });

    // Authentication Modal
    const authModal = document.getElementById('authModal');
    const signInBtnNav = document.getElementById('signInBtnNav');
    const signUpBtnNav = document.getElementById('signUpBtnNav');
    const signInBtnMobile = document.getElementById('signInBtnMobile');
    const signUpBtnMobile = document.getElementById('signUpBtnMobile');
    const closeModal = document.getElementById('closeModal');
    const showLoginBtn = document.getElementById('showLogin');
    const showSignupBtn = document.getElementById('showSignup');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    const showAuthModal = (formToShow = 'login') => {
        authModal.classList.remove('hidden');
        authModal.setAttribute('aria-hidden', 'false');
        if (formToShow === 'login') {
            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
            showLoginBtn.classList.add('bg-vibe-accent', 'text-white');
            showLoginBtn.classList.remove('bg-vibe-border', 'text-vibe-text-medium');
            showSignupBtn.classList.remove('bg-vibe-accent', 'text-white');
            showSignupBtn.classList.add('bg-vibe-border', 'text-vibe-text-medium');
        } else {
            signupForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
            showSignupBtn.classList.add('bg-vibe-accent', 'text-white');
            showSignupBtn.classList.remove('bg-vibe-border', 'text-vibe-text-medium');
            showLoginBtn.classList.remove('bg-vibe-accent', 'text-white');
            showLoginBtn.classList.add('bg-vibe-border', 'text-vibe-text-medium');
        }
    };

    const hideAuthModal = () => {
        authModal.classList.add('hidden');
        authModal.setAttribute('aria-hidden', 'true');
    };

    signInBtnNav.addEventListener('click', () => showAuthModal('login'));
    signUpBtnNav.addEventListener('click', () => showAuthModal('signup'));
    signInBtnMobile.addEventListener('click', () => showAuthModal('login'));
    signUpBtnMobile.addEventListener('click', () => showAuthModal('signup'));
    closeModal.addEventListener('click', hideAuthModal);

    showLoginBtn.addEventListener('click', () => showAuthModal('login'));
    showSignupBtn.addEventListener('click', () => showAuthModal('signup'));

    // Close modal when clicking outside of it
    authModal.addEventListener('click', (e) => {
        if (e.target === authModal) {
            hideAuthModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !authModal.classList.contains('hidden')) {
            hideAuthModal();
        }
    });

    // Prevent form submission for placeholders
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login functionality not implemented. This is a UI demo.');
        hideAuthModal();
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Signup functionality not implemented. This is a UI demo.');
        hideAuthModal();
    });
});