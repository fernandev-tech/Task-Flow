# CSS Animations — Entendendo `overflow`, `animation`, `transform` e `@keyframes`

## 1. O que queremos fazer?

No nosso projeto, temos duas listas:

```text
TODAS
FAVORITAS
```

Quando mudamos:

```text
TODAS → FAVORITAS
```

não queremos que a lista simplesmente desapareça e a outra apareça instantaneamente.

Queremos uma transição em que a nova lista entre horizontalmente.

Exemplo:

```text
              FAVORITAS
                 ↓
        ┌─────────────────┐
        │                 │
        │     Tarefas     │
        │                 │
        └─────────────────┘
```

E no sentido contrário:

```text
FAVORITAS → TODAS
```

a nova lista entra pelo lado oposto.

Para conseguir isso, usamos três peças principais:

```text
.list_view
     ↓
animation
     ↓
@keyframes
```

---

# 2. `.list_view`

Temos:

```css
.list_view {
    overflow: hidden;
}
```

Aqui ainda **não estamos criando uma animação**.

Estamos preparando o espaço onde a animação vai acontecer.

## O que significa `overflow`?

`overflow` controla o que acontece quando o conteúdo de um elemento **ultrapassa os seus limites**.

Imagine:

```text
┌─────────────────────────┐
│                         │
│      área visível       │
│                         │
└─────────────────────────┘

        ← conteúdo
      ultrapassando →
```

Se o conteúdo ultrapassar essa área, precisamos decidir:

> "Quero mostrar a parte que saiu para fora ou escondê-la?"

É exatamente isso que `overflow` controla.

---

## `overflow: hidden`

Significa:

> **"Tudo que ultrapassar os limites deste elemento fica escondido."**

Então:

```css
.list_view {
    overflow: hidden;
}
```

cria uma espécie de **janela**.

Podemos imaginar:

```text
        conteúdo da animação
              ↓

   ─────────────────────────
   │                       │
   │      JANELA           │
   │       VISÍVEL         │
   │                       │
   ─────────────────────────
```

Se a tarefa estiver deslocada para fora dessa janela:

```text
        Tarefa
          ↓
      ┌────────┐
      │        │
──────┼────────┼────────
      │ janela │
──────┼────────┼────────
      │        │
      └────────┘
```

a parte que está fora fica escondida.

Isso é importante para criar o nosso efeito de entrada.

---

# 3. `.slide-left`

Agora chegamos à animação:

```css
.slide-left {
    animation: slideLeft 0.3s ease;
}
```

Aqui estamos dizendo ao navegador:

> **"Quando este elemento possuir a classe `slide-left`, execute uma animação chamada `slideLeft`."**

Temos três informações principais:

```css
animation: slideLeft 0.3s ease;
```

## `slideLeft`

É o **nome da animação**.

Ele precisa corresponder ao nome definido posteriormente:

```css
@keyframes slideLeft
```

---

## `0.3s`

É a duração da animação:

```text
0.3 segundos
```

Ou seja, é uma animação bastante rápida.

Podemos imaginar:

```text
0s ─────────── 0.3s
↑                  ↑
começo             fim
```

---

## `ease`

É a forma como a velocidade da animação varia.

Em vez de um movimento completamente uniforme, o navegador suaviza o movimento.

Podemos imaginar:

```text
começa → acelera → desacelera → termina
```

Mais tarde podemos estudar:

```text
linear
ease
ease-in
ease-out
ease-in-out
```

Por enquanto:

> `ease` = movimento suavizado.

---

# 4. O coração da animação: `@keyframes`

Temos:

```css
@keyframes slideLeft {

}
```

`@keyframes` serve para **definir os estados da animação**.

Pensa nele como uma instrução:

> **"Durante a animação, o elemento começa assim e termina assim."**

Por exemplo:

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

Temos:

```text
from
 ↓
estado inicial

      ANIMAÇÃO

to
 ↓
estado final
```

Portanto:

> `@keyframes` define **como a animação acontece**.

---

# 5. `from`

Temos:

```css
from {
    transform: translateX(30px);
    opacity: 0;
}
```

`from` significa:

> **"Começa neste estado."**

Ele representa o início da animação.

Também podemos escrever usando porcentagem:

```css
0%
```

Portanto:

```css
from
```

é equivalente a:

```css
0%
```

