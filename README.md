# CSTV

CSTV é um aplicativo móvel desenvolvido com React Native e Expo Go, projetado para os fãs de Counter-Strike acompanharem os últimos jogos e campeonatos. Veja facilmente quais jogos estão acontecendo e quais estão por vir!

## Pré-requisitos

Certifique-se de que você tem o seguinte instalado antes de prosseguir:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://expo.dev/tools#cli)
- [Git](https://git-scm.com/)

## Principais Pacotes Utilizados

- `@react-navigation/native`: Biblioteca robusta para navegação entre telas dentro do aplicativo.
- `@shopify/flash-list`: Uma implementação otimizada de lista virtualizada para exibir grandes listas de dados de forma eficiente.
- `apisauce`: Um wrapper elegante em torno do Axios que simplifica a comunicação com APIs HTTP.
- `date-fns`: Biblioteca moderna para manipulação de datas, utilizada para formatar e calcular datas e horários dos jogos.
- `expo`: Uma plataforma aberta para construir e publicar projetos React Native.
- `expo-font`, `expo-linking`, `expo-router`, `expo-splash-screen`, `expo-status-bar`, `expo-system-ui`, `expo-web-browser`: Conjunto de bibliotecas Expo para gerenciamento de fontes personalizadas, deep linking, roteamento, splash screens, barra de status, UI do sistema e o navegador web.
- `lucide-react-native`: Oferece uma coleção de ícones populares para uso em aplicativos React Native.
- `react` e `react-native`: Bibliotecas de base para construção de interfaces de usuário com componentes declarativos.
- `react-native-gesture-handler`, `react-native-safe-area-context`, `react-native-screens`: Ferramentas para melhorar a interação do usuário, gerenciar áreas seguras em dispositivos com entalhes e otimizar as telas do aplicativo.
- `recoil`: Biblioteca de gerenciamento de estado para React que fornece funcionalidades além do Context API para um estado global mais eficiente.

## Instalação

Siga estes passos para configurar o ambiente de desenvolvimento:

1. **Clone o repositório**:
   ```sh
   git clone https://github.com/danilomartinelli/cstv.git
   ```
   
2. **Entre no diretório do projeto**:
    ```sh
    cd cstv
    ```
   
3. **Instale as dependências**:
    ```sh
    npm install
    ```
   
4. **Crie um arquivo .env**:
    ```sh
    touch .env
    ```
   
5. **Adicione a chave da API**:
    ```sh
   EXPO_PUBLIC_PANDA_SCORE_API_KEY=<CHAVE DA API>
   ```
   
## Executando o projeto

Para executar o projeto, execute o seguinte comando:

```sh
expo start
```

## Contribuição

Quaisquer contribuições que você fizer serão **muito apreciadas**.

1. Faça um fork do projeto
2. Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Faça o commit das suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. Faça o push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

# TODO

- [ ] Adicionar testes
- [ ] Adicionar suporte a outros idiomas
- [ ] Adicionar cache das chamadas da API

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## Contato

Danilo Martinelli - [@danilo429](https://twitter.com/daniloleone429)

