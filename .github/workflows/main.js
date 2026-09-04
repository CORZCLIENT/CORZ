/* =========================================================
   CORZ WEBSITE — JAVASCRIPT
   Small vanilla-JS interactions; no framework required.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // ---------- Mobile navigation ----------
  const menuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---------- Scroll reveal ----------
  const revealItems = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => revealObserver.observe(item));

  // ---------- Animated number counters ----------
  // Change data-count in HTML to your real verified values.
  const counters = document.querySelectorAll("[data-count]");
  const counted = new WeakSet();

  function animateCounter(el) {
    if (counted.has(el)) return;
    counted.add(el);

    const target = Number(el.dataset.count || 0);
    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(target * eased).toLocaleString();

      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString();
    }

    requestAnimationFrame(tick);
  }

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.65 });

  counters.forEach(counter => counterObserver.observe(counter));

  // ---------- Clip filtering ----------
  const tabs = document.querySelectorAll(".tab");
  const clips = document.querySelectorAll(".clip-card");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.dataset.filter;
      clips.forEach(card => {
        const show = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !show);
      });
    });
  });

  // ---------- Click-to-play videos ----------
  document.querySelectorAll(".clip-card").forEach(card => {
    const video = card.querySelector("video");
    const play = card.querySelector(".play-btn");

    if (!video || !play) return;

    play.addEventListener("click", () => {
      if (video.paused) {
        video.play().catch(() => {});
        play.textContent = "❚❚";
        card.classList.add("playing");
      } else {
        video.pause();
        play.textContent = "▶";
        card.classList.remove("playing");
      }
    });

    video.addEventListener("ended", () => {
      play.textContent = "▶";
      card.classList.remove("playing");
    });
  });

  // ---------- Current year ----------
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
