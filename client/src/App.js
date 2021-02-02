import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class myComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    fetch(config.apiBaseUrl + '/courses')
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data);
          this.setState({ courses: data });
        })
  }
  render() {
    const { courses } = this.state;

    return (<ul>
      {courses.map(course => (
          <li key={course.id}>
            {course.title}
          </li>
      ))}
    </ul>)
  }
}


export default () => (
    <Router>
      <div>
        <HeaderWithContext />

        <Switch>
          <Route exact path="/" component={myComponent} />
        </Switch>
      </div>
    </Router>
);

