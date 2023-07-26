import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { cargoTypes } from 'src/app/shared/interfaces/enums/cargoTypes.enum';
import { Transporter } from 'src/app/shared/models/transporter.model';
@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnInit {
  @Output() searchCargo = new EventEmitter<any>();
  cargoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.cargoForm = this.createCargoForm();
  }
  ngOnInit() {}

  //method to return a new form
  createCargoForm() {
    return this.formBuilder.group({
      location: ['', Validators.required],
      cargoType: ['', Validators.required],
      maxWeight: ['', [Validators.required, Validators.min(1)]],
      cargoDimensions: this.formBuilder.group({
        length: ['', [Validators.required, Validators.min(1)]],
        width: ['', [Validators.required, Validators.min(1)]],
        height: ['', [Validators.required, Validators.min(1)]],
      }),
    });
  }

  // Convenience getter for easy access to form controls
  get controls() {
    return this.cargoForm.controls;
  }

  onSubmit() {
    //handle submit
    if (this.cargoForm.valid) {
      let temp = {
        maxCargoDimensions: Object.values(
          this.cargoForm.value.cargoDimensions
        ) as [number, number, number],
        location: this.cargoForm.value.location,

        maxWeight: this.cargoForm.value.maxWeight,
        cargoTypes: [+this.cargoForm.value.cargoType],
      };

      this.searchCargo.emit(new Transporter(temp));
      this.cargoForm.reset();
      this.resetFormControls(this.cargoForm.controls);
    } else {
    }
  }
  private resetFormControls(controls: any) {
    //reset form controls after submit
    Object.keys(controls).forEach((controlName) => {
      const control = controls[controlName];
      if (control instanceof FormControl) {
        control.markAsPristine();
        control.markAsUntouched();
        control.setErrors(null);
      } else if (control instanceof FormGroup) {
        this.resetFormControls(control.controls);
      }
    });
  }
  isRequiredFieldsHasValue() {
    return Object.values(this.cargoForm.controls).every((control) => {
      if (control instanceof FormGroup) {
        // Recursively check nested form groups
        return this.isAllFieldsHasValuesInputedInGroup(control);
      } else {
        // Check if the form control has a value
        return !!control.value;
      }
    });
  }
  private isAllFieldsHasValuesInputedInGroup(group: FormGroup): boolean {
    return Object.values(group.controls).every((control) => {
      if (control instanceof FormGroup) {
        // Recursively check nested form groups
        return this.isAllFieldsHasValuesInputedInGroup(control);
      } else {
        // Check if the form control has a value
        return !!control.value;
      }
    });
  }
}
