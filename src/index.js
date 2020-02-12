import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


// media-queries.css line 150 take away the "display:none"






















/*

<Modal 
    visible={modal && modal.title ? true : false}
    width="600px"
    height="400px"
    effect="fadeInUp"
    onClickAway={() => this.setState({modal:{}})}>
    <div className="portfolio-modal">
        <div>
        <h1>{modal.title}</h1>
        <p>{modal.fullDescription}</p>
        <div>
            <a href={modal.githubLink} target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i>&nbsp;Github Link</a>
        </div>
        </div>
        <div className="modal-footer">
        <button onClick={() => this.setState({modal:{}})}>Close</button>
        </div>
    </div>
</Modal>


.portfolio-modal{
  padding:20px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.modal-footer{
  text-align: center;
}
.modal-footer button{
  width:100px;
}

*/