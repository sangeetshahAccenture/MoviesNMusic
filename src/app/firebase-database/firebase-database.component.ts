import * as admin from "firebase-admin";
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "<PROJECT_ID>",
    clientEmail: "foo@<PROJECT_ID>.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\n<KEY>\n-----END PRIVATE KEY-----\n"
  }),
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
});