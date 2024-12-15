// script.js

document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav-button');
  const menuSections = document.querySelectorAll('.menu-section');

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');

      // 모든 섹션 숨기기
      menuSections.forEach(section => {
        section.style.display = 'none';
      });

      // 선택한 섹션만 보이기
      const activeSection = document.getElementById(category);
      if (activeSection) {
        activeSection.style.display = 'block';
        // 스크롤을 최상단으로 이동
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // 현재 활성화된 버튼 스타일 업데이트
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  // 기본적으로 'Main' 섹션을 표시하고 버튼 활성화
  document.querySelector('.nav-button[data-category="main"]').click();
});
