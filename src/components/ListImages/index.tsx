import { i18n } from '../../i18n.js';
import type { Item } from '../../types/Item.js';
import { ListItem } from './Item/index.jsx';
import './list.images.css';

interface ListImagesProps {
  items?: Item[];
  loading?: boolean;
}

export function ListImages({ items, loading }: ListImagesProps) {
  if (!items || loading) return null;

  const renderItems = () => {
    if (!items || items.length === 0) return null;

    return items.map((item) => <ListItem item={item} />);
  };

  if (items.length === 0) {
    return (
      <view className="NotFoundContainer">
        <text>{i18n.t('yourSearchDidNotMatchAnyImage')}</text>
      </view>
    );
  }

  return (
    <view className="Container">
      <list
        list-type="single"
        scroll-orientation="vertical"
        className="List"
        style={{
          listMainAxisGap: '30px',
        }}
      >
        {renderItems()}
      </list>
    </view>
  );
}
