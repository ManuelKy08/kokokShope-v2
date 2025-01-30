document.addEventListener('DOMContentLoaded', function() {
   const swiper = new Swiper('.swiper', {
       autoplay: {
           delay: 3000,
           disableOnInteraction: false,
       },
       loop: true,
       pagination: {
           el: '.swiper-pagination',
           clickable: true,
       },
   });

   const categoryList = document.getElementById('category-list');
    if (categoryList) {
       categoryList.addEventListener('click', function(event) {
         if (event.target.tagName === 'A') {
            const li = event.target.parentElement;
             if (li && li.tagName === 'LI'){
             categoryList.querySelector('.active').classList.remove('active');
                li.classList.add('active');

              const selectedCategory = li.getAttribute('data-category');
                filterGames(selectedCategory);
           }
        }
    });
}

  function filterGames(category) {
       const gameItems = document.querySelectorAll('.game-item');
          gameItems.forEach(item => {
           if(category === 'all' || item.getAttribute('data-category') === category) {
                 item.style.display = 'block';
            }else{
                item.style.display = 'none';
            }
       });
}

 const parallaxBg = document.querySelector('.cyberpunk-background');

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    parallaxBg.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
});

const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'scale(1.3) rotate(360deg)';
 });

   icon.addEventListener('mouseleave', () => {
       icon.style.transform = 'scale(1) rotate(0)';
   });
 });
        const moneyFallContainer = document.querySelector('.money-fall');

        function createMoney() {
             const money = document.createElement('span');
             money.style.left = `${Math.random() * 100}%`;
            money.style.animationDelay = `${Math.random() * 5}s`;
            moneyFallContainer.appendChild(money);
             money.addEventListener('animationend', () => {
                 money.remove();
              });
           }


           setInterval(createMoney, 150);
});