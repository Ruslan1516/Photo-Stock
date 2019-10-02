import React, {Component} from 'react';
import './History.css';
import HistoryComp from '../History/HistoryComp';



class History extends Component {
    state = {
        arrSearch: []
    };

    componentDidMount() {
        const arrResults = localStorage.getItem('results');
        if (arrResults) {
            this.setState({arrSearch: JSON.parse(arrResults)});
        }
    }

    render() {
        return (
            <div className="HistoryInquiries">
                <h1>Ваши запросы</h1>
                <div className='allInquiries'>
                    {this.state.arrSearch.map((elem, index) => (
                        <HistoryComp key={index} text={elem}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default History;