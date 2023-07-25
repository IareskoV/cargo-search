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

  createCargoForm() {
    return this.formBuilder.group({
      location: ['', Validators.required],
      cargoType: ['', Validators.required],
      cargoWeight: ['', [Validators.required, Validators.min(1)]],
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
    if (this.cargoForm.valid) {
      this.searchCargo.emit(this.cargoForm.value as Transporter);
      this.cargoForm.reset();
      this.resetFormControls(this.cargoForm.controls);
    } else {
    }
  }
  private resetFormControls(controls: any) {
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
}
