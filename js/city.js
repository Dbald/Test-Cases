// Function to generate random buildings
      function generateCity(numBuildings) {
        const city = document.getElementById('city');

        for (let i = 0; i < numBuildings; i++) {
          // Randomize size and position
          const width = Math.random() * 2 + 1;
          const height = Math.random() * 10 + 2;
          const depth = Math.random() * 2 + 1;
          const x = Math.random() * 50 - 25;
          const z = Math.random() * 50 - 25;

          // Create building element
          const building = document.createElement('a-box');
          building.setAttribute('position', { x: x, y: height / 2, z: z });
          building.setAttribute('width', width);
          building.setAttribute('height', height);
          building.setAttribute('depth', depth);
          building.setAttribute('color', getRandomColor());

          // Append building to city entity
          city.appendChild(building);
        }
      }

      // Function to generate random colors
      function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      // Generate city with 100 buildings
      generateCity(100);