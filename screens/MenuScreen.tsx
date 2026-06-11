import { useState } from "react";
import{
    View,
    Text,
    Image,
    ScrollView, // Permite Rolar a tela
    StyleSheet,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { Ionicons, Feather } from "@expo/vector-icons";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "./HomeScreen";

type Props = NativeStackScreenProps<RootStackParamList, "Menu">

const combos = [
    {
        id: 1,
        name: 'McOferta Média Big Mac Duplo',
        description: 'Quatro hambúrgueres (100% carne bovina), alface americana...',
        price: '39.90',
        image: require('../images/combo-big-mac-duplo.png'),
    },
    {
        id: 2,  
        name: 'Novo Brabo Melt Onion Rings',
        description: 'Dois hambugúrgueres de carne 100% bovina, méquinese, a exclu...',
        price: 'R$ 41,50',
        image: require('../images/combo-brabo-melt-onion-rings.png'),
    },
    {
        id: 3,
        name: 'McCrispy Chicken Elite',
        description: 'Composto por pão tipo brioche com batata, molho Honey&Fire, ...',
        price: 'R$ 39,20',
        image: require('../images/combo-mccrispy-elite.png'),
    },
    {
        id: 4,
        name: 'Duplo Cheddar McMelt',
        description: 'Dois hambúrgueres (100% carne bovina), molho lácteo com queij...',
        price: 'R$ 36,20',
        image: require('../images/combo-duplo-cheddar-mcmelt.png'),
    },
];

const categories = ['Combos', 'Lanches', 'Fritas', 'Bebidas'];

export default function MenuScreen({ navigation }: Props) {
    const [activeCategory, setActiveCategory] = useState<string>('Combos');
    return (
    <View style={styles.container}>
        <StatusBar barStyle={"light-content"} backgroundColor={"#000000"} />
        <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.headerImageWrapper}>
                <Image
                source={require('../images/restaurante.png')}
                style={styles.headerImage}
                resizeMode="cover"
            />
            <TouchableOpacity
            style={[styles.headerButton, styles.headerButtonLeft]}
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
            >
                <Ionicons name="chevron-back" size={22} color={"#000000"} />
             </TouchableOpacity>

            <TouchableOpacity
            style={[styles.headerButton, styles.headerButtonRight]}
            activeOpacity={0.8}
            onPress={() => {}}
            >
          <Feather name="file-text" size={20} color={"#000000"} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>

    );
}

const styles = StyleSheet.create({
    container: {
    
    },
    scroll: {

    },
    scrollContent: {

    },
    headerImageWrapper: {

    },
    headerImage: {

    },
    headerButton: {

    },
    info: {

    },
    infoCard: {

    },
    infoTopRow: {

    },
    infoLogo: {

    },
    infoTexts: {

    },
    brandName: {

    },
    brandSubtitle: {

    },
    statusRow: {

    },
    statusText: {

    },
    categoriesRow: {

    },
    categoryPill: {

    },
    categoryPillActives: {

    },
    categoryText: {

    },
    categoryTextActive: {

    },
    sectionTitle: {

    },
    comboCard: {
        
    },

    productRow: {

    },
    productRowDivider: {

    },
    productInfo: {

    },
    productName: {

    },
    productDescription: {
        
    },
    headerButtonLeft: {

    },
    headerButtonRight: {

    }
})