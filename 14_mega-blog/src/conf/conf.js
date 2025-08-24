const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_BUCKET_ID),
}

export default conf

// It’s not possible to write everywhere(i.g..  in App.jsx) (import.meta.env---) because 
// it might happen that this environment variable does not get loaded, 
// and in that case, the whole application could crash.
// and also environment variables should all be in strings.
 