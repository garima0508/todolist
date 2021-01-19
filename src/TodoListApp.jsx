import React, { useState } from 'react';

import TodoList from './TodoList';
const TodoListApp=()=>{
    const [item,setItem]=useState('');
    const [items,setItems]=useState([]);
    const InputEvent =(event)=>{
        setItem(event.target.value);
    };
    const ListOfItems =()=>{
        setItems((preItems)=>{
            return[...preItems,item]
        });
        setItem('');
    };
    const DeleteItems=(id)=>{
        console.log('Deleted');
        setItems((preItems)=>{
            return preItems.filter((arrEle,index)=>{
                return index!==id;
            })
        });
    };
    return(
        <>
          <div className='main_div'>
          
              <div className='center_div'>
                   <br/>
                   <h1>TODO LIST</h1>
                   <br/>
                   <input type='text' placeholder='Add an item' onChange={InputEvent} value={item}/>
                   <button onClick={ListOfItems}>+</button>
                   <ol>
                       {items.map((item,index)=>{
                          return (
                            <TodoList 
                                text={item}
                                key={index}
                                id={index}
                                onSelect={DeleteItems}
                            />
                          );
                       })}
                   </ol>
              </div>
          </div>
        </>
    );
};
export default TodoListApp;