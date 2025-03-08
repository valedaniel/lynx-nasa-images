import './App.css';
import { Header } from './components/Header/index.jsx';

export function App() {
  return (
    <view>
      <view className="Background" />
      <view className="App">
        <Header />
      </view>
    </view>
  );
}
