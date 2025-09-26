import React, { useEffect, useState } from "react";
import { Text, FlatList,StyleSheet,_View} from "react-native";
import { carregaProdutores } from "../../../services/carregaDados";
import Topo from "./Topo";
import Produtor from "./Produtor"


export default function Produtores({ topo }) {
  const [titulo, setTitulo] = useState("");
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = carregaProdutores();
    console.log(retorno);
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
  }, []);

  return (
    <FlatList
      data={lista}
      //renderItem={({ item: { nome } }) => <Text>{nome}</Text>}
      renderItem={({  item }) => <Produtor {...item}/>}
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={<Topo titulo={estilos.titulo} />}
    />
  );
}
const estilos = StyleSheet.create({
    titulos:{
        fontSize: 20,
        lineHeight: 32,
        marginHorinzontal:16,
        marginTop:16,
        fontWeight:'bold',
        color:'#464646'
    }
})