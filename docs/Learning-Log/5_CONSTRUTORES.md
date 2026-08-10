# Learning Log — `new`, Construtores, Instâncias e `FormData`

## 1. A dúvida inicial

Encontrámos esta linha no `TaskForm`:

```js
const formData = new FormData(event.target)
```

As dúvidas foram:

* O que é `new`?
* O que significa "instância"?
* O que é um construtor?
* Um construtor instancia um objeto?
* `FormData` é uma função?
* `FormData` é uma API?
* Estamos transformando uma função em objeto?
* O que exatamente está acontecendo em `new FormData(event.target)`?

---

# 2. O que é `new`?

`new` é uma palavra-chave do JavaScript usada para criar uma **nova instância de um objeto a partir de um construtor**.

Um exemplo que já conhecemos:

```js
const data = new Date()
```

Podemos pensar assim:

```text
new
 ↓
cria uma nova instância
 ↓
Date
 ↓
objeto Date
```

Então:

```js
const data = new Date()
```

significa aproximadamente:

> "Cria um novo objeto usando `Date` como construtor e guarda esse objeto na variável `data`."

---

# 3. O que é um construtor?

Um construtor pode ser entendido como algo que serve para **criar objetos de determinado tipo**.

Uma comparação simples é imaginar uma fábrica.

```text
Modelo / fábrica
       ↓
   construtor
       ↓
objetos individuais
```

Por exemplo:

```js
const hoje = new Date()
const nascimento = new Date()
```

Temos dois objetos diferentes:

```text
Date
 │
 ├──→ objeto Date → hoje
 │
 └──→ objeto Date → nascimento
```

Os dois foram criados utilizando o mesmo construtor:

```js
Date
```

Mas são objetos diferentes.

---

# 4. O que é uma instância?

A palavra "instância" parece complicada, mas a ideia é simples.

Uma **instância é um objeto específico que foi criado a partir de determinado construtor**.

Por exemplo:

```js
const hoje = new Date()
```

Podemos dizer:

> `hoje` é uma instância de `Date`.

Ou, de forma mais simples:

> `hoje` é um objeto `Date` específico criado usando `Date`.

Mentalmente:

```text
Date
 ↓
construtor
 ↓
new Date()
 ↓
objeto específico
 ↓
hoje
```

Então quando ouvirmos:

> "`X` é uma instância de `Y`"

podemos pensar:

> "`X` é um objeto específico criado usando `Y` como construtor."

---

# 5. Então o construtor "instancia"?

Sim.

Quando usamos:

```js
new Date()
```

o `new` trabalha com o construtor `Date` para criar uma nova instância.

Podemos pensar:

```text
new
 ↓
usa o construtor
 ↓
cria uma nova instância
 ↓
objeto
```

Por isso:

```js
const data = new Date()
```

resulta em:

```text
data
 ↓
objeto Date
```

---

# 6. O que exatamente o `new` está fazendo?

Quando escrevemos:

```js
new Date()
```

podemos ler mentalmente:

> "JavaScript, cria um novo objeto usando `Date` como construtor."

O mesmo raciocínio aparece em:

```js
new FormData()
```

Ou seja:

```text
new
 ↓
"cria uma nova instância"
 ↓
FormData
 ↓
"usando FormData como construtor"
```

---

# 7. E o que é `FormData`?

`FormData` faz parte das APIs disponíveis no navegador.

Uma API é, de forma simples:

> Um conjunto de funcionalidades que uma plataforma disponibiliza para o programador utilizar.

O navegador disponibiliza várias funcionalidades e APIs.

Entre elas temos coisas como:

```js
Date
FormData
localStorage
fetch
```

No caso de `FormData`, existe uma maneira de criar objetos `FormData` usando:

```js
new FormData()
```

Por isso podemos dizer:

> `FormData` é uma funcionalidade/API disponível no ambiente do navegador e também pode ser utilizado como construtor para criar objetos `FormData`.

---

# 8. API e construtor não são a mesma coisa

Esses dois termos estavam confundindo.

Quando dizemos:

> `FormData` é uma API.

Estamos falando da **funcionalidade disponibilizada pelo navegador**.

Quando dizemos:

> `FormData` é um construtor.

Estamos falando da **forma como podemos criar objetos `FormData`**.

Podemos visualizar:

```text
FormData
   │
   ├── faz parte das APIs disponíveis no navegador
   │
   └── pode ser usado como construtor
              ↓
       new FormData()
              ↓
       objeto FormData
```

---

# 9. `FormData` é uma função?

Essa pergunta foi importante porque visualmente temos:

```js
FormData(...)
```

e parece uma chamada de função comum.

