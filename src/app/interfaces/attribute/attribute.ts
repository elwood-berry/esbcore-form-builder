export interface Attribute {
  id: number;
  name: string; // Name of the attribute.
  description: string; // Brief description of the attribute.

  // ---
  // 'TIME' - The monetary value per hour?
  placeholder: string; // 'TIME' - The monetary value per hour?

  type: string[]; // 'TIME' - The monetary value per hour?
  cost: number; // 'TIME' - The monetary value per hour?
  price: number; // 'TIME' - The monetary value per hour?
  labor: number; // 'TIME' - The monetary value per hour?
  time: number; // 'TIME' - The monetary value per hour?
  required: boolean; // 'TIME' - The monetary value per hour?
  visibleCustomer: boolean; // 'TIME' - The monetary value per hour?
  visibleVendor: boolean; // 'TIME' - The monetary value per hour?
}

// "id": 0,
// "name": "Default Business Card",
// "description": "Suspendisse feugiat nisl quis vulputate varius. Curabitur tempor pretium tellus, ut placerat erat porta vitae.",
// "settings": [{
//   "id": 0,
//   "type": "single",
//   "name": "First Name",
//   "placeholder": "Please provide your first name.",
//   "required": false,
//   "visible-vustomer": true,
//   "visible-vendor": false,
//   "order-id": 1,
//   "charges": [{
//     "charge-id": 99,
//     "name": "Type",
//     "value": "Flat"
//   }, {
//     "charge-id": 98,
//     "name": "Cost",
//     "value": 100
//   }, {
//     "charge-id": 97,
//     "name": "Price",
//     "value": 200
//   }, {
//     "charge-id": 96,
//     "name": "Labor",
//     "value": 200
//   }, {
//     "charge-id": 95,
//     "name": "Time",
//     "value": "Flat"
//   }]
// }]
