import type { Item } from '../../types/Item.js';
import { ListItem } from './Item/index.jsx';
import './list.images.css';

interface ListImagesProps {
  items?: Item[];
}

export function ListImages({ items }: ListImagesProps) {
  if (!items) return null;

  const renderItems = () => {
    if (!items || items.length === 0) return null;

    return items.map((item) => <ListItem item={item} />);
  };

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
