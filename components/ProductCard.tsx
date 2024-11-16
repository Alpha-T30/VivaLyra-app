import useProductStore from "@/store/productStore";
import * as React from "react";
import { View, Text } from "react-native";
import { Card, IconButton, Menu } from "react-native-paper";

type ProductCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  id: number;
};

export default function ProductCard({
  title,
  description,
  imageUrl,
  id,
}: ProductCardProps) {
  const [visible, setVisible] = React.useState(false);

  // Use the hook to subscribe to removeItem
  const removeItem = useProductStore((state) => state.removeItem);

  return (
    <View>
      <Card contentStyle={{ width: "100%", padding: 10 }}>
        <View className="flex flex-row justify-between items-center">
          <Text className="font-bold text-xl"> {title}</Text>
          <Menu
            visible={visible}
            onDismiss={() => setVisible(false)}
            anchor={
              <IconButton
                icon="dots-vertical"
                onPress={() => setVisible(true)}
              />
            }
          >
            <Menu.Item onPress={() => {}} title="Edit" />
            <Menu.Item onPress={() => removeItem(id)} title="Delete" />
          </Menu>
        </View>
        <Card.Cover source={{ uri: imageUrl }} />
        <Text className="mt-2">{description}</Text>
      </Card>
    </View>
  );
}
