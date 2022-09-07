import React from 'react'

function Login() {
  


  return (
    <div className="login">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="card">
            <div className="card-header">Login</div>
              <div className="card-body">
                <form>
                  <div className="row mb-3">
                    <label for="email" className="col-md-4 col-form-label text-md-right">Email Address</label>
                  </div>

                  <input 
                    id="email"
                    type="email"
                    class="form-control @error('email') is-invalid @enderror" 
                    name="email" 
                    value="" 
                    required 
                    autocomplete="email" 
                    autofocus 
                  />

                  <div class="row mb-3">
                  <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                  </div>

                  <input
                    id="password"
                    type="password"
                    class="form-control @error('password') is-invalid @enderror" 
                    name="password" 
                    required 
                    autocomplete="current-password" 
                  />

                  <div class="row mb-3">
                    <div class="loginBtn">
                    <button type="submit" class="btn btn-primary">
                      Login
                    </button>

                    </div>
                  </div>

                </form>
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
