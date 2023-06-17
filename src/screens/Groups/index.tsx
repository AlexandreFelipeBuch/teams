import { HighLight } from "@components/HighLight";
import { Container } from "./styles";
import { Header } from "@components/Header";

export function Groups() {
  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subtitle=" Jogue com a sua turma" />
    </Container>
  );
}
