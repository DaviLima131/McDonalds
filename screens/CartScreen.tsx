import { SafeAreaView, View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from './HomeScreen';
import { useCart } from '../context/CartContext';

const parsePrice = (value: string) => {
  const normalized = value.replace('R$', '').replace(/\./g, '').replace(',', '.').trim();
  return Number(normalized || 0);
};

type Props = NativeStackScreenProps<RootStackParamList, 'Cart'>;

export default function CartScreen({ navigation }: Props) {
  const { items, total, formatCurrency, updateQuantity, removeItem } = useCart();

  const handleDecrease = (productId: string, quantity: number) => {
    if (quantity > 1) {
      updateQuantity(productId, quantity - 1);
    } else {
      removeItem(productId);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            } else {
              navigation.navigate('Menu');
            }
          }}
          style={styles.backButton}
          activeOpacity={0.8}
        >
          <Ionicons name="chevron-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Sacola</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      {items.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>Sua sacola está vazia</Text>
          <Text style={styles.emptySubtitle}>Adicione um produto para ver seus itens aqui.</Text>
          <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Menu')} activeOpacity={0.85}>
            <Text style={styles.primaryButtonText}>Ver cardápio</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.sectionTitle}>Itens no pedido</Text>
          {items.map((item) => (
            <View key={item.product.id} style={styles.itemCard}>
              <Image source={item.product.image} style={styles.itemImage} resizeMode="contain" />
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.product.name}</Text>
                <Text style={styles.itemPrice}>{item.product.price}</Text>
                <Text style={styles.itemSubtotal}>
                  {formatCurrency(parsePrice(item.product.price) * item.quantity)}
                </Text>
                <View style={styles.quantityRow}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    activeOpacity={0.8}
                    onPress={() => handleDecrease(item.product.id, item.quantity)}
                  >
                    <Ionicons name="remove" size={18} color="#000" />
                  </TouchableOpacity>
                  <Text style={styles.quantityValue}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    activeOpacity={0.8}
                    onPress={() => updateQuantity(item.product.id, item.quantity + 1)}
                  >
                    <Ionicons name="add" size={18} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}

          <View style={styles.summaryCard}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Total</Text>
              <Text style={styles.summaryValue}>{formatCurrency(total)}</Text>
            </View>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => navigation.navigate('Order')}
              activeOpacity={0.85}
            >
              <Text style={styles.primaryButtonText}>Finalizar pedido</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerPlaceholder: {
    width: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 16,
  },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
  },
  itemImage: {
    width: 88,
    height: 88,
    borderRadius: 16,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  itemPrice: {
    fontSize: 14,
    color: '#707070',
    marginVertical: 6,
  },
  itemSubtotal: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  quantityButton: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  quantityValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    minWidth: 24,
    textAlign: 'center',
  },
  summaryCard: {
    marginTop: 12,
    padding: 20,
    backgroundColor: '#F8F8F8',
    borderRadius: 18,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#707070',
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  primaryButton: {
    backgroundColor: '#FFC72C',
    borderRadius: 22,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#707070',
    textAlign: 'center',
    marginBottom: 24,
  },
});