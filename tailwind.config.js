/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*.{html,js}',
    './src/*.{html,js}',
  ],
  theme: {
    extend: {
      colors:{
        "ungu": "#5267DF",
        "merah": "#FA5959",
        "lime" : "#3f6212",
        "hijau" : "#166534",
        "Sky" : "#075985",
      },

      fontFamily:{
        Poppins:["Poppins, sans-serif"]
      },

      container:{
        center:true,
        padding:"1rem",
        screens:{
          lg:"1124px",
          xl:"1124px",
          "2xl":"1124px",
        },
      },

    },
  },
  plugins: [],
}
