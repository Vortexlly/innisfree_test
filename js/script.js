document.addEventListener('DOMContentLoaded', () => {
    // More text
    const moreText = document.querySelector('.grid__item-more'),
          moreTextBtn = document.querySelector('.grid__more');

    moreTextBtn.addEventListener('click', () => {
        moreText.style.display = 'block',
        moreTextBtn.style.display = 'none';
    })


    // More products
    const moreProduct = document.querySelectorAll('.product__extra-item'),
          moreProductBtn = document.querySelector('.product__btn');

    moreProductBtn.addEventListener('click', () => {
        moreProduct.forEach(el => el.style.display = 'flex')
        moreProductBtn.style.display = 'none';
    })


    // Input
    const confirmBtn = document.querySelector('.footer__submit'),
          emailInput = document.querySelector('.footer__input');
          
    confirmBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert(`Email is sent: ${emailInput.value}`);
        emailInput.value = '';
        emailInput.classList.remove('invalid'); 
        form.removeChild(errorMessage);
    })

    // Input validation
    const errorMessage = document.createElement('div'),
          form = document.querySelector('.footer__form');
    errorMessage.textContent = 'Error input';
    errorMessage.classList.add('invalid-msg')

    function validateInput() {      
        if (emailInput.value.length < 5) {
            emailInput.classList.add('invalid');
            form.appendChild(errorMessage);
        } else {
            emailInput.classList.remove('invalid'); 
            form.removeChild(errorMessage);
        }
      }

    emailInput.addEventListener('input', () => {
        validateInput();
    })
    
})