import PropertyCard from './PropertyCard';
import { properties } from '@/lib/properties';

export default function PropertyGrid() {
  const primary = properties[0];
  const supporting = properties.slice(1, 7);

  return (
    <>
      {/* Desktop/Tablet: Large primary card + 3 supporting on first row, 3 more below */}
      <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        <div className="sm:col-span-2 lg:col-span-2">
          <PropertyCard property={primary} variant="large" />
        </div>
        <div className="hidden lg:block">
          <PropertyCard property={supporting[0]} />
        </div>
        <div className="hidden lg:block">
          <PropertyCard property={supporting[1]} />
        </div>
        <div className="hidden lg:block">
          <PropertyCard property={supporting[2]} />
        </div>
        <div className="hidden lg:block">
          <PropertyCard property={supporting[3]} />
        </div>
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="no-scrollbar -mx-5 flex gap-4 overflow-x-auto px-5 sm:hidden">
        {properties.slice(0, 6).map((property) => (
          <div key={property.id} className="w-[280px] shrink-0">
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </>
  );
}
