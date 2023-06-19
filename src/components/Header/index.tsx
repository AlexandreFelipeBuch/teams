import { Container, Logo } from "./styles";
import logoImg from "@assets/logo.png";
import { Heart } from "phosphor-react-native";
export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
    </Container>
  );
}
