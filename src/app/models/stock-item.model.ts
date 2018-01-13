export class StockItemVariant {
  sku?: string;
  price: number;
  quantity?: number;
}

export class StockItemDetails {
  width?: string;
  height?: string;
  in_stock?: boolean;
  category_id: string;
}

export class StockItem {
  title: string;
  description: string;
  productDetails: StockItemDetails;
  variants: StockItemVariant[];
}

export class Category {
  id: string;
  label: string;
}