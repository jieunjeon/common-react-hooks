export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
      // we are handling an event from a function, not a component.
      // This will make it possible to handle events in separate files, hooking them into a different entity.
      console.log(event.target);
      const {
        target: { value }
      } = event;
      let willUpdate = true;
      if (typeof validator === "function") {
        willUpdate = validator(value);
      }
      if (willUpdate) {
        setValue(value);
      }
    };
    return { value, onChange };
  };

  const AppUseInput = () => {
    const maxLenValidate = (value) => value.length <= 10;
    const name = useInput("Ms. ", maxLenValidate);
    return (
      <div className="App">
        <h1>Hello</h1>
        <input placeholder="Name" value={name.value} onChange={name.onChange} />
      </div>
    );
  };