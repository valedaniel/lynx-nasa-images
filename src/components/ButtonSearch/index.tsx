import { i18n } from '../../i18n.js';
import './button.search.scss';

interface ButtonSearchProps {
  loading?: boolean;
  disabled?: boolean;
}

export function ButtonSearch({ loading, disabled }: ButtonSearchProps) {
  if (loading) {
    return (
      <view className="ButtonLoading">
        <view className="loader" />
      </view>
    );
  }

  return (
    <view
      className="ButtonSearch"
      style={{
        backgroundColor: disabled ? '#ccc' : undefined,
      }}
    >
      <text>{i18n.t('search')}</text>
    </view>
  );
}
