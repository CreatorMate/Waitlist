import type {RouteLocationNormalized} from "vue-router";
import {useAccountStore} from "~/src/account/AccountStore";
import {navigateTo} from "#app";

const allowedPaths = ['/login', '/', '/onboarding', '/logout', '/work', '/about-us', "/about-us", '/terms-of-service', '/privacy-policy'];

export default defineNuxtRouteMiddleware(async (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    const accountStore = useAccountStore();
    const user = useSupabaseUser();
    if (user.value) {
        if (accountStore.userId === "") {
            await accountStore.get(user.value?.id)
        }
        if(allowedPaths.includes(to.path)) return;

        // if (!accountStore.completedOnboarding && (!accountStore.contentType || !accountStore.creatorType || !accountStore.avatar_url)) {
        //     return navigateTo('/onboarding')
        // }
    }
});