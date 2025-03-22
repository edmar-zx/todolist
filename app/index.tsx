import { useRouter } from "expo-router";
import { useState } from "react";
import {
   Button,
   Text,
   TextInput,
   View,
   StyleSheet,
   Touchable,
   TouchableOpacity,
   ScrollView} from "react-native";


export default function Index() {

  const [task, setTask] = useState<string>('')
  const[myTasks, setMyTasks] = useState<string[]>([])

  function handleAddTask(){
    if(task.trim() !== ''){
      setMyTasks(oldState => [...oldState, task])
      setTask('')
    }

    
  }

  function handleRemoveTask(taskToRemove: string){
    setMyTasks(oldState => oldState.filter(task => task !== taskToRemove))
  }

  return (
    <View style={styles.container}>
      
        <Text style={styles.title}>Bem-vindo Fulano!</Text>
        <TextInput
          placeholder="Comprar pão"
          placeholderTextColor='#555'
          style={styles.input}
          value={task}
          onChangeText={setTask}
        />

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={handleAddTask}
        >
          <Text
            style={styles.buttonText}
          >Adicionar</Text>
        </TouchableOpacity>



        <Text style={[styles.title, {marginVertical: 30}]}>A fazeres</Text>
        <ScrollView
          //contentContainerStyle={}
          keyboardShouldPersistTaps ='handled'
        >
          {
            myTasks.map((item, index)=> (
              <TouchableOpacity
                key={item}
                style={styles.buttonTask}
                onPress={() => handleRemoveTask(item)}
              >
                <Text 
                  style={styles.textTask}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))
          }
        </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 40,
    backgroundColor: '#000000'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    borderRadius: 10,
    marginTop: 20
  },
  button: {
    backgroundColor: '#A37CF7',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17
  },
  buttonTask: {
    backgroundColor: '#1F1E25',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10
  },
  textTask: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',


  }
  
})
