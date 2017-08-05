# Conceitos básicos de AngularJS 

[:arrow_left: Voltar](../README.md)

## O que é?

É um **Framework** estrutural para aplicações web dinâmicas. Permite usar o próprio HTML como linguagem de template, ou seja, a definição da estrutura da página escrita utilizando HTML. Além disso, o AngularJS permite extender a linguagem HTML padrão para melhor expressar os componentes da aplicação de forma simples e sucinta.

Com AngularJS também temos a facilidade de manipular o DOM de uma página HTML, através do seu conceito de Two-way data binding. Com AngularJS temos uma abstração dessas manipulações que nos possibilita focar o desenvolvimento do código da aplicação em resolver o problema, ou seja, implementar as regras de negócio ao invés de construir todo um _"boilerplate"_ para conseguir obter os dados de um formulário e atualizar uma lista, por exemplo.

AngularJS é uma ferramente de desenvolvimento _frontend_ e por isso todo o código que implementados precisa apenas de um navegador Web para ser executado, com isso podemos contruir aplicações completas independetes de servidores e/ou aplicações _backend_.

Por se tratar de um _framework_, entendemos que se trata de uma aplicação web particular a qual o nosso código irá se encaixar e portanto devemos seguir o modelo de desenvolvimento do framework o que em alguns casos temos que pagar o preço abrindo mão de certa flexibilidade. Por outro lado, o AngularJS nos oferece um alto nível de abstração de desenvolvimento e com isso conseguimos alcançar um maior nível de produtividade.


## Pra que serve?

AngularJS é um framework para construções de soluções completas de _clien-side_, ou seja, é utilizado para a implementação de toda a parte que corresponde ao lado cliente de uma aplicação web e que irá rodar em um navegador.

Suas principais características são:

- Two way data binding, que nos permite interagir com o DOM de uma forma muito mais simples e eficiênte.
- Injeção de dependências, que elimina a necessidade de criar e gerenciar cada parte da aplicação.
- Extensão do HTML através de diretivas, tornando o HTML muito mais simples e semântico.
- Reutilização de código através de modularização.
- Testabilidade, já que todo o framework foi construido pensando em _TDD (Test Driven Development_.


## Como funciona?

Umas das principais características do framework é o _Two-Way Data Binding_ e por isso precisamos entender bem esta funcionalidade antes de partirmos para a "mão na massa".

Data binding é a "junção" entre o _model_ e a _view_, ou seja, a junção entre alguma informação que temos no nosso código javascript como, por exemplo, um objeto e a apresentação desta informação na tela, através do template HTML.

A imagem abaixo apresenta como acontece este "_bind_" do model para que seja apresentado na _view_. 

![onewaybind](assets/img/onewaybind.png)

Temos o template onde é definida a "interface gráfica" da aplicação e o _model_ que representa os dados que queremos apresentar para o usuário. Então, a junção da definição da interface com os dados que queremos apresentar (_bind_) resulta na _view_ que é a interface "final" que será apresentada para o usuário.

Neste modelo apresentado pela imagem acontece o que é chamado de _One-Way Data Binding_, ou seja, uma vez que essa junção ocorre qualquer alteração que acontecer no _model_ (informações que está sendo apresentada) não será refletida na _view_ ou então, qualquer alteração ou interação que o usuário tiver com a informação não será refletida no _model_ e então as informações estarão desatualizadas. 

Portanto, os programadores terão de se preocupar em implementar mecanismos para manter esta integração entre o _model_ e a _view_ para que toda informação esteja sempre sincronizada.

**_Two-Way Data Binding_**

Com AngularJS temos a funcionalidade de _Two-Way Data Binding_ que irá criar e gerenciar esta sincronização entre o _model_ e a _view_ de forma automática, sem que precisamos nos preocupar em escrever código para manter as coisas atualizadas. Com esta funcionalidade, toda mudança que acontecer em uma informação que esta no _model_ será refletira instântaneamente no que vemos na tela (na _view_), assim como tudo o que acontecer na tela que tiver interação com essa informação será também refletida automaticamente no _model_. Desta forma, podemos tratar o _model_ como sendo uma fonte confiável de informação em toda a aplicação, já que toda alteração em algum dado será refletido em toda a _view_.

A imagem abaixo representa como acontece o _Two-Way Data Binding_ entre o _model_ e a _view_.

![twowaybind](assets/img/twowaybind.png)

O template definido utilizando HTML será compilado e apresentado no browser e, a partir deste momento, teremos uma _view_ viva que irá refletir no _model_ qualquer mudança que ocorra e qualquer mudançã no _model_ será propagada para a _view_. Para simplificar podemos pensar na _view_ como sendo simplesmente uma projação do estado atual do _model_, ou seja, dos dados que temos em um controlador (_controller_). 

Pelo fato de a _view_ ser apenas uma projeção do _model_, temos um _controller_ completamente separado da _view_ e sem conhecimento desta, ou seja, dentro do _controller_ não teremos acesso direto a _view_ (ou ao HTML) mas iremos apenas interagir com o _model_ (os dados da aplicação).


[:arrow_left: Voltar](../README.md) | [:arrow_up: Topo](#conceitos-básicos-de-angularjs)
