import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { App } from "@capacitor/app";
import { Clipboard } from "@capacitor/clipboard";
import React from "react";

const change = async () => {
  App.addListener("appStateChange", async ({ isActive }) => {
    console.log("App state changed. Is active?", isActive);
    const { value } = await Clipboard.read();
    alert(value);
  });
};

const Home: React.FC = () => {
  React.useEffect(() => {
    change();
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Share Demo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Share Demo</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
