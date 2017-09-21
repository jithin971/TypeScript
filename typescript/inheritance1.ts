class shape{
    area: number
    constructor(dte: number) {
        this.area=dte*dte
    }
}
class circle extends shape{
    disp(): void{
        console.log(this.area)
    }
}
var obj = new circle(10)
obj.disp()