jQuery(function($) {
    // Variáveis de controle do jogo
    let jogadorPontos = 0;
    let computadorPontos = 0;
  
    // Função para calcular o resultado do jogo
    function calcularResultado(jogadorEscolha) {
      const opcoes = ["pedra", "papel", "tesoura"];
      const computadorEscolha = opcoes[Math.floor(Math.random() * opcoes.length)];
      
      // Exibir escolha do computador
      $("#escolha-computador").text("O computador escolheu:");
     
  
      // Definir o emoji correspondente à escolha do jogador
      let emojiComputador;
      if (computadorEscolha === "pedra") {
        emojiComputador = "✊";
      } else if (computadorEscolha === "papel") {
        emojiComputador = "✋";
      } else if (computadorEscolha === "tesoura") {
        emojiComputador = "✌️";
      }
      // Definir o emoji correspondente à escolha do jogador
      let emojiJogador;
      if (jogadorEscolha === "pedra") {
        emojiJogador = "✊";
      } else if (jogadorEscolha === "papel") {
        emojiJogador = "✋";
      } else if (jogadorEscolha === "tesoura") {
        emojiJogador = "✌️";
      }
  
      // Exibir resultado da rodada
      const resultado = emojiJogador + " X " + emojiComputador;
      $("#resultado").text(resultado);
      $("#escolha-computador").append(emojiComputador)
  
      // Verificar o resultado do jogo
      if (jogadorEscolha === computadorEscolha) {
        exibirMensagem("Empate!");
      } else if (
        (jogadorEscolha === "pedra" && computadorEscolha === "tesoura") ||
        (jogadorEscolha === "papel" && computadorEscolha === "pedra") ||
        (jogadorEscolha === "tesoura" && computadorEscolha === "papel")
      ) {
        exibirMensagem("Você venceu!");
        jogadorPontos++;
      } else {
        exibirMensagem("Você perdeu!");
        computadorPontos++;
      }
  
      // Atualizar placar na interface
      $("#placar-jogador").text(jogadorPontos);
      $("#placar-computador").text(computadorPontos);
    }
  
    // Função para exibir mensagem na interface
    function exibirMensagem(mensagem) {
      $("#mensagem").text(mensagem);
    }
  
    // Reiniciar o jogo
    function reiniciarJogo() {
      jogadorPontos = 0;
      computadorPontos = 0;
      $("#placar-jogador").text(jogadorPontos);
      $("#placar-computador").text(computadorPontos);
      $("#escolha-computador").text("");
      $("#emoji-computador").text("");
      $("#resultado").text("");
      exibirMensagem("Escolha uma opção.");
    }
  
    // Adicionar evento de clique para as opções do jogador
    $(".opcao").on('click', function() {
      const jogadorEscolha = $(this).data("escolha");
      calcularResultado(jogadorEscolha);
    });
  
    // Adicionar evento de clique para reiniciar o jogo
    $("#reiniciar").click(reiniciarJogo);
  
    exibirMensagem("Escolha uma opção.");
  });
  