import Splide from '@splidejs/splide';
import '@splidejs/splide/css/core';
//import '@splidejs/splide/css';
import '@scss/main.scss'

//preloader
const preloader = () => {
  setTimeout(function () {
    let preloader = document.body.querySelector('#page-preloader');
    if (!preloader)
      return false
    if (!preloader.classList.contains('done'))
      preloader.classList.add('done');
  }, 1000);
}
document.addEventListener('DOMContentLoaded', preloader, false);

//expand mobile menu
const btnShowMenu = document.querySelector('.show-menu');
const mobMenu = document.querySelector('.header__links');
const bgOverlay = document.querySelector('.bg-overlay');
const iconMenu = document.querySelector('.show-menu__icon-menu');
const iconCloseMenu = document.querySelector('.show-menu__icon-close');

const btnShowFilter = document.querySelector('.show-filter');
const mobFilter = document.querySelector('.sidebar-filter');
const iconFilter = document.querySelector('.show-filter__icon-filter');
const iconCloseFilter = document.querySelector('.show-filter__icon-close');

const hideMobMenu = () => {
  mobMenu.classList.remove('open');
  iconMenu.style.display = 'block';
  iconCloseMenu.style.display = 'none';
  bgOverlay.style.display = 'none';
}

const showMobMenu = () => {
  mobMenu.classList.add('open');
  iconMenu.style.display = 'none';
  iconCloseMenu.style.display = 'block';
  bgOverlay.style.display = 'block';
}

const toggleMobMenu = (e) => {
  if (e.target.closest('.show-menu') === null)
    return false

  if (mobMenu.classList.contains('open')) {
    hideMobMenu();
    return false
  }
  hideMobFilter();
  showMobMenu();
}

btnShowMenu.addEventListener('click', toggleMobMenu, false);

//expand mobile filter

const hideMobFilter = () => {
  mobFilter.classList.remove('open-mob');
  iconFilter.style.display = 'block';
  iconCloseFilter.style.display = 'none';
  bgOverlay.style.display = 'none';
}
const showMobFilter = () => {
  mobFilter.classList.add('open-mob');
  iconFilter.style.display = 'none';
  iconCloseFilter.style.display = 'block';
  bgOverlay.style.display = 'block';
}

const toggleMobFilter = (e) => {
  if (e.target.closest('.show-filter') === null)
    return false
  console.log('showMobFilter');
  if (mobFilter.classList.contains('open-mob')) {
    hideMobFilter();
    return false
  }
  hideMobMenu();
  showMobFilter();
}

btnShowFilter.addEventListener('click', toggleMobFilter, false);

//expand more tags
const btnShowMoreTags = document.querySelector('.show-more-tags');
const searchWidget = document.querySelector('.search-widget');
const tagList = searchWidget.querySelector('.tags .tag-list');
const showMoreTags = (e) => {
  if (e.target.closest('.show-more-tags') === null)
    return false
  const icon = e.target.closest('.show-more-tags').querySelector('svg path');
  if (tagList.classList.contains('open')) {
    tagList.classList.remove('open');
    icon.setAttribute('d', 'M4.53,10.357v-10h1.7v10ZM.377,6.206v-1.7h10V6.2h-10Z'); //plus
    return false
  }
  tagList.classList.add('open');
  icon.setAttribute('d', 'M0 5.76V4.24h10v1.52H0Z'); //minus
}
btnShowMoreTags.addEventListener('click', showMoreTags, false);

//stick SearchWidget
let scrolltop = window.pageYOffset;
const stickSearchWidget = (e) => {
  if (window.pageYOffset > scrolltop && scrolltop >= 150) {
    searchWidget.classList.add('hide');
  } else {
    searchWidget.classList.remove('hide');
  }
  scrolltop = window.pageYOffset;
}
window.addEventListener('scroll', stickSearchWidget, false);

//expand sidebar (Desktop)
const btnToggleSidebar = document.querySelector('.btn-toggle-sidebar');
const sidebar = document.querySelector('.sidebar-filter');
const content = document.querySelector('.content');
const toggleSidebar = (e) => {
  if (e.target.closest('.btn-toggle-sidebar') === null)
    return false

  if (sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
    content.classList.remove('open');
    btnToggleSidebar.classList.add('right');
    return false
  }

  sidebar.classList.add('open');
  content.classList.add('open');
  btnToggleSidebar.classList.remove('right');
}
btnToggleSidebar.addEventListener('click', toggleSidebar, false);

