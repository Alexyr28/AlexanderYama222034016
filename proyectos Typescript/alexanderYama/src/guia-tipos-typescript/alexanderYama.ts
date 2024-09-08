interface tipoVehiculo{
    tipo: string;
    marca: string;
    modelo: string;
    clindraje: number;
    numPuertas: number;
    arrancarVehiculo: () => void;
    cEspecilaes: string[];
}

interface caracteristicasEspeciales{
    velocidad: number;
    suspension: boolean;
    agregarSuspension: () => void;
}

interface testArray{
    modelos: number[];
    caracteristicasArray: Array<string[]>;
}

const miVehiculo: tipoVehiculo = {
    tipo: 'Sedan',
    marca: 'Toyota',
    modelo: 'Corolla',
    clindraje: 2000,
    numPuertas: 4,
    arrancarVehiculo(){
        console.log('El vehículo arrancó con un motor de ' + this.clindraje + ' cc' )
    },
    cEspecilaes: ['Aire Acondicionado', 'GPS']
}

const miSegundoVehiculo: caracteristicasEspeciales = {
    velocidad: 200,
    suspension: false,
    agregarSuspension(){
        if(this.suspension){
            console.log('Tu vehículo tiene suspensión')
        }else{
            console.log('Tu vehículo no tiene suspensión')
        }
    }
}

const miTercerVehiculo: testArray = {
    modelos: [1999,2002,2007,2012,2019],
    caracteristicasArray: [
        ['azul','verde'],
        ['Rin 15','Rin 17'],
        ['2 Puertas', '4 Puertas'],
    ]
}

console.log({miVehiculo});
miVehiculo.arrancarVehiculo();
miSegundoVehiculo.agregarSuspension();
console.log({miSegundoVehiculo});
console.log({miTercerVehiculo});

console.log(miTercerVehiculo.caracteristicasArray[0][0])
console.log(miTercerVehiculo.caracteristicasArray[2][2])

let index = 1;
miTercerVehiculo.caracteristicasArray.forEach((carac) => {
    console.log(carac[index]);
})
