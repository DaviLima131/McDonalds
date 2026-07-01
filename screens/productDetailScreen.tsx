import { useState } from "react";
 
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    SafeAreaViewBase,
} from 'react-native';
 
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
 
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "./HomeScreen";
 
import { getProdutoById } from "../data/produtos";
 
type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;
 
export default function ProductDetail({ navigation, route }: Props) {
    const produto = getProdutoById(route.params.productId);
    const [quantidade, setQuantidade] = useState(1);
    const insets = useSafeAreaInsets();
 
    if (!produto) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.errorText}>Produto não encontrado</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backLink}>Voltar</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
 
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={"#FFFFFF"} />
            <TouchableOpacity
                style={[styles.headerButton, styles.headerButtonLeft]}
                activeOpacity={0.8}
                onPress={() => navigation.goBack()}
            ><Ionicons name="chevron-back" size={22} color={"#000000"} />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.headerButton, styles.hedaerButtonRight]}
                activeOpacity={0.8}
                onPress={() => { }}>
                <Feather name="file-text" size={20} color={"#000000"} />
            </TouchableOpacity>
 
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.ScrollContent}
                showsVerticalScrollIndicator
            >
                <Image
                    source={produto.image}
                    style={styles.productImage}
                    resizeMode="contain"
                />
                <View style={styles.brandRow}>
                    <Image
                        source={require('../images/logo.png')}
                        style={styles.brandLogo}
                        resizeMode="contain"
                    />
                    <Text style={styles.price}>McDonald's</Text>
                </View>
                <Text style={styles.productName}>{produto.name}</Text>
            </ScrollView>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
 
    },
    scroll: {
 
    },
    ScrollContent: {
 
    },
    headerButton: {
 
    },
    headerButtonLeft: {
 
    },
    hedaerButtonRight: {
 
    },
    productImage: {
 
    },
    brandRow: {
 
    },
    brandLogo: {
 
    },
    brandName: {
 
    },
    productName: {
 
    },
    priceRow: {
 
    },
    price: {
 
    },
    quantifySelector: {
 
    },
    quantifyButtonMinus: {
 
    },
    quantifyButtonPlus: {
 
    },
    quantifyText: {
 
    },
    sectionTitle: {
 
    },
    aboutText: {
 
    },
    ingredientsHeader: {
 
    },
    ingredientRow: {
 
    },
    bullet: {
 
    },
    ingredientText: {
 
    },
    bottomSpacer: {
 
    },
    footer: {
 
    },
    addButton: {
 
    },
    addButtonText: {
 
    },
    errorText: {
 
    },
    backLink: {
 
    },
})
 