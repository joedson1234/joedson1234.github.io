<script>
    window.onload = function() {
        // Cria a caixa flutuante
        const caixa = document.createElement('div');
        
        // Cria o botão de fechar
        const botaoFechar = document.createElement('button');
        botaoFechar.textContent = '×';
        botaoFechar.onclick = function() {
            document.body.removeChild(caixa);
        };

        // Define o conteúdo e estilo da caixa
        caixa.innerHTML = '<p>Obrigado por vir!</p>';
        caixa.appendChild(botaoFechar);
        caixa.style.position = 'fixed';
        caixa.style.top = '50%';
        caixa.style.left = '50%';
        caixa.style.transform = 'translate(-50%, -50%)';
        caixa.style.padding = '20px';
        caixa.style.backgroundColor = '#f0f0f0';
        caixa.style.border = '1px solid #ddd';
        caixa.style.zIndex = '1000';
        caixa.style.textAlign = 'center';
        caixa.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        caixa.style.borderRadius = '8px';

        // Estilo do botão fechar
        botaoFechar.style.cursor = 'pointer';
        botaoFechar.style.position = 'absolute';
        botaoFechar.style.top = '10px';
        botaoFechar.style.right = '10px';
        botaoFechar.style.background = 'transparent';
        botaoFechar.style.border = 'none';
        botaoFechar.style.fontSize = '20px';

        // Adiciona a caixa ao corpo do documento
        document.body.appendChild(caixa);
    };
</script>