import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from './HomeScreen';
import { useCart } from '../context/CartContext';

type Props = NativeStackScreenProps<RootStackParamList, 'OrderComplete'>;

export default function OrderCompleteScreen({ navigation }: Props) {
  const { total, formatCurrency, clearCart } = useCart();

  const handleFinish = () => {
    clearCart();
    navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.content}>
        <View style={styles.iconWrapper}>
          <Feather name="check-circle" size={88} color="#2BAA3B" />
        </View>
        <Text style={styles.title}>Pagamento efetuado</Text>
        <Text style={styles.subtitle}>Seu pedido foi recebido com sucesso e está sendo preparado.</Text>
        <View style={styles.orderCard}>
          <Text style={styles.orderLabel}>Total pago</Text>
          <Text style={styles.orderTotal}>{formatCurrency(total)}</Text>
        </View>
        <TouchableOpacity style={styles.primaryButton} onPress={handleFinish} activeOpacity={0.85}>
          <Text style={styles.primaryButtonText}>Voltar ao início</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  iconWrapper: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8F7EA',
    marginBottom: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#000',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#707070',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  orderCard: {
    width: '100%',
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    padding: 20,
    marginBottom: 28,
    alignItems: 'center',
  },
  orderLabel: {
    fontSize: 14,
    color: '#707070',
    marginBottom: 8,
  },
  orderTotal: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
  },
  primaryButton: {
    backgroundColor: '#FFC72C',
    borderRadius: 22,
    paddingVertical: 14,
    paddingHorizontal: 42,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
});