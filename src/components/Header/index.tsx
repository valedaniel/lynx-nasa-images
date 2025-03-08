import NASALogo from '../../assets/nasa-logo.png';
import './header.css';

export function Header() {
  return (
    <view className="header">
      <image src={NASALogo} className="nasa-logo" />
      <view>
        <text className="title">NASA</text>
        <text className="subtitle">Images</text>
      </view>
    </view>
  );
}
