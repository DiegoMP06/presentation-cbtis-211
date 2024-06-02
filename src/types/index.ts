export type SpecialtyType = {
    id: number;
    icon: ImageMetadata;
    specialty: string;
    main_paragraphs: string[];
    description: ParagraphType[];
    egress_perfil: ParagraphType[];
};

export type ParagraphType = {
    type: 'paragraph' | 'list';
    paragraph: string;
    items?: string[];
}

export type GalleryItemType = {
    id: number;
    image: ImageMetadata;
}