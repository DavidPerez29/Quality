class Credito{

    constructor(monto,tasaAnual,plazoMeses){
        this.monto = monto;
        this.tasaAnual = tasaAnual
        this.plazoMeses = plazoMeses;
    }

}

//Tasa al 12%
function Credito_libre_inversion(monto,plazoMeses){
    const tasaMensual = 12 / 100 / 12;
    const cuotaMensual = (monto * tasaMensual * Math.pow(1 + tasaMensual, plazoMeses)) / (Math.pow(1 + tasaMensual, plazoMeses) - 1); 
    return cuotaMensual;

}

//tasa al 10%
function Credito_Hipotecario(monto,plazoMeses)){
    const tasaMensual = 10 / 100 / 12;
    const cuotaMensual = (monto * tasaMensual * Math.pow(1 + tasaMensual, plazoMeses)) / (Math.pow(1 + tasaMensual, plazoMeses) - 1); 
    return cuotaMensual;
    
}

//tasa al 5%
function Credito_Vehicular(monto,plazoMeses){
    const tasaMensual = 5 / 100 / 12;
    const cuotaMensual = (monto * tasaMensual * Math.pow(1 + tasaMensual, plazoMeses)) / (Math.pow(1 + tasaMensual, plazoMeses) - 1); 
    return cuotaMensual;
    
}

// tasa al 9%
function Credito_libranza(monto,plazoMeses){
    const tasaMensual = 9 / 100 / 12;
    const cuotaMensual = (monto * tasaMensual * Math.pow(1 + tasaMensual, plazoMeses)) / (Math.pow(1 + tasaMensual, plazoMeses) - 1); 
    return cuotaMensual;
    
}