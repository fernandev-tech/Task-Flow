# React Learning Log
## `useRef`, `useEffect`, `&&` e direção de animações

> **Contexto:** Este conceito foi aprendido durante a implementação da navegação entre as listas **Todas** e **Favoritas** de uma To-Do List em React.

---

# 1. Objetivo da funcionalidade

A aplicação possui duas visualizações:

```text
TODAS
→ mostra todas as tarefas

FAVORITAS
→ mostra somente as tarefas onde:
   favorite === true
```

A lista atualmente selecionada é controlada pelo estado:

```js
const [activeList, setActiveList] = useState("all")
```

Inicialmente:

```text
activeList = "all"
```

Portanto, quando a aplicação começa, a lista **Todas** está ativa.

---

# 2. Por que precisamos saber a lista anterior?

`activeList` informa apenas **qual é a lista atual**.

Por exemplo:

```text
activeList = "favorites"
```

Sabemos que estamos em Favoritas.

Mas, para criar uma animação horizontal, precisamos saber também:

> **De qual lista viemos?**

Porque existem duas situações diferentes:

```text
all → favorites
```

e:

```text
favorites → all
```

Queremos que cada uma tenha uma direção diferente.

### Exemplo

```text
Todas → Favoritas
```

A nova lista entra pela direita:

```text
                    FAVORITAS
                       →
```

Enquanto:

```text
Favoritas → Todas
```

A nova lista entra pela esquerda:

```text
←
TODAS
```

Portanto, precisamos guardar uma informação sobre a **lista anterior**.

---

# 3. `useRef`

Para guardar a lista anterior, usamos:

```js
const previousList = useRef("all")
```

## O que isso significa?

Podemos imaginar que o React criou uma pequena "caixa" para nós:

```text
previousList
┌────────────────────┐
│ current: "all"     │
└────────────────────┘
```

O valor armazenado dentro dela é acessado através de:

```js
previousList.current
```

Portanto:

```js
previousList.current
```

inicialmente vale:

```text
"all"
```

---

# 4. Por que usamos `.current`?

`previousList` não representa diretamente o valor `"all"`.

Ele representa uma **referência que possui um valor armazenado**.

Podemos imaginar:

```text
previousList
      ↓
┌─────────────────┐
│     current     │
│        ↓        │
│      "all"      │
└─────────────────┘
```

Por isso usamos:

```js
previousList.current
```

para acessar o valor.

---

# 5. Diferença básica entre `useState` e `useRef`

Já conhecemos:

```js
const [activeList, setActiveList] = useState("all")
```

O `useState` guarda um estado que participa da interface.

Quando fazemos:

```js
setActiveList("favorites")
```

o React atualiza o estado e provoca uma nova renderização do componente.

Já o `useRef` pode guardar um valor que queremos preservar entre renderizações sem que a alteração desse valor, por si só, provoque uma nova renderização.

Neste projeto:

```text
useState
→ activeList
→ representa a lista atualmente selecionada

useRef
→ previousList
→ guarda a referência da lista anterior
```

---

# 6. `useEffect` entra para atualizar a memória

Temos:

```js
useEffect(() => {
    previousList.current = activeList
}, [activeList])
```

A parte:

```js
[activeList]
```

significa:

> Execute este efeito quando `activeList` mudar.

Dentro do efeito temos:

```js
previousList.current = activeList
```

Ou seja:

> Pegue o valor atual de `activeList` e guarde-o dentro de `previousList`.

---

# 7. O ciclo completo

Vamos acompanhar tudo lentamente.

## Estado inicial

A aplicação começa com:

```js
const [activeList, setActiveList] = useState("all")
```

Então:

```text
activeList = "all"
```

E temos:

```js
const previousList = useRef("all")
```

Portanto:

```text
previousList.current = "all"
```

Visualmente:

```text
activeList
    ↓
  "all"

previousList.current
    ↓
  "all"
```

---

# 8. Clicamos em Favoritas

O botão executa:

```js
setActiveList("favorites")
```

Agora o estado atual passa a ser:

```text
activeList = "favorites"
```

Mas a referência ainda contém:

