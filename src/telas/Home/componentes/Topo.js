import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { mock } from "../../../mocks/topo";

import logo from "../../../assets/logo.png";
import { carregaTopo } from "../../../services/carregaDados";
//import { StyleSheet } from "react-native/types_generated/index";

class Topo extends React.Component {
  state = {
    topo: {
      boasVindas: "",
      legenda: ""
    },
  };
  atualizaTopo() {
    const retorno = carregaTopo();
    this.setState({ topo: retorno })
  }
  componentDidMount() {
    this.atualizaTopo();
  }
  render() {
    return (
      <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem} />
        <Text style={estilos.boasVindas}>{this.state.topo.boasVIndas}</Text>
        <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
      </View>
    );
  }

}



const estilos = StyleSheet.create({
  topo: {
    backgroundColor: "#F6F6F6",
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    fontSize: 26,
    marginTop: 24,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 16,
  }
})
export default Topo;