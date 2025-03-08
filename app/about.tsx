import { useRouter } from "expo-router";
import { Fragment } from "react";
import { Button, Text, View } from "react-native";

export default function AboutScreen(){

const router = useRouter();

    return(
        <>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
            
                }}
            >
                
                <Text>Pagina sobre</Text>
                <Button
                    title="Voltar"
                    onPress={() => router.back()}
                />
            </View>
            <Text>Ola</Text>
        </>
    )
}