Exemplo:

```css
@keyframes slideLeft {

    from {
        ...
    }

}
```

é semelhante a:

```css
@keyframes slideLeft {

    0% {
        ...
    }

}
```

---

# 6. `transform`

Agora temos:

```css
transform: translateX(30px);
```

Aqui estamos dizendo:

> **"Transforma visualmente a posição horizontal do elemento."**

`transform` permite fazer várias transformações visuais, como:

```text
mover
girar
aumentar/diminuir
inclinar
etc.
```

No nosso caso, queremos **mover horizontalmente**.

Por isso usamos:

```css
translateX()
```

---

# 7. `translateX(30px)`

Esta é uma das partes mais importantes.

```css
translateX(30px)
```

significa:

> **"Desloca o elemento 30 pixels no eixo X."**

O eixo X é horizontal:

```text
←────────── X ──────────→
```

Portanto:

```css
translateX(30px)
```

desloca o elemento para a **direita**.

Imagine:

```text
posição normal

┌──────────┐
│  Tarefa  │
└──────────┘
```

Depois de:

```css
translateX(30px)
```

temos:

```text
          ┌──────────┐
          │  Tarefa  │
          └──────────┘
              →
            30px
```

Portanto, quando a animação começa, a lista está:

> **30px à direita da sua posição normal.**

---

# 8. `opacity: 0`

Ainda dentro do `from` temos:

```css
opacity: 0;
```

`opacity` controla a transparência de um elemento.

```text
opacity: 0
↓
completamente transparente

opacity: 1
↓
completamente visível
```

Então:

```css
opacity: 0;
```

significa:

> **"Começa invisível."**

Assim:

```css
from {
    transform: translateX(30px);
    opacity: 0;
}
```

significa:

> **"Começa 30px à direita e invisível."**

---

# 9. `to`

Agora temos:

```css
to {
    transform: translateX(0);
    opacity: 1;
}
```

`to` significa:

> **"Este é o estado final da animação."**

---

## `translateX(0)`

Temos:

```css
transform: translateX(0);
```

Significa:

> **"Não existe deslocamento horizontal."**

Ou seja:

```text
30px à direita
       ↓
      0px
       ↓
posição normal
```

O elemento volta à sua posição original.

---

## `opacity: 1`

Temos:

```css
opacity: 1;
```

Significa:

> **"Elemento completamente visível."**

---

# 10. Lendo a animação inteira

Agora conseguimos entender:

```css
@keyframes slideLeft {
    from {
        transform: translateX(30px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}
```

Como uma frase:

> **"Começa 30px à direita e invisível. Depois vai até à posição normal enquanto fica visível."**

Visualmente:

```text
INÍCIO

             ┌──────────┐
             │  Tarefa  │
             └──────────┘
             opacity: 0
                ↓
             invisível


          ← movimento


FIM

        ┌──────────┐
        │  Tarefa  │
        └──────────┘
        opacity: 1
```

É por isso que temos a sensação de que a lista:

> **entra pela direita.**

---

# 11. `slide-right`

Agora temos o contrário:

```css
@keyframes slideRight {
    from {
        transform: translateX(-30px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}
```

A principal diferença está aqui:

```css
translateX(-30px)
```

O valor é negativo.

Lembra:

```text
translateX(30px)
        ↓
      direita

translateX(-30px)
        ↓
      esquerda
```

Então a animação começa com o elemento 30px à esquerda:

```text
             INÍCIO

      ┌──────────┐
      │  Tarefa  │
      └──────────┘
          ← 30px
        invisível
```

Depois:

```text
             ↓
          animação
             ↓
```

E termina:

```text
             FIM

        ┌──────────┐
        │  Tarefa  │
        └──────────┘
        posição normal
        visível
```

Ou seja:

> **"Começa 30px à esquerda e entra até à posição normal."**

---

# 12. Juntando tudo

Temos:

```css
.list_view {
    overflow: hidden;
}
```

Isso cria a **janela** que esconde o conteúdo que ultrapassa os limites.

Depois:

```css
.slide-left {
    animation: slideLeft 0.3s ease;
}
```

Isso diz:

> **"Execute a animação chamada `slideLeft` durante 0.3 segundos."**

E:

```css
@keyframes slideLeft {
    from {
        transform: translateX(30px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}
```

define:

