import React from 'react';
import './style.scss';
import axios from 'axios';

class Category extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            catList:[]
    }
    }
    componentDidMount() {
        axios
			.get('http://localhost:8000/store/category/')
			.then(response => {
				// console.log(response.data);
				this.setState({ catList: response.data });
			})
			.catch(error => {
				console.log(error);
			});
    }
    render() {
        return (
            <div className="Category-body">
                <div>
                <h3>Caterogy</h3>
                </div>
                <div className="Category-list">
                {this.state.catList.map((item,key)=> {
                    return(<p key={key} onClick={() => { this.props.onChange(item.id) }} >{item.name}</p>)
                })}
                </div>
                
            </div>
        );
    }
}

export default Category;
