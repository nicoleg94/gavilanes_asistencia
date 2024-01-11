import { IonButton, IonCard, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registrarme</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <br/>
        <center>
        <img src="src\assets\images\register.png" alt="cat"/>
        </center>
        <br/>
        <IonCard className='registerForm'>
        <IonInput label='Nombres' placeholder = "Juana María"/>
        <IonInput label='Apellidos' placeholder = "Perez López"/>
        <IonInput label='Correo electrónico' placeholder = "juana.perez@email.com" type='email'/>
        <IonInput label='Cédula' placeholder = "1111111111" type='number' maxlength={10}/>
        <IonInput label='Teléfono' placeholder = "0999999999" type='number' maxlength={10}/>
        <center><IonButton className='butRegister'>Registrarme</IonButton></center>
        </IonCard> 
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
