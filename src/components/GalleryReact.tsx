import useGallery from "../hooks/useGallery"
import ModalImage from "./ModalImage";
import gallery from "../data/gallery";

export default function Gallery() {
    const { 
        item,
        animation,
        closeModal,
        openModal,
        previousItem,
        nextItem,
        isOpenModal,
    } = useGallery();

    return (
        <>
            <main className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 my-20 gap-8">
                { gallery.map(image => (
                    <div 
                        key={image.id}
                        className="relative bg-cyan-950 shadow-xl grid place-content-center cursor-pointer"
                        onClick={() => openModal(image)}
                    >
                        <p className="text-white font-black text-xl p-4 shadow-xl absolute -top-6 -left-2 bg-rose-950">
                            { image.id }
                        </p>
            
                        <picture>
                            <img
                                src={image.image.src}
                                width="1600"
                                height="900"
                                decoding="async"
                                loading="lazy"
                                alt={`Imagen no ${image.id}`}
                                title={`Imagen no ${image.id}`}
                            />
                        </picture>
                    </div>
                )) }
            </main>

            { isOpenModal && 
                <ModalImage 
                    animation={animation}
                    item={item!}
                    nextItem={nextItem}
                    previousItem={previousItem}
                    closeModal={closeModal}
                />
            }
        </>
    )
}
