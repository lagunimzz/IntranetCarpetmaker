import { Injectable } from '@angular/core';
import { DepartmentService } from '../shared/department.service';
import { Department } from '../shared/department.model';

@Injectable()
export class AuthOption {
    departmentList = [];
    options = {};
     
    constructor(private departService: DepartmentService) {
        this.getAllDepartment();
        this.options = {
        theme: {
            logo: "../../favicon.png",
        },
        languageDictionary: {
            title: "Carpet Maker (Thailand)"
        },
        allowedConnections: ['Username-Password-Authentication', 'facebook'],
        additionalSignUpFields: [{
            name: "department",
            placeholder: "enter your department",
            // The following properties are optional
            icon: "https://example.com/assests/address_icon.png",
            validator: function (department) {
                return {
                    valid: department.length > 0,
                    hint: "Please enter department" // optional
                };
            }
        }, 
        // {
        //     type: "select",
        //     name: "location",
        //     placeholder: "choose your location",
        //     options: this.departmentList,
        //     // The following properties are optional
        //     icon: "https://example.com/assests/location_icon.png",
        //     prefill: "us"
        // }
        ]

    }
    }
    
    getAllDepartment() {
        let returnObject = [];
        this.departService.getDepartments()
            .subscribe(
            data => {
                for (let department of data) {
                    returnObject.push({
                        value: department.Dpm_Name,
                        label: department.Dpm_Name
                    });
                }
            },
            error => console.log(Error)
            )
           // console.dir([{value:'sss',label:'xxx'},{value:'sss',label:'xxx'}]);
            //console.dir(returnObject);
        this.departmentList = returnObject;
        // this.departmentList = [{value:'sss',label:'xxx'},{value:'sss',label:'xxx'}];
    }

}