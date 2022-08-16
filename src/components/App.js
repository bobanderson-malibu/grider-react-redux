import Accordion from "./Accordion";
import Search from "./Search";

const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend javascript framework'
    },
    {   
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do use React?',
        content: 'You use React by creating components'
    }
];

const App = () => {
    return (
        <div>
            {/* <Accordion items={items}/> */}
            <Search />
        </div>
    );
};

export default App;