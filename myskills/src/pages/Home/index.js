import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {useState} from 'react';

export default function Home() {
  // newSkill é o estado, enquanto setNewSkill é a função que seta a nova skill
  const [newSkill, setNewSkill] = useState('');
  // mySkill contém as skills, o setMySkills é a função que adiciona ao mySkill
  const [mySkills, setMySkills] = useState([]);

  // handle é uma conveção para qualquer coisa que o usuário for clicar e ter uma funcionalidade
  function handleAddSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Lucas</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#999"
        onChangeText={setNewSkill}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={handleAddSkill}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginVertical: 30}]}>My Skills</Text>
      {mySkills.map(skill => (
        <TouchableOpacity key={skill} style={styles.buttonSkill}>
          <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    padding: 10,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '600',
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
  },
});
