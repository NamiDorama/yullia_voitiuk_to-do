import './form.scss';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.fields = [
      {
        label: 'email',
        reg: /^\w+@\w+\.[a-z]{2,}$/
      },
      {
        label: 'first name',
        reg: /^[^ ]{3,20}$/
      },
      {
        label: 'last name',
        reg: /^[^ ]{3,20}$/
      },
      {
        label: 'password',
        reg: /^[^ ]{6,20}$/,
        secure: true
      },
      {
        label: 'repeat password',
        reg: /^[^ ]{6,20}$/,
        secure: true
      }
    ];
    this.state = {
      error: ''
    };
    this.fields.forEach(field => (this.state[field.label] = { value: '' }));
  }

  changeInput = ({ target }) => {
    this.setState({ [target.name]: { value: target.value } });
  };

  validate = (index) => {
    const field = this.fields[index];
    let stateField = this.state[field.label];

    if (field.reg.test(stateField.value)) {
      stateField.error = '';
    } else {
      stateField.error = `${field.label} is invalid`;
    }

    this.setState({
      [field.label]: stateField
    });
  };

  getDisabledState() {
    return this.fields.some(({ label }) => {
      const { value, error } = this.state[label];
      return !value || error;
    });
  }

  save = (event) => {
    const { state } = this;
    let error = '';

    event.preventDefault();

    if (state['password'].value !== state['repeat password'].value) {
      error = 'Passwords should be the same'
    }

    this.setState({ error });

    if (error) return;

    console.log(this.state);
  };

  render() {
    const { state, fields } = this;
    const { excluded = [], disabled = [] } = this.props;

    return (
      <div className="form-block">
        <h3>This is Form</h3>
        <form className="form">
          {
            fields
              .filter(({ label }) => !excluded.includes(label))
              .map(({ label, secure }, index) => {
              const stateField = state[label];

              return (
                <div key={label}>
                  <input
                    type={secure ? 'password' : 'text'}
                    name={label}
                    className={stateField.error ? 'error' : 'correct'}
                    placeholder={label.toUpperCase()}
                    value={stateField.value}
                    onChange={this.changeInput}
                    onBlur={() => this.validate(index)}
                    disabled={disabled.includes(label)}
                  />
                  {stateField.error && <span>{stateField.error}</span>}
                </div>
              );
            })
          }
          {
            state.error && <span>{state.error}</span>
          }
          <button
            type="submit"
            disabled={this.getDisabledState()}
            onClick={this.save}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
