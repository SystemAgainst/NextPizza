import { FC } from 'react';
import { Title } from './title';
import { ProductCard } from './product-card';

interface Props {
  title: string;
  items: any[];
  className?: string;
}

export const ProductsGroupList: FC<Props> = ({ title, items, className }) => {
  return (
    <div className={className}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className="grid grid-cols-3 gap-[50px]">
        {items.map((item, idx) => (
          <ProductCard
            key={item.id || idx}
            name="Маргарита"
            imageUrl="https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp"
            price={390}
            count={idx % 2}
          />
        ))}
      </div>
    </div>
  );
};
