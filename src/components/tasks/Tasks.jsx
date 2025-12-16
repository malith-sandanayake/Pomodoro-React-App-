import { useState } from "react";
import "./tasks.css";
import Middle from "../middle/Middle";

function Tasks() {

    const [addTask, setAddTask] = useState(false);
    const [estPomodoro, setEstPomodoro] = useState(1);
    const [taskName, setTaskName] = useState("");
    const [todoList, setTodoList] = useState([]);

    function handleSave(){
        if (!taskName){
            window.alert("Task Name can not be empty!");
            return;
        }
        
        const newTask = {
            name: taskName,
            p_count: estPomodoro
        }

        setTodoList(prevList => [...prevList, newTask]);
        setTaskName("");

        setAddTask(false);
    }

    function handleIncreaseCount(){
        setEstPomodoro(prev => prev + 1);
    }

    function handleDecraseCount(){
        if (estPomodoro>1){
            setEstPomodoro(prev => prev - 1);
        }else{
            window.alert("Min num of Pomodoros can be selet is 1");
        }
    }

    function handleDeleteTask(index){
        setTodoList(prevList => prevList.filter((task, i) => i !== index));
    }

    function handleSpecificTask(){
        setPomoTime(1500);
    }

    

    return (
        <div className="tasks">
            <p className="count-text">#1</p>
            <div className="task-game">
                <p className="task-name">Task Name</p>
                <button className="task-btn">:</button>
            </div>
            <div className="task-list">
                <p>Tasks</p>
                
            {todoList.map((task, index) => (
                <div className="select-tasks" key={index} onClick={handleSpecificTask}>
                    <div className="bar1">
                        <p className="_taskname">{task.name}</p>
                        <p className="_loopcount">{task.p_count}</p>
                    </div>
                    <div className="bar2">
                        <button onClick={() => handleDeleteTask(index)}>-</button>
                    </div>
                </div>
            ))}

            </div>
            {!addTask?
            <button className="addTask" onClick={()=> setAddTask(true)}>
                + Add Task
            </button>
            :
            <div className="task-popup">
                <input type="text" placeholder="What is your Task?" id="task-name" value={taskName}
                onChange={(e) => setTaskName(e.target.value)}/>
                <p className="tasklist-title">Estimated Pomodors</p>
                <div className="est">
                    <p className="pomocount">{estPomodoro}</p>
                    <div className="estbtns">
                        <button className="btn1" onClick={handleIncreaseCount}>+</button>
                        <button className="btn2" onClick={handleDecraseCount}>-</button>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn1" onClick={()=>{setAddTask(false); setEstPomodoro(1)}}>Cancel</button>
                    <button className="btn2" onClick={() => {handleSave(); setEstPomodoro(1)}}>Save</button>
                </div>
            </div>
            }
        </div>
    );
}

export default Tasks;
