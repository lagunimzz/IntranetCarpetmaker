import { Pipe, PipeTransform } from '@angular/core'
import { Repair } from './repair.model';

@Pipe({
    name: 'repairStatus'
})
export class RepairStatusPipe implements PipeTransform {

    transform(allRepair: Repair[], status: string,global: string) {
        if (status == 'ทั้งหมด' && ( global == '' ||  global == null)) {
            return allRepair;
        } else if(status == 'ทั้งหมด' && ( global != '' &&  global != null )) {
            return allRepair.filter(
                repair => repair.repairNo.toLowerCase().indexOf(global.toLowerCase()) !== -1 || repair.name.indexOf(global) !== -1 || repair.equipmentType.indexOf(global) !== -1
            );
        } else {
            return allRepair.filter(
                repair =>
                    repair.status == status 
                    && ( repair.repairNo.toLowerCase().indexOf(global.toLowerCase()) !== -1 || repair.name.indexOf(global) !== -1 || repair.equipmentType.indexOf(global) !== -1  )

            );
        }
    }
}