Porém, quando fazemos:

```js
new FormData(...)
```

estamos utilizando `FormData` como construtor.

Construtores em JavaScript são baseados em funções que podem ser utilizadas pelo mecanismo de `new`.

Por isso, para o nosso nível atual, é melhor guardar:

```text
FormData
   ↓
construtor que podemos utilizar com new
   ↓
new FormData()
   ↓
cria um objeto FormData
```

Não precisamos, neste momento, aprofundar a mecânica interna de funções construtoras, `prototype` ou classes.

---

# 10. Não estamos transformando uma função em objeto

Essa foi outra dúvida importante.

Não acontece isto:

```text
função FormData
       ↓
transformar
       ↓
objeto
```

O que acontece é:

```text
FormData
   ↓
construtor
   ↓
new FormData()
   ↓
cria
   ↓
objeto FormData
```

Portanto temos duas coisas diferentes:

```js
FormData
```

e:

```js
formData
```

---

# 11. `FormData` e `formData` são coisas diferentes

Nesta linha:

```js
const formData = new FormData(event.target)
```

temos:

### `FormData`

É o construtor que estamos utilizando.

### `formData`

É o nome da variável que criámos.

Ela guarda a nova instância/objeto criada.

Podemos visualizar:

```text
FormData
   │
   │ new
   ↓
┌─────────────────┐
│ objeto FormData │
└─────────────────┘
        ↑
        │
    formData
```

Portanto:

```js
formData.get('title')
```

funciona porque `formData` é um objeto `FormData`.

---

# 12. Por que `formData.get()` funciona?

Um objeto `FormData` possui métodos que podemos utilizar.

Por exemplo:

```js
formData.get()
```

O método `get()` permite obter um valor dos dados do formulário.

Isso é semelhante a algo que já conhecemos em JavaScript:

```js
const data = new Date()

data.getFullYear()
```

`data` é um objeto.

E esse objeto possui métodos.

Da mesma maneira:

```js
const formData = new FormData(event.target)
```

`formData` é um objeto.

E esse objeto possui o método:

```js
formData.get()
```

---

# 13. Agora podemos voltar à nossa linha original

Temos:

```js
const formData = new FormData(event.target)
```

Podemos desmontá-la:

### `const`

Declara uma variável.

### `formData`

É o nome da variável.

### `=`

Estamos atribuindo o resultado à variável.

### `new`

Pede ao JavaScript para criar uma nova instância.

### `FormData`

É o construtor que estamos utilizando.

### `(event.target)`

É o argumento fornecido ao construtor.

Tudo junto:

```js
const formData = new FormData(event.target)
```

significa aproximadamente:

> "Cria um novo objeto `FormData` usando o elemento indicado por `event.target` e guarda esse objeto na variável `formData`."

---

# 14. Mas o que é `event.target`?

Antes de entender `FormData`, também tivemos uma dúvida sobre `event`.

Temos:

```js
function handleSubmit(event) {

}
```

O nome `event` foi escolhido pelo programador.

Poderíamos escrever:

```js
function handleSubmit(evento) {

}
```

ou:

```js
function handleSubmit(info) {

}
```

ou:

```js
function handleSubmit(x) {

}
```

O nome da variável é escolhido por nós.

Usamos `event` porque é uma convenção clara para representar um objeto de evento.

---

# 15. Mas o objeto `event` é fornecido pelo JavaScript/React?

Sim.

Quando um evento acontece, o ambiente fornece à função informações sobre aquele evento.

Por exemplo:

```jsx
<form onSubmit={handleSubmit}>
```

Quando o formulário é enviado, o React chama a função e fornece o objeto do evento:

```text
submit acontece
      ↓
React chama:
handleSubmit(event)
             ↑
       objeto do evento
```

Então:

```js
function handleSubmit(event) {
```

recebe esse objeto.

O nome `event` é nosso.

O **objeto que ele representa é fornecido pelo sistema de eventos**.

---

# 16. Isso é parecido com JavaScript puro

Já vimos algo parecido com:

```js
button.addEventListener('click', function(event) {
    console.log(event)
})
```

Aqui também temos:

```text
evento acontece
      ↓
função é executada
      ↓
função recebe informações sobre o evento
      ↓
event
```

No React temos:

```jsx
<form onSubmit={handleSubmit}>
```

e:

```js
function handleSubmit(event) {
    console.log(event)
}
```

A ideia fundamental continua sendo parecida.

O React não criou um JavaScript completamente diferente.

Continuamos trabalhando com JavaScript e com eventos.

---

# 17. `click`, `submit` e `event` são coisas diferentes

### `click`

