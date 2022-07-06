## Sobre o desafio

O desafio consistia no desenvolvimento de um *layout* de uma *landing page* com uma grade de produtos e um formulário de *newsletter*. Seu principal objetivo era transformar este *layout* em uma página funcional.

**Link do layout**: https://xd.adobe.com/spec/4025e242-a495-4594-71d2-5fd89d774b57-3614

**Endpoint da API**: https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1

### Layout

As regras para construção do layout eram:

Você terá que implementar o *layout* de acordo com esse **[mock](https://xd.adobe.com/spec/4025e242-a495-4594-71d2-5fd89d774b57-3614)**. O *mock* contém a estrutura do layout e todo o estilo da página.

É importante se ater aos detalhes de tamanho e espaçamento entre os elementos da página, construindo o HTML mais semântico possível utilizando-se das tags do HTML5.

### Comportamento:

Para preencher a página com as informações dos produtos, você terá que consultar esta **[API](https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1)** de forma paginada, sendo que cada página consultada retornará as informações de **8 produtos** e um **link para a próxima página**.

Assim que obter os dados, você deverá implementar os seguintes pontos:

- Para cada **produto** retornado pela API, um **card de produto** com as respectivas informações deve ser criado na grade de produtos;
- Ao clicar no botão **Ainda mais produtos aqui!** a próxima página da API deve ser consultada, gerando mais **8 produtos** na grade existente, abaixo dos produtos já carregados pela primeira requisição;
- Os formulários devem ter seus campos de *input* validados de acordo com o conteúdo (ex: O campo de email deve conter um email válido);

---
