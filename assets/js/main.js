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
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});

/*===== RESUME DOWNLOAD =====*/
const resumeBtn = document.getElementById('resumeBtn')

if(resumeBtn){
    resumeBtn.addEventListener('click', (e) => {
        e.preventDefault()
        
        // Show visual feedback
        const originalText = resumeBtn.innerHTML
        resumeBtn.innerHTML = '<i class="bx bx-check"></i> Processing...'
        resumeBtn.style.opacity = '0.7'
        
        // Simulate download and show success message
        setTimeout(() => {
            resumeBtn.innerHTML = '<i class="bx bx-check-circle"></i> Downloaded!'
            resumeBtn.classList.add('resume-success')
            
            // Reset after 2 seconds
            setTimeout(() => {
                resumeBtn.innerHTML = originalText
                resumeBtn.style.opacity = '1'
                resumeBtn.classList.remove('resume-success')
            }, 2000)
            
            // Uncomment below to enable actual file download
            // const link = document.createElement('a')
            // link.href = 'assets/files/resume.pdf' // Add your resume file path
            // link.download = 'Rajan_Resume.pdf'
            // link.click()
        }, 800)
    })
}

/*===== WEATHER FORECAST DEMO =====*/
const weatherDemo = document.getElementById('weatherDemo')

if(weatherDemo){
    weatherDemo.addEventListener('click', (e) => {
        // Show visual feedback
        const originalText = weatherDemo.innerHTML
        weatherDemo.innerHTML = '<i class="bx bx-loader-alt"></i> Opening...'
        weatherDemo.style.opacity = '0.7'
        
        // Reset feedback after 1.5 seconds
        setTimeout(() => {
            weatherDemo.innerHTML = originalText
            weatherDemo.style.opacity = '1'
        }, 1500)
    })
}

/*===== RESUME BUILDER DEMO =====*/
const resumeDemo = document.getElementById('resumeDemo')

if(resumeDemo){
    resumeDemo.addEventListener('click', (e) => {
        // Show visual feedback
        const originalText = resumeDemo.innerHTML
        resumeDemo.innerHTML = '<i class="bx bx-loader-alt"></i> Opening...'
        resumeDemo.style.opacity = '0.7'
        
        // Reset feedback after 1.5 seconds
        setTimeout(() => {
            resumeDemo.innerHTML = originalText
            resumeDemo.style.opacity = '1'
        }, 1500)
    })
}

/*===== SUBMIT FORM =====*/
const submitBtn = document.getElementById('submitBtn')

if(submitBtn){
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        
        // Show visual feedback
        const originalText = submitBtn.innerHTML
        submitBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Sending...'
        submitBtn.style.opacity = '0.7'
        submitBtn.style.pointerEvents = 'none'
        
        // Simulate form submission and show success message
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="bx bx-check-circle"></i> Sent Successfully!'
            submitBtn.classList.add('submit-success')
            
            // Reset after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText
                submitBtn.style.opacity = '1'
                submitBtn.style.pointerEvents = 'auto'
                submitBtn.classList.remove('submit-success')
            }, 3000)
            
            // Uncomment below to enable actual form submission
            // e.target.closest('form').submit()
        }, 800)
    })
}
