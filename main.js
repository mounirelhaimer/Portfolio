// ====== Scroll progress bar=====
const scrollbar = document.createElement('div');
scrollbar.style.cssText = `
     position: fixed;
     top: 0; left: 0;
     height: 2px;
     background:linear-gradient(90deg, #7c6dfa, #2dd4b0);
     z-index: 999;
     transition:width 0.1s;
`;    
document.body.appendChild(scrollbar);

window.addEventListener('scroll',()=>{
    const pct =window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    scrollBar.style.width = pct + '%'
})
//====== Active  nav link =======
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll' , () => {
    let current ='';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 200){
            current= section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.style.color ='';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color='#7c6dfa';
        }
    })
})
//======fade in animation======
const fadeElements = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isInterseting) {
            entry.target.style.opacity='1';
            entry.target.style.transform='translateY(0)';
        }
    })
}, { threshold:0.1})

fadeElements.forEach(el => {
    el.style.opacity='0';
    el.style.transform='translateY(30px)';
    el.style.transition='opacity 0.7s ease, transform 0.7 ease';
    observer.observe(el);
});
//======contact form validation======
function sendMsg(){
    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const msg = document.getElementById('form-msg');

    if (!nom || !email || !message){
        msg.style.color = '#f0522a';
        msg.textContent = 'Veuillez remplir tous les champ.';
        return;
    }

    if (!/\S+@\.\S+/.test(email)){
        msg.style.color='#f0522a'
        msg.textContent='Email invalide.';
        return;
    }
    msg.style.color ='#2dd4b0';
    msg.textContent= 'Message envoye avec succes !';

    document.getElementById('nom').value='';
    document.getElementById('email').value='';
    document.getElementById('message').value='';

    setTimeout(() => msg.textContent = '', 4000);
    }


