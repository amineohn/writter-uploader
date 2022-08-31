import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/functions";
export class Firebase {
    constructor() {
        console.log("Class Firebase initialized");
    }

    init() {
        firebase.initializeApp({
            apiKey: process.env.API_KEY,
            authDomain: process.env.AUTH_DOMAIN,
            projectId: process.env.PROJECT_ID,
            storageBucket: process.env.STORAGE_BUCKET,
            messagingSenderId: process.env.MESSAGING_SENDER_ID,
            appId: process.env.APP_ID,
            measurementId: process.env.MEASUREMENT_ID,
        });
        console.log("Initialize Firebase app(s): %d", firebase.apps.length);
    }

    user() {
        return firebase.auth().currentUser;
    }

    firebase() {
        return firebase;
    }

    database() {
        return firebase.database();
    }

    functions() {
        return firebase.functions();
    }

    collection(collection: string) {
        return firebase.firestore().collection(collection);
    }
    collectionId(collection: string) {
        return this.collection(collection).doc().id;
    }

    id() {
        return this.user()?.uid;
    }

    async snapshot(collection: string, documentPath: string) {
        return await this.collection(collection)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.id === documentPath) {
                        return doc.data();
                    }
                });
            })
            .then((data) => data)
            .catch((error) => console.log("Error getting documents: ", error));
    }

    async update(collection: string, documentPath: string, data: any) {
        const collectionRef = this.collection(collection);
        const documentRef = collectionRef.doc(documentPath);
        await documentRef.update(data);
    }

    async create(collection: string, data: any) {
        const collectionRef = this.collection(collection);
        await collectionRef.add(data);
    }

    async delete(collection: string, documentPath: string) {
        const collectionRef = this.collection(collection);

        const documentRef = collectionRef.doc(documentPath);
        await documentRef.delete();
    }
}
