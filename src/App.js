
import './App.css';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;