export let powerhouse = {
  "zones": [
    {
      "name": "Operations",
      "x": 500,
      "y": 0,
      "bounds": [
        {"x": 0, "y": 0},
        {"x": 300, "y": 0},
        {"x": 300, "y": 100},
        {"x": 400, "y": 100},
        {"x": 400, "y": 250},
        {"x": 300, "y": 250},
        {"x": 300, "y": 350},
        {"x": 400, "y": 350},
        {"x": 400, "y": 500},
        {"x": 300, "y": 600},
        {"x": 200, "y": 600},
        {"x": 200, "y": 500},
        {"x": 0, "y": 500}
      ],
      "pointsOfInterests": [
        {
          "type": "door",
          "x": 200,
          "y": 540,
          "cost": 1250
        }

      ]
    },
    {

      "name": "Storage",
      "x":800,
      "y": 250,
      "bounds": [
        {"x": 0, "y": 0},
        {"x": 100, "y": 0},
        {"x": 100, "y": 100},
        {"x": 0, "y": 100}
      ],
      "pointsOfInterests": [
        {
          "type": "support",
          "x": 60,
          "y": 40,
          "cost": 250
        }
      ]
    },
    {
      "name": "Tunnel",
      "x":400,
      "y": 500,
      "bounds": [
        {"x": 0, "y": 0},
        {"x": 300, "y": 0},
        {"x": 300, "y": 100},
        {"x": 0, "y": 100}
      ],
      "pointsOfInterests": [
        {
          "type": "turret",
          "x": 200,
          "y": 10,
          "cost": 1250
        }
      ]
    },
    {
      "name": "Unknown",
      "x": 200,
      "y": 0,
      "bounds": [
        {"x": 0, "y": 0},
        {"x": 300, "y": 0},
        {"x": 300, "y": 500},
        {"x": 0, "y": 500}
      ],
      "pointsOfInterests": [
        {
          "type": "door",
          "x": 200,
          "y": 540,
          "cost": 1250
        },
        {
          "type": "door",
          "x": 200,
          "y": 540,
          "cost": 1250
        },
        {
          "type": "turret",
          "x": 50,
          "y": 200,
          "cost": 1250
        }
      ]
    },
    {
      "name": "Ventilation",
      "x": 800,
      "y": 0,
      "bounds": [
        {"x": 0, "y": 0},
        {"x": 300, "y": 0},
        {"x": 300, "y": 600},
        {"x": 0, "y": 600},
        {"x": 0, "y": 500},
        {"x": 100, "y": 500},
        {"x": 100, "y": 100},
        {"x": 0, "y": 100}
      ],
      "pointsOfInterests": [

        {
          "type": "door",
          "x": 35,
          "y": 60,
          "cost": 1250
        },
        {
          "type": "door",
          "x": 100,
          "y": 130,
          "cost": 1250
        },
        {
          "type": "door",
          "x": 100,
          "y": 430,
          "cost": 1250
        },
        {
          "type": "door",
          "x": 35,
          "y": 510,
          "cost": 1250
        }

      ]
    },
  ]
};
