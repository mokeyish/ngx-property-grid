
export interface PropertyGridItemMeta {
    name: string;
    description: string;
    order?: string;
    group?: string;
    hidden?: boolean;
}

export const $meta = (meta: PropertyGridItemMeta) =>
    (target: any, key: string | symbol) => {
    if (!target.__meta) {
        target.__meta = {};
    }
    target.__meta[key] = meta;
};