> **"É assim que a animação `slideLeft` deve acontecer."**

---

# 13. Uma distinção MUITO importante

Guarda esta diferença porque ela é fundamental.

## `animation`

```css
animation: slideLeft 0.3s ease;
```

**manda executar a animação.**

Podemos pensar:

```text
animation
    ↓
"Executa esta animação"
```

---

## `@keyframes`

```css
@keyframes slideLeft {
    ...
}
```

**define o que acontece durante a animação.**

Podemos pensar:

```text
@keyframes
    ↓
"Esta é a receita da animação"
```

Portanto:

```text
animation
    ↓
EXECUTA

@keyframes
    ↓
DEFINE COMO ACONTECE
```

Uma analogia:

```text
@keyframes
    ↓
receita

animation
    ↓
"cozinhar usando esta receita"
```

---

# 14. Uma pequena pegadinha nos nomes

Repara:

```css
.slide-left {
    animation: slideLeft 0.3s ease;
}
```

e a animação:

```css
@keyframes slideLeft {
    from {
        transform: translateX(30px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}
```

`translateX(30px)` significa que o elemento:

```text
começa à direita
        ↓
move-se para a esquerda
```

Então o nome `slide-left` pode ser entendido como:

> **"O conteúdo desliza para a esquerda."**

Não necessariamente:

> "O conteúdo entra pela esquerda."

Da mesma forma:

```css
.slide-right
```

usa:

```css
translateX(-30px)
```

Então:

```text
começa à esquerda
        ↓
move-se para a direita
```

Portanto, não devemos ficar presos ao nome da classe.

O comportamento real é determinado pelo:

```css
translateX()
```

---

# 15. Resumo mental

Quando encontrares:

```css
@keyframes slideLeft {
    from {
        transform: translateX(30px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}
```

pensa imediatamente:

```text
@keyframes
    ↓
"Vou definir uma animação"

slideLeft
    ↓
"Nome da animação"

from
    ↓
"Como começa"

translateX(30px)
    ↓
"30px para a direita"

opacity: 0
    ↓
"Invisível"

to
    ↓
"Como termina"

translateX(0)
    ↓
"Volta à posição normal"

opacity: 1
    ↓
"Fica visível"
```

E depois:

```css
animation: slideLeft 0.3s ease;
```

é simplesmente:

> **"Navegador, executa essa receita durante 0,3 segundos com uma transição suave."**

---

# 16. Código completo

O código que estamos usando é:

```css
.list_view {
    overflow: hidden;
}

.slide-left {
    animation: slideLeft 0.3s ease;
}

.slide-right {
    animation: slideRight 0.3s ease;
}

@keyframes slideLeft {
    from {
        transform: translateX(30px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideRight {
    from {
        transform: translateX(-30px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}
```

## Fluxo completo

```text
React muda activeList
        ↓
animationDirection é calculada
        ↓
React aplica .slide-left ou .slide-right
        ↓
animation executa a animação
        ↓
animation encontra o @keyframes correspondente
        ↓
from define o estado inicial
        ↓
CSS faz a transição
        ↓
to define o estado final
        ↓
lista chega à posição normal
```

---

# 🧠 Revisão rápida

| Conceito            | Significado                                   |
| ------------------- | --------------------------------------------- |
| `overflow`          | Controla o conteúdo que ultrapassa os limites |
| `overflow: hidden`  | Esconde o conteúdo que sai para fora          |
| `animation`         | Executa uma animação                          |
| `slideLeft`         | Nome da animação                              |
| `0.3s`              | Duração da animação                           |
| `ease`              | Suavização da velocidade                      |
| `@keyframes`        | Define os estados da animação                 |
| `from`              | Estado inicial                                |
| `to`                | Estado final                                  |
| `transform`         | Faz transformações visuais                    |
| `translateX()`      | Move horizontalmente                          |
| `translateX(30px)`  | Move 30px para a direita                      |
| `translateX(-30px)` | Move 30px para a esquerda                     |
| `translateX(0)`     | Posição horizontal normal                     |
| `opacity: 0`        | Invisível                                     |
| `opacity: 1`        | Totalmente visível                            |

## Frase para memorizar

> **`@keyframes` define a animação, `animation` manda executá-la, `transform: translateX()` controla o movimento e `overflow: hidden` funciona como a janela que esconde o que está fora da área visível.**
