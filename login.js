'use strict'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: false }
  }

  onChange = (e) => {
    let value = e.target.value;
    if (this.state.selected) {
      loginGreet
        .setLanguage(value)
        // TODO: change this, this is jQuery :)) Add react equalent to Greet.js
        .HTMLGreeting('#greeting', true)
        .log()
    }
  }

  render() {
    return (
      <div>
        <select id='lang' onChange={this.setState({ selected: true })}>
          <option value=''>Select Language</option>
          <option value='en'>English</option>
          <option value='fi'>Finnish</option>
          <option value='ge'>German</option>
        </select>
        <input type='button' value='Login' id='login' />
      </div>
    )
  }
}

const domContainer = document.querySelector('#login')
ReactDOM.render(Login, domContainer)
