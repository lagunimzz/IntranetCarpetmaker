import { Pipe, PipeTransform } from '@angular/core'
import { Repair } from './repair.model';

@Pipe({
    name: 'repairStatus'
})
export class RepairStatusPipe implements PipeTransform {

    transform(allRepair: Repair[], status: string) {
        if (status == 'ทั้งหมด') {
            return allRepair;
        } else {
            return allRepair.filter(repair => repair.status == status);
        }
    }
}