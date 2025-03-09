import type { Item } from '../../../types/Item.js';
import './list.item.css';

interface ListItemProps {
  item: Item;
}

export function ListItem({ item }: ListItemProps) {
  const originalImage = item.links.find(
    (link) => link.rel === 'preview' && link.render === 'image',
  );

  const itemData = item.data[0];

  const getTitle = () => {
    if (!itemData?.title) return null;

    return <text className="ListTitle">{itemData.title}</text>;
  };

  const getDescription = () => {
    if (!itemData?.description) return null;

    return <text className="ListSubTitle">{itemData.description}</text>;
  };

  return (
    <list-item key={item.href} className="ListItem" item-key={item.href}>
      <view style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <image
          auto-size={true}
          src={originalImage?.href}
          className="Item-image"
        />
        <view>
          {getTitle()}
          {getDescription()}
        </view>
      </view>
    </list-item>
  );
}