//upload photo
const uploadPhotoInput = document.querySelector('.custom-file-input');
const profilePhoto = document.querySelector('.settings-photo .profile-photo');
const uploadPhoto = () => {
  let url = 'assets/img/photos/ava.jpg';
  profilePhoto.style.backgroundImage = 'url(' + url + ')';
}
if (!!uploadPhotoInput)
  uploadPhotoInput.addEventListener('change', uploadPhoto, false);


// Splidejs (cursor customisation)
const splides = document.querySelectorAll('.splide');

const splideIsDrag = (e) => {
  if (e.target.closest('.splide') === null)
    return false
  e.target.closest('.splide').classList.add('is-grab');
}

const splideIsntDrag = (e) => {
  if (e.target.closest('.splide') === null)
    return false
  e.target.closest('.splide').classList.remove('is-grab');
}

if (!!splides) {
  splides.forEach(el => el.addEventListener('mousedown', splideIsDrag, false));
  splides.forEach(el => el.addEventListener('mouseup', splideIsntDrag, false));
}

// Splidejs
// https://github.com/Splidejs/splide

const makeSVGArrowSize = (elSelector, breakpoint = 1200, width1, height1, width2, height2) => {
  let svgWidth = document.documentElement.clientWidth < breakpoint ? width1 : width2;
  let svgHeight = document.documentElement.clientWidth < breakpoint ? height1 : height2;
  let svgArrows = document.querySelectorAll(elSelector);
  svgArrows.forEach(el => {
    el.setAttribute("viewBox", '0 0 '+svgWidth+' '+svgHeight);
    el.setAttribute("width", svgWidth);
    el.setAttribute("height", svgHeight);
  });
}

if (document.querySelector('.splide_up') !== null) {
  new Splide( '.splide_up', {
    type       : 'loop',
    arrows     : true,
    //arrowPath  : 'M0,0H40V40H0Z',
    arrowPath  : 'M0.292893 7.29338C-0.0976295 7.6839 -0.0976296 8.31707 0.292892 8.70759L6.65685 15.0716C7.04738 15.4621 7.68054 15.4621 8.07107 15.0716C8.46159 14.681 8.46159 14.0479 8.07107 13.6573L2.41422 8.00048L8.07107 2.34363C8.46159 1.95311 8.46159 1.31994 8.07107 0.929417C7.68054 0.538893 7.04738 0.538893 6.65685 0.929417L0.292893 7.29338ZM44.1187 7.00049L1 7.00048L1 9.00048L44.1187 9.00049L44.1187 7.00049Z',
    autoHeight : true,
    autoWidth  : true,
    perPage    : 1,
    gap        : '30px',
    //fixedWidth : '525px',
    mediaQuery : 'min',
    breakpoints: {
      992: {
        gap    : '33px',
      },
      1200: {
        //fixedWidth : '525px',
        arrowPath  : 'M0.847183 10.9393C0.261383 11.5251 0.261383 12.4749 0.847183 13.0606L10.3931 22.6066C10.9789 23.1924 11.9286 23.1924 12.5144 22.6066C13.1002 22.0208 13.1002 21.0711 12.5144 20.4853L4.02916 12L12.5144 3.51471C13.1002 2.92892 13.1002 1.97917 12.5144 1.39339C11.9287 0.8076 10.9789 0.8076 10.3931 1.39339L0.847183 10.9393ZM141.908 10.5L1.90784 10.5L1.90784 13.5L141.908 13.5L141.908 10.5Z',
        gap        : '33px',
      },
      1400: {
        //fixedWidth : '525px',
        gap        : '33px',
      },
    },
  } ).mount();

  makeSVGArrowSize('.splide_up .splide__arrow svg', 1200, 45, 16, 142, 24);

}

if (document.querySelector('.splide_ulist') !== null) {
  new Splide( '.splide_ulist', {
    type       : 'loop',
    arrows     : true,
    arrowPath  : 'M0.292893 7.29338C-0.0976295 7.6839 -0.0976296 8.31707 0.292892 8.70759L6.65685 15.0716C7.04738 15.4621 7.68054 15.4621 8.07107 15.0716C8.46159 14.681 8.46159 14.0479 8.07107 13.6573L2.41422 8.00048L8.07107 2.34363C8.46159 1.95311 8.46159 1.31994 8.07107 0.929417C7.68054 0.538893 7.04738 0.538893 6.65685 0.929417L0.292893 7.29338ZM44.1187 7.00049L1 7.00048L1 9.00048L44.1187 9.00049L44.1187 7.00049Z',
    autoHeight : true,
    autoWidth  : true,
    perPage    : 1,
    gap        : '30px',
    mediaQuery : 'min',
    breakpoints: {
      992: {
        gap    : '30px',
      },
      1200: {
        arrowPath  : 'M0.847183 10.9393C0.261383 11.5251 0.261383 12.4749 0.847183 13.0606L10.3931 22.6066C10.9789 23.1924 11.9286 23.1924 12.5144 22.6066C13.1002 22.0208 13.1002 21.0711 12.5144 20.4853L4.02916 12L12.5144 3.51471C13.1002 2.92892 13.1002 1.97917 12.5144 1.39339C11.9287 0.8076 10.9789 0.8076 10.3931 1.39339L0.847183 10.9393ZM141.908 10.5L1.90784 10.5L1.90784 13.5L141.908 13.5L141.908 10.5Z',
        gap        : '50px',
      },
      1920: {
        gap        : '110px',
      },
    },
  } ).mount();

  makeSVGArrowSize('.splide_ulist .splide__arrow svg', 1200, 45, 16, 142, 24);

}

