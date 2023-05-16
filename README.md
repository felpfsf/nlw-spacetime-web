# NLW Spacetime

## Como clonar e executar esse projeto

### Até o momento esse projeto está em desenvolvimento

**Git Clone**
**`git clone https://github.com/felpfsf/nlw-spacetime-web.git`**

No diretório execute o comando **`yarn`** para instalar as dependências.

Para executar digite o comando **`yarn dev`** e o app irá iniciar no endereço `http://localhost:3000`

## Anotações gerais

- [ ] **`yarn create next-app <nome do projeto>`**: Através desse comando você cria um novo projeto Next, na atual versão, 13.4.2, é oferecido uma série de opções, como iniciar com o Typescript, ESLint e TailwindCSS pre-instalados e além disso usar o novo paradigma **App Router**, mais informações [aqui](https://nextjs.org/docs/app)
- [ ] **`yarn add -D prettier prettier-plugin-tailwindcss`**: Esse comando instala as configurações de padronização do Prettier para o TailwindCSS, basciamente ele organiza as classes em uma ordem específica, essa configuração é oferecia oficialmente pelo TailwindCSS.
Depois crie um arquivo na raiz do projeto chamado "prettier.config.js" com o seguinte código:

```js
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
}

```

Isso fará com que as configurações do prettier sejam interpretadas pelo VSCode.
