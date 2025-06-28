
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('dropdownToggle');
    const menu = document.getElementById('dropdownMenu');

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.style.display = 'none';
      }
    });
  });
function filterMentors(category) {
        document
          .querySelectorAll(".filter-btn")
          .forEach((b) => b.classList.remove("active"));
        event.target.classList.add("active");
        document.querySelectorAll(".mentor-card").forEach((card) => {
          card.style.display =
            category === "all" || card.dataset.category === category
              ? "block"
              : "none";
        });
      }