É um tipo de evento.

### `submit`

Também é um tipo de evento.

### `event`

É o objeto que contém informações sobre aquele acontecimento específico.

Podemos pensar:

```text
click
 ↓
tipo de evento


submit
 ↓
tipo de evento


event
 ↓
objeto com informações sobre o evento
```

---

# 18. Então o que é `event.target`?

`target` permite saber qual elemento está relacionado ao evento.

No nosso caso:

```jsx
<form onSubmit={handleSubmit}>
```

Quando o formulário é submetido:

```js
event.target
```

refere-se ao formulário envolvido naquele evento.

Então:

```text
evento
 ↓
event
 ↓
event.target
 ↓
<form>
```

---

# 19. Agora `FormData(event.target)` começa a fazer sentido

Temos:

```js
const formData = new FormData(event.target)
```

Podemos ler:

```text
evento acontece
      ↓
handleSubmit(event)
      ↓
event.target
      ↓
<form>
      ↓
new FormData(form)
      ↓
cria objeto FormData
      ↓
formData
```

O `FormData` recebe o formulário e consegue trabalhar com os dados dos campos desse formulário.

---

# 20. Como isso se relaciona com `name`?

Temos:

```html
<input name="title">
```

e:

```html
<textarea name="description"></textarea>
```

Depois:

```js
formData.get('title')
```

procura o valor associado ao campo cujo:

```html
name="title"
```

E:

```js
formData.get('description')
```

procura o valor associado ao:

```html
name="description"
```

Mentalmente:

```text
name="title"
      ↓
formData.get('title')
      ↓
valor digitado no título
```

E:

```text
name="description"
      ↓
formData.get('description')
      ↓
valor digitado na descrição
```

---

# 21. Resumo geral

A linha:

```js
const formData = new FormData(event.target)
```

pode ser entendida assim:

```text
const
 ↓
declara uma variável

formData
 ↓
nome da variável

new
 ↓
cria uma nova instância

FormData
 ↓
construtor usado para criar o objeto

event.target
 ↓
formulário relacionado ao evento

resultado
 ↓
objeto FormData

formData
 ↓
variável que guarda esse objeto
```

Depois podemos fazer:

```js
formData.get('title')
```

porque o objeto `formData` possui métodos próprios.

---

# 22. O que NÃO precisamos dominar agora

Para continuar o projeto, não precisamos ainda dominar:

* `prototype`
* cadeia de protótipos;
* classes em JavaScript;
* funcionamento interno do `new`;
* como o motor JavaScript cria objetos internamente;
* detalhes avançados de funções construtoras.

Esses assuntos poderão aparecer naturalmente mais tarde.

Por agora, basta compreender:

```text
new
 ↓
cria uma nova instância

construtor
 ↓
serve como base para criar objetos

instância
 ↓
objeto específico criado a partir do construtor
```

E:

```text
FormData
 ↓
construtor/API

new FormData(form)
 ↓
cria um objeto FormData

formData
 ↓
variável que guarda esse objeto

formData.get(...)
 ↓
método usado para obter dados
```

---

# Onde paramos no projeto Task Flow

Estávamos implementando o envio do formulário.

Já temos:

```jsx
<form onSubmit={handleSubmit}>
```

E dentro do `handleSubmit` estamos construindo passo a passo.

## Ponto 1 — Impedir o comportamento padrão

Já entendemos:

```js
event.preventDefault()
```

Isso impede que o formulário siga o comportamento padrão de recarregar/navegar a página.

---

## Ponto 2 — Pegar os dados do formulário

Estamos exatamente aqui.

Precisamos implementar:

```js
function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
}
```

E testar:

```js
console.log(formData.get('title'))
console.log(formData.get('description'))
```

Se escrevermos:

```text
Título:
Estudar React

Descrição:
Aprender useState
```

o console deverá mostrar:

```text
Estudar React
Aprender useState
```

---

## O próximo ponto — ainda NÃO vamos fazer

Depois de confirmarmos que o ponto 2 funciona, vamos para:

### Ponto 3 — Criar o objeto da tarefa

Vamos transformar os dados do formulário em algo como:

```js
const newTask = {
    id: Date.now(),
    title: formData.get('title'),
    description: formData.get('description'),
    favorite: false,
    completed: false
}
```

Mas **não vamos fazer isso ainda**.

Primeiro quero que o teu cérebro veja esta sequência funcionando:

```text
Formulário
   ↓
submit
   ↓
event
   ↓
event.target
   ↓
FormData
   ↓
formData.get()
   ↓
dados digitados pelo utilizador
```

Depois disso, partimos para a criação da primeira tarefa real. 🚀
