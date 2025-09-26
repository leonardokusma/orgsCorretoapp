import React, { useEffect, useState } from "react";
import { Text, FlatList,StyleSheet} from "react-native";
import { carregaProdutores } from "../../../services/carregaDados";
import Topo from "./Topo";

export default function Produtor({ nome,imagem, distancia, estrelas  }) {
    return <View style = {estilos.cartao}>
        <Image style={estilos.imagem} source={imagem} />
        <View style={estilos.informacoes}>
            <Text  style={estilos.nome}>{nome}</Text>
            <Text style={estilos.distancia}>{distancia}</Text>
        </View>
    </View>


}
const estilos = StyleSheet.create({
    cartao:{
        background: "#F6F6F6F6",
        marginVertical:8,
        marginHorizontal:16,
        borderRadius:6,
        flexDirection:"row"

    },
    imagem:{
        width:48,
        height:48,
        borderRadius:6,
        marginHorizontal:16,
        marginLeft:16,
    },
    informacoes:{
        flex:1,
        flexDirection:"row"
    },
    nome:{

    },
    distancia:{

    }
})