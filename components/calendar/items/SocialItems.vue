<script setup lang='ts'>
    function clickTo(url: string, target: string) {
        window.open(url, target);
    }
</script>

<template>
    <div @click="clickTo('https://www.linkedin.com/company/creatormate/?originalSubdomain=nl', '_blank')" class="w-full bg-[#2A3B56] rounded-xl h-[30vh] relative p-6 hover:scale-95 transition-transform">
        <p class="font-semibold text-white">share the linkedin post!</p>
        <div class="absolute bottom-0 right-0 w-2/3 xs:w-1/3 md:w-auto">
            <svg class="w-full h-full md:h-auto md:w-auto" xmlns="http://www.w3.org/2000/svg" width="183" height="178" viewBox="0 0 183 178" fill="none">
                <path d="M146.809 1.09075L34.213 20.9445C12.0074 24.86 -2.82481 46.0425 1.09063 68.2481L20.9444 180.844C24.8599 203.05 46.0424 217.882 68.248 213.967L180.844 194.113C203.058 190.196 217.882 169.015 213.967 146.809L194.113 34.2131C190.198 12.0075 169.023 -2.82612 146.809 1.09075ZM85.2852 169.499L61.1574 173.754L45.558 85.2853L69.6858 81.0309L85.2852 169.499ZM55.8237 72.9601C48.0546 74.33 40.6288 69.0882 39.2476 61.2547C37.8663 53.4212 43.0514 45.9557 50.8206 44.5858C58.5897 43.2159 66.0154 48.4577 67.3967 56.2912C68.7779 64.1247 63.6009 71.5888 55.8237 72.9601ZM181.796 152.482L157.669 156.736L149.721 111.666C144.945 84.5782 113.136 92.3015 117.551 117.338L125.498 162.409L101.37 166.663L85.771 78.1947L109.899 73.9403L112.402 88.1355C119.962 65.3576 164.762 55.8743 172.211 98.122L181.796 152.482Z" fill="white"/>
            </svg>
        </div>

    </div>
    <div @click="clickTo('https://www.instagram.com/trycreatormate/', '_blank')" style="background: linear-gradient(126deg, #684389 0%, #924F80 25%, #B75E77 50%, #C38052 75%, #C9C165 100%);
" class="w-full bg-[#2A3B56] rounded-xl h-[30vh] relative p-6 hover:scale-95 transition-transform">
        <p class="font-semibold text-white">share the ig post!</p>
        <div class="absolute bottom-0 right-0 w-2/3 xs:w-1/3 md:w-auto">
            <svg class="w-full h-full md:h-auto md:w-auto" xmlns="http://www.w3.org/2000/svg" width="170" height="175" viewBox="0 0 170 175" fill="none">
                <path d="M15.4547 119.454C8.16927 78.1369 4.52657 57.4781 15.099 42.379C25.6715 27.2801 46.3302 23.6374 87.6477 16.352C128.965 9.06665 149.624 5.42391 164.723 15.9962C179.822 26.5688 183.465 47.2275 190.75 88.5451C198.035 129.862 201.678 150.521 191.106 165.621C180.533 180.719 159.874 184.362 118.557 191.647C77.2395 198.933 56.5808 202.576 41.4818 192.004C26.3827 181.431 22.74 160.772 15.4547 119.454Z" stroke="white" stroke-width="16" stroke-linejoin="round"/>
                <path d="M144.601 96.6788C148.645 119.608 133.334 141.474 110.405 145.517C87.4753 149.56 65.6098 134.25 61.5667 111.32C57.5237 88.3907 72.8341 66.5252 95.7634 62.4821C118.693 58.439 140.558 73.7494 144.601 96.6788Z" stroke="white" stroke-width="16"/>
                <path d="M144.981 44.2861L144.898 44.3008" stroke="white" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>

    </div>
</template>