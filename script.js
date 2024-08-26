document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('yesImage').style.display = 'block';
    document.getElementById('noImage').style.display = 'none';
    document.querySelector('.buttons-container').style.display = 'none'; // Oculta os botões
    document.querySelector('main > p').style.display = 'none'; // Oculta o enunciado
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('noImage').style.display = 'block';
    document.getElementById('yesImage').style.display = 'none';
    document.querySelector('.buttons-container').style.display = 'none'; // Oculta os botões
    document.querySelector('main > p').style.display = 'none'; // Oculta o enunciado
});
