import React from 'react';
export default function ProfilePage() {
  return (
    <section style={{ backgroundColor: '#eee', padding: '50px 0' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-light rounded-3 p-3 mb-4">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">User</a></li>
                <li className="breadcrumb-item active" aria-current="page">User Profile</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card">
              <img src="" alt="avatar" className="card-img-top rounded-circle" style={{ width: '150px', margin: '0 auto' }} />
              <div className="card-body text-center">
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <button className="btn btn-primary me-1">Follow</button>
                  <button className="btn btn-outline-primary">Message</button>
                </div>
              </div>
            </div>

            <div className="card mt-4">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <span>https://mdbootstrap.com</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-github fa-lg" style={{ color: '#333333' }}></i>
                    <span>mdbootstrap</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }}></i>
                    <span>@mdbootstrap</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }}></i>
                    <span>mdbootstrap</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-facebook fa-lg" style={{ color: '#3b5998' }}></i>
                    <span>mdbootstrap</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Johnatan Smith</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">example@example.com</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(097) 234-5678</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(098) 765-4321</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">assignment</span> Project Status</p>
                    <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                    <div className="progress rounded mb-2">
                      <div className="progress-bar" role="progressbar" style={{ width: '80%' }}></div>
                    </div>

                    <p className="mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                    <div className="progress rounded mb-2">
                      <div className="progress-bar" role="progressbar" style={{ width: '72%' }}></div>
                    </div>

                    <p className="mb-1" style={{ fontSize: '.77rem' }}>One Page</p>
                    <div className="progress rounded mb-2">
                      <div className="progress-bar" role="progressbar" style={{ width: '89%' }}></div>
                    </div>

                    <p className="mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                    <div className="progress rounded mb-2">
                      <div className="progress-bar" role="progressbar" style={{ width: '55%' }}></div>
                    </div>

                    <p className="mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                    <div className="progress rounded mb-2">
                      <div className="progress-bar" role="progressbar" style={{ width: '66%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">assignment</span> Project Status</p>
                    <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                    <div className="progress rounded mb-2">
                      <div className="progress-bar" role="progressbar" style={{ width: '80%' }}></div>
                    </div>

                    <p className="mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                    <div className="progress rounded mb-2">
                      <div className="progress-bar" role="progressbar" style={{ width: '72%' }}></div>
                    </div>

                    <p className="mb-1" style={{ fontSize: '.77rem' }}>One Page</p>
                    <div className="progress rounded mb-2">
                      <div className="progress-bar" role="progressbar" style={{ width: '89%' }}></div>
                    </div>

                    <p className="mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                    <div className="progress rounded mb-2">
                      <div className="progress-bar" role="progressbar" style={{ width: '55%' }}></div>
                    </div>

                    <p className="mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                    <div className="progress rounded mb-2">
                      <div className="progress-bar" role="progressbar" style={{ width: '66%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
