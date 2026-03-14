import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './formulario-registro.html', 
  styleUrl: './formulario-registro.css',   
})
export class FormularioRegistro {
  registroForm: FormGroup;
  especialidades = ['Redes', 'Programador Hacker'];

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      numControl: ['', Validators.required],
      nombres: ['', Validators.required],
      apellido1: ['', Validators.required],
      apellido2: ['', Validators.required],
      domicilio: ['', Validators.required],
      carrera: ['', Validators.required],
      semestre: ['', Validators.required],
      especialidad: ['', Validators.required]
    });
  }

  guardar() {
    if (this.registroForm.valid) {
      console.log('Datos:', this.registroForm.value);
      alert('Alumno registrado con éxito');
    } else {
      alert('Por favor, completa todos los campos correctamente');
    }
  }
}