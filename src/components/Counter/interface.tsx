export enum EJugadoresDeFutbol  {
    MESSI = "MESSI",
    ENZO = "ENZO",
}


 interface IJugadorDeFutbol {
    nombre:string,
    apellido:string
}


export interface IProfe {
    name:string,
    profe:string

}

export interface IProps {
    initialValue?:number|string,
    saludar: () => void,
    sumar: (a:number,b:number) => number,
    jugadoresDeFutbol:IJugadorDeFutbol[],
}