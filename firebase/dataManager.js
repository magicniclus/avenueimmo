// user.js
import { slugify } from "../lib/utils";
import { app } from "./firebase.config";
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  push,
  remove,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";
import { v4 as uuidv4 } from "uuid";

// Obtenez une référence à la base de données de Firebase
const db = getDatabase(app);

// Fonction pour vérifier si un slug existe déjà dans la base de données
export const slugExists = async (slug) => {
  const slugRef = ref(db, `slugs/${slug}`);
  const snap = await get(slugRef);
  return snap.exists();
};

// Fonction pour générer un slug unique
const generateUniqueSlug = async (baseSlug) => {
  let newSlug = baseSlug;
  let exists = await slugExists(newSlug);
  while (exists) {
    newSlug = `${baseSlug}-${uuidv4().slice(0, 8)}`; // Utilise les 8 premiers caractères de l'UUID
    exists = await slugExists(newSlug);
  }
  return newSlug;
};

// Fonction pour créer un nouvel utilisateur dans la base de données Firebase.
// Elle prend comme paramètres un ID utilisateur (uid), une adresse email, un prénom et un nom de famille.
// Elle crée ensuite une nouvelle référence utilisateur dans la base de données avec ces informations,
// plus quelques autres champs par défaut.
export const createNewUser = async (uid, email, firstName, lastName) => {
  let generatedSlug = slugify(firstName + " " + lastName);
  let uniqueSlugFound = false;

  while (!uniqueSlugFound) {
    const exists = await slugExists(generatedSlug);

    if (exists) {
      console.log("Le slug existe déjà, création d'un slug unique...");
      generatedSlug = await generateUniqueSlug(generatedSlug);
    } else {
      uniqueSlugFound = true;
    }
  }

  console.log(`Le slug utilisé est: ${generatedSlug}`);

  const userRef = ref(db, `users/${uid}`);
  await set(userRef, {
    userInformation: {
      email: email,
      createdAt: new Date().toISOString(),
      firstName: firstName || null,
      lastName: lastName || null,
      phone: "0631420045",
    },
    settings: {
      fontColor: "#374151",
      fontColor2: "#3B82F6",
      backgroundColor: "#ffffff",
      slug: generatedSlug,
      name: firstName + " " + lastName,
      entreprise: "SAFTI",
      title: "Estimez votre bien en ligne gratuitement.",
      description:
        "Nos estimations sont réalisées grâce aux caractéristiques de votre bien immobilier et du marché local en temps réel",
      description2:
        "Nos estimations sont réalisées grâce aux caractéristiques.",
    },
    plan: {
      name: "Free",
      price: 0,
      features: {},
      subscribeAt: new Date().toISOString(),
      expireAt: new Date().toISOString() + 30,
    },
    estimations: {},
  });

  const slugRef = ref(db, `slugs/${generatedSlug}`);
  await set(slugRef, { userId: uid });
};

export const addSlug = async (slug, userId) => {
  console.log("one");
  try {
    console.log("two");
    const slugRef = ref(db, `slugs/${slug}`);
    await set(slugRef, { userId: userId });
  } catch (error) {
    console.error("Erreur lors de l'ajout du slug: ", error);
  }
};

export const deletePrevSlug = async (prevSlug) => {
  const slugRef = ref(db, `slugs/${prevSlug}`);
  console.log("Deleting slug:", prevSlug);
  try {
    await remove(slugRef);
    console.log(`Deleted slug ${prevSlug} successfully.`);
  } catch (error) {
    console.error("Failed to delete slug: ", error);
  }
};

// Fonction pour récupérer les informations d'un utilisateur connecté.
// Elle prend un ID utilisateur (uid) comme paramètre et tente d'obtenir les informations de cet utilisateur
// à partir de la base de données Firebase.
export const getLoggedInUserData = async (uid) => {
  const userRef = ref(db, `users/${uid}`);
  try {
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available for logged-in user id: ", uid);
      return null;
    }
  } catch (error) {
    console.error("Failed to retrieve logged-in user data: ", error);
    return null;
  }
};

// Voir les données utilisateur par le slug
export const getUserDataBySlug = async (slug) => {
  const usersRef = ref(db, "users");
  const userQuery = query(
    usersRef,
    orderByChild("settings/slug"),
    equalTo(slug)
  );

  try {
    const snapshot = await get(userQuery);
    if (snapshot.exists()) {
      let userData = null;
      let userKey = null;

      snapshot.forEach((childSnapshot) => {
        userData = childSnapshot.val();
        userKey = childSnapshot.key;
      });

      return { ...userData, uid: userKey };
    } else {
      console.log("No data available for slug: ", slug);
      return null;
    }
  } catch (error) {
    console.error("Failed to retrieve user data by slug: ", error);
    return null;
  }
};

// Fonction pour mettre à jour les données d'un utilisateur dans la base de données Firebase.
// Elle prend un ID utilisateur (uid) et un objet de mises à jour comme paramètres,
// puis tente de mettre à jour les informations de cet utilisateur avec les mises à jour fournies.
//updateUserData(uid, { userInformation: { firstName: "newFirstName", lastName: "newLastName" } });
export const updateUserData = async (uid, updates) => {
  const userRef = ref(db, `users/${uid}`);
  console.log("UID:", uid);
  console.log("Updates:", updates);
  try {
    console.log("Before updating...");
    await update(userRef, updates);
    console.log("After updating...");
    console.log(`Updated user ${uid} data successfully.`);
  } catch (error) {
    console.error("Failed to update user data: ", error);
  }
};

