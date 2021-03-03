'use strict'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: false, value: '' }
  }

  onChange = (e) => {
    let val = e.target.value;
    this.setState(() => {
      return {
        selected: true,
        value: val
      }
    })
  }

  onClick = () => {
    let loginGreet = G$('John', 'Doe');
    loginGreet
      .setLanguage(this.state.value)
      .HTMLOrJSXGreeting('#greetings', false)
      .log()
  }

  render() {
    return (
      <div>
        <h1>login using react ↓ :))</h1>
        <select id='lang' onChange={this.onChange}>
          <option value='en'>English</option>
          <option value='fi'>Finnish</option>
          <option value='ge'>German</option>
        </select>
        <input type='button' value="Login" onClick={this.onClick}></input>
        <div>
        {this.state.selected && 
          <h1 id="greetings"></h1>
        }
        </div>
      </div>
    )
  }
}

const domContainer = document.querySelector('#logging')
ReactDOM.render(<Login />, domContainer)



