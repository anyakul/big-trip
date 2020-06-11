const createTripInfoCostTemplate = (value) => (
  `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${value}</span>
  </p>`
);

export {createTripInfoCostTemplate};
