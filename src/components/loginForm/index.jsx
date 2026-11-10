import { Button, Field, Input, VStack } from "@chakra-ui/react"

export function LoginForm({ onPrimeiroAcesso }) {
  return (
    <VStack gap="3" width="100%">
      <Field.Root>
        <Field.Label>Email</Field.Label>
        <Input type="email" />
      </Field.Root>

      <Field.Root>
        <Field.Label>Senha</Field.Label>
        <Input type="password" />
      </Field.Root>

      <Button bg="#3c2415" color="#fff" width="100%">
        Entrar
      </Button>

      <Button variant="plain" onClick={onPrimeiroAcesso}>
        Primeira vez?
      </Button>
    </VStack>
  )
}