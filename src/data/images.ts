// Each slot is a local file in /public/images or a full https URL (Unsplash/Pexels hosts are allowed in next.config.mjs).
export const IMG = {
  villa: '/images/villa.jpg', interior: '/images/interior.jpg', tower: '/images/tower.jpg', apartment: '/images/apartment.jpg',
  warehouse: '/images/warehouse.jpg', factory: '/images/factory.jpg', office: '/images/office.jpg', skyline: '/images/skyline.jpg',
  home: '/images/home.jpg', commercial: '/images/commercial.jpg', architecture: '/images/architecture.jpg', estate: '/images/estate.jpg',
} as const;
export type ImgKey = keyof typeof IMG;
