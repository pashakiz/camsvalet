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
  mobFilter.classList.remove('open');
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

  if (mobFilter.classList.contains('open-mob')) {
    hideMobFilter();
    return false
  }
  hideMobMenu();
  showMobFilter();
}

btnShowFilter.addEventListener('click', toggleMobFilter, false);

const hideAllMenu = (e) => {
  if (e.target.closest('.bg-overlay') === null)
    return false
  hideMobMenu();
  hideMobFilter();
}

bgOverlay.addEventListener('click', hideAllMenu, false);

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
    sidebar.classList.remove('open-mob');
    content.classList.remove('open');
    btnToggleSidebar.classList.add('right');
    return false
  }

  sidebar.classList.add('open');
  content.classList.add('open');
  btnToggleSidebar.classList.remove('right');
}
btnToggleSidebar.addEventListener('click', toggleSidebar, false);

const filterRows = document.querySelectorAll('.filter');
const expandFilterRow = (e) => {
  if (e.target.closest('.filter') === null)
    return false
  let thisFilter = e.target.closest('.filter');
  let filterHeader = thisFilter.querySelector('.collapse-header');
  let filterBody = thisFilter.querySelector('.collapse-body');
  console.log('thisFilter', thisFilter);
  if (filterHeader.classList.contains('open') && filterBody.classList.contains('open')) {
    filterHeader.classList.remove('open');
    filterBody.classList.remove('open');
    return false
  }
  filterHeader.classList.add('open');
  filterBody.classList.add('open');
}
filterRows.forEach(filterRow => filterRow.addEventListener('click', expandFilterRow, false));

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
    arrowPath  : 'm3.97 11.1 10.68-8.96L13.36.6.86 11.09l12.5 10.5 1.29-1.54-10.68-8.96Z',
    autoHeight : true,
    autoWidth  : true,
    perPage    : 1,
    gap        : '30px',
    //fixedWidth : '525px',
    mediaQuery : 'min',
    breakpoints: {
      1200: {
        //fixedWidth : '525px',
        arrowPath  : 'M14.01 3.37 3.11 15.36l10.9 11.98v3.02l-13.63-15L14 .36v3.01Z',
        gap        : '30px',
      },
    },
  } ).mount();

  makeSVGArrowSize('.splide_up .splide__arrow svg', 1200, 12, 19, 14, 30);

}

if (document.querySelector('.splide_reviews') !== null) {
  new Splide( '.splide_reviews', {
    type       : 'loop',
    arrows     : true,
    arrowPath  : 'm3.97 11.1 10.68-8.96L13.36.6.86 11.09l12.5 10.5 1.29-1.54-10.68-8.96Z',
    autoHeight : true,
    autoWidth  : true,
    perPage    : 1,
    gap        : '30px',
    mediaQuery : 'min',
    breakpoints: {
      1200: {
        arrowPath  : 'M14.01 3.37 3.11 15.36l10.9 11.98v3.02l-13.63-15L14 .36v3.01Z',
      },
    },
  } ).mount();

  makeSVGArrowSize('.splide_reviews .splide__arrow svg', 1200, 12, 19, 14, 30);

}
