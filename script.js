document.addEventListener('DOMContentLoaded', function () {
    const motoContainer = document.getElementById('motoContainer');
    const motoVideo = document.getElementById('motoVideo');

    // Adiciona a classe moving após um pequeno atraso (por exemplo, 2 segundos)
    setTimeout(function () {
        motoContainer.classList.add('moving');
    }, 2000);
});
