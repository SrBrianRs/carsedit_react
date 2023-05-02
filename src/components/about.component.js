import React from 'react';
import '../styles/about.css';
import Foto from '../images/foto.jpg';

function Profile() {
    return (
     
    <body>
      
      
      <main>
        <section class="profile">
          <div class="profile-header">
          <img src={Foto} alt="Foto" className="avatar" />
          <h1>Brian Sanchez Robles<br></br>S19004873</h1>
          <h1>Ingenieria de software</h1>
        
          </div>
          <div class="profile-header">
            <h4>Proyecto en el cual se suben videos a Firebase para poder acceder a ellos mediante una aplicacion web realizada en React</h4>
            
            
            
          </div>
        </section>
      </main>
      
      
    </body>
    );
}

export default Profile;