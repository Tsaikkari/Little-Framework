'use strict'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: false }
  }

  onChange = (e) => {
    this.setState(() => {
      return {
        selected: true
      }
    })
  }

  onClick = (e) => {
    let value = e.target.value;
    let loginGreet = G$('John', 'Doe');
    loginGreet
      .setLanguage(value)
      .HTMLGreeting('#greeting', true)
      .log()
  }

  render() {
    return (
      <div>
        <select id='lang' onChange={onChange}>
          <option value=''>Select Language</option>
          <option value='en'>English</option>
          <option value='fi'>Finnish</option>
          <option value='ge'>German</option>
        </select>
        <input type='button' onClick={onClick} value='Login' id='login' />
        <div>
        {this.state.selected && 
          <h1 id="greetings"></h1>
        }
        </div>
      </div>
    )
  }
}

const domContainer = document.querySelector('#login')
ReactDOM.render(Login, domContainer)



