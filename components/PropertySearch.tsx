'use client';

import { useState } from 'react';
import { Search, MapPin, Home, Wallet, BedDouble, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const tabs = ['BUY', 'RENT', 'COMMERCIAL'] as const;
type Tab = (typeof tabs)[number];

export default function PropertySearch() {
  const [activeTab, setActiveTab] = useState<Tab>('BUY');

  return (
    <div className="relative z-20 mx-auto -mt-10 max-w-6xl px-4 sm:-mt-16 lg:-mt-20 lg:px-8">
      <div className="bg-white shadow-[0_10px_60px_rgba(0,0,0,0.14)]">
        {/* Tabs */}
        <div className="flex border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'relative flex-1 px-4 py-4 text-xs font-bold tracking-[0.15em] transition-colors duration-300 sm:px-6 sm:text-sm',
                activeTab === tab
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Search Fields */}
        <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4 [&>*:nth-child(odd)]:sm:border-b [&>*:nth-child(1)]:sm:border-r [&>*:nth-child(3)]:sm:border-r">
          <SearchField
            icon={<MapPin className="h-5 w-5" />}
            label="Location"
            placeholder="Where do you want to live?"
          />
          <SearchField
            icon={<Home className="h-5 w-5" />}
            label="Property Type"
            placeholder="Apartment"
            select
          />
          <SearchField
            icon={<Wallet className="h-5 w-5" />}
            label="Budget"
            placeholder="₹50L – ₹2Cr"
            select
          />
          <SearchField
            icon={<BedDouble className="h-5 w-5" />}
            label="Bedrooms"
            placeholder="3+ Beds"
            select
          />
        </div>

        {/* Search Button */}
        <div className="p-4 sm:p-5">
          <button className="flex w-full items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-xl lg:text-base">
            <Search className="h-5 w-5" />
            Search Properties
          </button>
        </div>
      </div>
    </div>
  );
}

function SearchField({
  icon,
  label,
  placeholder,
  select = false,
}: {
  icon: React.ReactNode;
  label: string;
  placeholder: string;
  select?: boolean;
}) {
  return (
    <div className="group flex flex-col gap-1.5 px-5 py-4 transition-colors duration-200 hover:bg-muted/40">
      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground sm:text-xs">
        <span className="text-accent transition-transform duration-200 group-focus-within:scale-110">
          {icon}
        </span>
        {label}
      </div>
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
        />
        {select && (
          <ChevronDown className="pointer-events-none absolute right-0 h-4 w-4 text-muted-foreground" />
        )}
      </div>
    </div>
  );
}
