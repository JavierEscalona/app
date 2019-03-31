import React, {Component} from 'react'

export default class Ordenar extends React.Component {
  constructor (args) {
    super(args);
    this.state = {
      loading: false
    }
    this.changeLoading = this.changeLoading.bind(this)
  }
  changeLoading () {
    this.setState((prevState, props)=>({
      loading: !prevState.loading
    }))
  }

  render () {
    var contenido
    console.log(this.props.user)
    if (this.state.loading) {
      contenido = <span> esta cargando</span>
    } else {
      contenido = <span>No esta cargando</span>
    }
    return (
      <div>

        {contenido}
        <button content='CambiarEstado' onClick={this.changeLoading} >Ordenar</button>
      </div>
    )
  }
}
