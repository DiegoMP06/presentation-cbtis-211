import { useMemo, useState, type MouseEvent } from "react";
import type { GalleryItemType } from "../types";
import INITIAL_STATE from "../data/gallery";


export default function useGallery() {
    const [item, setItem] = useState<null|GalleryItemType>(null);
    const [animation, setAnimation] = useState(false);
    const [gallery] = useState(INITIAL_STATE);
    const LAST_ITEM = gallery.length;

    const closeModal = (e: MouseEvent<HTMLDivElement>) => {
        if((e.target as HTMLDivElement).id === 'close-modal') {
            setAnimation(false);
            setTimeout(() => setItem(null), 500);
            document.body.classList.remove('overflow-hidden');
        }
    }

    const openModal = (item: GalleryItemType) => {
        document.body.classList.add('overflow-hidden');
        setItem(item);
        setTimeout(() => setAnimation(true), 0);
    }

    const previousItem = () => {
        const selectedId = ((item?.id ?? 1) + LAST_ITEM - 2) % LAST_ITEM;
        const itemSelected = gallery[selectedId];

        setItem(itemSelected);
    }

    const nextItem = () => {
        const selectedId = ((item?.id ?? 1) + LAST_ITEM) % LAST_ITEM;
        const itemSelected = gallery[selectedId];

        setItem(itemSelected);
    }

    const isOpenModal = useMemo(() => item?.id ? true : false, [item]);

    return {
        item,
        animation,
        closeModal,
        openModal,
        previousItem,
        nextItem,
        isOpenModal,
    };
} 