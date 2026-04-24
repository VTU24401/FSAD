import { IonApp, IonContent, IonPage, IonButton } from '@ionic/react';
import { useState } from 'react';
import "./pages/Home.css";

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter username and password');
    } else {
      alert(`Welcome ${username}! App is working successfully.`);
    }
  };

  return (
    <IonApp>
      <IonPage>
        <IonContent fullscreen>
          <div className="container">
            <div className="phone-frame">
              <div className="phone-notch"></div>

              <div className="app-screen">
                <div className="top-section">
                  <h1>Student Login</h1>
                  <p>Web to Mobile App Demo</p>
                </div>

                <div className="login-card">
                  <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
 />

                  <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <IonButton expand="block" onClick={handleLogin}>
                    Login
                  </IonButton>
                </div>
              </div>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default App;