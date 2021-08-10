import React from 'react'

const Users = ({loading,users}) => {
    return loading ? (   
          <div id="main">
            <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="Loading.." className="loader"/>
            <h1>Welcome to LGM(VIP)</h1>
            <h3>Click "GET USERS" to view users</h3>
          </div>
        ) : 
        (
          <div id="main">
    
          {users.map(user =>
                      <div className="project column3">
                        {
                          console.log(user)
                        }
                        <div className="profile">
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">{user.email}</p>
                          <p>User ID: {user.id}</p>
                        </div>
                      </div>
                    )
          }
            <div className="footer">
              <h5>Designed by:Arijit Mukherjee</h5>
            </div>
        </div>
        )
}

export default Users;