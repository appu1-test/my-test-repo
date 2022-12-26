import React from "react";
let table = undefined
class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '',
                      author: ''};

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }
    handleChangeAuthor(event) {
        this.setState({author: event.target.value});
    }


    handleSubmit(event) {
        console.log(this)
        fetch("book/search?" + new URLSearchParams({
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
            console.log(this)
            // document.getElementById("data").innerHTML = "";
             this.forceUpdate()
        //  let div= document.getElementById('data')
        //  div.appendChild(React.createElement(table))
        })
        .catch(error => {
            console.log(error)
        })
        event.preventDefault();
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleChangeName} />
                </label>
                <label>
                    Author:
                    <input type="text" value={this.state.author} onChange={this.handleChangeAuthor} />
                </label>
                <input type="submit" value="Search" />
            </form>
            <div id = "search_data"> {table} </div>
            </div>
        );
    }
}

export default SearchForm;