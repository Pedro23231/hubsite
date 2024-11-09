document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.search-button');
    const messagePopup = document.getElementById('searchMessage');

    function mostrarMensagem() {
        messagePopup.classList.add('show-message');
        
        // Remove a mensagem após 2.5 segundos
        setTimeout(() => {
            messagePopup.classList.remove('show-message');
        }, 2500);
    }

    searchButton.addEventListener('click', mostrarMensagem);
});