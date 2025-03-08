import './button.search.scss';

interface ButtonSearchProps {
  loading?: boolean;
}

export function ButtonSearch({ loading }: ButtonSearchProps) {
  if (loading) {
    return (
      <view className="ButtonLoading">
        <view className="loader" />
      </view>
    );
  }

  return (
    <view className="ButtonSearch">
      <text>Buscar</text>
    </view>
  );
}