```text
previousList.current = "all"
```

Temos então:

```text
ANTERIOR              ATUAL

"all"       →       "favorites"
   ↑                     ↑
previousList          activeList
```

E isso é exatamente o que precisávamos!

Agora conseguimos descobrir:

```text
all → favorites
```

---

# 9. Depois o `useEffect` executa

Como `activeList` mudou, o `useEffect` é executado:

```js
useEffect(() => {
    previousList.current = activeList
}, [activeList])
```

O código:

```js
previousList.current = activeList
```

faz:

```text
previousList.current = "favorites"
```

Agora:

```text
previousList.current = "favorites"
activeList           = "favorites"
```

Isso está correto.

A referência foi atualizada para estar preparada para a **próxima troca**.

---

# 10. Clicamos novamente em Todas

Executamos:

```js
setActiveList("all")
```

Agora temos:

```text
previousList.current = "favorites"
activeList           = "all"
```

Conseguimos descobrir:

```text
favorites → all
```

Depois o `useEffect` executa novamente:

```js
previousList.current = activeList
```

E passa a ser:

```text
previousList.current = "all"
```

Estamos novamente preparados para a próxima troca.

---

# 11. Resumo visual do `useRef` + `useEffect`

```text
APLICAÇÃO INICIA

previousList = "all"
activeList   = "all"

        ↓

CLICAMOS EM FAVORITAS

previousList = "all"
activeList   = "favorites"

        ↓

COMPARAÇÃO

"all" → "favorites"

        ↓

direção:
slide-left

        ↓

useEffect executa

previousList = "favorites"

        ↓

CLICAMOS EM TODAS

previousList = "favorites"
activeList   = "all"

        ↓

COMPARAÇÃO

"favorites" → "all"

        ↓

direção:
slide-right

        ↓

useEffect executa

previousList = "all"
```

---

# 12. Por que usamos `&&`?

Agora temos esta expressão:

```js
const animationDirection =
    previousList.current === "all" && activeList === "favorites"
        ? "slide-left"
        : "slide-right"
```

O operador:

```js
&&
```

significa:

> **E**

Estamos fazendo duas perguntas:

### Condição 1

```js
previousList.current === "all"
```

Pergunta:

> A lista anterior era `all`?

### Condição 2

```js
activeList === "favorites"
```

Pergunta:

> A lista atual é `favorites`?

Queremos que **as duas condições sejam verdadeiras ao mesmo tempo**.

Por isso usamos:

```js
&&
```

---

# 13. Exemplo real

Quando clicamos em Favoritas:

```text
previousList.current = "all"
activeList           = "favorites"
```

A primeira condição:

```js
previousList.current === "all"
```

resulta em:

```js
true
```

A segunda:

```js
activeList === "favorites"
```

resulta em:

```js
true
```

Então temos:

```js
true && true
```

Resultado:

```js
true
```

Portanto, o operador ternário escolhe:

```js
"slide-left"
```

---

# 14. Por que não usamos `||`?

O operador:

```js
||
```

significa:

> **OU**

Se fizéssemos:

```js
previousList.current === "all" || activeList === "favorites"
```

estaríamos perguntando:

> A lista anterior era `all` **OU** a lista atual é `favorites`?

Isso seria demasiado abrangente.

Por exemplo:

```text
previousList = "favorites"
activeList   = "favorites"
```

Temos:

```js
false || true
```

Resultado:

```js
true
```

Mas nesse caso:

```text
favorites → favorites
```

não houve mudança de lista.

Não queremos iniciar uma animação de troca.

---

# 15. `&&` vs `||`

## `&&` — E

Todas as condições precisam ser verdadeiras:

```js
condicaoA && condicaoB
```

Exemplo:

```js
true && true
// true
```

```js
true && false
// false
```

```js
false && true
// false
```

```js
false && false
// false
```

---

## `||` — OU

Basta uma das condições ser verdadeira:

```js
condicaoA || condicaoB
```

Exemplo:

```js
true || true
// true
```

```js
true || false
// true
```

```js
false || true
// true
```

```js
false || false
// false
```

