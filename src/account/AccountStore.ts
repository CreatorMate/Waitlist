//@ts-ignore
import {defineStore} from "pinia";
import {useToastStore} from "~/src/toast/ToastStore";
import {ToastType} from "~/src/toast/ToastType";

export const useAccountStore = defineStore("account", () => {
    const username = ref("");
    const completedOnboarding = ref(false);
    const userId = ref("");
    const avatar_url = ref("");
    const location = ref("");
    const isAdmin = ref(false);
    const isBetaTester = ref(false);
    const points = ref(0);
    const instagram = ref<null|string>();
    const youtube = ref<null|string>();
    const twitter = ref<null|string>();
    const creatorType = ref<null|string>();
    const contentType = ref<null|string>();
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const toastStore = useToastStore();
    let ip: string = "";

    async function logout() {
        await supabaseClient.auth.signOut();
        username.value = "";
        avatar_url.value = "";
        points.value = 0;
        await router.push('/login');
    }

    async function get( id: string) {
        const {data} = await supabaseClient
            .from('profiles')
            .select(`username, avatar_url, points, id, completed_onboarding, is_admin, instagram, twitter, youtube, creator_type, content_type, location, beta_tester`)
            .eq('id', id)
            .single();

        if(!data) return;

        username.value = data.username;
        avatar_url.value = data.avatar_url;
        points.value = data.points;
        completedOnboarding.value = data.completed_onboarding;
        userId.value = data.id;
        isAdmin.value = data.is_admin;
        youtube.value = data.youtube;
        twitter.value = data.twitter;
        instagram.value = data.instagram;
        contentType.value = data.content_type;
        creatorType.value = data.creator_type;
        location.value = data.location;
        isBetaTester.value = data.beta_tester;

        await getIp();
    }

    async function getIp() {
        try {
            const fetchIp = await fetch('https://api.ipify.org?format=json');
            const data = await fetchIp.json();
            ip = data["ip"];
        } catch (err) {
            //do nothing
        }

    }
    async function update() {
        try {
            const updates = {
                id: userId.value,
                username: username.value,
                points: points.value,
                avatar_url: avatar_url.value,
                updated_at: new Date(),
                completed_onboarding: completedOnboarding.value,
                youtube: youtube.value,
                instagram: instagram.value,
                twitter: twitter.value,
                creator_type: creatorType.value,
                location: location.value,
                content_type: contentType.value,
                original_ip: ip
            }
            //@ts-ignore
            const {error} = await supabaseClient.from('profiles').upsert(updates, {
                returning: 'minimal',
            });
            if(error) throw error;
        } catch(e) {
            toastStore.addToast("Not all data could be saved", ToastType.WARNING)
        }
    }

    function getProfileImageSrc() {
        return `https://jrirqcnnxpbhvmuugxnl.supabase.co/storage/v1/object/public/avatars/${avatar_url.value}`;
    }

    return {username, points, avatar_url, get, update, logout, getProfileImageSrc, completedOnboarding, userId, isAdmin, youtube, twitter, instagram, location, contentType, creatorType, isBetaTester}
})