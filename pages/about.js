import Head from 'next/head'
import Image from 'next/image'
import React,{ useState } from "react";
import List from '../components/list';
import CompletedList from '../components/completedList';
import ModifyModal from '../components/modifyModal'

export default function Home() {
  const [text,setText] = useState('');
  const [items,setItems] =useState([]);
  const [isComposed,setIsComposed] = useState(false);
  const [complicatedItems, setComplicatedItems]=useState([]);
  const [isEdit,setIsEdit] = useState(false);

  const handleChange = e => setText(e.target.value)
  const buttonClickFunction=(target)=>{
    if (text==='') return;
    const newItems = [...items,{target}];
    setItems(newItems);
    setText('');
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <input type="text"
          onChange={handleChange}
          value={text}
          onKeyPress={(e)=>{
            if(e.key == 'Enter'){
              if(isComposed === false) return;
              e.preventDefault();
              buttonClickFunction(text)
            }
          }}
          onCompositionStart={()=>setIsComposed(false)}
          onCompositionEnd={()=>setIsComposed(true)}
          />
          
        <button
          onClick={()=>buttonClickFunction(text)}
        >追加</button>
        <h2>未完了リスト</h2>
        <List
          items={items}
          setItems={setItems}
          complicatedItems={complicatedItems}
          setComplicatedItems={setComplicatedItems}
          setIsEdit={setIsEdit}
          isEdit={isEdit}/>
        <h2>完了リスト</h2>
        <CompletedList
          complicatedItems={complicatedItems}
          items={items}
          setItems={setItems}
          complicatedItems={complicatedItems}
          setComplicatedItems={setComplicatedItems}
          />
          {isEdit && <ModifyModal setIsEdit={setIsEdit} isEdit={isEdit}/>}
      </main>


      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}