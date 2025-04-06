'use client';

import {ChangeEvent, FC, useMemo, useState} from "react";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Input } from "../ui";

type Item = FilterCheckboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (value: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckboxFiltersGroup: FC<Props> = (props) => {
    const {
        title,
        items,
        defaultItems,
        limit = 5,
        searchInputPlaceholder = "Поиск...",
        onChange,
        defaultValue,
        className,
    } = props;

    const [expanded, setExpanded] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');

    const handleExpandedButton = () => setExpanded((prev) => !prev);

    const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const filteredItems = useMemo(() => {
        const query = searchValue.toLowerCase();

        return items.filter((item) => item.text.toLowerCase().includes(query));
    }, [items, searchValue]);

    const collapsedList = useMemo(() => {
        if (!expanded) return defaultItems?.slice(0, limit);

        return filteredItems;
    }, [expanded, defaultItems, filteredItems, limit]);


    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>

            {expanded && (
                <div className="mb-5">
                    <Input
                        onChange={onChangeSearchInput}
                        placeholder={searchInputPlaceholder}
                        className="bg-gray-50 border-none"
                    />
                </div>
            )}


            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {collapsedList.map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        checked={false}
                        onCheckedChange={(ids) => console.log(ids)}
                    />
                ))}
            </div>

            {items.length > limit && (
                <div className={expanded ? 'border-t border-t-neutral-100 mt-4' : ''}>
                    <button onClick={handleExpandedButton} className="text-primary mt-3 cursor-pointer">
                        {expanded ? 'Скрыть' : '+ Показать все'}
                    </button>
                </div>
            )}
        </div>
    );
};