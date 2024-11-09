function copyToClipboard() {
    const codeBlock = document.querySelector('.code-block').textContent; // Obtém o conteúdo do bloco de código
    navigator.clipboard.writeText(codeBlock).then(() => {
        const message = document.getElementById('copyMessage');
        message.style.display = 'block'; // Exibe a mensagem de confirmação
        setTimeout(() => {
            message.style.display = 'none'; // Oculta a mensagem após 2 segundos
        }, 2000);
    });
}

function downloadImage() {
    const imageUrl = document.querySelector('.script-image').src;
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'project-hub-script-preview.png';
    
    // Fallback para navegadores que não suportam o atributo download
    fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            link.href = url;
            link.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(err => {
            console.error('Erro ao baixar a imagem:', err);
            alert('Não foi possível baixar a imagem. Por favor, tente novamente.');
        });
}
