import React from 'react'
import '../css/Navigation.css'
function Navigation() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent nav-clr">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="https://mega00.blob.core.windows.net/projectimages/login-The-infinity-world-logo.png" width="200" alt="" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ms-auto  me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="px-4 nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class='nav-item dropdown'>
                <a class="px-4 nav-link" href='#'>Consoles</a>
                <div class='mega-menu'>
                  <div class="container">
                    <div class="item">
                      <h3>Playstation</h3>
                      <a href="#"><img src="https://mega00.blob.core.windows.net/projectimages/login-ps.png" /></a>
                    </div>
                    
                  
                    <div class="item">
                      <h3>Xbox</h3>
                      <a href="#"><img src="https://mega00.blob.core.windows.net/projectimages/login-xbox.png" /></a>
                    </div>
                  </div>
                </div>
              </li>
              <li class='nav-item dropdown'>
                <a class="px-4 nav-link" href='#'>Games</a>
                <div class='mega-menu'>
                  <div class="container">
                    <div class="item">
                        <h3>Playstation</h3>
                        <a href="#"><img src="https://mega00.blob.core.windows.net/projectimages/login-ps.png" /></a>
                    </div>
                    
                    <div class="item">
                        <h3>Xbox</h3>
                        <a href="#"><img src="https://mega00.blob.core.windows.net/projectimages/login-xbox.png" /></a>
                    </div> 
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a class="px-4 nav-link" href="#">Team</a>
              </li>
            </ul>
            <span>
              <a href="#"><img src="https://mega00.blob.core.windows.net/projectimages/login-user.png" width="30" height="30" alt="" /></a>
              <a href="#"><img class="mx-4 me-5 " src="https://mega00.blob.core.windows.net/projectimages/login-shopping-cart.png" width="30" height="30" alt="" /></a>
            </span>
          </div>
        </div>
      </nav>
            
        
    )
}

export default Navigation
