import React, { useContext } from 'react';
import { ThemeContext } from '../../context/DarkMode';
const DarkMode = () => {
  /*
  const [theme, setTheme] = useState('light');
  const element = document.documentElement;

  useEffect(() => {
    switch (theme) {
      case 'light':
        element.classList.remove('dark');
        break;
      case 'dark':
        element.classList.add('dark');
        break;
      default:
        break;
    }
  }, [element.classList, theme]);

  const handleChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    //Cambiar icono del sol por el de la luna
    const icon = document.querySelector('ion-icon');
    if (theme === 'dark') {
      icon.name = 'sunny';
    } else {
      icon.name = 'moon';
    }
  };
*/
  const { handleChange } = useContext(ThemeContext);
  return (
    <button
      onClick={handleChange}
      className='hover:rounded-3xl hover:bg-slate-300 w-8 h-8 leading-9 text-xl rounded-full m-1 text-sky-600 dark:text-yellow-400 '
    >
      <ion-icon name='sunny'></ion-icon>
    </button>
  );
};
export default DarkMode;
