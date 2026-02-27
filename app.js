/* EldersHive - Premium JS Interactions */

const app = {
    init() {
        console.log("EldersHive Premium Initialized.");
        this.showPage('landing');

        // Theme Toggle with smooth transition and icon change
        const themeBtn = document.querySelector('.theme-toggle');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                document.body.classList.toggle('dark-theme');
                const icon = themeBtn.querySelector('i');

                // Add tiny animation class
                icon.style.transform = "scale(0.5)";
                icon.style.opacity = "0";

                setTimeout(() => {
                    if (document.body.classList.contains('dark-theme')) {
                        icon.classList.remove('fa-moon');
                        icon.classList.add('fa-sun');
                        icon.style.color = "#F1C40F"; // Sun color
                    } else {
                        icon.classList.remove('fa-sun');
                        icon.classList.add('fa-moon');
                        icon.style.color = "inherit";
                    }
                    icon.style.transform = "scale(1)";
                    icon.style.opacity = "1";
                    icon.style.transition = "all 0.4s ease";
                }, 150);
            });
        }

        // Font Size Increaser (Elder Accessibility)
        const fontBtn = document.querySelectorAll('.header-controls .icon-btn')[1]; // Second button (text height)
        let currentScale = 1;
        if (fontBtn) {
            fontBtn.addEventListener('click', () => {
                currentScale += 0.1;
                if (currentScale > 1.3) currentScale = 1; // Reset after max
                // Smoothly scale the entire document font size
                document.documentElement.style.fontSize = `${100 * currentScale}%`;

                // Visual feedback
                fontBtn.style.transform = "scale(1.2)";
                setTimeout(() => fontBtn.style.transform = "scale(1)", 200);
            });
        }

        // Voice Button Premium Mock
        const voiceBtns = document.querySelectorAll('.voice-btn, .btn-voice-compose');
        voiceBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                // Add pulse wave effect
                const originalBg = this.style.background;
                this.innerHTML = '<i class="fa-solid fa-microphone-lines fa-fade"></i>';
                this.style.background = "linear-gradient(135deg, #E74C3C, #C0392B)";

                setTimeout(() => {
                    alert('ویب سائٹ آپ کی آواز سن رہی ہے... (ڈیمو)');
                    // Reset
                    this.innerHTML = '<i class="fa-solid fa-microphone-lines"></i>';
                    this.style.background = originalBg;
                }, 1500);
            });
        });

        // Fake News Mockup - Shake animation on click
        const fakeNewsBtn = document.querySelector('.fake-news-alert button');
        if (fakeNewsBtn) {
            fakeNewsBtn.addEventListener('click', function (e) {
                e.preventDefault();
                const card = this.closest('.alert-bubble');
                card.style.animation = "shake 0.5s";
                setTimeout(() => { card.style.animation = ""; }, 500);

                alert('سیکیورٹی الرٹ: یہ لنک محفوظ نہیں ہے، بزرگوں کو فراڈ سے بچانے کے لیے اسے بلاک کر دیا گیا ہے۔');
            });
        }

        // Sidebar Navigation Active State Management
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', function (e) {
                // Remove active from all siblings
                const siblings = this.parentElement.querySelectorAll('.nav-item');
                siblings.forEach(s => s.classList.remove('active'));

                // Add active to clicked
                this.classList.add('active');
            })
        });
    },

    showPage(pageId) {
        // Hide all pages with animation
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.style.opacity = '0';
            page.style.transform = 'translateY(10px) scale(0.98)';
            setTimeout(() => {
                page.classList.remove('active');
            }, 300); // Wait for fade out
        });

        // Show target page
        setTimeout(() => {
            const targetPage = document.getElementById(`page-${pageId}`);
            if (targetPage) {
                targetPage.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 300);
    }
};

// Add shake animation dynamic style
const style = document.createElement('style');
style.innerHTML = `
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(5px); }
  50% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
  100% { transform: translateX(0); }
}`;
document.head.appendChild(style);

// Start application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
