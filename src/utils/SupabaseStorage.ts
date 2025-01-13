export function getSupabaseImage(bucket: string, image: string, width: number = 700, height: number =  700) {
    const supabase = useSupabaseClient();
    const {data} = supabase.storage.from(bucket).getPublicUrl(image,
        {
            transform:
                {
                    width: width,
                    height: height
                }
        });

    return data.publicUrl;
}