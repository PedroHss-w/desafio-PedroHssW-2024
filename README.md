#  🐆 🐊 🦁 RECINTOS DO ZOO 🦌 🦛 🐒

![capa](capa.png)

## Indice
1. Descrição do Desafio
2. Conceitos do Código
3. Testes Unitários
4. Tabelas e Regras

## DESCRIÇÃO DO DESAFIO
Para ajudar a organização de um Zoológico, construi um algoritmo com a lógica necessária para atender os requisitos e particularidades de cada animal do zoológico e indicar os recintos onde eles se sintam confortáveis.

## CONCEITOS DO CÓDIGO

Foi utilizado conceitos de POO (Programação Orientada a Objeto) nas principais classes do algoritmo, com funções e metódos descritivos e comentários pontuais, eficientes e explicativos.

## TESTES UNITÁRIOS
Também criei meus próprios testes no arquivo "novos-testes.test.js", onde posso verificar algumas das regras que acabaram não sendo bem cobertas nos testes padrão (Seguindo os conceitos de Arrenge, Act e Assert).

### RECINTOS EXISTENTES

 O zoológico possui os seguintes recintos disponíveis.

  | número    | bioma             | tamanho total |  animais existentes |
  |-----------|-------------------|---------------|---------------------|
  | 1         | savana            |   10          |   3 macacos         |
  | 2         | floresta          |    5          |   vazio             |
  | 3         | savana e rio      |    7          |  1 gazela           |
  | 4         | rio               |    8          |   vazio             |
  | 5         | savana            |    9          |  1 leão             |

### ANIMAIS

 O zoológico só está habilitado a tratar dos animais abaixo.
 A tabela mostra o espaço que cada indivíduo ocupa e em quais biomas se adapta.

  | espécie    | tamanho | bioma                |
  |------------|---------|----------------------|
  | LEAO       |   3     |  savana              |
  | LEOPARDO   |   2     |  savana              |
  | CROCODILO  |   3     |  rio                 |
  | MACACO     |   1     |  savana ou floresta  |
  | GAZELA     |   2     |  savana              |
  | HIPOPOTAMO |   4     |  savana ou rio       |

### REGRAS PARA ENCONTRAR UM RECINTO

1) Um animal se sente confortável se está num bioma adequado e com espaço suficiente para cada indivíduo
2) Animais carnívoros devem habitar somente com a própria espécie
3) Animais já presentes no recinto devem continuar confortáveis com a inclusão do(s) novo(s)
4) Hipopótamo(s) só tolera(m) outras espécies estando num recinto com savana e rio
5) Um macaco não se sente confortável sem outro animal no recinto, seja da mesma ou outra espécie
6) Quando há mais de uma espécie no mesmo recinto, é preciso considerar 1 espaço extra ocupado
7) Não é possível separar os lotes de animais nem trocar os animais que já existem de recinto (eles são muito apegados!).
Por exemplo, se chegar um lote de 12 macacos, não é possível colocar 6 em 2 recintos.

### ENTRADAS E SAÍDAS

1) O programa recebe o tipo e quantidade de animal (nessa ordem)
2) O programa retorna uma estrutura contendo a lista de todos os recintos viáveis ordenada pelo número do recinto (caso existam) e a mensagem de erro (caso exista)
3) A lista de recintos viáveis indica o espaço livre que restaria após a inclusão do(s) animal(is) e o espaço total, no formato "Recinto nro (espaço livre: valorlivre total: valortotal)"
4) Caso animal informado seja inválido, apresenta erro "Animal inválido"
5) Caso quantidade informada seja inválida, apresenta erro "Quantidade inválida"
6) Caso não haja recinto possível, apresenta erro "Não há recinto viável"
