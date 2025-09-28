// Tailwind config: enable forms, aspect-ratio, backdrop-filter
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            topaz: {
              50: '#f7fbfb',
              100: '#eef8f6',
              300: '#8fd6d1',
              500: '#2bb3a3',
              700: '#23A3BB'
            }
          },
          fontFamily: {
            sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            display: ['Space Grotesk', 'Inter']
          }
        }
      },
      plugins: [
        function ({ addUtilities }) {
          addUtilities({
            '.backdrop-blur-md': { 'backdrop-filter': 'blur(8px)' }
          })
        }
      ]
    }