import React, { Component } from 'react';


// const increament = ( state, props ) => {
//   const { max, step } = props; 
//   if(state.count >= max) return;
//   return { count: state.count + step};
// }

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');
  if(storage)
    return JSON.parse(storage);
  
  return { count: 0 };
}

function storeStateInLocalStorage () {
  
  localStorage.setItem('counterState', JSON.stringify(this.state));
}

const changeTitle = () => {

}

class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = getStateFromLocalStorage();
    // this.state = {
    //   count: 0,
    // };

    this.increament = this.increament.bind(this);
    this.decrement = this.decrement.bind(this);
    this.updateDocumentTitle = this.updateDocumentTitle.bind(this);
    this.reset = this.reset.bind(this);
  }

  updateDocumentTitle() {
    document.title = this.state.count;
  }

  increament() {
    
    // this.setState(increament);
    this.setState(( state, props ) => {
      const { max, step } = props; 
      if(state.count >= max) return;
      return { count: state.count + step}},
      // this callback will execute after state updated
      // this function not accept state or props as arguments
      // () => {
        // storeStateInLocalStorage.bind(this);
        this.updateDocumentTitle,
        // document.title = `Count : ${this.state.count}`;
      // }
      );
  }
  
  decrement() {
    this.setState({ count: this.state.count - 1 }, this.updateDocumentTitle);
    // this.setState(({ count }) =>{ return {count: count - 1}});
    // this.setState(({ count }) =>{ return {count: count - 1}});
  }

  reset() {
    this.setState({ count: 0}, this.updateDocumentTitle);
  }

  componentDidUpdate() {
    setTimeout(() => {
      console.log(`Count: ${this.state.count}`);
    }, 3000);
  }

  render() {
    const { count } = this.state;
    return (
      <div className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick= {this.increament}>Increment</button>
          <button onClick= {this.decrement}>Decrement</button>
          <button onClick= {this.reset}>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;
