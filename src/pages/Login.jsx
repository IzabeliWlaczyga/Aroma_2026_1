import { useState } from "react"
import { Card, Heading } from "@chakra-ui/react"
import { LoginForm } from "../components/loginForm"
import { RegisterForm } from "../components/registerForm"

export function Login() {
  const [showRegister, setShowRegister] = useState(false)

  return (
    <div className="container my-4 d-flex justify-content-center">
      <Card.Root width="100%" maxWidth="720px">
        <Card.Body gap="4">
          <Heading size="lg" textAlign="center">
            {showRegister ? "Criar conta" : "Entrar"}
          </Heading>

          {showRegister ? (
            <RegisterForm onJaTenhoConta={() => setShowRegister(false)} />
          ) : (
            <LoginForm onPrimeiroAcesso={() => setShowRegister(true)} />
          )}
        </Card.Body>
      </Card.Root>
    </div>
  )
}