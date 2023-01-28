// NAV BAR MENU FOR MOBILE

const btn = document.querySelector('.dropbtn');
const content = document.querySelector('.dropdown-content');

btn.addEventListener('touchstart', () => {
  if(!btn.classList.contains('btn-active')){
    content.classList.add('content-active');
    btn.classList.add('btn-active');
    btn.style.background = '#917D6E';
    btn.style.color = '#1D1C1C';
  } else {
    content.classList.remove('content-active');
    btn.classList.remove('btn-active');
    btn.style.background = 'inherit';
    btn.style.color = 'inherit';
  }
  
});

// POPUP WHEN CLICKING BUY

let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}

// CREATE ACCOUNT POPUP

let panelreg = document.getElementById("panelreg");

function openPanelreg() {
  panelreg.classList.add("open-panelreg");
}
function closePanelreg() {
  panelreg.classList.remove("open-panelreg");
}

// PASSWORD RESET FORM

let panel = document.getElementById("panel");

function openPanel() {
  panel.classList.add("open-panel");
}
function closePanel() {
  panel.classList.remove("open-panel");
}


