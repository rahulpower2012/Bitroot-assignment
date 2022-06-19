import logo from './logo.svg';
import './App.scss';
import React, {useState, useEffect} from 'react';
import Modal from './components/Modal/Modal';


function getDate(timestamp){
  return (Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(timestamp));
}

function App() {

  const [data, setData] = useState([]);
  const [modalShow, setmodalShow] = useState(false);
  const [currentId, setcurrentId] = useState({});

  useEffect(() => {
    const url = "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts";

    const getData = async () => {
      try{
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      }catch(error){
        console.log(error);
      }
    };

    getData();
  }, []);

  const openModal = async (data)=>{
      setcurrentId(data);
      setmodalShow(true);
  }





  return (
    <div className="App">
      {modalShow && <Modal setModal={setmodalShow} modalData={currentId} currentData={setcurrentId}/>}
        <div className="cards">
        {data.map((animal) => (
          <div className='container' >
          <div className='card'>
              <div className="image-container">
                <div className="overlay">
                  <span onClick={()=>{
                    openModal(animal);
                  }}>
                    Learn more
                    </span>
                </div>
                <img src={animal.thumbnail.small} alt={animal.title}/>
              </div>
              <br/>
              <div className='card-content'>
              <span class="dot teal"></span><span class="dot yellow"></span>
              <h4>{animal.title}</h4>
              <p>{animal.content}</p>
              <div className="extradata">
                <span className="name">{animal.author.name} - {animal.author.role}</span>
                <span className="date">{getDate(animal.date)}</span>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
