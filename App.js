
import {View, Text, SafeAreaView, StyleSheet,TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { Alert } from 'react-native';




export default function App() {  

  
  const [adicionar, setAdicionar] = useState(0);

  const Adicionar = () => {
  if (adicionar < 10) {
    const novoTotal = adicionar + 1;
    setAdicionar(novoTotal);
    if (novoTotal === 10) {
      Alert.alert('Limite atingido', 'O restaurante está lotado!');
    }
  }
};

  const Remover = () => {
  if (adicionar > 0) {
    const novoTotal = adicionar - 1;
    setAdicionar(novoTotal);
    if (novoTotal === 0) {
      Alert.alert('Nenhum cliente', 'O restaurante está vazio!');
    }
  }
};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textoarea}>
        <Text style={styles.paragraph}>
          Cliente no Restaurante!!!!
        </Text>
      </View>
      <View style={styles.contadorcliente}>
          <Text style={styles.paragraph}>
            {adicionar}
          </Text>
      </View>
      <View>
      <TouchableOpacity
        onPress={Adicionar}
        disabled={adicionar >= 10}
        style={[
        styles.botao,
          { backgroundColor: adicionar >= 10 ? '#ccc' : '#32CD32' },
        ]}>
        <Text style={styles.textoBotao}>Adicionar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={Remover}
        disabled={adicionar <= 0}
        style={[
        styles.botao,
          { backgroundColor: adicionar <= 0 ? '#ccc' : '#A52A2A' },
        ]}>
        <Text style={styles.textoBotao}>Remover</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
  },
  textoarea: {
    marginBottom: 20,
  },
  contadorcliente: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 3, // para Android
    shadowColor: '#000', // para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  paragraph: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
  botao: {
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    width: 200,
  },
  textoBotao: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

