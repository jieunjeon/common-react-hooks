
export const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
      // componentDidMount
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
      return () => {
        //componentWillUnmount
        if (element.current) {
          element.current.removeEventListener("click", onClick);
        }
      };
    }, []); // no componentDidUpdate
    return element;
  };
  
  const App = () => {
    const sayHello = () => console.log("say hello");
    const title = useClick(sayHello);
  
    return (
      <div className="App">
        <h1 ref={title}>{"Hello"}</h1>
      </div>
    );
  };
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
  