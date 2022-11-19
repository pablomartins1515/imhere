import { Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';

import { styles } from './styles';

import { Participant } from '../../components/Participant';

export default function Home() {
    const participants = [ 'Pablo', 'Rodrigo', 'Stefano', 'Edson', 'Júnior', 'Pablo2', 'Rodrigo2', 'Stefano2', 'Edson2', 'Júnior2']

    function handleParticipantAdd (){
        console.log('Você clicou no botão de adicionar!');
    }

     function handleParticipantRemove (name: string ){
        console.log(`Você clicou e Removeu o participante ${name}`);
    }

    return (
       <View style={styles.container}>
            <Text style={ styles.eventName}>
                Nome do Evento 
            </Text>
            
            <Text style={ styles.eventDate}>
                Sexta, 4 de Novembro de 2022. 
            </Text>
            
            <View style={styles.form}>
                <TextInput 
                style={styles.input}
                placeholder='Nome do participante'
                placeholderTextColor='#6b6b6b'                
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        + 
                    </Text>
                </TouchableOpacity>                          
            </View>

            <FlatList 
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant 
                    key={item}
                    name= {item}
                    onRemove={() => handleParticipantRemove("Pablo")}                        
                />
              )}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                    Ninguém chegou no evento ainda? Adicione os participantes a sua lista de presença!
                </Text>
              )}
            />
       </View> 
    );
}