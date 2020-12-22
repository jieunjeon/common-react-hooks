export const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if (!allTabs || !Array.isArray(allTabs)) {
      return;
    }
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex
    };
  };
  
const content = [
  {
    tab: "Sectoin 1",
    content: "This is the content 1"
  },
  {
    tab: "Sectoin 2",
    content: "This is the content 2"
  }
];

const App = () => {
    const { currentItem, changeItem } = useTabs(0, content);
    return (
      <div className="App">
        {content.map((section, index) => (
          <button key={index} onClick={() => changeItem(index)}>
            {section.tab}
          </button>
        ))}
        <div>{currentItem.content}</div>
      </div>
    );
  };