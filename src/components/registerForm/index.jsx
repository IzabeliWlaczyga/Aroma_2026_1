import { Button, Field, HStack, Input, NativeSelect, VStack } from "@chakra-ui/react"

export function RegisterForm({ onJaTenhoConta }) {
  return (
    <VStack gap="3" width="100%">
      <Field.Root>
        <Field.Label>Nome</Field.Label>
        <Input />
      </Field.Root>

      <HStack gap="3" width="100%" alignItems="flex-start">
        <Field.Root>
          <Field.Label>Data de nascimento</Field.Label>
          <Input type="date" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Genero</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field>
              <option value="">Selecione</option>
              <option value="feminino">Feminino</option>
              <option value="masculino">Masculino</option>
              <option value="outro">Outro</option>
              <option value="nao-informar">Prefiro nao informar</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>
      </HStack>

      <HStack gap="3" width="100%" alignItems="flex-start">
        <Field.Root>
          <Field.Label>CPF</Field.Label>
          <Input />
        </Field.Root>

        <Field.Root>
          <Field.Label>Telefone</Field.Label>
          <Input />
        </Field.Root>
      </HStack>

      <Field.Root>
        <Field.Label>Email</Field.Label>
        <Input type="email" />
      </Field.Root>

      <Field.Root>
        <Field.Label>Senha</Field.Label>
        <Input type="password" />
      </Field.Root>

      <Button bg="#3c2415" color="#fff" width="100%">
        Criar conta
      </Button>

      <Button variant="plain" onClick={onJaTenhoConta}>
        Ja tenho uma conta
      </Button>
    </VStack>
  )
}
