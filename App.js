import { useState } from 'react';
import { 
 
  StyleSheet, 
  
  View ,
 
  FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals,setCourseGolas]=useState([]);

  function addGoalHandler(enteredGoalText){
    //updateing ourgoal list by adding enteredGoalText to the courseGoals
    setCourseGolas((currentCourseGoals)=>[
      ...currentCourseGoals,
      //{text:enteredGoalText,key:Math.random().toString()},
      //we created random keys when a goal is typed

      {text:enteredGoalText,id:Math.random().toString()},
      //courseGoal is an object that has text and id parameters
    ]);

  };
  
  return (
    <View style={styles.appContainer}>
       <GoalInput onAddGoal={addGoalHandler}/>
      
      <View style={styles.goalsContainer}>
        {/*ScrollView renders all list everytime even you just show 20 items. 
        Instead of ScrollView we use FlatList that only render the shown list istead of all list.
        And also it renders only when scrolling
        */}
        {/*
        <ScrollView  alwaysBounceVertical={false}>        
        {courseGoals.map((goal)=>(
          <View style={styles.goalItem} key={goal}>
        <Text style={styles.goalText}>{goal}</Text>
        </View>
        ))}
      </ScrollView>  
         */}

        <FlatList 
          data={courseGoals} 
          renderItem={(itemData)=>{
           return <GoalItem text={itemData.item.text}/>;
          }}
          keyExtractor={(item,index)=>{
            return item.id;
          }}
          alwaysBounceVertical={false}/>   
           
      
      </View>   
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    padding:50,
    paddingHorizontal:16
  },  
  goalsContainer:{
    flex:5
  },
  
});
