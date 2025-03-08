import './App.css';
import { ButtonSearch } from './components/ButtonSearch/index.jsx';
import { Header } from './components/Header/index.jsx';
import { Input } from './components/Input/index.jsx';

export function App() {
  return (
    <view>
      <view className="Background" />
      <view className="App">
        <Header />
        <view className="TopPanel">
          <Input />
          <ButtonSearch />
        </view>
      </view>
    </view>
  );
}
