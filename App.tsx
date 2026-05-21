import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('./images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text>McDonald's</Text>
        </View>
        <View style={styles.welcomeSection}>
          <Text style={styles.title}>Seja Bem-vindo!</Text>
          <Text style={styles.subtitle}>Escolha como prefere aproveitar sua refeição. estamos aqui para oferecer praticidade e sabor em cada detalhe </Text>
        </View>
        <View style={styles.cardsRow}>
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => { }}
          >
            <View style={styles.iconCircles}>
              <MaterialCommunityIcons
                name="hamburger"
                size={36}
                color="#000000"
              />
            </View>
            <View style={styles.cardLabelPill}>
              <Text style={styles.cardLabel}>Para comer aqui!</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.card}
          activeOpacity={0.85}
          onPress={() => { }}
          >
            <View style={styles.iconCircles}>
              <Feather name="shopping-bag" size={34} color="#000000" />
            </View>
            <View>
              <Text>Para levar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {

  },
  container: {

  },
  header: {

  },
  logo: {

  },
  brandName: {

  },
  welcomeSection: {

  },
  title: {

  },
  subtitle: {

  },
  cardsRow: {

  },
  card: {

  },
  iconCircles: {

  },
  cardLabelPill: {

  },
  cardLabel: {

  }
})