# SAMPLE JSON DATA: 'Attributes'




**SINGLE**
```JSON 
[
{
  "id": 0,
  "name": "Default Business Card",
  "description": "Suspendisse feugiat nisl quis vulputate varius. Curabitur tempor pretium tellus, ut placerat erat porta vitae.",
  "options": [{
    "optionId": 0,
    "optionType": "single",
    "optionName": "First Name",
    "placeholder": "Please provide your first name.",
    "required": false,
    "visibleCustomer": true,
    "visibleVendor": false,
    "chargeType": "Flat",
    "chargeCost": 100,
    "chargePrice": 100,
    "chargeLabor": 100,
    "chargeTime": 100
  }
]
```

**MULTIPLE**
```JSON 
[
{
  "id": 0,
  "name": "Default Business Card",
  "description": "Suspendisse feugiat nisl quis vulputate varius. Curabitur tempor pretium tellus, ut placerat erat porta vitae.",
  "options": [{
    "optionId": 0,
    "optionType": "multiple",
    "optionName": "Paper Finish",
    "placeholder": "Please select the finish of the final print.",
    "required": false,
    "visibleCustomer": true,
    "visibleVendor": false,
    "chargeType": "Flat",
    "chargeCost": 100,
    "chargePrice": 100,
    "chargeLabor": 100,
    "chargeTime": 100,
    "selection": [{
      "selectionName": "No Finish"
    },
    {
      "selectionName": "Embossed Gloss"
    },
    {
      "selectionName": "Foil Accent"
    }
    ]
  }
]
```