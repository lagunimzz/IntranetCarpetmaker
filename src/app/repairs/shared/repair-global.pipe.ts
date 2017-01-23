import { Pipe, PipeTransform } from '@angular/core'
import { Repair } from './repair.model';

@Pipe({
    name: 'repairGlobal',
    pure: false
})
export class RepairGlobalPipe implements PipeTransform {

    transform(allRepair: Repair[], keyword: string) {
        if (keyword == '') {
            return allRepair;
        } else {
            return allRepair.filter(machines =>
                machines.repairNo.indexOf(keyword) !== -1
            );
        }
    }
}