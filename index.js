// template_s927r2i
// service_nq8xe6e
// c2gg1wrHYnpmP0ntW

function contact(event) {
  event.preventDefault();
 /* emailjs
    .sendForm(
      'service_nq8xe6e',
      'template_s927r2i',
      event.target,
      'c2gg1wrHYnpmP0ntW'
    ).then(() => {
      console.log("this worked1");
    }) */
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success'
    loading.classList += " modal__overlay--visible"
      setTimeout(() => {
    console.log("it worked 1")
   }, 500);
}