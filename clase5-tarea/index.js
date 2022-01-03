class Mascoteria  {

    constructor ( nombreCliente, producto, medioPago, saldo ) {

        this.nombreCliente = nombreCliente;
        this.producto      = producto;
        this.medioPago     = medioPago;
        this.saldo         = saldo;
    }  

    recargaTuSaldo ( recarga ) {
        this.saldo = this.saldo + recarga;
    }

    pagoProducto ( valorProducto ) {
        if (( this.saldo > 0 ) && (valorProducto < this.saldo )) {

            this.saldo = this.saldo - valorProducto;
        }
    }

}

const mascotaUno = new Mascoteria('Moscu', 'Shampoo', 'efectivo', 1000);
mascotaUno.pagoProducto(500);
mascotaUno.recargaTuSaldo(400);

console.log( mascotaUno );
