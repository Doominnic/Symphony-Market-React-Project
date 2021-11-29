import React from 'react'

const maestroVenta = () => {
    return (
        <div>
            <table class="table table-hover">
            <thead>
                <tr>
                    <th><h2>Maestro de ventas</h2></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Cliente<br/>
                        <input class="form-control" list="browsers" name="browser" id="browser"/>
                        <datalist id="browsers">
                            <option value="Juan"/>
                            <option value="Luis"/>
                            <option value="Maria"/>
                            <option value="Pedro"/>
                        </datalist>    
                        <button type="submit" class="btn btn-primary mt-3">Seleccionar Cliente</button>
                    </td>
                    <td>
                        Direccion: Calle abc<br/>Celular: 555-55-55<br/>Correo: john@example.com
                    </td>
                    <td>
                        <div class="container mt-3">
                            <h2>Venta</h2>
                            <form action="/action_page.php">
                                <div class="mb-3 mt-3">
                                    <label for="email">Fecha:</label>
                                    <input type="date" class="form-control" id="fecha" placeholder="Enter fecha" name="fecha"/>
                                </div>
                                <div class="mb-3">
                                    <label for="pwd">Numero Venta:</label>
                                    <input type="input" disabled="" class="form-control" id="idVenta" value="RE-001" placeholder="Enter" name="idVenta"/>
                                </div>
                            </form>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>Referencia</th>
                    <th>Nombre</th>
                    <th>Valor unitario</th>
                    <th>Cantida</th>
                    <th>Subtotal</th>
                </tr>
                <tr>
                    <td>7672</td>
                    <td>Guitarra</td>
                    <td>350.000</td>
                    <td>1</td>
                    <td>350.000</td>
                </tr>
                <tr>
                    <td>6872</td>
                    <td>Violin</td>
                    <td>400.000</td>
                    <td>2</td>
                    <td>800.000</td>
                </tr>
                <tr>
                    <td colspan="3"></td>
                    <td colspan="2"></td>
                    <table border="1">
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>$1.100.000</td>
                                    </tr>
                                    <tr>
                                        <td>Descuente</td>
                                        <td>$0</td>
                                    </tr>
                                    <tr>
                                        <td>Iva</td>
                                        <td>$0</td>
                                    </tr>                <tr>
                                        <td>Total</td>
                                        <td>$1.100.000</td>
                                    </tr>
                                </table>

                            </td>
                        </tr>
                    </table>
                 </tr>
                </tbody>
            </table>
        </div>
    )
}

export default maestroVenta
