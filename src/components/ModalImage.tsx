import { useMemo, type MouseEvent } from "react";
import type { GalleryItemType } from "../types";
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/solid'

type ModalImageProps = {
    item: GalleryItemType;
    animation: boolean;
    previousItem: () => void;
    nextItem: () => void;
    closeModal: (e: MouseEvent<HTMLDivElement>) => void;
};

export default function ModalImage({item, closeModal, animation, previousItem, nextItem} : ModalImageProps) {
    const isAnimation = useMemo(() => animation ? 'opacity-100' : 'opacity-0', [animation]);

    return (
        <div 
            id="close-modal" 
            className={`transition-all duration-500 ease-in-out fixed inset-0 bg-white-0.6 z-50 ${isAnimation} overflow-y-auto py-20 px-4`}
            onClick={closeModal}
        >
            <div className="container mx-auto bg-white shadow-xl p-4 rounded relative">
                <button 
                    onClick={previousItem}
                    type="button" 
                    className="absolute top-1/2 -translate-y-1/2 -left-2 p-4 bg-zinc-800 text-white hover:bg-zinc-700"
                >
                    <ChevronLeftIcon className="w-8 h-8" />
                </button>

                <picture>
                    <img
                        src={item.image.src}
                        width="1600"
                        height="900"
                        decoding="async"
                        loading="lazy"
                        alt={`Imagen no ${item.id}`}
                        title={`Imagen no ${item.id}`}
                        className="block w-full"
                    />
                </picture>

                <button 
                    onClick={nextItem}
                    type="button" 
                    className="absolute top-1/2 -translate-y-1/2 -right-2 p-4 bg-zinc-800 text-white hover:bg-zinc-700"
                >
                    <ChevronRightIcon className="w-8 h-8" />
                </button>
            </div>
        </div>
    )
}
