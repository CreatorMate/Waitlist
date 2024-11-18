/** @type {import('tailwindcss').Config} */
module.exports = {
    safelist: [
        'bg-[#2f2f2f]',
        'bg-[#324A5E]',
        'bg-[#324C3A]',
        'bg-[#463356]',
        'bg-[#2A3B56]',
        'bg-[#3A5E5C]',
        'bg-[#171717]',
        'bg-[#5A2D3E]',
        'bg-[#503F5B]',
    ],
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