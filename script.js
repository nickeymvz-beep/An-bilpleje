
// Basic interactivity for the mockup (no backend)
document.querySelectorAll('.mobile-toggle').forEach(btn=>btn.addEventListener('click', ()=>{
  const nav = document.querySelector('.nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}));

// Booking modal open/close
const bookingModal = document.getElementById('booking');
document.querySelectorAll('a[href="#booking"], button.open-booking').forEach(a=>a.addEventListener('click', (e)=>{
  e.preventDefault();
  bookingModal.style.display = 'flex';
  bookingModal.setAttribute('aria-hidden','false');
}));
document.querySelectorAll('#booking .close').forEach(b=>b.addEventListener('click', ()=>{
  bookingModal.style.display = 'none';
  bookingModal.setAttribute('aria-hidden','true');
}));
document.getElementById('booking-form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Tak! Din booking er modtaget (mockup). Vi vil kontakte dig for bekræftelse.');
  bookingModal.style.display='none';
})

// Mock login (for showing subscription balance)
document.getElementById('login-form')?.addEventListener('submit', function(e){
  e.preventDefault();
  // For demo we just show mocked status
  const status = document.getElementById('sub-status');
  status.textContent = 'Velkommen! Du har 2 klargøringer til gode denne måned.';
});

// Contact form stub
document.getElementById('contact-form')?.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Tak for din besked! Vi kontakter dig snarest.');
});
