/* ═══════════════════════════════════════════════════
   Privacy Law Timeline — JavaScript
   Modal • Tooltip • Quiz • Scroll Animations
   ═══════════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  /* ── References ── */
  const overlay = document.getElementById("modal-overlay");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");
  const tooltipEl = document.getElementById("tooltip-popup");
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const heroSubtitle = document.getElementById("hero-subtitle");

  /* ═══════════ 1. TYPING EFFECT ═══════════ */
  const phrases = [
    "From 1890 to the AI age…",
    "Global milestones & Philippine landmarks…",
    "Your data, your rights, your future.",
  ];
  let phraseIdx = 0,
    charIdx = 0,
    deleting = false;
  function typeLoop() {
    const current = phrases[phraseIdx];
    heroSubtitle.textContent = current.substring(0, charIdx);
    if (!deleting) {
      charIdx++;
      if (charIdx > current.length) {
        setTimeout(() => {
          deleting = true;
          typeLoop();
        }, 1800);
        return;
      }
    } else {
      charIdx--;
      if (charIdx < 0) {
        charIdx = 0;
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }
    setTimeout(typeLoop, deleting ? 30 : 60);
  }
  typeLoop();

  /* ═══════════ 2. MOBILE NAV ═══════════ */
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  /* ═══════════ 3. ACTIVE NAV HIGHLIGHT ═══════════ */
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-link");
  const observerNav = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navItems.forEach((n) => n.classList.remove("active"));
          const active = document.querySelector(
            `.nav-link[href="#${entry.target.id}"]`,
          );
          if (active) active.classList.add("active");
        }
      });
    },
    { threshold: 0.35 },
  );
  sections.forEach((s) => observerNav.observe(s));

  /* ═══════════ 4. SCROLL ANIMATIONS ═══════════ */
  const animEls = document.querySelectorAll(".animate-on-scroll");
  const observerAnim = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observerAnim.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
  );
  animEls.forEach((el) => observerAnim.observe(el));

  /* ═══════════ 5. MODAL SYSTEM ═══════════ */
  const modalData = {
    "modal-1": {
      icon: "💡",
      title: "Why Warren & Brandeis Matters",
      text: "Before this 1890 essay, there was no legal concept of a personal right to privacy. Warren and Brandeis argued that evolving technology — specifically photography and newspapers — threatened individual dignity. Their work transformed privacy from a moral idea into a legal right, influencing every privacy statute that followed.",
    },
    "modal-2": {
      icon: "💡",
      title: "Why the UDHR (Art. 12) Matters",
      text: "By enshrining privacy in the Universal Declaration of Human Rights, the United Nations elevated it from a national concern to a universal value. Article 12 became the moral and legal reference point for constitutions and data protection laws around the globe, including the Philippine Constitution and the EU's GDPR.",
    },
    "modal-3": {
      icon: "💡",
      title: "Why the U.S. Privacy Act Matters",
      text: 'The Privacy Act of 1974 was a direct response to government overreach revealed by Watergate. It created the first enforceable rules for how governments handle personal information, introduced the concept of "Fair Information Practices," and proved that citizens could hold their government accountable for data misuse.',
    },
    "modal-4": {
      icon: "💡",
      title: "Why the Philippine Constitution (Art. III, Sec. 3) Matters",
      text: "Written after decades of authoritarian rule, this constitutional provision captures the Philippines' hard-won commitment to civil liberties. It serves as the supreme legal basis for all Philippine privacy laws, including the Data Privacy Act of 2012, and has been invoked by the Supreme Court to strike down surveillance overreach.",
    },
    "modal-5": {
      icon: "💡",
      title: "Why the EU Data Protection Directive Matters",
      text: "The 1995 Directive was the world's first supranational data protection framework. It forced every EU country to adopt privacy laws and introduced concepts — consent, purpose limitation, data minimization — that became the global gold standard and the direct predecessor of the GDPR.",
    },
    "modal-6": {
      icon: "💡",
      title: "Why COPPA Matters",
      text: "COPPA was one of the first laws to recognize that children deserve special privacy protections online. It forced the tech industry to redesign products and policies around minors, setting the stage for global children's data protection efforts like the UK's Age Appropriate Design Code.",
    },
    "modal-7": {
      icon: "💡",
      title: "Why the Data Privacy Act of 2012 Matters",
      text: "RA 10173 brought the Philippines into the modern era of data protection. It gave Filipinos enforceable rights over their personal information, required organizations to appoint Data Protection Officers, and proved critical when the massive 2016 COMELEC data breach exposed 55 million voter records.",
    },
    "modal-8": {
      icon: "💡",
      title: "Why the NPC Matters",
      text: "A law is only as strong as its enforcer. The National Privacy Commission gave the Data Privacy Act real teeth — investigating breaches, issuing compliance orders, and building a culture of privacy awareness through initiatives like Privacy Awareness Week. Without the NPC, RA 10173 would be largely unenforceable.",
    },
    "modal-9": {
      icon: "💡",
      title: "Why the GDPR Matters",
      text: "The GDPR is the most influential data protection law in history. Its extraterritorial reach means any company anywhere that handles EU residents' data must comply. Massive fines — up to 4% of global revenue — forced even the largest tech companies to fundamentally rethink how they collect and process personal data.",
    },
    "modal-10": {
      icon: "💡",
      title: "Why CCPA Matters",
      text: "As the first comprehensive U.S. state privacy law, the CCPA proved that American consumers demand the same data rights as Europeans. It created a domino effect: over a dozen states followed with their own privacy laws, building momentum toward a potential federal privacy standard.",
    },
    "modal-11": {
      icon: "💡",
      title: "Why AI & Privacy Regulations Matter",
      text: "AI systems process personal data at unprecedented scale — facial recognition, predictive profiling, generative content. The emerging wave of AI-specific regulations recognizes that traditional privacy laws are insufficient. These new frameworks aim to ensure transparency, accountability, and human oversight as AI becomes deeply embedded in daily life.",
    },
  };

  document.querySelectorAll(".why-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const data = modalData[btn.dataset.modal];
      if (!data) return;
      modalBody.innerHTML = `
        <span class="modal-icon">${data.icon}</span>
        <h3>${data.title}</h3>
        <p>${data.text}</p>`;
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  function closeModal() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
  modalClose.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  /* ═══════════ 6. TOOLTIP SYSTEM ═══════════ */
  let tooltipTimeout;
  function showTooltip(btn) {
    const text = btn.dataset.tooltip;
    if (!text) return;
    tooltipEl.textContent = text;
    tooltipEl.classList.add("show");
    const rect = btn.getBoundingClientRect();
    let top = rect.bottom + 10;
    let left = rect.left + rect.width / 2 - 160;
    if (left < 10) left = 10;
    if (left + 320 > window.innerWidth) left = window.innerWidth - 330;
    if (top + 120 > window.innerHeight)
      top = rect.top - 10 - tooltipEl.offsetHeight;
    tooltipEl.style.top = top + "px";
    tooltipEl.style.left = left + "px";
  }
  function hideTooltip() {
    tooltipEl.classList.remove("show");
  }

  document.querySelectorAll(".fact-btn, .example-btn").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      clearTimeout(tooltipTimeout);
      showTooltip(btn);
    });
    btn.addEventListener("mouseleave", () => {
      tooltipTimeout = setTimeout(hideTooltip, 200);
    });
    btn.addEventListener("click", () => {
      if (tooltipEl.classList.contains("show")) {
        hideTooltip();
      } else {
        showTooltip(btn);
      }
    });
  });
  document.addEventListener("click", (e) => {
    if (
      !e.target.closest(".fact-btn") &&
      !e.target.closest(".example-btn") &&
      !e.target.closest(".tooltip-popup")
    ) {
      hideTooltip();
    }
  });

  /* ═══════════ 7. QUIZ ENGINE ═══════════ */
  const quizData = [
    {
      question: 'Who authored the famous 1890 article "The Right to Privacy"?',
      options: [
        "Thomas Jefferson & James Madison",
        "Samuel Warren & Louis Brandeis",
        "John Locke & Jean-Jacques Rousseau",
        "Alexander Hamilton & John Jay",
      ],
      answer: 1,
      explanation:
        "Samuel Warren and Louis Brandeis authored the landmark Harvard Law Review article that first articulated a legal right to privacy.",
    },
    {
      question:
        "Which article of the Universal Declaration of Human Rights protects privacy?",
      options: ["Article 1", "Article 8", "Article 12", "Article 19"],
      answer: 2,
      explanation:
        'Article 12 of the UDHR states: "No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence."',
    },
    {
      question:
        "What event directly prompted the passage of the U.S. Privacy Act of 1974?",
      options: [
        "The Vietnam War",
        "The Watergate Scandal",
        "The Moon Landing",
        "The Civil Rights Movement",
      ],
      answer: 1,
      explanation:
        "The Watergate scandal exposed government surveillance and abuse of personal records, leading to the Privacy Act of 1974.",
    },
    {
      question:
        "Which section of the 1987 Philippine Constitution guarantees the right to privacy of communication?",
      options: [
        "Article II, Section 1",
        "Article III, Section 3",
        "Article IV, Section 5",
        "Article V, Section 2",
      ],
      answer: 1,
      explanation:
        "Article III (Bill of Rights), Section 3 of the 1987 Philippine Constitution protects the privacy of communication and correspondence.",
    },
    {
      question: "What is the official name of the Philippine Data Privacy Act?",
      options: ["RA 10175", "RA 10173", "RA 9995", "RA 10844"],
      answer: 1,
      explanation:
        "Republic Act No. 10173, signed on August 15, 2012, is the Data Privacy Act of the Philippines.",
    },
    {
      question:
        "What is the maximum fine percentage under the GDPR for serious violations?",
      options: [
        "1% of annual revenue",
        "2% of annual revenue",
        "4% of global annual turnover",
        "10% of net profit",
      ],
      answer: 2,
      explanation:
        "The GDPR can impose fines of up to 4% of a company's total worldwide annual turnover for the most serious infringements.",
    },
    {
      question:
        "Why do most social media platforms require users to be at least 13 years old?",
      options: [
        "It is a global UN mandate",
        "Because of COPPA (1998)",
        "The GDPR requires it",
        "Facebook set the industry standard",
      ],
      answer: 1,
      explanation:
        "The Children's Online Privacy Protection Act (COPPA) of 1998 restricts the collection of data from children under 13, leading platforms to set 13 as the minimum age.",
    },
    {
      question:
        "What major Philippine data breach in 2016 exposed 55 million voter records?",
      options: [
        "PhilHealth breach",
        "SSS data leak",
        "COMELEC data breach",
        "BIR records hack",
      ],
      answer: 2,
      explanation:
        "The COMELEC data breach of 2016 was one of the largest government data breaches in history, exposing the personal data of 55 million Filipino voters.",
    },
  ];

  const quizContainer = document.getElementById("quiz-container");
  const quizResults = document.getElementById("quiz-results");
  const scoreText = document.getElementById("score-text");
  const scoreFill = document.getElementById("score-bar-fill");
  const scoreMessage = document.getElementById("score-message");
  const retryBtn = document.getElementById("quiz-retry");

  let userAnswers = new Array(quizData.length).fill(-1);

  function renderQuiz() {
    quizContainer.style.display = "";
    quizResults.style.display = "none";
    userAnswers.fill(-1);

    quizContainer.innerHTML =
      quizData
        .map(
          (q, qi) => `
      <div class="quiz-question" id="qq-${qi}">
        <span class="q-number">Question ${qi + 1} of ${quizData.length}</span>
        <h4>${q.question}</h4>
        <div class="quiz-options">
          ${q.options
            .map(
              (opt, oi) => `
            <button class="quiz-option" data-qi="${qi}" data-oi="${oi}">${opt}</button>
          `,
            )
            .join("")}
        </div>
        <div class="quiz-feedback" id="fb-${qi}"></div>
      </div>
    `,
        )
        .join("") +
      `<div class="quiz-submit-row"><button class="btn-primary" id="quiz-submit">Submit Answers</button></div>`;

    /* option click */
    quizContainer.querySelectorAll(".quiz-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        const qi = +btn.dataset.qi;
        const oi = +btn.dataset.oi;
        const questionEl = document.getElementById(`qq-${qi}`);
        // reset siblings
        questionEl
          .querySelectorAll(".quiz-option")
          .forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
        userAnswers[qi] = oi;
      });
    });

    /* submit */
    document
      .getElementById("quiz-submit")
      .addEventListener("click", submitQuiz);
  }

  function submitQuiz() {
    let score = 0;
    quizData.forEach((q, qi) => {
      const questionEl = document.getElementById(`qq-${qi}`);
      const fb = document.getElementById(`fb-${qi}`);
      const options = questionEl.querySelectorAll(".quiz-option");

      options.forEach((b) => {
        b.disabled = true;
        const oi = +b.dataset.oi;
        if (oi === q.answer) b.classList.add("correct");
        if (oi === userAnswers[qi] && oi !== q.answer) b.classList.add("wrong");
      });

      if (userAnswers[qi] === q.answer) {
        score++;
        fb.className = "quiz-feedback show correct-feedback";
        fb.textContent = "✅ Correct! " + q.explanation;
      } else {
        fb.className = "quiz-feedback show wrong-feedback";
        fb.textContent = "❌ Incorrect. " + q.explanation;
      }
    });

    document.getElementById("quiz-submit").style.display = "none";

    /* show results after a short delay */
    setTimeout(() => {
      quizContainer.style.display = "none";
      quizResults.style.display = "";
      const pct = Math.round((score / quizData.length) * 100);
      scoreText.textContent = `You scored ${score} out of ${quizData.length} (${pct}%)`;
      setTimeout(() => {
        scoreFill.style.width = pct + "%";
      }, 100);

      if (pct === 100)
        scoreMessage.textContent =
          "🏆 Perfect score! You are a privacy law expert!";
      else if (pct >= 75)
        scoreMessage.textContent =
          "🌟 Great job! You have strong knowledge of privacy law history.";
      else if (pct >= 50)
        scoreMessage.textContent =
          "👍 Good effort! Review the timeline to learn more about the milestones you missed.";
      else
        scoreMessage.textContent =
          "📖 Keep learning! Scroll through the timeline above to discover the fascinating history of privacy law.";
    }, 600);
  }

  retryBtn.addEventListener("click", renderQuiz);
  renderQuiz();

  /* ═══════════ 8. NAV SHRINK ON SCROLL ═══════════ */
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("main-nav");
    if (window.scrollY > 60) {
      nav.style.background = "rgba(10, 22, 40, 0.95)";
    } else {
      nav.style.background = "rgba(10, 22, 40, 0.82)";
    }
  });
});
