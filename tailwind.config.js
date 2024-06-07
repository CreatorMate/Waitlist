/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        screens: {
            'xxs': '400px',
            'xs': '500px',
            'sm': '600px',
            'md': '765px',
            'lg': '925px',
            'xl': '1150px',
            '2xl': '1300px',
            'xxl': '1650px',
            '4xl': '1950px',
            '5xl': '2500px',
            '6xl': '3300px',
        },
        extend: {
            boxShadow: {
                'input': '0px 0px 0px 2px rgba(255, 255, 255, 0.40)',
                'none': '0px 0px 0px 2px rgba(255, 255, 255, 0)',
            },
        }
    }
}