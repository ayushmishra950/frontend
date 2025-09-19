
import React from 'react';
import ProductDetailCard from './ProductDetailCard';

const ProductShowcase = () => {
  const dummyDataList = [
    {
      price: "1,90,000",
      brand: "Yatri",
      model: "E-Cart",
      payload: "700 Kg",
      power: "2 hp",
      batteryType: "Lithium Ion",
      year: "2024",
      bodyType: "Open",
      batteryCapacity: "100Ah",
      speed: "30",
      brochureLink: "Product Brochure",
    },
    {
      price: "1,85,000",
      brand: "SuperRick",
      model: "Z-Plus",
      payload: "650 Kg",
      power: "1.8 hp",
      batteryType: "Lead Acid",
      year: "2023",
      bodyType: "Closed",
      batteryCapacity: "120Ah",
      speed: "28",
      brochureLink: "Brochure PDF",
    },
    {
      price: "1,95,000",
      brand: "EcoGo",
      model: "X1",
      payload: "720 Kg",
      power: "2.2 hp",
      batteryType: "Lithium Ion",
      year: "2024",
      bodyType: "Open",
      batteryCapacity: "110Ah",
      speed: "32",
      brochureLink: "Download Info",
    },
    {
      price: "1,80,000",
      brand: "E-Ride",
      model: "Mega",
      payload: "680 Kg",
      power: "1.9 hp",
      batteryType: "Lead Acid",
      year: "2022",
      bodyType: "Closed",
      batteryCapacity: "105Ah",
      speed: "29",
      brochureLink: "Get Brochure",
    },
    {
      price: "2,00,000",
      brand: "ZoomCart",
      model: "ProMax",
      payload: "750 Kg",
      power: "2.4 hp",
      batteryType: "Lithium Ion",
      year: "2025",
      bodyType: "Open",
      batteryCapacity: "115Ah",
      speed: "35",
      brochureLink: "Spec Sheet",
    },
    {
      price: "1,70,000",
      brand: "RickPro",
      model: "Lite",
      payload: "600 Kg",
      power: "1.7 hp",
      batteryType: "Lead Acid",
      year: "2023",
      bodyType: "Closed",
      batteryCapacity: "95Ah",
      speed: "27",
      brochureLink: "Details PDF",
    },
  ];

  return (
    <div className="flex flex-col  gap-16 p-8 bg-gray-50">
      {dummyDataList.map((data, i) => (
        <ProductDetailCard key={i} data={data} />
      ))}
    </div>
  );
};

export default ProductShowcase;