---

# 16. O nosso operador ternário

Temos:

```js
const animationDirection =
    previousList.current === "all" && activeList === "favorites"
        ? "slide-left"
        : "slide-right"
```

Podemos ler como uma pergunta:

> **A lista anterior era `all` E a lista atual é `favorites`?**

Se SIM:

```text
slide-left
```

Se NÃO:

```text
slide-right
```

O formato geral de um ternário é:

```js
condição
    ? valorSeVerdadeiro
    : valorSeFalso
```

Neste caso:

```js
condição
    ? "slide-left"
    : "slide-right"
```

---

# 17. Como tudo se conecta

Agora temos uma cadeia completa:

```text
                    activeList
                        ↓
              ┌──────────────────┐
              │ lista atual      │
              └──────────────────┘
                        │
                        ↓
                 mudou de lista
                        │
                        ↓
                 previousList
                        │
                        ↓
              guarda lista anterior
                        │
                        ↓
                  comparamos
                        │
             ┌──────────┴──────────┐
             ↓                     ↓
       all → favorites      favorites → all
             ↓                     ↓
        slide-left             slide-right
```

---

# 18. Conceito principal para memorizar

## `activeList`

Representa:

> **Onde estou agora?**

Exemplo:

```text
"all"
```

ou:

```text
"favorites"
```

---

## `previousList.current`

Representa:

> **De onde eu vim?**

Exemplo:

```text
"all"
```

ou:

```text
"favorites"
```

---

## `useEffect`

Neste caso, funciona como:

> **“Quando a lista atual mudar, atualiza a minha memória para que ela esteja preparada para a próxima mudança.”**

Código:

```js
useEffect(() => {
    previousList.current = activeList
}, [activeList])
```

---

## `&&`

Significa:

> **E**

Usamos porque queremos detectar uma combinação específica:

```text
all E favorites
```

Ou seja:

```text
all → favorites
```

---

## `animationDirection`

Representa:

> **Qual direção a nova lista deve usar na animação?**

```text
slide-left
```

ou:

```text
slide-right
```

---

# 19. Uma analogia simples

Imagina que estás num corredor com duas salas:

```text
┌───────────┐       ┌──────────────┐
│   TODAS   │ ←──→  │  FAVORITAS   │
└───────────┘       └──────────────┘
```

`activeList` responde:

> **Em qual sala estou?**

`previousList` responde:

> **Em qual sala eu estava antes?**

E a comparação:

```text
anterior + atual
```

responde:

> **Para que lado estou a mudar?**

Depois o CSS utiliza essa informação para fazer a transição visual.

---

# 20. O que ainda falta aprender

Até este ponto, conseguimos descobrir **a direção da animação**.

Mas ainda não explicamos como o movimento realmente acontece.

A próxima parte será:

```text
@keyframes
```

Precisaremos entender:

```css
@keyframes slideLeft {
    from {
        ...
    }

    to {
        ...
    }
}
```

E estudar individualmente:

```text
@keyframes
   ↓
from
   ↓
to
   ↓
transform
   ↓
translateX()
   ↓
opacity
   ↓
duração da animação
   ↓
movimento final
```

A ideia será entender primeiro **o que o CSS está fazendo internamente**, antes de simplesmente copiar uma animação pronta.

---

# 🧠 Resumo rápido para revisão

```text
useState
→ guarda o estado atual

activeList
→ lista atualmente selecionada

useRef
→ permite manter uma referência entre renderizações

previousList
→ memória da lista anterior

previousList.current
→ valor armazenado nessa referência

useEffect(..., [activeList])
→ executa quando activeList muda

&&
→ E
→ todas as condições precisam ser verdadeiras

||
→ OU
→ pelo menos uma condição precisa ser verdadeira

?: 
→ operador ternário
→ condição ? verdadeiro : falso

animationDirection
→ determina a direção da animação

all → favorites
→ slide-left

favorites → all
→ slide-right
```

## Regra mental principal

> **`activeList` diz onde estou.**
>
> **`previousList` diz de onde vim.**
>
> **A comparação entre os dois diz para onde devo animar.**