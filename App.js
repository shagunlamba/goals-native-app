import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle)=> {
    setCourseGoals((prevState)=>{
      return [
        ...prevState,
        {
          key: Math.random().toString(),
          value: goalTitle
        }
      ]
    });
    setIsAddMode(false);
  }

  const removeGoalHandler = (goalId)=> {
    setCourseGoals((prevState)=>{
      return prevState.filter((goal)=>{
        goal.key !== goalId
      });
    })
  }

  const cancelGoal = ()=> {
    setIsAddMode(false);
  }


  return (
    <View style={styles.screen}>  
      <Button 
        title="Add New Goal" 
        onPress={()=>{
          setIsAddMode(true)
        }}/>
      <GoalInput 
         visible={isAddMode} 
         addGoalHandler={addGoalHandler}
         onCancel={cancelGoal}
        />

      <FlatList 
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem 
            id={itemData.item.key}
            title={itemData.item.value} 
            onDelete={removeGoalHandler}
            />
        )} 
      />
   
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})