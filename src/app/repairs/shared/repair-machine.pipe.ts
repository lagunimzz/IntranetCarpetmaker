import { Pipe, PipeTransform } from '@angular/core'
import { MachineType } from './machine.model';

@Pipe({
    name: 'repairMachine',
    pure: false
})
export class RepairMachinePipe implements PipeTransform {

    transform(allMachineType: MachineType[], keyword: string) {
        if (keyword == '') {
            return allMachineType;
        } else {
            return allMachineType.filter(machines =>
                machines.Machine_Name.indexOf(keyword) !== -1
            );
        }
    }
}