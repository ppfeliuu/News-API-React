import React, { Component } from 'react';

class Formulario extends Component {
    state = { 
        categoria: ''
     }

     cambiarCategoria = e => {
        this.setState({
            categoria: e.target.value
        })
     }

    render() { 
        return ( 
            <div className="buscador row">
                <div className="col s12 m8 offset-2">
                    <form >
                        <h2>Encuentra por categoría</h2>

                        <div className="input-field col s12 m8">
                            <select onChange={this.cambiarCategoria}>
                                <option value="general">General</option>
                                <option value="business">Business</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="health">Health</option>
                                <option value="science">Science</option>
                                <option value="sports">Sports</option>
                                <option value="technology">Technology</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default Formulario;