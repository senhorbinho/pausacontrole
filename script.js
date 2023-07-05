$(document).ready(function() {
    // Função para carregar o conteúdo inicial
    function carregarConteudo() {
        $.ajax({
            url: 'conteudo.php', // Arquivo PHP que retornará o conteúdo atualizado
            success: function(data) {
                $('#conteudo').html(data);
            }
        });
    }

    // Carregar o conteúdo inicial
    carregarConteudo();

    // Atualizar o conteúdo a cada 5 segundos
    setInterval(function() {
        carregarConteudo();
    }, 5000);
});