export const updateUserDataSettings = async (uid, updates) => {
  const userRef = ref(db, `users/${uid}`);
  try {
    await update(userRef, updates);
    console.log(`Updated user ${uid} data successfully.`);
  } catch (error) {
    console.error("Failed to update user data: ", error);
  }
};

// Fonction pour creer l'url de l'utilisateur
export async function findUserIdBySlug(slug) {
  const snapshot = await get(ref(db, `users/`));
  const usersData = snapshot.val();

  for (let userId in usersData) {
    if (
      usersData[userId].settings &&
      usersData[userId].settings.slug === slug
    ) {
      return userId;
    }
  }
  return null;
}

// Fonction pour ajouter une nouvelle estimation pour un utilisateur.
// Cette fonction prend comme paramètres un ID utilisateur (uid) et les données d'estimation.
// Fonction pour ajouter une nouvelle estimation pour un utilisateur.
export const addEstimation = async (estimationData) => {
  const estimationsRef = ref(db, `estimations`);

  try {
    const newEstimationRef = push(estimationsRef); // Ceci crée une nouvelle référence avec un ID unique
    await set(newEstimationRef, estimationData); // Sauvegardez les données d'estimation avec cet ID unique
    console.log(`Added new estimation successfully.`);
  } catch (error) {
    console.error("Failed to add new estimation: ", error);
  }
};

export const addEntrepriseProspect = async (data) => {
  const estimationsRef = ref(db, `entrepriseProspect`);

  try {
    const newEstimationRef = push(estimationsRef); // Ceci crée une nouvelle référence avec un ID unique
    await set(newEstimationRef, data); // Sauvegardez les données d'estimation avec cet ID unique
    console.log(`Added new entreprise successfully.`);
  } catch (error) {
    console.error("Failed to add new entreprise: ", error);
  }
};

export const setEstimation = async (estimationData) => {
  // Pointez simplement vers la racine 'estimations' sans ID ou autre
  const estimationsRef = ref(db, "estimations");

  try {
    const newEstimationRef = push(estimationsRef);
    await set(newEstimationRef, estimationData);
    console.log(`Added new estimation successfully.`);
  } catch (error) {
    console.error("Failed to add new estimation: ", error);
  }
};

export const setNewsletter = async (email) => {
  const newslettersRef = ref(db, "newsletters");

  try {
    const newEmailRef = push(newslettersRef);
    await set(newEmailRef, { email: email, date: new Date().toISOString() });
    console.log(`Added email to the newsletter.`);
  } catch (error) {
    console.error("Failed to add to newsletter: ", error);
  }
};

export const storePageView = async (pageName) => {
  // Obtenir la date et l'heure actuelles
  const now = new Date();

  // Convertir au format français
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
    hour12: false,
  };
  const formattedDate = new Intl.DateTimeFormat("fr-FR", options).format(now);

  // Préparer les données à stocker
  const pageViewData = {
    pageName: pageName,
    timestamp: formattedDate,
  };

  // Stocker dans Firebase
  const pageViewsRef = ref(db, "pageViews");
  try {
    const newPageViewRef = push(pageViewsRef);
    await set(newPageViewRef, pageViewData);
    console.log(`Page view for ${pageName} stored successfully.`);
  } catch (error) {
    console.error("Failed to store page view: ", error);
  }
};

export const storeFirebaseError = async (error, pageName) => {
  // Obtenir la date et l'heure actuelles
  const now = new Date();

  // Convertir au format français
  const optionsDate = { year: "numeric", month: "long", day: "numeric" };
  const optionsTime = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const formattedDate = `${new Intl.DateTimeFormat("fr-FR", optionsDate).format(
    now
  )} à ${new Intl.DateTimeFormat("fr-FR", optionsTime).format(now)}`;

  // Préparer les données d'erreur à stocker
  const errorData = {
    pageName: pageName,
    errorMessage: error.toString(),
    timestamp: formattedDate,
  };

  // Stocker l'erreur dans Firebase
  const errorsRef = ref(db, "firebase_errors");
  try {
    const newErrorRef = push(errorsRef);
    await set(newErrorRef, errorData);
    console.log(`Erreur pour ${pageName} stockée avec succès.`);
  } catch (storeError) {
    console.error("Échec de stockage de l'erreur: ", storeError);
  }
};

// Fonction pour ajouter un nouveau contact dans la base de données Firebase
export const addNewContact = async (contactData) => {
  const contactsRef = ref(db, "contacts"); // Référence au dossier 'contacts' dans la base de données

  try {
    const newContactRef = push(contactsRef); // Crée une nouvelle référence avec un ID unique généré par Firebase
    await set(newContactRef, contactData); // Enregistre les données de contact à cette nouvelle référence
    console.log(`New contact added successfully.`);
  } catch (error) {
    console.error("Failed to add new contact: ", error);
  }
};
