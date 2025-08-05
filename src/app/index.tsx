import { View, Text } from "react-native";
import { Header } from "@/components/header";
import { CategoryButton } from "@/components/category-button";

export default function Home() {
  return (
    <View className="flex-1 pt-8">
      <Header title="Faça um pedido" cartQuantityItem={0} />

      <CategoryButton title="Lanche do dia" />
      <CategoryButton title="Lanche do mês" />
      <CategoryButton title="Lanche do ano" />
    </View>
  );
}
