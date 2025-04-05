import { cn } from "@/lib/utils";
import { CategoryList } from "@/constants";
import { FC } from "react";

interface Props {
    className?: string;
}

const categories = CategoryList;
const activeCategory = 0;

export const Categories: FC<Props> = ({ className }) => {
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 rounded-2xl p-1', className)}>
            {categories.map((category, index) => (
                <a className={cn(
                    'flex items-center font-bold h-11 rounded-2xl px-5',
                    activeCategory === index && 'bg-white shadow-md shadow-gray-200 text-primary'
                )}
                   key={index}
                >
                    <button>{category}</button>
                </a>
            ))}
        </div>
    );
};