// import logo from './logo.svg';
import './App.css';
import React from "react"; 
import SearchForm from './SearchForm'
let table=undefined
class App extends React.Component {
  clickme(that){
    fetch("http://3.73.154.202")
    .then(response => {
      if (!response.ok){
        alert ("Could not fetch data") 
      }
      else {
        return response.json()
      }
    })
    .then(data => {
      console.log(data)
      table= (
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Category</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e) => {
          return (<tr>
            <td>{e.name}</td>
            <td>{e.author}</td>
            <td>{e.category}</td>
            <td><img src = {e.image} alt= {e.name}></img></td>
          </tr>)
        })}
      </tbody>
      </table>
     )
     console.log(that)
    //  document.getElementById("search_data").innerHTML = "";
     that.forceUpdate()
    //  let div= document.getElementById('data')
    //  div.appendChild(React.createElement(table))
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  render() {
    var tableStyle = {
       "border": "1px solid black",
       "borderCollapse": "collapse"
    }
    return(
      <div>
        <style>{`
          table,th,td{
           border: 1px solid black;
           border-collapse: collapse;
          }
        `}</style>
        <h1>Book Library</h1>
        <button onClick={() => this.clickme(this)}>All Books</button>
        <SearchForm></SearchForm>
        <div id = 'data'>
          {table}
        </div>
      </div>  
    );
  }
}

// const TableHeader = () => { ... }
// const TableBody = () => { ... }
// class Table extends Component {
//   render() {
//     return (
//       <table>
//         <TableHeader />
//         <TableBody />
//       </table>
//     )
//   }
// }

export default App;
