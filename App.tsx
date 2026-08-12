import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen, { RootStackParamList } from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import CartScreen from './screens/CartScreen';
import OrdersScreen from './screens/OrdersScreen';
import OrderCompleteScreen from './screens/OrderCompleteScreen';
import { CartProvider } from './context/CartContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <CartProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Home'
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen name='Home' component={HomeScreen} />
                    <Stack.Screen name='Menu' component={MenuScreen} />
                    <Stack.Screen name='ProductDetail' component={ProductDetailScreen} />
                    <Stack.Screen name='Cart' component={CartScreen} />
                    <Stack.Screen name='Order' component={OrdersScreen} />
                    <Stack.Screen name='OrderComplete' component={OrderCompleteScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </CartProvider>
    );
}
