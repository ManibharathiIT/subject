import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";//You can create custom pipes for specific transformations by implementing the PipeTransform interface.

@Pipe({
    name:'custompipe'
})

export class  CustomPipe implements PipeTransform{
    transform(value:number[]){
        return value.map(num=>
            num*num
        );
    }
}