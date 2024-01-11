import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { key, person } from 'ionicons/icons';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ingresar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <br/>
        <center>
        <img src="src\assets\images\logIn.png" alt="bear" />
        </center>
              <br/>
        <IonCard>
          <IonCardContent>
            <IonGrid fixed={true}>
            <IonRow>
              <IonIcon icon={person} size='large'/>
                <IonCol>
                  <IonInput placeholder = "Ingresa tu usuario" type="password" maxlength={20}/>
                </IonCol>
              </IonRow>
              <IonRow>
              <IonIcon icon={key} size='large'/>
                <IonCol>
                  <IonInput placeholder = "Ingresa tu contraseña" type="password" maxlength={20}/>
                </IonCol>
              </IonRow>
    </IonGrid>
    <center>
      <IonButton>Ingresar</IonButton></center>
</IonCardContent>
    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
