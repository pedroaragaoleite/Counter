// select the buttons and the count
// identify the click in the button
// increase/ descrease or reset the count


const value = document.querySelector('.count');
const btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach(function(btn) {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        console.log(styles);

        if(styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if(count > 0) {
            value.style.color = 'green';
        } else if (count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }
        value.textContent = count;
        console.log(count);
    })
})

console.log(value);