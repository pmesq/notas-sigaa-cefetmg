# notas-sigaa-cefetmg

Script que automatiza a emissão de notas pelo [SIGAA do CEFET-MG](https://sig.cefetmg.br/sigaa/), reunindo as notas de diferentes disciplinas em uma única página.

`OBS.:` É normal que o script demore alguns minutos para finalizar sua execução.

## Instalação

1. Baixe ou clone este repositório.
2. Instale [NodeJS](https://nodejs.org/) em sua máquina.
3. Execute o comando `npm install` na raíz do repositório baixado.
4. Instale a extensão do [Tampermonkey](https://www.tampermonkey.net/) no seu navegador.
5. Adicione os [userscripts](./userscripts) deste repósitorio ao painel do Tampermonkey.

## Execução

1. Ative os `userscripts` no painel do Tampermonkey.
2. Acesse o SIGAA e aguarde a execução dos scripts. Ao final do processo, será emitido um `alert` informando `"Processo finalizado"`.
3. Acesse o `Local Storage` e copie o conteúdo de `tabelas` para um novo arquivo `tabelas.html`, dentro do diretório [entrada](./entrada).
4. Execute `npm run build` e aguarde a construção da página.
5. Execute `npm run open`.
