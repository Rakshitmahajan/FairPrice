import React from 'react';
import './style.scss';
import Test from './assets/laptop.jpeg'
import axios from 'axios';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        var url = this.props.flag === -1 ? 'http://localhost:8000/store/item/trending' : `http://localhost:8000/store/category/${this.props.flag}`
        // console.log(url);
        axios
    		.get(url)
    		.then(response => {
    			// console.log(response.data);
    			this.setState({ items: response.data });
    		})
    		.catch(error => {
    			console.log(error);
    		});
    }
    componentWillReceiveProps(props) {
        console.log('hello')
        var url = props.flag === -1 ? 'http://localhost:8000/store/item/trending' : `http://localhost:8000/store/category/${props.flag}`
        // console.log(url);
        axios
    		.get(url)
    		.then(response => {
    			// console.log(response.data);
    			this.setState({ items: response.data });
    		})
    		.catch(error => {
    			console.log(error);
    		});
    }

    render() {
        return (
            <div className="Item-body">
                {this.state.items.map((item, key) => {
                    return (<div className="card">
                        {/* <img src={`../../${item.img_url}`} alt='logo' style={{ height: '200px', width: '300px' }}></img> */}
                        <img src={Test} alt='logo' style={{ height: '200px', width: '300px' }}></img>
                        <div className="overlay">
                            <p> {item.company}{' - '}
                                {item.model}
                            </p>
                <p>{item.img_url}</p>
                            <p>{item.description}</p>
                            <p>{'price - ₹ '}{item.price}</p>
                        </div>
                    </div>)
                })}
            </div>
        );
    }
}

export default ItemList;
