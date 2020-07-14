export function sortPriceL(items, sortingItems) {
    var aux = items.slice()
    aux = aux.sort((a, b) => {
        if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          return 0;
    })
    sortingItems(aux);
};

export function sortPriceM(items, sortingItems) {
    var aux = items.slice()
    aux = aux.sort((a, b) => {
        if (a.price < b.price) {
            return 1;
          }
          if (a.price > b.price) {
            return -1;
          }
          return 0;
    })
    sortingItems(aux);
};

export function sortSoldM(items, sortingItems) {
    var aux = items.slice()
    aux = aux.sort((a, b) => {
        if (a.sold_quantity < b.sold_quantity) {
            return 1;
          }
          if (a.sold_quantity > b.sold_quantity) {
            return -1;
          }
          return 0;
    })
    sortingItems(aux);
};

export function sortSoldL(items, sortingItems) {
    var aux = items.slice()
    aux = aux.sort((a, b) => {
        if (a.sold_quantity > b.sold_quantity) {
            return 1;
          }
          if (a.sold_quantity < b.sold_quantity) {
            return -1;
          }
          return 0;
    })
    sortingItems(aux);
};

export function originalSort(relItems, sortingItems) {
  sortingItems(relItems);
};

export function conditionFilter(items, sortingItems, condition) {
  const aux = items.filter((item) => item.condition === condition);
  sortingItems(aux)
};

export function priceFilter(sortingItems, items, limits) {
  if(limits.min && limits.max) {
    if(limits.min <= limits.max) {
      const aux = items.filter((item) => 
      item.price <= limits.max && item.price >= limits.min
      );
      sortingItems(aux);
    } else {
      const aux = items.filter((item) => 
      item.price <= limits.min && item.price >= limits.max
      );
      sortingItems(aux);
    };
  } else if(limits.min) {
    const aux = items.filter((item) => 
      item.price >= limits.min
    );
    sortingItems(aux);
  } else if(limits.max) {
    const aux = items.filter((item) => 
      item.price <= limits.max
    );
    sortingItems(aux);
  }; 
};