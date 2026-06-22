import { useState } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    StatusBar
} from "react-native";
import { Ionicons, Feather } from '@expo/vector-icons';
 
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from "./HomeScreen";
 
type Props = NativeStackScreenProps<RootStackParamList, 'Menu'>;
 
const combos = [
    {
        id: '1',
        name: 'McOferta Média Big Mac Duplo',
        description: 'Quatro hambúrgueres (100% carne bovina), alface americana',
        price: "R$ 39,90",
        image: require('../images/combo-big-mac-duplo.png'),
    },
    {
        id: '2',
        name: 'Novo Brabo Melt Onion Rings',
        description: 'Dois hambúrgueres de carne 100% bovina, méquinese, a exclu...',
        price: "R$ 41,50",
        image: require('../images/combo-brabo-melt-onion-rings.png'),
    },
    {
        id: '3',
        name: 'McCrispy Chicken Elite',
        description: 'Composto por pão tipo brioche com batata, molho Honey&Fire, ...',
        price: "R$ 36,20",
        image: require('../images/combo-mcrispy-elite.png'),
    },
    {
        id: '4',
        name: 'Duplo Cheddar McMelt',
        description: 'Dois hambúrgueres (100% carne bovina), molho lácteo com queijo...',
        price: "R$ 36,20",
        image: require('../images/combo-duplo-cheddar-mcmelt.png'),
    },
];
 
const categories = ['Combos', 'Lanches', 'Fritas', 'Bebidas', 'Sobremesas'];
 
export default function MenuScreen({ navigation }: Props) {
    const [activeCategory, setActiveCategory] = useState<string>('Combos');
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={"#000000"} />
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}>
 
                <View style={styles.headerImageWrapper}>
                    <Image
                        source={require('../images/restaurante.png')}
                        style={styles.headerImage}
                        resizeMode="cover"
                    />
                    <TouchableOpacity
                        style={[styles.headerButton, styles.headerButtonLeft]}
                        activeOpacity={0.8}
                        onPress={() => navigation.goBack}
                    >
                        <Ionicons name="chevron-back" size={22} color={'#000000'} />
                    </TouchableOpacity>
                    ,
                    <TouchableOpacity
                        style={[styles.headerButton, styles.headerButtonRight]}
                        activeOpacity={0.8}
                        onPress={() => { }}
                    >
                        <Feather name="file-text" size={20} color={'#000000'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.infoCard}>
                    <View style={styles.infoTopRow}>
                        <Image
                            source={require('../images/logo.png')}
                            style={styles.infoLogo}
                            resizeMode="contain"
                        />
 
                        <View style={styles.infoTexts}>
                            <Text style={styles.brandName}>McDonald's</Text>
                            <Text style={styles.brandSubtitle}>O melhor fast food do mundo
                            </Text>
                        </View>
                    </View>
                    <View style={styles.statusRow}>
                        <Feather name="clock" size={14} color={'#2baa3b'} />
                        <Text style={styles.statusText}>Aberto!</Text>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.categoriesRow}
                    >
                        {categories.map((category) => {
                            const isActive = category === activeCategory;
                            return (
                                <TouchableOpacity
                                    key={category}
                                    activeOpacity={0.8}
                                    onPress={() => setActiveCategory(category)}
                                    style={[
                                        styles.categoryPill,
                                        isActive && styles.categoryPillActives
                                    ]}
                                >
                                    <Text style={[
                                        styles.categoryText,
                                        isActive && styles.categoryTextActive
                                    ]}
                                    >
                                        {category}</Text>
 
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                    <Text style={styles.sectionTitle}>Combos</Text>
                    {combos.map((combo, index) => (
                        <TouchableOpacity
                            key={combo.id}
                            style={[
                                styles.productRow,
                                index > 0 && styles.productRowDivider,
                            ]}
                            activeOpacity={0.85}
                            onPress={() => {
 
                            }}
                        >
                            <View style={styles.productInfo}>
                                <Text style={styles.productName}>{combo.name}</Text>
                                <Text style={styles.productDescription} numberOfLines={2}>
                                    {combo.description}
                                </Text>
                                <Text style={styles.productPrice}>{combo.price}</Text>
                            </View>
                            <Image
                                source={combo.image}
                                style={styles.productImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
 
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    scroll: {
        flex: 1
    },
    scrollContent: {
        paddingBottom: 32
    },
    headerImageWrapper: {
        width: '100%',
        height: 240,
        position: 'relative',
        backgroundColor: '#000'
    },
    headerImage: {
        width: '100%',
        height: '100%',
    },
    headerButton: {
        position: 'absolute',
        top: 48,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        // Sombra em IOS e Android
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
    },
    headerButtonLeft: {
        left: 16,
    },
    headerButtonRight: {
        right: 16,
    },
    infoCard: {
        backgroundColor: '#FFFFFF',
        marginTop: -24,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 16,
    },
    infoTopRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    infoLogo: {
        width: 48,
        height: 48,
        borderRadius: 8,
    },
    infoTexts: {
        flex: 1,
    },
    statusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginTop: 12,
    },
    statusText: {
        color: '#2BAA3B',
        fontSize: 13,
        fontWeight: '600',
    },
    categoriesRow: {
        flexDirection: 'row',
        gap: 10,
        paddingVertical: 18,
        paddingRight: 12,
    },
    categoryPill: {
        paddingHorizontal: 18,
        paddingVertical: 9,
        borderRadius: 22,
        backgroundColor: '#F2F2F2',
    },
    categoryPillActives: {
        backgroundColor: '#FFC72C',
    },
    categoryText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000000'
    },
    categoryTextActive: {
        color: '#000000'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000000',
        marginBottom: 8,
    },
    productRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        gap: 12
    },
    productRowDivider: {
        borderTopWidth: 1,
        borderTopColor: '#EEEEEE',
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        fontSize: 15,
        fontWeight: '700',
        color: '#000000',
        marginBottom: 4
    },
    productDescription: {
        fontSize: 13,
        color: '#707070',
        lineHeight: 18,
    },
    productPrice: {
        fontSize: 14,
        fontWeight: '700',
        color: '#000000'
    },
    productImage: {
        width: 90,
        height: 70,
    },
    brandSubtitle: {
        fontSize: 13,
        color: '#707070',
        marginTop: 2,
    },
    brandName: {
        fontSize: 18,
        color: "#000000",
        fontWeight: '700',
    },
});