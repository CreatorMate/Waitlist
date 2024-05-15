//@ts-ignore
import {defineStore} from "pinia";

export const useAccountStore = defineStore("account", () => {
    const username = ref("");
    const avatar_url = ref("");
    const points = ref(0);
    const supabaseClient = useSupabaseClient();
    const router = useRouter();

    async function logout() {
        await supabaseClient.auth.signOut();
        username.value = "";
        avatar_url.value = "";
        points.value = 0;
        await router.push('/login');
    }

    async function get( userId: string) {
        const {data} = await supabaseClient
            .from('profiles')
            .select(`username, avatar_url, points`)
            .eq('id', userId)
            .single();

        if(!data) return;

        username.value = data.username;
        avatar_url.value = data.avatar_url;
        points.value = data.points;
    }

    async function update( id: string) {
        try {
            const updates = {
                id: id,
                username: username.value,
                points: points.value,
                avatar_url: avatar_url.value,
                updated_at: new Date(),
            }
            //@ts-ignore
            const {error} = await supabaseClient.from('profiles').upsert(updates, {
                returning: 'minimal',
            });

            if(error) throw error;
        } catch(e) {
            alert(e)
        }
    }

    return {username, points, avatar_url, get, update, logout}
})