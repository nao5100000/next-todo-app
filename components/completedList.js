

const CompletedList= ({complicatedItems,items,setItems,complicatedItems,setComplicatedItems})=>{

    const returnButton= (index,item)=>{
        const newItems =[...items];
        newItems.splice(index,0,item);
        setItems(newItems);

        const newComplicatedItems = [...complicatedItems];
        newComplicatedItems.splice(index,1);
        setComplicatedItems(newComplicatedItems)
    }

    return(
        <>
            <ul>
                {
                    complicatedItems.map((complicatedItem,index)=>{
                        return(
                            <li key={index}>
                                <p><span>{index + 1}</span>{complicatedItem.target}</p>
                                <button onClick={()=>returnButton(index,complicatedItem)}>戻す</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default CompletedList;