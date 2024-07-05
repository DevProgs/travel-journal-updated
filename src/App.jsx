import Navbar from './components/Navbar';
import Location from './components/Location';
import data from './data';


// description: 'The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.';
// endDate: '18 Nov, 2021';
// googleMapsUrl: 'https://goo.gl/maps/ukAQmmJoJSPqPqP16';
// imageUrl: 'https://source.unsplash.com/3PeSjpLVtLg';
// location: 'Norway';
// startDate: '01 Oct, 2021';
// title: 'Geirangerfjord';

function App() {
  // here we are mapping the data from data.js
  const location = data.map((item, id) => {
    console.log(item)
    return <Location 
    key={id} 
    description={item.description}
    googleMapsURL={item.googleMapsUrl}
    image={item.imageUrl}
    location={item.location}
    startDate={item.startDate}
    endDate={item.endDate}
    title={item.title} />;
  });
  return (
    <div className="App">
      <Navbar />
      <section className="location-list">{location}</section>
    </div>
  );
}

export default App;
