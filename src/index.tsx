import * as ReactDom from 'react-dom/client';
import App from 'src/app';
import './index.css';
const root = ReactDom.createRoot(document.getElementById('root')!);

root.render(<App />);
