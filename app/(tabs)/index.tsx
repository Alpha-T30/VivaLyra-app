import ProductCard from "@/components/ProductCard";

import useProductStore from "@/store/productStore";
import { View, FlatList, Dimensions } from "react-native";

export default function Index() {
  const initialProducts = useProductStore((state) => state.initialProducts); // Reactive hook
  const numColumns = 2;
  console.log(initialProducts);
  return (
    <View style={{ flex: 1, backgroundColor: "#d1d5db", padding: 5 }}>
      <FlatList
        data={initialProducts}
        key={numColumns} // Keeps layout consistent on numColumns change
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              margin: 5, // Add margin here for spacing between items
            }}
          >
            <ProductCard
              title={item.name}
              description={item.description}
              imageUrl={item.image}
              id={item.id}
            />
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 10 }}
        numColumns={numColumns}
      />
    </View>
  );
}
