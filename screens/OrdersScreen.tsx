import { SafeAreaView, View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar, } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from './HomeScreen'; import { useCart } from '../context/CartContext';

const parsePrice = (value: string) => {
  const normalized = value.replace('R$', '').replace(/\./g, '').replace(',', '.').trim();
  return Number(normalized || 0);
};

type Props = NativeStackScreenProps<RootStackParamList, 'Order'>;

export default function OrdersScreen({ navigation }: Props) {
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
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton} activeOpacity={0.8}>
          <Ionicons name="chevron-back" size={22} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerText}>
          <Text style={styles.title}>Meu pedido</Text>
          <Text style={styles.subtitle}>Confira e atualize os itens antes de pagar.</Text>
        </View>
        <View style={styles.headerPlaceholder} />
      </View>

      {items.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>Nenhum item no pedido</Text>
          <Text style={styles.emptySubtitle}>Adicione produtos à sacola para finalizar seu pedido.</Text>
          <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('Menu')} activeOpacity={0.85}>
            <Text style={styles.secondaryButtonText}>Voltar ao cardápio</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {items.map((item) => (
            <View key={item.product.id} style={styles.itemCard}>
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.product.name}</Text>
                <Text style={styles.itemPrice}>{item.product.price}</Text>
                <Text style={styles.itemSubtotal}>
                  Subtotal: {formatCurrency(parsePrice(item.product.price) * item.quantity)}
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
              <Text style={styles.summaryLabel}>Total do pedido</Text>
              <Text style={styles.summaryValue}>{formatCurrency(total)}</Text>
            </View>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => navigation.navigate('OrderComplete')}
              activeOpacity={0.85}
            >
              <Text style={styles.primaryButtonText}>Pagar agora</Text>
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
  headerText: {
    flex: 1,
    marginHorizontal: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  subtitle: {
    fontSize: 13,
    color: '#707070',
    marginTop: 4,
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  itemCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
  },
  itemInfo: {
    gap: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  itemPrice: {
    fontSize: 14,
    color: '#707070',
  },
  itemSubtotal: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
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
    marginTop: 20,
    padding: 20,
    backgroundColor: '#F8F8F8',
    borderRadius: 18,
  },
  summaryRow: {
    flexDirection: 'row',
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
  secondaryButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FFC72C',
    borderRadius: 22,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
  },
});