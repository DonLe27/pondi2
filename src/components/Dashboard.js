import React from 'react';
import Logout from './Logout';

class Dashboard extends React.Component {
    render() {
      return(
        <div>WELCOME TO PONDI BITCHES
          < Logout />
        </div>
        
      )
    }
}

export default Dashboard;
  
// const mapStateToProps = state => {
//     return {};
// }
  
// const mapDispatchToProps = dispatch => {
//     return {};
// }
  
// export default connect(mapStateToProps, mapDispatchToProps)(Login);