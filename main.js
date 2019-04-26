let humIcon = document.querySelector('.hum-icon');
let nav = document.querySelector('.navbar .navigation ul');
let navigation = true;

humIcon.addEventListener('click', function() {
    if(navigation == true) {
        nav.style.display = 'block';
        console.log(1);
        navigation = false;
    } else {
        nav.style.display = 'none';
        console.log(2);
        navigation = true;
    }
});