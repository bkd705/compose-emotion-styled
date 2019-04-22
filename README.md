# Compose Emotion Styled (Alpha)

__Not ready for production use__

Compose multiple Emotion styled components together declaratively using a React Component.

## Usage

__Using React Component__

```js
import { ComposeStyled } from 'compose-emotion-styled'

const Flex = styled('div')`
  display: flex;
`

const Danger = styled('div')`
  background: red;
`

export function MyComponent() {
  return (
    <ComposeStyled components={[Flex, Danger]}>
      <p>Hey!</p>
    </ComposeStyled>
  )
}
```

__Using Utility Function__ *Not recommended, as at this point you may as well use `styled()` directly.

```js
import { composeEmotionStyled } from 'compose-emotion-styled'

const Flex = styled('div')`
  display: flex;
`

const Danger = styled('div')`
  background: red;
`

const DangerFlex = composeEmotionStyled(Flex, Danger)

export function MyComponent() {
  return (
    <DangerFlex>
      <p>Hey!</p>
    </DangerFlex>
  )
}
```
