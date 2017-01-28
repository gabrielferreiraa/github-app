'use strict';

import React, { Component } from 'react';

class Timer extends Component {
  constructor () {
    super();
    this.state = {
      time: 0
    };

    this.timer;
  }

  /* O componente recebeu novas propriedades */
  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps', this.props, nextProps);
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate', this.state, nextState);
    return this.state.time !== nextState.time;
  }

  /* O componente vai atualizar */
  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate', this.props, nextProps);
  }

  /* Após execução com propriedade atual e anterior */
  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate', this.props, prevProps);
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      });
    }, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  render () {
    return (
      <div>
        Timer: {this.state.time}
      </div>
    );
  }
}

export default Timer;
