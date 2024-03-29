import { useState } from "react";
import { FlatList } from "react-native";
import { GroupCard } from "@components/GroupCard";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { ListEmpty } from "@components/ListEmpty";

export function Groups() {
  const [groups, setGroups] = useState([]);
  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subtitle=" Jogue com a sua turma" />
      {/* <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        // contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      /> */}
    </Container>
  );
}
