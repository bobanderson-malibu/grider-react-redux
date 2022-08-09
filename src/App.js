//import logo from './logo.svg';
import './App.css';
import CommentDetail from './CommentDetail';
import {faker} from '@faker-js/faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author="Sam" 
        timeAgo="Today at 4:45PM" 
        avatar={faker.image.avatar()}
        content="Awesome post, bruh!"
        ></CommentDetail>
      <CommentDetail 
        author="Alex" 
        timeAgo="Today at 2:00AM"
        avatar={faker.image.avatar()}
        content="Kool post, dood!"
        ></CommentDetail>
      <CommentDetail 
        author="Jane" 
        timeAgo="Yesterday at 5:00PM"
        avatar={faker.image.avatar()}
        content="Lovely article, sista!"
        ></CommentDetail>
    </div>
  );
}

export default App;
