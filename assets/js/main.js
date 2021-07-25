/*===== MENU SHOW =====*/ 

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
  }

  showMenu('nav-toggle' , 'nav-menu')


/*===== REMOVER MENU MOBILE =====*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // Ativar link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remover menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('Show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
