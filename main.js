/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')


if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-menu')
    })
}

if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-menu')
    })
} 



/*=============== LOGIN ===============*/
const loginButton  = document.getElementById('login-button'),
      loginClose   = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')


if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}


/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        350:{
            slidesPerView: 3,
            centeredSlides: 'auto',
            spaceBetween: 32,
        },

        768:{
            slidesPerView: 3,
            centeredSlides: 'auto',
        },

        1220: {
            spaceBetween: -20,
        }
    }
})


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    
    if(window.scrollY >= 50)
    {
        header.classList.add('show-header')
    }

    else{
        header.classList.remove('show-header')
    }
}

/*=============== FEATURED-SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    spaceBetween: 16,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },


    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
})


/*=============== NEW-SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
  
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    spaceBetween: 16,

 breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
})


/*=============== TESTIMONIAL-SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    spaceBetween: 32,
    breakpoints: {
        1150: {
            slidesPerView: 3,
            // centeredSlides: false,
        }
    }
})

/*=============== SCROLL-UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');

    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);


/*=============== SECTION-ACTIVE ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']'); // removed CSS comment syntax

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);

// // /*=============== DARK-LIGHT-THEME-CACH-1=================*/
// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'ri-sun-line'
// //dòng này lấy giá trị cục bộ của trình duyệt
// //nó tìm 1 mục khóa selected-theme và gán giá trị của nó vào biến selectedTheme
// const selectedTheme = localStorage.getItem('selected-theme')
// // dòng này lấy giá trị cục bộ của trình duyệt
// // nó tìm 1 mục khóa selected-icon và gán giá trị của nó vào selectedIcon
// const selectedIcon = localStorage.getItem('selected-icon')
// // hàm getCurrentTheme kiểm tra xem body có áp dụng lớp dark theme hay không
// // nếu có trả về dark, ngược lại trả về light
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
// //hàm getCurrentIcon kiểm tra xem body có áp dụng lớp iconTheme hay không
// // nếu có trả về ri-moon-line nếu không trả về ri-sun-line
// const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'
// themeButton.addEventListener('click', () => {
//     document.body.classList.toggle(darkTheme);
//     themeButton.classList.toggle(iconTheme);
//     localStorage.setItem('selected-theme', getCurrentTheme());
//     localStorage.setItem('selected-icon', getCurrentIcon());
// });


// /*=============== DARK-LIGHT-THEME-CACH-2=================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'ri-sun-line' : 'ri-moon-line';

themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


