import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='pumps zoomable-box'>
       <div>
        <h2>Насос циркуляционный STI CR 25/4-130</h2>
        <img src="https://moscow.elfgroup.ru/upload/resize_cache/iblock/818/390_390_2/4_130.jpg" alt="STI CR 25/4-130" />
       </div>
       <div className='description'>
        <div className='description2 '><div>Диаметр условный (DN)</div>  <div className='colorP'>....................25</div></div>
        <div className='description2'><div>Производительность, л./мин.</div>  <div className='colorP'>..............39</div></div>
        <div className='description2'><div>Мощность, Вт.</div>  <div className='colorP'>............................79</div></div>
        <div className='description2'><div>Напор, м.вод.ст.</div>  <div className='colorP'>..........................4</div></div>
        <div className='description2'><div>Строительная длина</div>  <div className='colorP'>......................130</div></div>
        <div className='description2'><div>Количество скоростей</div>  <div className='colorP'>......................3</div></div>
        <div className='description2'><div>Срок службы, лет</div>  <div className='colorP'>..........................5</div></div>
        <div className='description2'><div>Срок гарантии производителя, лет</div>  <div className='colorP'>..........2</div></div>

                     </div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
