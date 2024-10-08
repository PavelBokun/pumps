import { useState } from 'react';
import { useClickAnyWhere } from 'usehooks-ts';

export const App2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  useClickAnyWhere(toggleMenu);

  return (
    <div>
      <button onClick={toggleMenu}>Переключить выпадающее меню</button>
      {isOpen && <div>Содержимое выпадающего меню</div>}
    </div>
  );
};

// ReactDOM.render(<App2 />, document.getElementById('root'));
