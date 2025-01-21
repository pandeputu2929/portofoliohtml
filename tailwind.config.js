/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  mode: 'jit',
  theme: {
    container: {
    center:true,
    padding:'16px',
    },
  
    extend: {
      colors:{
        primary: '#3B82F6',
        secondary: '#6B7280',
          instagram:'#FF0069',
        dark:'#111827'
      
      },
      screens:{
        '2xl':'1320px',
      }
    },
  },
  plugins: [],
}

