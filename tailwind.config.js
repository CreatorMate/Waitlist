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
        'text-[#1c1c1c]',
        'text-[#1e2c38]',
        'text-[#1e2e23]',
        'text-[#2a1f34]',
        'text-[#192334]',
        'text-[#233837]',
        'text-[#0e0e0e]',
        'text-[#361b25]',
        'text-[#302637]'
    ],
    theme: {
        screens: {
            'xxxs': '340px',
            'xxs': '400px',
            'xs': '500px',
            'sm': '600px',
            'md': '765px',
            'lg': '950px',
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