if (document.querySelector('.splide_ulist-extra') !== null) {
  new Splide( '.splide_ulist-extra', {
    type       : 'loop',
    arrows     : true,
    arrowPath  : 'M0.292893 7.29338C-0.0976295 7.6839 -0.0976296 8.31707 0.292892 8.70759L6.65685 15.0716C7.04738 15.4621 7.68054 15.4621 8.07107 15.0716C8.46159 14.681 8.46159 14.0479 8.07107 13.6573L2.41422 8.00048L8.07107 2.34363C8.46159 1.95311 8.46159 1.31994 8.07107 0.929417C7.68054 0.538893 7.04738 0.538893 6.65685 0.929417L0.292893 7.29338ZM44.1187 7.00049L1 7.00048L1 9.00048L44.1187 9.00049L44.1187 7.00049Z',
    autoHeight : true,
    autoWidth  : true,
    perPage    : 1,
    gap        : '30px',
    mediaQuery : 'min',
    breakpoints: {
      992: {
        gap    : '30px',
      },
      1200: {
        arrowPath  : 'M0.847183 10.9393C0.261383 11.5251 0.261383 12.4749 0.847183 13.0606L10.3931 22.6066C10.9789 23.1924 11.9286 23.1924 12.5144 22.6066C13.1002 22.0208 13.1002 21.0711 12.5144 20.4853L4.02916 12L12.5144 3.51471C13.1002 2.92892 13.1002 1.97917 12.5144 1.39339C11.9287 0.8076 10.9789 0.8076 10.3931 1.39339L0.847183 10.9393ZM141.908 10.5L1.90784 10.5L1.90784 13.5L141.908 13.5L141.908 10.5Z',
        gap        : '50px',
      },
      1920: {
        gap        : '110px',
      },
    },
  } ).mount();

  makeSVGArrowSize('.splide_ulist-extra .splide__arrow svg', 1200, 45, 16, 142, 24);

}

if (document.querySelector('.splide_fback') !== null) {
  new Splide( '.splide_fback', {
    type       : 'loop',
    arrows     : true,
    arrowPath  : 'M0.292893 7.29338C-0.0976295 7.6839 -0.0976296 8.31707 0.292892 8.70759L6.65685 15.0716C7.04738 15.4621 7.68054 15.4621 8.07107 15.0716C8.46159 14.681 8.46159 14.0479 8.07107 13.6573L2.41422 8.00048L8.07107 2.34363C8.46159 1.95311 8.46159 1.31994 8.07107 0.929417C7.68054 0.538893 7.04738 0.538893 6.65685 0.929417L0.292893 7.29338ZM44.1187 7.00049L1 7.00048L1 9.00048L44.1187 9.00049L44.1187 7.00049Z',
    autoHeight : true,
    autoWidth  : true,
    gap        : '20px',
    mediaQuery : 'min',
    breakpoints: {
      992: {
        gap    : '30px',
      },
      1200: {
        arrowPath  : 'M0.847183 10.9393C0.261383 11.5251 0.261383 12.4749 0.847183 13.0606L10.3931 22.6066C10.9789 23.1924 11.9286 23.1924 12.5144 22.6066C13.1002 22.0208 13.1002 21.0711 12.5144 20.4853L4.02916 12L12.5144 3.51471C13.1002 2.92892 13.1002 1.97917 12.5144 1.39339C11.9287 0.8076 10.9789 0.8076 10.3931 1.39339L0.847183 10.9393ZM141.908 10.5L1.90784 10.5L1.90784 13.5L141.908 13.5L141.908 10.5Z',
        gap    : '60px',
      },
      1650: {
        gap    : '60px',
      },
    },
  } ).mount();

  makeSVGArrowSize('.splide_fback .splide__arrow svg', 1200, 45, 16, 142, 24);

}
