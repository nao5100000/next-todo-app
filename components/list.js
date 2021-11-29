

function List ({items,setItems,complicatedItems,setComplicatedItems,setIsEdit}){
    const completedButton =(index)=>{
        const newItems = [...items];
        const newComplicatedItems = [...complicatedItems,newItems[index]]
        newItems.splice(index,1);

        setItems(newItems );
        setComplicatedItems(newComplicatedItems);
    }

    const deleteButton =(index)=>{
        const newItems = [...items];
        newItems.splice(index,1);
        setItems(newItems);
    }

    const modifyButton =()=>{
        setIsEdit(true);
    }
    return(
        <>
          <ul>
            {
              items.map((item,index)=>{
                return (
                  <li key={index}>
                    <p><span>{index +1}</span>{item.target}</p>
                    <button onClick={()=>completedButton(index)}>Complete</button>
                    <button onClick={()=> deleteButton(index)}>Delete</button>
                    <button onClick={()=>modifyButton()}>Modify</button>
                  </li>
                );
              })
            }
        </ul>
        </>
    )
}

export default List;