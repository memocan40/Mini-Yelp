import logo from './logo.svg';
import './App.css';

function App() {
  const restaurant = [
    {name: "SoulKebab", id: 1, tag:['kebab', 'beer', 'turkish'], city:['Berlin'], img: "https://i.picsum.photos/id/292/600/500.jpg?hmac=rMEBB27JSpAEI1jAM8TtaXvQXIZmfZHZIGm3SQPLFLQ", description: "LoremIpsum  dasdasdada"},
    {name: "Italiana", id: 2, tag:['pizza', 'pasta', 'wine', "italian"], city:['Hamburg'], img: "https://i.picsum.photos/id/292/600/500.jpg?hmac=rMEBB27JSpAEI1jAM8TtaXvQXIZmfZHZIGm3SQPLFLQ", description: "LoremIpsum dadsa dad  dasd a"},
    {name: "Vegan Heaven", id: 3, tag:['vegan', 'vegetarian', 'pasta'], city:['Frankfurt'], img: "https://i.picsum.photos/id/292/600/500.jpg?hmac=rMEBB27JSpAEI1jAM8TtaXvQXIZmfZHZIGm3SQPLFLQ", description: "LoremIpsum dasd asda da da " },
    {name: "Goreng", id: 4, tag:['vegetarian', 'beer', 'indonesian'], city:['Hamburg'], img: "https://i.picsum.photos/id/292/600/500.jpg?hmac=rMEBB27JSpAEI1jAM8TtaXvQXIZmfZHZIGm3SQPLFLQ", description: "LoremIpsum da ad asd sa"},
    {name: "Auntie Helen's", id: 5, tag:['american', 'beer', 'burger', "bbq"], city:['Berlin'], img: "https://i.picsum.photos/id/292/600/500.jpg?hmac=rMEBB27JSpAEI1jAM8TtaXvQXIZmfZHZIGm3SQPLFLQ", description: "LoremIpsum das ad ada sda d"},
    {name: "Rajan", id: 6, tag:['indian', 'vegetarian', 'vegan'], city:['Linz'], img: "https://i.picsum.photos/id/292/600/500.jpg?hmac=rMEBB27JSpAEI1jAM8TtaXvQXIZmfZHZIGm3SQPLFLQ", description: "LoremIpsum dsad asd add asda "},
    {name: "FastAway", id: 7, tag:['kebab', 'beer', 'turkish', "american", "bbq", "pizza"], city:['Cologne'], img: "https://i.picsum.photos/id/292/600/500.jpg?hmac=rMEBB27JSpAEI1jAM8TtaXvQXIZmfZHZIGm3SQPLFLQk", description: "LoremIpsum dasd asd sa da"},
    {name: "Indie Burger", id: 8, tag:['burger', 'beer', 'bbq', "not-vegan"], city:['Frankfurt'], img: "https://i.picsum.photos/id/292/600/500.jpg?hmac=rMEBB27JSpAEI1jAM8TtaXvQXIZmfZHZIGm3SQPLFLQ", description: "LoremIpsum sa asd ad ad"},
    {name: "Something", id: 9, tag:['pasta', 'vegan', 'italian', "pizza"], city:['Munich'], img: "https://i.picsum.photos/id/292/600/500.jpg?hmac=rMEBB27JSpAEI1jAM8TtaXvQXIZmfZHZIGm3SQPLFLQ", description: "LoremIpsum dsad as dasd ada"},
  ];
  const tags = [
    {name: vegan, id:1},
    {name: not-vegan, id:2},
    {name: vegetarian, id:3},
    {name: indian, id:4},
    {name: bbq, id:5},
    {name: beer, id:6},
    {name: wine, id:7},
    {name: indonesian, id:8},
    {name: italian, id:9},
    {name: american, id:10},
    {name: turkish, id:10},
    {name: pizza, id:11},
    {name: pasta, id:12},
    {name: burger, id:13},
  ];
  const cities = [
    {name: Hamburg, id: 1},
    {name: Berlin, id: 2},
    {name: Munich, id: 3},
    {name: Linz, id: 4},
    {name: Cologne, id: 5},
    {name: Frankfurt, id: 6},
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
