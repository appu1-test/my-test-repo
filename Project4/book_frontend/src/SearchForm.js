import React from "react";
let search_table = undefined
class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '',
                      author: '',
                    table: props.tableData,
                allBooksTable: true};
        
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.state)
    }
    static getDerivedStateFromProps(props, state) {
        console.log(props)
         if (state.allBooksTable)
        {return{table: props.tableData}}
      }
    handleChangeName(event) {
        this.setState({name: event.target.value});
    }
    handleChangeAuthor(event) {
        this.setState({author: event.target.value});
    }


    handleSubmit(event) {
        console.log(this)
        fetch("http://localhost:5000/search?" + new URLSearchParams({
            name: this.state.name,
            author: this.state.author
        }))
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
            search_table= (
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
            console.log(this)
            // document.getElementById("data").innerHTML = "";
             this.setState({table:search_table,
                allBooksTable: false})
            //  this.forceUpdate()
        //  let div= document.getElementById('data')
        //  div.appendChild(React.createElement(table))
        })
        .catch(error => {
            console.log(error)
        })
        event.preventDefault();
    }

    render() {
         this.state.allBooksTable=true
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleChangeName} style={{"margin-right": "15px"}}  />
                </label>
                <label>
                    Author:
                    <input type="text" value={this.state.author} onChange={this.handleChangeAuthor} />
                </label>
                <br/>
                <input type="submit" value="Search" style={{"margin-top": "20px","margin-bottom": "20px"}}/>
            </form>
            <div id = "search_data"> {this.state.table} </div>
            </div>
        );
    }
}

export default SearchForm;