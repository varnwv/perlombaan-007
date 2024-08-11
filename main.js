

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    // Fungsi untuk toggle navbar
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Fungsi untuk menutup navbar ketika klik di luar
    document.addEventListener('click', (event) => {
        const isClickInside = menuIcon.contains(event.target) || navbar.contains(event.target);

        if (!isClickInside) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const subject1 = document.getElementById('lomba yang di ikuti').value;
    const subject2 = document.getElementById('Rt').value;
    const message = document.getElementById('message').value;

    const phoneNumber = '6285158066142'; // Ganti dengan nomor WhatsApp kamu
    let whatsappUrl = `https://wa.me/${phoneNumber}?text=
        Name: ${encodeURIComponent(name)}%0A
        lomba yang di ikuti: ${encodeURIComponent(subject1)}%0A
        Rt : ${encodeURIComponent(subject2)}`;

    if (message) {
        whatsappUrl += `%0A%0A
        Message: ${encodeURIComponent(message)}`;
    }

    window.open(whatsappUrl, '_blank');
});



